import React from 'react';
// eslint-disable-next-line no-restricted-imports
import {mountWithAppProvider} from 'test-utilities/legacy';
import {mountWithApp} from 'test-utilities';
import {Sticky} from 'components/Sticky';
import {EventListener} from 'components/EventListener';

import {getTableHeadingsBySelector} from '../utilities';
import {EmptySearchResult} from '../../EmptySearchResult';
import {Spinner} from '../../Spinner';
import {Button} from '../../Button';
import {Checkbox} from '../../Checkbox';
import {Badge} from '../../Badge';
import {VisuallyHidden} from '../../VisuallyHidden';
import {BulkActions} from '../../BulkActions';
import {IndexTable, IndexTableProps} from '../IndexTable';
import {ScrollContainer} from '../components';
import {SelectionType} from '../../../utilities/index-provider';
import {AfterInitialMount} from '../../AfterInitialMount';

jest.mock('../utilities', () => ({
  ...jest.requireActual('../utilities'),
  getTableHeadingsBySelector: jest.fn(),
}));

const mockTableItems = [
  {
    id: 'item-1',
    title: 'Item 1',
  },
  {
    id: 'item-2',
    title: 'Item 2',
  },
];

const mockTableHeadings: IndexTableProps['headings'] = [{title: 'Title'}];

function Component({
  id,
  title,
  condensed,
}: {
  id: string;
  title: string;
  condensed?: boolean;
}) {
  const Wrapper = condensed ? 'li' : 'tr';
  const Child = condensed ? 'div' : 'td';

  return (
    <Wrapper key={id}>
      <Child>{title}</Child>
    </Wrapper>
  );
}

const mockRenderRow = (item: any) => {
  return <Component {...item} key={item.id} />;
};

const mockRenderCondensedRow = (item: any) => {
  return <Component {...item} key={item.id} condensed />;
};

