import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import debounce from 'lodash/debounce';

import {useI18n} from '../../../../utilities/i18n';
import type {
  ActionListItemDescriptor,
  MenuActionDescriptor,
  MenuGroupDescriptor,
} from '../../../../types';
import {ButtonGroup} from '../../../ButtonGroup';
import {EventListener} from '../../../EventListener';
import {MenuGroup} from '../MenuGroup';
import {SecondaryAction} from '../SecondaryAction';

import styles from './Actions.scss';

interface Props {
  /** Collection of page-level secondary actions */
  actions?: MenuActionDescriptor[];
  /** Collection of page-level action groups */
  groups?: MenuGroupDescriptor[];
}

interface MeasuredActions {
  showable: MenuActionDescriptor[];
  rolledUp: (MenuActionDescriptor | MenuGroupDescriptor)[];
}

const ACTION_SPACING = 8;

export function Actions({actions = [], groups = []}: Props) {
  const i18n = useI18n();
  const actionsLayoutRef = useRef<HTMLDivElement>(null);
  const menuGroupWidthRef = useRef<number>(0);
  const availableWidthRef = useRef<number>(0);
  const actionsAndGroupsLengthRef = useRef<number>(0);
  const timesMeasured = useRef(0);
  const actionWidthsRef = useRef<number[]>([]);
  const [activeMenuGroup, setActiveMenuGroup] = useState<string | undefined>(
    undefined,
  );
  const [measuredActions, setMeasuredActions] = useState<MeasuredActions>({
    showable: [],
    rolledUp: [],
  });
  const defaultRollupGroup: MenuGroupDescriptor = {
    title: i18n.translate('Polaris.ActionMenu.Actions.moreActions'),
    actions: [],
  };
  const lastMenuGroup = [...groups].pop();
  const lastMenuGroupWidth = [...actionWidthsRef.current].pop() || 0;

  const handleActionsOffsetWidth = useCallback((width: number) => {
    actionWidthsRef.current = [...actionWidthsRef.current, width];
  }, []);

  const handleMenuGroupToggle = useCallback(
    (group: string) => setActiveMenuGroup(activeMenuGroup ? undefined : group),
    [activeMenuGroup],
  );

  const handleMenuGroupClose = useCallback(
    () => setActiveMenuGroup(undefined),
    [],
  );

  const updateActions = useCallback(() => {
    let actionsAndGroups = [...actions, ...groups];

    if (groups.length > 0) {
      // We don't want to include actions from the last group
      // since it is always rendered with its own actions
      actionsAndGroups = [...actionsAndGroups].slice(
        0,
        actionsAndGroups.length - 1,
      );
    }
    const showable = actionsAndGroups.slice(0, measuredActions.showable.length);
    const rolledUp = actionsAndGroups.slice(
      measuredActions.showable.length,
      actionsAndGroups.length,
    );

    setMeasuredActions({showable, rolledUp});
  }, [actions, groups, measuredActions.showable.length]);

  const measureActions = useCallback(() => {
    if (
      actionWidthsRef.current.length === 0 ||
      availableWidthRef.current === 0
    ) {
      return;
    }

    const actionsAndGroups = [...actions, ...groups];

    if (actionsAndGroups.length === 1) {
      setMeasuredActions({showable: actionsAndGroups, rolledUp: []});
      return;
    }

    let currentAvailableWidth = availableWidthRef.current;
    let newShowableActions: MenuActionDescriptor[] = [];
    let newRolledUpActions: (MenuActionDescriptor | MenuGroupDescriptor)[] = [];

    actionsAndGroups.forEach((action, index) => {
      const canFitAction =
        actionWidthsRef.current[index] +
          menuGroupWidthRef.current +
          ACTION_SPACING +
          lastMenuGroupWidth <=
        currentAvailableWidth;

      if (canFitAction) {
        currentAvailableWidth -=
          actionWidthsRef.current[index] + ACTION_SPACING * 2;
        newShowableActions = [...newShowableActions, action];
      } else {
        currentAvailableWidth = 0;
        // Find last group if it exists and always render it as a rolled up action below
        if (action === lastMenuGroup) return;
        newRolledUpActions = [...newRolledUpActions, action];
      }
    });

    setMeasuredActions({
      showable: newShowableActions,
      rolledUp: newRolledUpActions,
    });

    timesMeasured.current += 1;
    actionsAndGroupsLengthRef.current = actionsAndGroups.length;
  }, [actions, groups, lastMenuGroup, lastMenuGroupWidth]);

  const handleResize = useMemo(
    () =>
      debounce(
        () => {
          if (!actionsLayoutRef.current) return;
          availableWidthRef.current = actionsLayoutRef.current.offsetWidth;
          // Set timesMeasured to 0 to allow re-measuring
          timesMeasured.current = 0;
          measureActions();
        },
        50,
        {leading: false, trailing: true},
      ),
    [measureActions],
  );

  useEffect(() => {
    if (!actionsLayoutRef.current) {
      return;
    }

    availableWidthRef.current = actionsLayoutRef.current.offsetWidth;
    if (
      // Allow measuring twice
      // This accounts for the initial paint and re-flow
      timesMeasured.current >= 2 &&
      [...actions, ...groups].length === actionsAndGroupsLengthRef.current
    ) {
      updateActions();
      return;
    }
    measureActions();
  }, [actions, groups, measureActions, updateActions]);

  const actionsMarkup = actions.map((action) => {
    if (
      measuredActions.showable.length > 0 ||
      measuredActions.rolledUp.includes(action)
    )
      return null;

    const {content, onAction, ...rest} = action;

    return (
      <SecondaryAction
        key={content}
        onClick={onAction}
        {...rest}
        getOffsetWidth={handleActionsOffsetWidth}
      >
        {content}
      </SecondaryAction>
    );
  });

  const rollUppableActionsMarkup =
    measuredActions.showable.length > 0
      ? measuredActions.showable.map(
          (action) =>
            action.content && (
              <SecondaryAction
                key={action.content}
                {...action}
                getOffsetWidth={handleActionsOffsetWidth}
              >
                {action.content}
              </SecondaryAction>
            ),
        )
      : null;

  const filteredGroups = [...groups, defaultRollupGroup].filter((group) => {
    return groups.length === 0
      ? group
      : group === lastMenuGroup ||
          !measuredActions.rolledUp.some(
            (rolledUpGroup) =>
              isMenuGroup(rolledUpGroup) && rolledUpGroup.title === group.title,
          );
  });

  const groupsMarkup = filteredGroups.map((group) => {
    const {title, actions: groupActions, ...rest} = group;
    const isDefaultGroup = group === defaultRollupGroup;
    const isLastMenuGroup = group === lastMenuGroup;
    const finalRolledUpActions = measuredActions.rolledUp.reduce(
      (memo, action) => {
        memo.push(...(isMenuGroup(action) ? action.actions : [action]));

        return memo;
      },
      [] as ActionListItemDescriptor[],
    );
    if (!isDefaultGroup && !isLastMenuGroup) {
      // Render a normal MenuGroup with just its actions
      return (
        <MenuGroup
          key={title}
          title={title}
          active={title === activeMenuGroup}
          actions={groupActions}
          {...rest}
          onOpen={handleMenuGroupToggle}
          onClose={handleMenuGroupClose}
          getOffsetWidth={handleActionsOffsetWidth}
        />
      );
    } else if (!isDefaultGroup && isLastMenuGroup) {
      // render the last, rollup group with its actions and finalRolledupActions
      return (
        <MenuGroup
          key={title}
          title={title}
          active={title === activeMenuGroup}
          actions={[...finalRolledUpActions, ...groupActions]}
          {...rest}
          onOpen={handleMenuGroupToggle}
          onClose={handleMenuGroupClose}
          getOffsetWidth={handleActionsOffsetWidth}
        />
      );
    } else if (
      isDefaultGroup &&
      groups.length === 0 &&
      finalRolledUpActions.length
    ) {
      // Render the default group to rollup into if one does not exist
      return (
        <MenuGroup
          key={title}
          title={title}
          active={title === activeMenuGroup}
          actions={finalRolledUpActions}
          {...rest}
          onOpen={handleMenuGroupToggle}
          onClose={handleMenuGroupClose}
          getOffsetWidth={handleActionsOffsetWidth}
        />
      );
    }
  });

  const groupedActionsMarkup = (
    <ButtonGroup spacing="extraTight">
      {rollUppableActionsMarkup}
      {actionsMarkup}
      {groupsMarkup}
    </ButtonGroup>
  );

  return (
    <div className={styles.ActionsLayout} ref={actionsLayoutRef}>
      {groupedActionsMarkup}
      <EventListener event="resize" handler={handleResize} />
    </div>
  );
}

function isMenuGroup(
  actionOrMenuGroup: MenuGroupDescriptor | MenuActionDescriptor,
): actionOrMenuGroup is MenuGroupDescriptor {
  return 'title' in actionOrMenuGroup;
}
