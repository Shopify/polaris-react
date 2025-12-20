import type {ReactElement} from 'react';
import React, {memo, useEffect, useRef, useCallback} from 'react';

import {classNames} from '../../../../utilities/css';
import {useComponentDidMount} from '../../../../utilities/use-component-did-mount';
import {useEventListener} from '../../../../utilities/use-event-listener';
import type {TabProps, TabMeasurements} from '../../types';
import {Tab} from '../Tab';
import styles from '../../Tabs.module.css';

export interface TabMeasurerProps {
  tabToFocus: number;
  siblingTabHasFocus: boolean;
  activator: ReactElement;
  selected: number;
  tabs: Omit<TabProps, 'onToggleModal' | 'onTogglePopover'>[];
  handleMeasurement(measurements: TabMeasurements): void;
}

export const TabMeasurer = memo(function TabMeasurer({
  selected,
  tabs,
  activator,
  tabToFocus,
  siblingTabHasFocus,
  handleMeasurement: handleMeasurementProp,
}: TabMeasurerProps) {
  const containerNode = useRef<HTMLDivElement>(null);
  const animationFrame = useRef<number | null>(null);

  const handleMeasurement = useCallback(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    animationFrame.current = requestAnimationFrame(() => {
      if (!containerNode.current) {
        return;
      }

      const containerWidth = containerNode.current.offsetWidth - 20 - 28;
      const hiddenTabNodes = containerNode.current.children;
      const hiddenTabNodesArray = Array.from(hiddenTabNodes);
      const hiddenTabWidths = hiddenTabNodesArray.map((node) => {
        const buttonWidth = Math.ceil(node.getBoundingClientRect().width);
        return buttonWidth + 4;
      });
      const disclosureWidth = hiddenTabWidths.pop() || 0;

      handleMeasurementProp({
        containerWidth,
        disclosureWidth,
        hiddenTabWidths,
      });
    });
  }, [handleMeasurementProp]);

  useEffect(() => {
    handleMeasurement();
  }, [handleMeasurement, tabs]);

  useComponentDidMount(() => {
    if (process.env.NODE_ENV === 'development') {
      setTimeout(handleMeasurement, 0);
    }
  });

  const tabsMarkup = tabs.map((tab, index) => {
    return (
      <Tab
        measuring
        key={`$${tab.id}Hidden`}
        id={`${tab.id}Measurer`}
        siblingTabHasFocus={siblingTabHasFocus}
        focused={index === tabToFocus}
        selected={index === selected}
        url={tab.url}
        content={tab.content}
        onTogglePopover={noop}
        onToggleModal={noop}
        badge={tab.badge}
      />
    );
  });

  const classname = classNames(styles.Tabs, styles.TabsMeasurer);

  useEventListener('resize', handleMeasurement);

  return (
    <div className={classname} ref={containerNode}>
      {tabsMarkup}
      {activator}
    </div>
  );
});

function noop() {}
