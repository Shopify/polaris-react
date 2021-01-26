import {useContext} from 'react';

import {ClickTrackerContext} from './context';

export function useClickTracker() {
  const clickTracker = useContext(ClickTrackerContext);

  if (!clickTracker) {
    throw new Error(
      'No click tracker provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/structure/app-provider for implementation instructions.',
    );
  }

  return clickTracker;
}
