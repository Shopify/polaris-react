import type {Action, ConnectedDisclosure} from '../../types';

interface ContextualSaveBarAction {
  /** A destination to link to */
  url?: string;
  /** Content the action displays */
  content?: string;
  /** Should a spinner be displayed */
  loading?: boolean;
  /** Should the action be disabled */
  disabled?: boolean;
  /** Callback when an action takes place */
  onAction?(): void;
}

interface ContextualSaveBarSaveAction extends ContextualSaveBarAction {
  /** Disclosure button connected right of the button. Toggles a popover action list. */
  connectedDisclosure?: ConnectedDisclosure;
}

interface ContextualSaveBarDiscardAction extends ContextualSaveBarAction {
  /** Whether to show a modal confirming the discard action */
  discardConfirmationModal?: boolean;
}

export interface ContextualSaveBarProps {
  /** Extend the contents section to be flush with the left edge  */
  alignContentFlush?: boolean;
  /** Accepts a string of content that will be rendered to the left of the actions */
  message?: string;
  /** Save or commit contextual save bar action with text defaulting to 'Save' */
  saveAction?: ContextualSaveBarSaveAction;
  /** Discard or cancel contextual save bar action with text defaulting to 'Discard' */
  discardAction?: ContextualSaveBarDiscardAction;
  /** Remove the normal max-width on the contextual save bar */
  fullWidth?: boolean;
  /** Accepts a component that is used to help users switch between different contexts */
  contextControl?: React.ReactNode;
}

// Toast

export interface ToastProps {
  /** The content that should appear in the toast message */
  content: string;
  /**
   * The length of time in milliseconds the toast message should persist
   * @default 5000
   */
  duration?: number;
  /** Display an error toast. */
  error?: boolean;
  /** Callback when the dismiss icon is clicked */
  onDismiss(): void;
  /** Adds an action next to the message */
  action?: Action;
}

export interface ToastID {
  id: string;
}

export type ToastPropsWithID = ToastProps & ToastID;
