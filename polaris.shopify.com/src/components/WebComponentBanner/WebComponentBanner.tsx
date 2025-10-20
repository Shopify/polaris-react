import React, {useId} from 'react';
import Link from 'next/link';
import HandIcon from './HandIcon';
import styles from './WebComponentBanner.module.scss';

interface Props {
  componentName: string;
  webComponentName: string;
  webComponentUrl?: string;
  type?: 'polaris' | 'pattern' | 'app-bridge';
}

interface StarConfig {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

// Star configuration: position, size, and animation timing
const STAR_CONFIGS: StarConfig[] = [
  {top: 15, left: 10, size: 2, duration: 2.5, delay: 0},
  {top: 25, left: 25, size: 3, duration: 3, delay: 0.5},
  {top: 40, left: 15, size: 2, duration: 2, delay: 1},
  {top: 20, left: 45, size: 2, duration: 3.5, delay: 0.8},
  {top: 55, left: 35, size: 3, duration: 2.8, delay: 1.5},
  {top: 35, left: 60, size: 2, duration: 2.2, delay: 0.3},
  {top: 65, left: 20, size: 2, duration: 3.2, delay: 1.2},
  {top: 10, left: 70, size: 3, duration: 2.6, delay: 0.7},
  {top: 45, left: 75, size: 2, duration: 3.3, delay: 1.8},
  {top: 70, left: 55, size: 2, duration: 2.4, delay: 0.4},
  {top: 30, left: 85, size: 3, duration: 2.9, delay: 1.1},
  {top: 60, left: 80, size: 2, duration: 3.1, delay: 1.6},
  {top: 50, left: 5, size: 2, duration: 2.7, delay: 0.6},
  {top: 12, left: 35, size: 3, duration: 3.4, delay: 1.3},
  {top: 75, left: 40, size: 2, duration: 2.3, delay: 0.9},
  {top: 48, left: 50, size: 2, duration: 2.9, delay: 1.7},
  {top: 18, left: 90, size: 3, duration: 3.6, delay: 0.2},
  {top: 80, left: 65, size: 2, duration: 2.5, delay: 1.4},
];

const PolarisStarIcon = React.memo(() => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M71.5722 38.6116C72.4275 43.6363 76.3637 47.5725 81.3884 48.4278L115.071 54.161C117.918 54.6455 120 57.1123 120 60C120 62.8877 117.918 65.3544 115.071 65.839L81.3884 71.5722C76.3637 72.4275 72.4275 76.3637 71.5722 81.3884L65.839 115.071C65.3544 117.918 62.8877 120 60 120C57.1123 120 54.6455 117.918 54.161 115.071L48.4278 81.3884C47.5725 76.3637 43.6363 72.4275 38.6116 71.5722L4.9291 65.839C2.08238 65.3544 0 62.8877 0 60C0 57.1123 2.08239 54.6455 4.92911 54.161L38.6116 48.4278C43.6363 47.5725 47.5725 43.6363 48.4278 38.6116L54.161 4.9291C54.6455 2.08238 57.1123 0 60 0C62.8877 0 65.3544 2.08239 65.839 4.92911L71.5722 38.6116Z"
      fill="white"
    />
  </svg>
));

PolarisStarIcon.displayName = 'PolarisStarIcon';

const AppsIcon = React.memo(() => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="appIconTopLeft"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 5.75C3.5 4.50736 4.50736 3.5 5.75 3.5H8.5C9.05228 3.5 9.5 3.94771 9.5 4.5V8.5C9.5 9.05228 9.05229 9.5 8.5 9.5H4.5C3.94772 9.5 3.5 9.05229 3.5 8.5V5.75ZM5.75 5C5.33579 5 5 5.33579 5 5.75V8H8V5H5.75Z"
      fill="white"
    />
    <path
      className="appIconBottomLeft"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 14.25C3.5 15.4926 4.50736 16.5 5.75 16.5H8.5C9.05228 16.5 9.5 16.0523 9.5 15.5V11.5C9.5 10.9477 9.05229 10.5 8.5 10.5H4.5C3.94772 10.5 3.5 10.9477 3.5 11.5V14.25ZM5.75 15C5.33579 15 5 14.6642 5 14.25V12H8V15H5.75Z"
      fill="white"
    />
    <path
      className="appIconBottomRight"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.25 16.5C15.4926 16.5 16.5 15.4926 16.5 14.25V11.5C16.5 10.9477 16.0523 10.5 15.5 10.5H11.5C10.9477 10.5 10.5 10.9477 10.5 11.5V15.5C10.5 16.0523 10.9477 16.5 11.5 16.5H14.25ZM15 14.25C15 14.6642 14.6642 15 14.25 15H12V12H15V14.25Z"
      fill="white"
    />
    <path
      className="appIconPlus"
      d="M13.5 3.5C13.9142 3.5 14.25 3.83579 14.25 4.25V5.75H15.75C16.1642 5.75 16.5 6.08579 16.5 6.5C16.5 6.91421 16.1642 7.25 15.75 7.25H14.25V8.75C14.25 9.16421 13.9142 9.5 13.5 9.5C13.0858 9.5 12.75 9.16421 12.75 8.75V7.25H11.25C10.8358 7.25 10.5 6.91421 10.5 6.5C10.5 6.08579 10.8358 5.75 11.25 5.75H12.75V4.25C12.75 3.83579 13.0858 3.5 13.5 3.5Z"
      fill="white"
    />
  </svg>
));