describe('<IndexTable>', () => {
  const defaultProps: IndexTableProps = {
    onSelectionChange: () => {},
    itemCount: 0,
    selectedItemsCount: 0,
    headings: mockTableHeadings,
  };

  beforeEach(() => {
    jest.resetAllMocks();
    (getTableHeadingsBySelector as jest.Mock).mockReturnValue([]);
  });

  it('renders an <EmptySearchResult /> if no items are passed', () => {
    const index = mountWithApp(<IndexTable {...defaultProps} itemCount={0} />);

    expect(index).toContainReactComponent(EmptySearchResult);
  });

  it('renders a row for each item using renderItem', () => {
    const index = mountWithAppProvider(
      <IndexTable {...defaultProps} itemCount={mockTableItems.length}>
        {mockTableItems.map(mockRenderRow)}
      </IndexTable>,
    );

    expect(index.find(Component)).toHaveLength(2);
  });

  it('renders a spinner if loading is passed', () => {
    const index = mountWithApp(
      <IndexTable {...defaultProps} loading itemCount={mockTableItems.length}>
        {mockTableItems.map(mockRenderRow)}
      </IndexTable>,
    );

    expect(index).toContainReactComponent(Spinner);
  });

  it('toggles page selection when select all checkbox is changed', () => {
    const onSelectionchangeSpy = jest.fn();
    const resourceName = {
      singular: 'Item',
      plural: 'Items',
    };
    const index = mountWithApp(
      <IndexTable
        {...defaultProps}
        itemCount={mockTableItems.length}
        resourceName={resourceName}
        onSelectionChange={onSelectionchangeSpy}
      >
        {mockTableItems.map(mockRenderRow)}
      </IndexTable>,
    );

    index
      .find(Checkbox, {
        label: `Select all ${resourceName.plural}`,
      })!
      .trigger('onChange', true);

    expect(onSelectionchangeSpy).toHaveBeenCalledWith(SelectionType.Page, true);
  });

  it('passes a bounding element to Sticky', () => {
    const resourceName = {
      singular: 'Item',
      plural: 'Items',
    };
    const index = mountWithApp(
      <IndexTable
        {...defaultProps}
        itemCount={mockTableItems.length}
        resourceName={resourceName}
      >
        {mockTableItems.map(mockRenderRow)}
      </IndexTable>,
    );

    expect(index).toContainReactComponent(Sticky, {
      boundingElement: index.find('table')?.domNode,
    });
  });

  it('applies sticky last column styles when `lastColumnSticky` prop is true', () => {
    const index = mountWithApp(
      <IndexTable {...defaultProps} itemCount={1} lastColumnSticky>
        {mockTableItems.map(mockRenderRow)}
      </IndexTable>,
    );

    expect(index).toContainReactComponent('table', {
      className: 'Table Table-sticky-last',
    });
  });

  describe('ScrollContainer', () => {
    it('updates sticky header scroll left on scoll', () => {
      const updatedScrollLeft = 25;
      const index = mountWithApp(
        <IndexTable {...defaultProps} itemCount={1}>
          {mockTableItems.map(mockRenderRow)}
        </IndexTable>,
      );

      const scrollContainer = index.find(ScrollContainer)!;
      scrollContainer.prop(
        'scrollableContainerRef',
      ).current!.scrollLeft = updatedScrollLeft;
      scrollContainer!.trigger('onScroll');

      const stickyHeaderElement = index.find('div', {
        className: 'StickyTableHeadings',
      })!;
      const stickyHeaderElementScrollLeft = stickyHeaderElement.domNode!
        .scrollLeft;

      expect(stickyHeaderElementScrollLeft).toBe(updatedScrollLeft);
    });

    it('updates sticky table column header styles when scrolling right & hasMoreLeftColumns is false', () => {
      const index = mountWithApp(
        <IndexTable {...defaultProps} itemCount={1}>
          {mockTableItems.map(mockRenderRow)}
        </IndexTable>,
      );

      const scrollContainer = index.find(ScrollContainer);
      scrollContainer!.trigger('onScroll', true);

      expect(index).toContainReactComponent('div', {
        className:
          'StickyTableColumnHeader StickyTableColumnHeader-isScrolling',
      });
    });

    it('updates sticky last column styles when scrolled right', () => {
      const index = mountWithApp(
        <IndexTable {...defaultProps} itemCount={1} lastColumnSticky>
          {mockTableItems.map(mockRenderRow)}
        </IndexTable>,
      );

      const scrollContainer = index.find(ScrollContainer);
      scrollContainer!.trigger('onScroll', true, false);

      expect(index).toContainReactComponent('table', {
        className: 'Table Table-scrolling Table-sticky-last',
      });
    });
  });

  describe('resize', function () {
    it('does not update columns if no headings are present', () => {
      const spy = jest.spyOn(window, 'getComputedStyle');

      const headings: IndexTableProps['headings'] = [
        {title: 'Heading one'},
        {title: 'Heading two'},
      ];

      const index = mountWithApp(
        <IndexTable
          {...defaultProps}
          itemCount={mockTableItems.length}
          headings={headings}
        >
          {mockTableItems.map(mockRenderRow)}
        </IndexTable>,
      );

      index.find(EventListener)!.trigger('handler');

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('scroll bar', () => {
    it('sets scrollleft on scroll', () => {
      const updatedScrollLeft = 25;
      const index = mountWithApp(
        <IndexTable {...defaultProps} itemCount={1}>
          {mockTableItems.map(mockRenderRow)}
        </IndexTable>,
      );

      const afterInitialMounts = index.findAll(AfterInitialMount);
      const scrollbar = afterInitialMounts[
        afterInitialMounts.length - 1
      ].find('div', {className: 'ScrollBar'})!;
      const scrollContainer = index.find(ScrollContainer)!;

      scrollbar.domNode!.scrollLeft = updatedScrollLeft;
      scrollbar.trigger('onScroll');
      const scrollContainerScrollLeft = scrollContainer.prop(
        'scrollableContainerRef',
      ).current!.scrollLeft;

      expect(scrollContainerScrollLeft).toBe(updatedScrollLeft);
    });
  });

  describe('headings', () => {
    it('renders new headings', () => {
      const headings: IndexTableProps['headings'] = [
        {title: 'Heading one'},
        {title: 'Heading two', new: true},
      ];
      const index = mountWithApp(
        <IndexTable
          {...defaultProps}
          itemCount={mockTableItems.length}
          headings={headings}
        >
          {mockTableItems.map(mockRenderRow)}
        </IndexTable>,
      );

      expect(index).toContainReactComponent(Badge, {children: 'New'});
    });

    it('renders hidden headings', () => {
      const title = 'Heading two';
      const headings: IndexTableProps['headings'] = [
        {title: 'Heading one'},
        {title, hidden: true},
      ];
      const index = mountWithApp(
        <IndexTable
          {...defaultProps}
          itemCount={mockTableItems.length}
          headings={headings}
        >
          {mockTableItems.map(mockRenderRow)}
        </IndexTable>,
      );

      expect(index).toContainReactComponent(VisuallyHidden, {children: title});
    });

    it('renders a sticky last heading if `lastColumnSticky` prop is true and last heading is not hidden', () => {
      const title = 'Heading two';
      const headings: IndexTableProps['headings'] = [
        {title: 'Heading one'},
        {title, hidden: false},
      ];
      const index = mountWithApp(
        <IndexTable
          {...defaultProps}
          itemCount={mockTableItems.length}
          headings={headings}
          lastColumnSticky
        >
          {mockTableItems.map(mockRenderRow)}
        </IndexTable>,
      );

      expect(index).toContainReactComponent('table', {
        className: 'Table Table-sticky-last',
      });
      expect(index).toContainReactComponent('th', {
        children: title,
        className: 'TableHeading TableHeading-last',
      });
    });

    it('does not render a sticky last heading if `lastColumnSticky` prop is true and last heading is hidden', () => {
      const title = 'Heading two';
      const headings: IndexTableProps['headings'] = [
        {title: 'Heading one'},
        {title, hidden: true},
      ];
      const index = mountWithApp(
        <IndexTable
          {...defaultProps}
          itemCount={mockTableItems.length}
          headings={headings}
          lastColumnSticky
        >
          {mockTableItems.map(mockRenderRow)}
        </IndexTable>,
      );

      expect(index).toContainReactComponent('table', {
        className: 'Table Table-sticky-last',
      });
      expect(index).toContainReactComponent(VisuallyHidden, {
        children: title,
      });
    });
  });

  describe('BulkActions', () => {
    it('toggles all resources selected when paginatedSelectionAllAction is triggered', () => {
      const onSelectionChangeSpy = jest.fn();
      const index = mountWithApp(
        <IndexTable
          {...defaultProps}
          selectable
          hasMoreItems
          selectedItemsCount={1}
          itemCount={2}
          promotedBulkActions={[{content: 'promoted action'}]}
          onSelectionChange={onSelectionChangeSpy}
        >
          {mockTableItems.map(mockRenderRow)}
        </IndexTable>,
      );

      index
        .find(BulkActions)!
        .triggerKeypath('paginatedSelectAllAction.onAction');

      expect(onSelectionChangeSpy).toHaveBeenCalledWith(
        SelectionType.All,
        true,
      );
    });

    it('toggles all page resources when onToggleAll is triggered', () => {
      const onSelectionChangeSpy = jest.fn();
      const index = mountWithApp(
        <IndexTable
          {...defaultProps}
          selectable
          hasMoreItems
          selectedItemsCount={1}
          itemCount={2}
          promotedBulkActions={[{content: 'promoted action'}]}
          onSelectionChange={onSelectionChangeSpy}
        >
          {mockTableItems.map(mockRenderRow)}
        </IndexTable>,
      );

      index.find(BulkActions)!.trigger('onToggleAll');

      expect(onSelectionChangeSpy).toHaveBeenCalledWith(
        SelectionType.Page,
        true,
      );
    });
  });

  describe('condensed', () => {
    const defaultIndexTableProps: IndexTableProps = {
      headings: mockTableHeadings,
      itemCount: mockTableItems.length,
      selectedItemsCount: 0,
      onSelectionChange: () => {},
    };

    const width = window.innerWidth;

    afterEach(() => {
      Object.defineProperty(window, 'innerWidth', {
        value: width,
      });
    });

    it('renders bulk actions when selectable', () => {
      const index = mountWithApp(
        <IndexTable {...defaultIndexTableProps} condensed>
          {mockTableItems.map(mockRenderCondensedRow)}
        </IndexTable>,
      );

      index.find(Button, {children: 'Select'})?.trigger('onClick');

      expect(index).toContainReactComponent(BulkActions, {
        selectMode: true,
      });
    });

    it('does not render bulk actions with onSelectModeToggle when condensed is false', () => {
      const index = mountWithApp(
        <IndexTable
          {...defaultIndexTableProps}
          selectedItemsCount={1}
          condensed={false}
          promotedBulkActions={[{content: 'Action'}]}
        >
          {mockTableItems.map(mockRenderRow)}
        </IndexTable>,
      );

      expect(index).toContainReactComponent(BulkActions, {
        onSelectModeToggle: undefined,
      });
    });

    it('toggles selectable state when the bulk action button is triggered', () => {
      const index = mountWithApp(
        <IndexTable {...defaultIndexTableProps} condensed>
          {mockTableItems.map(mockRenderCondensedRow)}
        </IndexTable>,
      );

      index.find(Button, {children: 'Select'})?.trigger('onClick');
      index.find(BulkActions)?.trigger('onSelectModeToggle');

      expect(index).not.toContainReactComponent(BulkActions);
    });

    it('renders sort markup', () => {
      const id = 'sort';
      const index = mountWithApp(
        <IndexTable
          {...defaultIndexTableProps}
          condensed
          sort={<div id={id} />}
        >
          {mockTableItems.map(mockRenderCondensedRow)}
        </IndexTable>,
      );

      expect(index).toContainReactComponent('div', {id});
    });

    it('renders as a list', () => {
      const index = mountWithApp(
        <IndexTable {...defaultIndexTableProps} condensed>
          {mockTableItems.map(mockRenderCondensedRow)}
        </IndexTable>,
      );

      expect(index).toContainReactComponent('ul');
    });

    it('leaves small screen select mode when going from condensed to regular', () => {
      const index = mountWithApp(
        <IndexTable {...defaultIndexTableProps} condensed>
          {mockTableItems.map(mockRenderCondensedRow)}
        </IndexTable>,
      );

      index.find(Button, {children: 'Select'})?.trigger('onClick');
      index.setProps({condensed: false});

      expect(index).not.toContainReactComponent(BulkActions);
    });

    it('does not render bulk actions with onSelectModeToggle unless items are selected', () => {
      Object.defineProperty(window, 'innerWidth', {
        value: 300,
      });

      const promotedActions = [{content: 'PromotedAction'}];
      const bulkActions = [{content: 'Action'}];

      const index = mountWithApp(
        <IndexTable
          {...defaultIndexTableProps}
          condensed
          hasMoreItems
          bulkActions={bulkActions}
          promotedBulkActions={promotedActions}
        >
          {mockTableItems.map(mockRenderCondensedRow)}
        </IndexTable>,
      );

      expect(index).not.toContainReactComponent(BulkActions);

      index.find(Sticky)!.find(Button)!.trigger('onClick');
      expect(index).toContainReactComponent(BulkActions, {
        actions: [],
        promotedActions: [],
      });

      index.setProps({
        selectedItemsCount: 2,
      });

      expect(index).toContainReactComponent(BulkActions, {
        actions: bulkActions,
        promotedActions,
      });
    });
  });
});
