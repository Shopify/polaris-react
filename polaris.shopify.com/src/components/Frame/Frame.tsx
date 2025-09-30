import {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {DarkMode} from 'use-dark-mode';
import {motion, AnimatePresence} from 'framer-motion';

import GlobalSearch from '../GlobalSearch';
import nav from '../../../.cache/nav';
import {NavItem, Breakpoints} from '../../types';

import styles from './Frame.module.scss';
import {className} from '../../utils/various';
import {useRouter} from 'next/router';
import StatusBadge from '../StatusBadge';
import Icon from '../Icon';
import {ArrowRightIcon, LockIcon} from '@shopify/polaris-icons';
import icons from '../../icons';

const NAV_ID = 'nav';
interface Props {
  darkMode: DarkMode;
  children: React.ReactNode;
}

function Frame({darkMode, children}: Props) {
  const [showSkipToContentLink, setShowSkipToContentLink] = useState(true);
  const [navIsVisible, setNavIsVisible] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const {asPath} = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    const mainContent = document.querySelector('#main');
    setShowSkipToContentLink(mainContent !== null);
  }, [asPath]);

  useEffect(() => {
    function hideSideNavOnResize() {
      if (window.innerWidth > Breakpoints.Desktop && navIsVisible) {
        setNavIsVisible(false);
      }
    }

    window.addEventListener('resize', hideSideNavOnResize);

    return () => window.removeEventListener('resize', hideSideNavOnResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleOnKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setNavIsVisible(false);
      }
    };

    if (navIsVisible) {
      document.addEventListener('keydown', handleOnKeyDown);
      focusFirstItemInNav();
    }

    return () => document.removeEventListener('keydown', handleOnKeyDown);
  }, [navIsVisible]);

  const focusFirstItemInNav = () => {
    const selector = `#${NAV_ID} a`;
    const firstLinkInNav: HTMLLinkElement | null =
      document.querySelector(selector);
    firstLinkInNav && firstLinkInNav.focus();
  };

  const handleCloseMenu = () => {
    setNavIsVisible(false);
    menuButtonRef.current?.focus();
  };

  const handleShiftTabPress = (evt: React.KeyboardEvent) => {
    if (evt.key === 'Tab' && evt.shiftKey) {
      evt.preventDefault();
      const closeButton = closeButtonRef.current;
      closeButton instanceof HTMLElement && closeButton.focus();
    }
  };

  const handleCloseButtonKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      focusFirstItemInNav();
    }
  };

  return (
    <>
      <div className={styles.PolarisUnifiedCta}>
        <div>
          <a href="https://shopify.dev/docs/api/app-home/polaris-web-components">
            {icons.Polaris()}
            <strong>Introducing Polaris Web Components</strong>{' '}
            <span className={styles.ReleaseCandidate}>Now Released</span>
            <Icon source={ArrowRightIcon} />
          </a>
        </div>
      </div>
      <div className={styles.Header}>
        {showSkipToContentLink && (
          <a className={styles.SkipToContentLink} href="#main">
            Skip to content
          </a>
        )}

        <button
          id="menu-button"
          aria-label="Open menu"
          aria-controls={NAV_ID}
          aria-expanded={navIsVisible}
          onClick={() => setNavIsVisible(true)}
          ref={menuButtonRef}
          className={styles.NavToggle}
        >
          <NavToggleIcon />
        </button>

        <Link href="/" className={styles.Logo}>
          <Image
            alt="Shopify logo"
            src="/images/shopify-logo.svg"
            width={24}
            height={24}
          />
          Polaris React
        </Link>

        {isMounted && (
          <button className={styles.DarkModeToggle} onClick={darkMode.toggle}>
            {darkMode.value ? (
              <span className={styles.LightModeIcon}>💡</span>
            ) : (
              <span className={styles.DarkModeIcon}>🌙</span>
            )}
          </button>
        )}

        <GlobalSearch />
      </div>

      <div className={styles.NavAndContent}>
        <nav
          className={className(styles.Nav, navIsVisible && styles.isVisible)}
          id={NAV_ID}
        >
          <ul>
            <NavItem
              nav={nav}
              level={0}
              handleLinkClick={() => setNavIsVisible(false)}
              handleShiftTabOnFirstLink={handleShiftTabPress}
            />
          </ul>
          <button
            ref={closeButtonRef}
            aria-label="Close menu"
            className={styles.CloseButton}
            onClick={handleCloseMenu}
            onKeyDown={handleCloseButtonKeyDown}
          >
            <CloseIcon />
          </button>
        </nav>
        <div className={styles.PageContent}>{children}</div>
      </div>
    </>
  );
}

