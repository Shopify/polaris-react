import {createContext} from 'react';

import type {CheckboxHandles} from '../../types';

import type {CheckableButtonKey} from '../resource-list/types';

type CheckableButtonContextType = (
  key: CheckableButtonKey,
  button: CheckboxHandles,
) => void;

export const CheckableButtonContext = createContext<
  CheckableButtonContextType | undefined
>(undefined);
