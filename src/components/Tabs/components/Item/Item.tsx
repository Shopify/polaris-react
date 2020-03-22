import React from 'react';

import {classNames} from '../../../../utilities/css';
import {FeaturesContext} from '../../../../utilities/features';
import styles from '../../Tabs.scss';
import {UnstyledLink} from '../../../UnstyledLink';

export interface ItemProps {
  id: string;
  focused: boolean;
  panelID?: string;
  children?: React.ReactNode;
  url?: string;
  accessibilityLabel?: string;
  onClick?(): void;
}

export class Item extends React.PureComponent<ItemProps, never> {
  static contextType = FeaturesContext;
  context!: React.ContextType<typeof FeaturesContext>;

  private focusedNode: HTMLElement | React.ReactElement | null = null;

  componentDidMount() {
    const {focusedNode} = this;
    const {focused} = this.props;

    if (focusedNode && focusedNode instanceof HTMLButtonElement && focused) {
      focusedNode.focus();
    }
  }

  componentDidUpdate() {
    const {focusedNode} = this;
    const {focused} = this.props;

    if (focusedNode && focusedNode instanceof HTMLButtonElement && focused) {
      focusedNode.focus();
    }
  }

  render() {
    const {
      id,
      panelID,
      children,
      url,
      accessibilityLabel,
      onClick = noop,
    } = this.props;

    const {newDesignLanguage} = this.context || {};

    const classname = classNames(
      styles.Item,
      newDesignLanguage && styles.newDesignLanguage,
    );

    const sharedProps = {
      id,
      ref: this.setFocusedNode,
      onClick,
      className: classname,
      'aria-controls': panelID,
      'aria-selected': false,
      'aria-label': accessibilityLabel,
    };

    const markup = url ? (
      <UnstyledLink {...sharedProps} url={url}>
        {children}
      </UnstyledLink>
    ) : (
      <button {...sharedProps} type="button">
        {children}
      </button>
    );

    return <li>{markup}</li>;
  }

  private setFocusedNode = (node: HTMLElement | React.ReactElement | null) => {
    this.focusedNode = node;
  };
}

function noop() {}
