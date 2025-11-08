import {useState} from 'react';
import {getMediaConditions, themeDefault} from '@shopify/polaris-tokens';
import type {
  BreakpointsAlias,
  BreakpointsAliasDirection,
  BreakpointsTokenGroup,
} from '@shopify/polaris-tokens';

import {isServer} from './target';
import {useIsomorphicLayoutEffect} from './use-isomorphic-layout-effect';

const Breakpoints = {
  // TODO: Update to smDown
  navigationBarCollapsed: '767.95px',
  // TODO: Update to lgDown
  stackedContent: '1039.95px',
};

const noWindowMatches: MediaQueryList = {
  media: '',
  addListener: noop,
  removeListener: noop,
  matches: false,
  onchange: noop,
  addEventListener: noop,
  removeEventListener: noop,
  dispatchEvent: (_: Event) => true,
};

function noop() {}

export function navigationBarCollapsed() {
  return isServer
    ? noWindowMatches
    : window.matchMedia(`(max-width: ${Breakpoints.navigationBarCollapsed})`);
}

export function stackedContent() {
  return isServer
    ? noWindowMatches
    : window.matchMedia(`(max-width: ${Breakpoints.stackedContent})`);
}

/**
 * Directional alias for each Polaris `breakpoints` token.
 *
 * @example 'smUp' | 'smDown' | 'smOnly' | 'mdUp' | etc.
 */
export type BreakpointsDirectionAlias =
  `${BreakpointsAlias}${Capitalize<BreakpointsAliasDirection>}`;

/**
 * Match results for each directional Polaris `breakpoints` alias.
 */
type BreakpointsMatches = {
  [DirectionAlias in BreakpointsDirectionAlias]: boolean;
};

const hookCallbacks = new Set<
  (breakpointAlias: BreakpointsDirectionAlias, matches: boolean) => void
>();
const breakpointsQueryEntries = getBreakpointsQueryEntries(
  themeDefault.breakpoints,
);

// Centralized MediaQueryList objects to avoid creating new ones for each component
const mediaQueryLists = new Map<string, MediaQueryList>();
// Cached matches to avoid calling .matches on each getLiveMatches call to avoid safari performance issues
let cachedMatches: BreakpointsMatches | null = null;

if (!isServer) {
  breakpointsQueryEntries.forEach(([breakpointAlias, query]) => {
    const eventListener = (event: {matches: boolean}) => {
      // Invalidate cache when media query changes
      cachedMatches = null;
      for (const hookCallback of hookCallbacks) {
        hookCallback(breakpointAlias, event.matches);
      }
    };
    const mql = window.matchMedia(query);
    mediaQueryLists.set(breakpointAlias, mql);
    if (mql.addListener) {
      mql.addListener(eventListener);
    } else {
      mql.addEventListener('change', eventListener);
    }
  });
}

function getDefaultMatches(defaults?: UseBreakpointsOptions['defaults']) {
  return Object.fromEntries(
    breakpointsQueryEntries.map(([directionAlias]) => [
      directionAlias,
      typeof defaults === 'boolean'
        ? defaults
        : defaults?.[directionAlias] ?? false,
    ]),
  ) as BreakpointsMatches;
}

function getLiveMatches() {
  // Return cached matches if available, otherwise compute and cache them
  if (cachedMatches) {
    return cachedMatches;
  }

  cachedMatches = Object.fromEntries(
    breakpointsQueryEntries.map(([directionAlias]) => [
      directionAlias,
      mediaQueryLists.get(directionAlias)?.matches ?? false,
    ]),
  ) as BreakpointsMatches;

  return cachedMatches;
}

export interface UseBreakpointsOptions {
  /**
   * Default values applied during SSR. Accepts a single value to use for each
   * breakpoint alias, or an object for configuring select breakpoints.
   *
   * @default false
   */
  defaults:
    | boolean
    | {
        [DirectionAlias in BreakpointsDirectionAlias]?: boolean;
      };
}

/**
 * Retrieves media query matches for each directional Polaris `breakpoints` alias.
 *
 * @example
 * const {smUp} = useBreakpoints();
 * return smUp && 'Hello world';
 *
 * @example
 * const {mdUp} = useBreakpoints({defaults: {mdUp: true}});
 * mdUp //=> `true` during SSR
 *
 * @example
 * const breakpoints = useBreakpoints({defaults: true});
 * breakpoints //=> All values will be `true` during SSR
 */
export function useBreakpoints(options?: UseBreakpointsOptions) {
  // On SSR, and initial CSR, we force usage of the defaults to avoid a
  // hydration mismatch error.
  // Later, in the effect, we will call this again on the client side without
  // any defaults to trigger a more accurate client side evaluation.
  const [breakpoints, setBreakpoints] = useState(
    getDefaultMatches(options?.defaults),
  );

  useIsomorphicLayoutEffect(() => {
    // Now that we're client side, get the real values
    setBreakpoints(getLiveMatches());

    // Register a callback to set the breakpoints object whenever there's a
    // change in the future
    const callback = (
      breakpointAlias: BreakpointsDirectionAlias,
      matches: boolean,
    ) => {
      setBreakpoints((prevBreakpoints) => ({
        ...prevBreakpoints,
        [breakpointAlias]: matches,
      }));
    };
    hookCallbacks.add(callback);

    return () => {
      hookCallbacks.delete(callback);
    };
  }, []);

  return breakpoints;
}

/**
 * Converts `breakpoints` tokens into directional media query entries.
 *
 * @example
 * const breakpointsQueryEntries = getBreakpointsQueryEntries(breakpoints);
 * breakpointsQueryEntries === [
 *   ['xsUp', '(min-width: ...)'],
 *   ['xsDown', '(max-width: ...)'],
 *   ['xsOnly', '(min-width: ...) and (max-width: ...)'],
 *   ['smUp', '(min-width: ...) and (max-width: ...)'],
 *   ['mdUp', '(min-width: ...) and (max-width: ...)'],
 *   // etc.
 * ]
 */
export function getBreakpointsQueryEntries(breakpoints: BreakpointsTokenGroup) {
  const mediaConditionEntries = Object.entries(getMediaConditions(breakpoints));

  return mediaConditionEntries
    .map(([breakpointsToken, mediaConditions]) =>
      Object.entries(mediaConditions).map(([direction, mediaCondition]) => {
        const breakpointsAlias = breakpointsToken.split('-')[1];

        // e.g. smUp, smDown, smOnly, etc.
        const directionAlias = `${breakpointsAlias}${capitalize(direction)}`;

        return [directionAlias, mediaCondition];
      }),
    )
    .flat() as [BreakpointsDirectionAlias, string][];
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
