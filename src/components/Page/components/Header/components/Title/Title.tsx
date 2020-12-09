import React from 'react';

import {DisplayText} from '../../../../../DisplayText';
import {TextStyle} from '../../../../../TextStyle';
import type {AvatarProps} from '../../../../../Avatar';
import type {ThumbnailProps} from '../../../../../Thumbnail';
import {classNames} from '../../../../../../utilities/css';
import {useFeatures} from '../../../../../../utilities/features';

import styles from './Title.scss';

export interface TitleProps {
  /** Page title, in large type */
  title?: string;
  /** Page subtitle, in regular type */
  subtitle?: React.ReactNode;
  /** Important and non-interactive status information shown immediately after the title. */
  titleMetadata?: React.ReactNode;
  /** thumbnail that precedes the title */
  thumbnail?:
    | React.ReactElement<AvatarProps | ThumbnailProps>
    | React.SFC<React.SVGProps<SVGSVGElement>>;
}

export function Title({title, subtitle, titleMetadata, thumbnail}: TitleProps) {
  const {newDesignLanguage} = useFeatures();

  const titleElement = newDesignLanguage ? (
    <h1 className={styles.newDesignLanguageTitle}>{title}</h1>
  ) : (
    <DisplayText size="large" element="h1">
      <TextStyle variation="strong">{title}</TextStyle>
    </DisplayText>
  );
  const titleMarkup = title ? (
    <div className={styles.Title}>{titleElement}</div>
  ) : null;

  const titleMetadataMarkup = titleMetadata ? (
    <div className={styles.TitleMetadata}>{titleMetadata}</div>
  ) : null;

  const wrappedTitleMarkup = titleMetadata ? (
    <div
      className={classNames(
        styles.TitleWithMetadataWrapper,
        newDesignLanguage && styles.newDesignLanguage,
      )}
    >
      {titleMarkup}
      {titleMetadataMarkup}
    </div>
  ) : (
    titleMarkup
  );

  const subtitleMarkup = subtitle ? (
    <div className={styles.SubTitle}>
      {typeof subtitle === 'string' ? <p>{subtitle}</p> : <div>{subtitle}</div>}
    </div>
  ) : null;

  const thumbnailMarkup = thumbnail ? <div>{thumbnail}</div> : null;

  const pageTitleClassName = thumbnail
    ? classNames(styles.hasThumbnail)
    : undefined;

  return (
    <div className={pageTitleClassName}>
      {thumbnailMarkup}
      <div className={styles.TitleAndSubtitleWrapper}>
        {wrappedTitleMarkup}
        {subtitleMarkup}
      </div>
    </div>
  );
}