AppsIcon.displayName = 'AppsIcon';

/**
 * WebComponentBanner displays a promotional banner for web component versions
 * of Polaris React components. Supports three types: polaris, pattern, and app-bridge.
 *
 * @param componentName - Display name of the component (e.g., "Button")
 * @param webComponentName - Web component tag or pattern name (e.g., "s-button")
 * @param webComponentUrl - Optional custom URL for documentation
 * @param type - Banner type: 'polaris' (default), 'pattern', or 'app-bridge'
 */
function WebComponentBanner({
  componentName,
  webComponentName,
  webComponentUrl = 'https://shopify.dev/docs/api/app-home/polaris-web-components',
  type = 'polaris',
}: Props) {
  // Generate unique ID for SVG gradients to prevent collisions
  const uniqueId = useId().replace(/:/g, '-');

  // Validate props in development
  if (process.env.NODE_ENV === 'development') {
    if (!componentName || !webComponentName) {
      console.warn(
        'WebComponentBanner: componentName and webComponentName are required',
      );
    }
    if (webComponentUrl && !webComponentUrl.startsWith('http')) {
      console.warn('WebComponentBanner: webComponentUrl must be a valid URL');
    }
  }

  // Fail gracefully if required props missing
  if (!componentName || !webComponentName) {
    return null;
  }

  const config = {
    polaris: {
      title: 'Upgrade to Polaris Web Components',
      description: `${componentName} is now available as a framework-agnostic web component.`,
      ctaText: `Start using <${webComponentName}>`,
    },
    pattern: {
      title: 'Upgrade to Polaris Web Components',
      description: `${componentName} is now available as a composition pattern using web components.`,
      ctaText: `Explore ${webComponentName}`,
    },
    'app-bridge': {
      title: 'Upgrade to App Bridge Web Components',
      description: `${componentName} is now available as an App Bridge web component.`,
      ctaText: `Start using <${webComponentName}>`,
    },
  };

  const {title, description, ctaText} = config[type];

  // Determine banner style based on type
  const bannerTypeClass =
    type === 'pattern'
      ? styles.PatternBanner
      : type === 'app-bridge'
      ? styles.AppBridgeBanner
      : styles.PolarisBanner;

  const bannerClassName = [styles.WebComponentBanner, bannerTypeClass].join(
    ' ',
  );

  const FloatingIcon = type === 'app-bridge' ? AppsIcon : PolarisStarIcon;

  return (
    <div className={bannerClassName}>
      <div className={styles.Stars} aria-hidden="true">
        {STAR_CONFIGS.map((star, index) => (
          <span
            key={index}
            className={styles.Star}
            style={
              {
                '--star-top': `${star.top}%`,
                '--star-left': `${star.left}%`,
                '--star-size': `${star.size}px`,
                '--star-duration': `${star.duration}s`,
                '--star-delay': `${star.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      <button
        className={styles.FloatingStarMobile}
        aria-label="Interactive decoration"
        tabIndex={-1}
      >
        <FloatingIcon />
      </button>
      <div className={styles.Content}>
        <div className={styles.Text}>
          <h3 className={styles.Title}>{title}</h3>
          <p className={styles.Description}>{description}</p>
          <Link href={webComponentUrl} className={styles.CTA}>
            {ctaText}
          </Link>
        </div>
      </div>
      <div className={styles.HandDecoration} aria-hidden="true">
        <HandIcon uniqueId={uniqueId} />
      </div>
      <button
        className={styles.FloatingStar}
        aria-label="Interactive decoration"
        tabIndex={-1}
      >
        <FloatingIcon />
      </button>
    </div>
  );
}

export default WebComponentBanner;