function NavItem({
  nav,
  level,
  handleLinkClick,
  handleShiftTabOnFirstLink,
}: {
  nav: NavItem;
  level: number;
  handleLinkClick: () => void;
  handleShiftTabOnFirstLink: (e: React.KeyboardEvent) => void;
}) {
  const [manuallyExpandedSections, setManuallyExpandedSections] = useState<{
    [slug: string]: boolean;
  }>({});

  const {asPath} = useRouter();

  const manuallyToggleSection = (slug: string, expanded: boolean) => {
    setManuallyExpandedSections({
      ...manuallyExpandedSections,
      [slug]: expanded,
    });
  };

  useEffect(() => setManuallyExpandedSections({}), [asPath]);

  return (
    <>
      {nav.children &&
        !nav.hideFromNav &&
        Object.entries(nav.children)
          .filter(([, child]) => !child.hideFromNav)
          .sort((_a, _b) => {
            const [, a] = _a as [string, NavItem];
            const [, b] = _b as [string, NavItem];
            return a.title && b.title ? a.title.localeCompare(b.title) : 0;
          })
          .sort((_a, _b) => {
            const [, a] = _a as [string, NavItem];
            const [, b] = _b as [string, NavItem];
            return (
              (typeof a.order !== 'undefined' ? a.order : 1000) -
              (typeof b.order !== 'undefined' ? b.order : 1000)
            );
          })
          .map((entry, i) => {
            const [key, child] = entry as [string, NavItem];

            if (!child.slug) return null;

            const isExpandable =
              child.children &&
              Object.keys(child.children).length &&
              !child.hideChildren;
            const id = (child.slug || key).replace(/\//g, '');
            const navAriaId = `nav-${id}`;
            const segments = asPath.slice(1).split('/');
            const keyAndLevelMatchUrl = !!(segments[level] === key);
            const manuallyExpandedStatus = manuallyExpandedSections[key];
            const isExpanded = child.expanded
              ? child.expanded
              : manuallyExpandedStatus === undefined
              ? keyAndLevelMatchUrl
              : manuallyExpandedStatus;

            const removeParams = (path: string) => path.replace(/\?.+$/gi, '');
            const isCurrent = removeParams(asPath) === child.slug;

            return (
              <li
                key={child.slug}
                className={className(child.newSection && styles.newSection)}
              >
                <span
                  className={className(
                    styles.NavItem,
                    isCurrent && styles.isCurrent,
                  )}
                >
                  {child.internalOnly ? (
                    <a
                      href={child.slug}
                      onClick={handleLinkClick}
                      aria-current={isCurrent ? 'page' : 'false'}
                      onKeyDown={(evt) => {
                        if (level === 0 && i === 0) {
                          handleShiftTabOnFirstLink(evt);
                        }
                      }}
                    >
                      {child.title}
                      <Icon source={LockIcon} width={16} height={16} />
                    </a>
                  ) : (
                    <Link
                      href={child.slug}
                      onClick={handleLinkClick}
                      aria-current={isCurrent ? 'page' : 'false'}
                      onKeyDown={(evt) => {
                        if (level === 0 && i === 0) {
                          handleShiftTabOnFirstLink(evt);
                        }
                      }}
                    >
                      {child.title}
                      {child.status && <StatusBadge status={child.status} />}
                    </Link>
                  )}

                  {isExpandable && !child.expanded && (
                    <button
                      className={styles.Toggle}
                      onClick={() => manuallyToggleSection(key, !isExpanded)}
                      aria-label="Toggle section"
                      aria-expanded={isExpanded}
                      aria-controls={isExpanded ? navAriaId : undefined}
                    />
                  )}
                </span>

                <AnimatePresence initial={false}>
                  {isExpandable && isExpanded && (
                    <motion.ul
                      initial={{opacity: 0, height: 0}}
                      animate={{opacity: 1, scale: 1, height: 'auto'}}
                      exit={{opacity: 0, height: 0}}
                      transition={{ease: 'easeInOut', duration: 0.15}}
                      id={navAriaId}
                    >
                      <NavItem
                        nav={child}
                        level={level + 1}
                        handleLinkClick={handleLinkClick}
                        handleShiftTabOnFirstLink={handleShiftTabOnFirstLink}
                      />
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
    </>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="m11.414 10 6.293-6.293a1 1 0 1 0-1.414-1.414l-6.293 6.293-6.293-6.293a1 1 0 0 0-1.414 1.414l6.293 6.293-6.293 6.293a1 1 0 1 0 1.414 1.414l6.293-6.293 6.293 6.293a.998.998 0 0 0 1.707-.707.999.999 0 0 0-.293-.707l-6.293-6.293z" />
    </svg>
  );
}

function NavToggleIcon() {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 11h-18a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0-7h-18a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0 14h-18a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z" />
    </svg>
  );
}

export default Frame;
