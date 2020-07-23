import {createContext} from 'react';

import type {CheckboxHandles} from '../../types';

import type {ResourceListSelectedItems, CheckableButtonKey} from './types';

// This is internal, but TS throws a build-time error if we don't export it
export interface ResourceListContextType {
  registerCheckableButtons?(
    key: CheckableButtonKey,
    button: CheckboxHandles,
  ): void;
  selectMode?: boolean;
  selectable?: boolean;
  selectedItems?: ResourceListSelectedItems;
  resourceName?: {
    singular: string;
    plural: string;
  };
  loading?: boolean;
  onSelectionChange?(
    selected: boolean,
    id: string,
    sortNumber: number | undefined,
    shiftKey: boolean,
  ): void;
}

export const ResourceListContext = createContext<ResourceListContextType>({});
