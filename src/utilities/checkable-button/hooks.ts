import {useContext} from 'react';

import {CheckableButtonContext} from './context';

export function useCheckableButton() {
  const context = useContext(CheckableButtonContext);
  if (!context) {
    throw new Error('Use this component inside ResourceList');
  }
  return context;
}
