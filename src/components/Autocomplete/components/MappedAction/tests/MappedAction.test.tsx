import React from 'react';
import {mountWithListBoxProvider} from 'test-utilities/list-box';

import {ListBox} from '../../../../ListBox';
import {MappedAction} from '../MappedAction';
import {MappedActionContext} from '../../../../../utilities/autocomplete';
import {Badge} from '../../../../Badge';
import {Icon} from '../../../../Icon';

describe('MappedAction', () => {
  it('renders badge when provided', () => {
    const badge = {
      status: 'new' as const,
      content: 'new',
    };
    const mappedAction = mountWithListBoxProvider(
      <MappedAction badge={badge} />,
    );

    expect(mappedAction).toContainReactComponent(Badge, {
      status: badge.status,
      children: badge.content,
    });
  });

  it('renders suffix when provided', () => {
    const mappedAction = mountWithListBoxProvider(
      <MappedAction suffix={<MockComponent />} />,
    );

    expect(mappedAction).toContainReactComponent(MockComponent);
  });

  it('renders helpText when provided', () => {
    const helpText = 'help text';
    const mappedAction = mountWithListBoxProvider(
      <MappedAction helpText={helpText} />,
    );

    expect(mappedAction).toContainReactText(helpText);
  });

  it('renders ellipsis when true', () => {
    const mappedAction = mountWithListBoxProvider(
      <MappedAction ellipsis content="content for ellipsis" />,
    );

    expect(mappedAction).toContainReactText('…');
  });

  it('renders MappedActionContext provider with values', () => {
    const props = {
      role: 'role',
      url: 'url',
      external: false,
      onAction: () => {},
      destructive: false,
    };
    const mappedAction = mountWithListBoxProvider(<MappedAction {...props} />);

    expect(mappedAction).toContainReactComponent(MappedActionContext.Provider, {
      value: {
        ...props,
        isAction: true,
      },
    });
  });

  describe('ListBox.Action', () => {
    it('renders', () => {
      const mappedAction = mountWithListBoxProvider(<MappedAction />);

      expect(mappedAction).toContainReactComponent(ListBox.Action);
    });

    it('passes active', () => {
      const mappedAction = mountWithListBoxProvider(<MappedAction active />);

      expect(mappedAction).toContainReactComponent(ListBox.Action, {
        selected: true,
      });
    });

    it('passes disabled', () => {
      const disabled = true;
      const mappedAction = mountWithListBoxProvider(
        <MappedAction disabled={disabled} />,
      );

      expect(mappedAction).toContainReactComponent(ListBox.Action, {
        disabled,
      });
    });

    it('passes value', () => {
      const value = 'value';
      const mappedAction = mountWithListBoxProvider(
        <MappedAction content={value} />,
      );

      expect(mappedAction).toContainReactComponent(ListBox.Action, {
        value,
      });
    });

    it('defaults value to an empty string', () => {
      const value = '';
      const mappedAction = mountWithListBoxProvider(<MappedAction />);

      expect(mappedAction).toContainReactComponent(ListBox.Action, {
        value,
      });
    });
  });

  describe('prefix markup', () => {
    it('renders images', () => {
      const image = 'image';
      const mappedAction = mountWithListBoxProvider(
        <MappedAction image={image} />,
      );

      expect(mappedAction).toContainReactComponent('div', {
        role: 'presentation',
      });
    });

    it('renders icon', () => {
      const source = 'icon';
      const mappedAction = mountWithListBoxProvider(
        <MappedAction icon={source} />,
      );

      expect(mappedAction).toContainReactComponent(Icon, {source});
    });

    it('renders prefix', () => {
      const mappedAction = mountWithListBoxProvider(
        <MappedAction prefix={<MockComponent />} />,
      );

      expect(mappedAction).toContainReactComponent(MockComponent);
    });

    it('renders icon instead of image', () => {
      const source = 'icon';
      const image = 'image';
      const mappedAction = mountWithListBoxProvider(
        <MappedAction icon={source} image={image} />,
      );

      expect(mappedAction).toContainReactComponent(Icon, {source});
      expect(mappedAction).not.toContainReactComponent('div', {
        role: 'presentation',
      });
    });

    it('renders prefix instead of image', () => {
      const image = 'image';
      const mappedAction = mountWithListBoxProvider(
        <MappedAction prefix={<MockComponent />} image={image} />,
      );

      expect(mappedAction).toContainReactComponent(MockComponent);
      expect(mappedAction).not.toContainReactComponent('div', {
        role: 'presentation',
      });
    });

    it('renders prefix instead of icon', () => {
      const source = 'icon';
      const mappedAction = mountWithListBoxProvider(
        <MappedAction prefix={<MockComponent />} icon={source} />,
      );

      expect(mappedAction).toContainReactComponent(MockComponent);
      expect(mappedAction).not.toContainReactComponent(Icon, {source});
    });
  });
});

function MockComponent() {
  return null;
}
