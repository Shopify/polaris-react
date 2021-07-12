import React from 'react';
import {mountWithApp} from 'test-utilities';
import {IndexTable, IndexTableProps} from 'components';
import {ScrollContainer} from 'components/IndexTable';

import {useContainerScroll} from '../hooks';

function Component({condensed}: {condensed?: boolean}) {
  const {
    scrollableContainer,
    canScrollLeft,
    canScrollRight,
  } = useContainerScroll();
  const container = scrollableContainer ? 'ref' : 'null';
  const left = canScrollLeft ? 'can scroll left' : 'cannot scroll left';
  const right = canScrollRight ? 'can scroll right' : 'cannot scroll right';

  const content = `${container} ${left} and ${right}`;

  return condensed ? <span>{content}</span> : <td>{content}</td>;
}

const defaultIndexTableProps: IndexTableProps = {
  itemCount: 1,
  selectedItemsCount: 0,
  onSelectionChange: () => {},
  headings: [{title: 'Heading one'}, {title: 'Heading two'}],
};

describe('useContainerScroll', () => {
  describe('scrollableContainer', () => {
    it('returns a null container ref when the table is condensed', () => {
      const wrapper = mountWithApp(
        <IndexTable {...defaultIndexTableProps} condensed>
          <IndexTable.Row id="id" selected position={1}>
            <Component condensed />
          </IndexTable.Row>
        </IndexTable>,
      );

      expect(wrapper).toContainReactText('null');
    });

    it('returns a container element ref when the table is not condensed', () => {
      const wrapper = mountWithApp(
        <IndexTable {...defaultIndexTableProps}>
          <IndexTable.Row id="id" selected position={1}>
            <Component condensed={false} />
          </IndexTable.Row>
        </IndexTable>,
      );

      expect(wrapper).toContainReactText('ref');
    });

    it('returns a container element ref when the table is scrolled', () => {
      const wrapper = mountWithApp(
        <IndexTable {...defaultIndexTableProps}>
          <IndexTable.Row id="id" selected position={1}>
            <Component />
          </IndexTable.Row>
        </IndexTable>,
      );

      wrapper.find(ScrollContainer)!.trigger('onScroll', true);

      expect(wrapper).toContainReactText('ref');
    });
  });

  describe('canScrollLeft', () => {
    it('returns canScrollLeft as false by default', () => {
      const wrapper = mountWithApp(
        <IndexTable {...defaultIndexTableProps}>
          <IndexTable.Row id="id" selected position={1}>
            <Component />
          </IndexTable.Row>
        </IndexTable>,
      );

      expect(wrapper).toContainReactText('cannot scroll left');
    });
  });

  describe('canScrollRight', () => {
    it('returns canScrollRight as false by default', () => {
      const wrapper = mountWithApp(
        <IndexTable {...defaultIndexTableProps}>
          <IndexTable.Row id="id" selected position={1}>
            <Component />
          </IndexTable.Row>
        </IndexTable>,
      );

      expect(wrapper).toContainReactText('cannot scroll right');
    });
  });
});
