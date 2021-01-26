import {createContext} from 'react';

// This is internal, but TS throws a build-time error if we don't export it
export interface ClickTrackerContextType {
  trackClicks(value: boolean): void;
  focusLastClickedNode(): void;
}

export const ClickTrackerContext = createContext<ClickTrackerContextType>({
  trackClicks: () => null,
  focusLastClickedNode: () => null,
});
