import {createContext} from 'react';

interface RowContextType {
  itemId?: string;
  selected?: boolean;
  onInteraction?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

export const RowContext = createContext<RowContextType>({});

export const RowHoveredContext = createContext<boolean | undefined>(undefined);

export interface ScrollContextType {
  scrollableContainer: HTMLDivElement | null;
  canScrollLeft: boolean;
  canScrollRight: boolean;
}

export const scrollDefaultContext = {
  scrollableContainer: null,
  canScrollLeft: false,
  canScrollRight: false,
};

export const ScrollContext = createContext<ScrollContextType>(
  scrollDefaultContext,
);
