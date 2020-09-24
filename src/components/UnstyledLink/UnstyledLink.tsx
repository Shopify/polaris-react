import React, {memo, forwardRef} from 'react';

import {unstyled} from '../shared';
import {useLink, LinkLikeComponentProps} from '../../utilities/link';

// The script in the styleguide that generates the Props Explorer data expects
// that the interface defining the props is defined in this file, not imported
// from elsewhere. This silly workaround ensures that the Props Explorer table
// is generated correctly.
export interface UnstyledLinkProps extends LinkLikeComponentProps {}

// Wrapping forwardRef in a memo gets a name set since
// https://github.com/facebook/react/issues/16722
// but eslint-plugin-react doesn't know that just yet
// eslint-disable-next-line react/display-name
export const UnstyledLink = memo(
  forwardRef<unknown, UnstyledLinkProps>(function UnstyledLink(props, _ref) {
    const LinkComponent = useLink();
    if (LinkComponent) {
      return <LinkComponent {...unstyled.props} {...props} />;
    }

    const {external, url, rel, ...rest} = props;
    const target = external ? '_blank' : undefined;
    const defaultRel = () => (external ? 'noopener noreferrer' : undefined);

    return (
      <a
        target={target}
        href={url}
        rel={rel ? rel : defaultRel()}
        {...rest}
        {...unstyled.props}
      />
    );
  }),
);
