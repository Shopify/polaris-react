import React from 'react';
import {Transition, CSSTransition} from 'react-transition-group';
import {mountWithApp} from 'test-utilities';
import {Popover} from 'components';

import {CheckableButton} from '../../CheckableButton';
import {Button} from '../../Button';
import {BulkActionButton, BulkActionButtonProps} from '../components';
import {BulkActions, BulkActionsProps} from '../BulkActions';
import styles from '../BulkActions.scss';

interface Props {
  bulkActions: BulkActionButtonProps['content'][];
  promotedActions: NonNullable<BulkActionsProps['promotedActions']>;
  paginatedSelectAllText: string;
  selected: boolean;
  accessibilityLabel: string;
  label: string;
  disabled: boolean;
}

const bulkActionProps: Props = {
  bulkActions: ['button 3', 'button 4', 'button 5'],
  promotedActions: [
    {
      content: 'button 1',
    },
    {
      content: 'button 2',
    },
  ],
  paginatedSelectAllText: 'paginated select all text string',
  selected: false,
  accessibilityLabel: 'test-aria-label',
  label: 'Test-Label',
  disabled: false,
};

describe('<BulkActions />', () => {
  describe('actions', () => {
    it('indicator is passed to BulkActionButton when actions contain a new status for badge', () => {
      const bulkActions = mountWithApp(
        <BulkActions
          {...bulkActionProps}
          promotedActions={[]}
          actions={[
            {content: 'Action', badge: {status: 'new', content: 'Badge'}},
          ]}
        />,
      );

      bulkActions.find(BulkActionButton)?.trigger('onAction');

      expect(bulkActions).toContainReactComponent(BulkActionButton, {
        indicator: true,
      });
    });

    it('indicator is not passed to BulkActionButton when actions does not contain a new status for badge', () => {
      const bulkActions = mountWithApp(
        <BulkActions
          {...bulkActionProps}
          promotedActions={[]}
          actions={[{content: 'Action'}]}
        />,
      );

      bulkActions.find(BulkActionButton)?.trigger('onAction');

      expect(bulkActions).toContainReactComponent(BulkActionButton, {
        indicator: false,
      });
    });

    it('promotedActions render in the last position on initial load', () => {
      const {promotedActions} = bulkActionProps;
      const bulkActions = mountWithApp(
        <BulkActions {...bulkActionProps} promotedActions={promotedActions} />,
      );

      const bulkActionsCount = bulkActions.findAllWhere(
        (node: any) =>
          node.props.content === promotedActions[0].content ||
          node.props.content === promotedActions[1].content,
      ).length;

      expect(bulkActionsCount).toBe(promotedActions.length);
    });

    it('bulkActions render in the first position on initial load', () => {
      const {bulkActions} = bulkActionProps;
      const bulkActionsElement = mountWithApp(
        <BulkActions {...bulkActionProps} />,
      );
      const bulkActionsCount = bulkActionsElement.findAllWhere(
        (node: any) =>
          node.props.content === bulkActions[0] ||
          node.props.content === bulkActions[1] ||
          node.props.content === bulkActions[2],
      ).length;

      expect(bulkActionsCount).toBe(0);
    });

    it('renders a Popover when smallScreen is true', () => {
      const bulkActionsElement = mountWithApp(
        <BulkActions {...bulkActionProps} smallScreen />,
      );
      expect(bulkActionsElement).toContainReactComponentTimes(Popover, 1);
    });
  });

  describe('loading', () => {
    it('disables buttons', () => {
      const bulkActionsElement = mountWithApp(
        <BulkActions
          {...bulkActionProps}
          promotedActions={[
            {
              content: 'button 1',
            },
          ]}
          paginatedSelectAllAction={{content: 'content', onAction: () => {}}}
          disabled
        />,
      );

      expect(bulkActionsElement).toContainReactComponentTimes('button', 2, {
        disabled: true,
      });
    });
  });

  describe('props', () => {
    describe('accessibilityLabel', () => {
      it('is passed down to CheckableButton', () => {
        const {accessibilityLabel} = bulkActionProps;
        const bulkActions = mountWithApp(<BulkActions {...bulkActionProps} />);
        const checkableButtonLength = bulkActions.findAll(CheckableButton)
          .length;

        expect(bulkActions).toContainReactComponentTimes(
          CheckableButton,
          checkableButtonLength,
          {
            accessibilityLabel,
          },
        );
      });

      it('does not pass down to CheckableButton when the property is not provided', () => {
        const {accessibilityLabel, ...props} = bulkActionProps;
        const bulkActions = mountWithApp(<BulkActions {...props} />);

        expect(bulkActions).toContainReactComponentTimes(CheckableButton, 0, {
          accessibilityLabel,
        });
      });
    });

    describe('label', () => {
      it('is passed down to CheckableButton', () => {
        const {label} = bulkActionProps;
        const bulkActions = mountWithApp(<BulkActions {...bulkActionProps} />);
        const checkableButtonLength = bulkActions.findAll(CheckableButton)
          .length;
        expect(bulkActions).toContainReactComponentTimes(
          CheckableButton,
          checkableButtonLength,
          {label},
        );
      });

      it('does not pass down to CheckableButton when the property is not provided', () => {
        const {label, ...props} = bulkActionProps;
        const bulkActions = mountWithApp(<BulkActions {...props} />);
        expect(bulkActions).toContainReactComponentTimes(CheckableButton, 0, {
          label,
        });
      });
    });

    describe('selected', () => {
      it('is passed down to CheckableButton', () => {
        const {selected} = bulkActionProps;
        const bulkActions = mountWithApp(<BulkActions {...bulkActionProps} />);
        const checkableButtonLength = bulkActions.findAll(CheckableButton)
          .length;

        expect(bulkActions).toContainReactComponentTimes(
          CheckableButton,
          checkableButtonLength,
          {selected},
        );
      });

      it('does not pass down to CheckableButton when the property is not provided', () => {
        const {selected, ...props} = bulkActionProps;
        const bulkActions = mountWithApp(<BulkActions {...props} />);

        expect(bulkActions).toContainReactComponentTimes(CheckableButton, 0, {
          selected,
        });
      });
    });

    describe('selectMode', () => {
      it('is passed down to Transition', () => {
        const bulkActions = mountWithApp(
          <BulkActions {...bulkActionProps} selectMode />,
        );

        expect(bulkActions).toContainReactComponent(Transition, {
          in: true,
        });
      });

      it('is passed down to CSSTransition', () => {
        const bulkActions = mountWithApp(
          <BulkActions {...bulkActionProps} selectMode />,
        );

        const cssTransition = bulkActions.findAll(CSSTransition, {
          appear: true,
        });
        cssTransition.forEach((cssTransitionComponent) => {
          expect(cssTransitionComponent).toHaveReactProps({in: true});
        });
      });

      it('is passed down to CheckableButton', () => {
        const bulkActions = mountWithApp(
          <BulkActions {...bulkActionProps} selectMode />,
        );
        const checkableButton = bulkActions.findAll(CheckableButton);
        checkableButton.forEach((checkableButtonComponent) => {
          expect(checkableButtonComponent).toHaveReactProps({selectMode: true});
        });
      });
    });

    describe('promotedActions', () => {
      it('renders a BulkActionButton for each item in promotedActions', () => {
        const warnSpy = jest.spyOn(console, 'warn');
        warnSpy.mockImplementation(() => {});
        const bulkActionProps: Props = {
          bulkActions: [],
          promotedActions: [
            {
              content: 'button 1',
            },
            {
              content: 'button 2',
            },
            {
              content: 'button 3',
            },
          ],
          paginatedSelectAllText: 'paginated select all text string',
          selected: false,
          accessibilityLabel: 'test-aria-label',
          label: 'Test-Label',
          disabled: false,
        };
        const bulkActions = mountWithApp(<BulkActions {...bulkActionProps} />);

        expect(bulkActions).toContainReactComponentTimes(BulkActionButton, 3);
        warnSpy.mockRestore();
      });
    });

    describe('disabled', () => {
      const bulkActionProps: Props = {
        bulkActions: ['button 3', 'button 4', 'button 5'],
        promotedActions: [
          {
            content: 'button 1',
          },
          {
            content: 'button 2',
          },
        ],
        paginatedSelectAllText: 'paginated select all text string',
        selected: false,
        accessibilityLabel: 'test-aria-label',
        label: 'Test-Label',
        disabled: true,
      };

      it('is passed down to CheckableButton', () => {
        const {disabled} = bulkActionProps;
        const bulkActions = mountWithApp(<BulkActions {...bulkActionProps} />);
        const checkableButtonLength = bulkActions.findAll(CheckableButton)
          .length;

        expect(bulkActions).toContainReactComponentTimes(
          CheckableButton,
          checkableButtonLength,
          {disabled},
        );
      });

      it('will not overwrite the disabled value coming from a promotedAction', () => {
        const bulkActionProps: Props = {
          bulkActions: [],
          promotedActions: [
            {
              disabled: true,
              content: 'button 1',
            },
          ],
          paginatedSelectAllText: 'paginated select all text string',
          selected: false,
          accessibilityLabel: 'test-aria-label',
          label: 'Test-Label',
          disabled: false,
        };
        const bulkActions = mountWithApp(<BulkActions {...bulkActionProps} />);

        expect(bulkActions).toContainReactComponentTimes(BulkActionButton, 1, {
          disabled: true,
        });
      });
    });

    describe('paginatedSelectAllText', () => {
      it('renders when provided', () => {
        const {paginatedSelectAllText} = bulkActionProps;
        const bulkActions = mountWithApp(<BulkActions {...bulkActionProps} />);
        expect(
          bulkActions.find('div', {className: styles.PaginatedSelectAll}),
        ).toContainReactText(paginatedSelectAllText);
      });

      it('does not render when not provided', () => {
        const {paginatedSelectAllText, ...props} = bulkActionProps;
        const bulkActions = mountWithApp(<BulkActions {...props} />);

        expect(bulkActions).not.toContainReactComponent('div', {
          className: styles.PaginatedSelectAll,
        });
      });
    });

    describe('paginatedSelectAllAction', () => {
      it('onAction is called when CheckableButton is clicked', () => {
        const spy = jest.fn();

        const bulkActions = mountWithApp(
          <BulkActions
            {...bulkActionProps}
            paginatedSelectAllAction={{content: 'content', onAction: spy}}
          />,
        );
        bulkActions.find(Button, {onClick: spy})!.trigger('onClick');
        expect(spy).toHaveBeenCalled();
      });
    });

    describe('onMoreActionPopoverToggle', () => {
      it('is invoked when the small screen popover is toggled', () => {
        const spy = jest.fn();
        const bulkActions = mountWithApp(
          <BulkActions
            {...bulkActionProps}
            actions={[{content: 'Action'}]}
            smallScreen
            promotedActions={[]}
            onMoreActionPopoverToggle={spy}
          />,
        );

        bulkActions.find(BulkActionButton)?.trigger('onAction');

        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('is invoked when the large screen popover is toggled', () => {
        const spy = jest.fn();
        const bulkActions = mountWithApp(
          <BulkActions
            {...bulkActionProps}
            actions={[{content: 'Action'}]}
            promotedActions={[]}
            onMoreActionPopoverToggle={spy}
          />,
        );

        bulkActions.find(BulkActionButton)?.trigger('onAction');

        expect(spy).toHaveBeenCalledTimes(1);
      });
    });

    describe('smallScreen', () => {
      it('renders only the large screen bulkactions if smallScreen is false', () => {
        const bulkActions = mountWithApp(
          <BulkActions {...bulkActionProps} selectMode />,
        );
        expect(bulkActions).not.toContainReactComponent('div', {
          className: expect.stringContaining(styles['Group-smallScreen']),
        });
        expect(bulkActions).toContainReactComponent('div', {
          className: expect.stringContaining(styles['Group-largeScreen']),
        });
      });

      it('renders only the small screen bulkactions if smallScreen is true', () => {
        const bulkActions = mountWithApp(
          <BulkActions {...bulkActionProps} selectMode smallScreen />,
        );
        expect(bulkActions).toContainReactComponent('div', {
          className: expect.stringContaining(styles['Group-smallScreen']),
        });
        expect(bulkActions).not.toContainReactComponent('div', {
          className: expect.stringContaining(styles['Group-largeScreen']),
        });
      });
    });
  });

  describe('buttongroup', () => {
    // Since we need to break our component model and reach into ButtonGroup to access the CheckableButton
    // and ensure only the first element flex grows, we add this test to ensure the mark-up does not change
    it('has the mark-up structure to target the CheckableButton', () => {
      const bulkActions = mountWithApp(
        <BulkActions {...bulkActionProps} selectMode smallScreen />,
      );

      const checkableButton = bulkActions!
        .find('div', {
          className: 'ButtonGroupWrapper',
        })!
        .domNode!.querySelector('div > div.Item:first-child');
      expect(checkableButton).not.toBeNull();
    });
  });
});
