import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
  useId,
} from 'react';
import type {FunctionComponent} from 'react';
import {UploadIcon, AlertCircleIcon} from '@shopify/polaris-icons';

import {debounce} from '../../utilities/debounce';
import {classNames, variationName} from '../../utilities/css';
import {capitalize} from '../../utilities/capitalize';
import {Icon} from '../Icon';
import {Text} from '../Text';
import {Labelled} from '../Labelled';
import type {LabelledProps} from '../Labelled';
import {useI18n} from '../../utilities/i18n';
import {isServer} from '../../utilities/target';
import {useComponentDidMount} from '../../utilities/use-component-did-mount';
import {useToggle} from '../../utilities/use-toggle';
import {BlockStack} from '../BlockStack';
import {useEventListener} from '../../utilities/use-event-listener';

import {FileUpload} from './components';
import {DropZoneContext} from './context';
import {
  fileAccepted,
  getDataTransferFiles,
  defaultAllowMultiple,
  createAllowMultipleKey,
} from './utils';
import type {DropZoneEvent} from './utils';
import styles from './DropZone.module.css';

export type DropZoneFileType = 'file' | 'image' | 'video';

export interface DropZoneProps {
  /** Label for the file input */
  label?: React.ReactNode;
  /** Adds an action to the label */
  labelAction?: LabelledProps['action'];
  /** Visually hide the label */
  labelHidden?: boolean;
  /** ID for file input */
  id?: string;
  /** name for file input */
  name?: string;
  /** Allowed file types */
  accept?: string;
  /**
   * Whether is a file or an image
   * @default 'file'
   */
  type?: DropZoneFileType;
  /** Sets an active state */
  active?: boolean;
  /** Sets an error state */
  error?: boolean;
  /**
   * Displays an outline border
   * @default true
   */
  outline?: boolean;
  /**
   * Displays an overlay on hover
   * @default true
   */
  overlay?: boolean;
  /** Text that appears in the overlay */
  overlayText?: string;
  /** Text that appears in the overlay when set in error state */
  errorOverlayText?: string;
  /**
   * Allows multiple files to be uploaded at once
   * @default true
   */
  allowMultiple?: boolean;
  /** Sets a disabled state */
  disabled?: boolean;
  /** The child elements to render in the dropzone. */
  children?: string | React.ReactNode;
  /** Allows a file to be dropped anywhere on the page */
  dropOnPage?: boolean;
  /** Sets the default file dialog state */
  openFileDialog?: boolean;
  /** Allows child content to adjust height */
  variableHeight?: boolean;
  /** Adds custom validations */
  customValidator?(file: File): boolean;
  /** Callback triggered on click */
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  /** Callback triggered on any file drop */
  onDrop?(files: File[], acceptedFiles: File[], rejectedFiles: File[]): void;
  /** Callback triggered when at least one of the files dropped was accepted */
  onDropAccepted?(acceptedFiles: File[]): void;
  /** Callback triggered when at least one of the files dropped was rejected */
  onDropRejected?(rejectedFiles: File[]): void;
  /** Callback triggered when one or more files are dragging over the drag area */
  onDragOver?(): void;
  /** Callback triggered when one or more files entered the drag area */
  onDragEnter?(): void;
  /** Callback triggered when one or more files left the drag area */
  onDragLeave?(): void;
  /** Callback triggered when the file dialog is canceled */
  onFileDialogClose?(): void;
}

// TypeScript can't generate types that correctly infer the typing of
// subcomponents so explicitly state the subcomponents in the type definition.
// Letting this be implicit works in this project but fails in projects that use
// generated *.d.ts files.

export const DropZone: React.FunctionComponent<DropZoneProps> & {
  FileUpload: typeof FileUpload;
} = function DropZone({
  dropOnPage,
  label,
  labelAction,
  labelHidden,
  name,
  children,
  disabled = false,
  outline = true,
  accept,
  active,
  overlay = true,
  allowMultiple = defaultAllowMultiple,
  overlayText,
  errorOverlayText,
  id: idProp,
  type = 'file',
  onClick,
  error,
  openFileDialog,
  variableHeight,
  onFileDialogClose,
  customValidator,
  onDrop,
  onDropAccepted,
  onDropRejected,
  onDragEnter,
  onDragOver,
  onDragLeave,
}: DropZoneProps) {
  const node = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragTargets = useRef<EventTarget[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const adjustSize = useCallback(
    debounce(
      () => {
        if (!node.current) {
          return;
        }
        if (variableHeight) {
          setMeasuring(false);
          return;
        }

        let size = 'large';
        const width = node.current.getBoundingClientRect().width;

        if (width < 100) {
          size = 'small';
        } else if (width < 160) {
          size = 'medium';
        }

        setSize(size);
        measuring && setMeasuring(false);
      },
      50,
      {trailing: true},
    ),
    [],
  );

  const [dragging, setDragging] = useState(false);
  const [internalError, setInternalError] = useState(false);
  const {
    value: focused,
    setTrue: handleFocus,
    setFalse: handleBlur,
  } = useToggle(false);
  const [size, setSize] = useState('large');
  const [measuring, setMeasuring] = useState(true);

  const i18n = useI18n();

  const getValidatedFiles = useCallback(
    (files: File[] | DataTransferItem[]) => {
      const acceptedFiles: File[] = [];
      const rejectedFiles: File[] = [];

      Array.from(files as File[]).forEach((file: File) => {
        !fileAccepted(file, accept) ||
        (customValidator && !customValidator(file))
          ? rejectedFiles.push(file)
          : acceptedFiles.push(file);
      });

      if (!allowMultiple) {
        acceptedFiles.splice(1, acceptedFiles.length);
        rejectedFiles.push(...acceptedFiles.slice(1));
      }

      return {files, acceptedFiles, rejectedFiles};
    },
    [accept, allowMultiple, customValidator],
  );

  const handleDrop = useCallback(
    (event: DropZoneEvent) => {
      stopEvent(event);
      if (disabled) return;

      const fileList = getDataTransferFiles(event);

      const {files, acceptedFiles, rejectedFiles} = getValidatedFiles(fileList);

      dragTargets.current = [];

      setDragging(false);
      setInternalError(rejectedFiles.length > 0);

      onDrop && onDrop(files as File[], acceptedFiles, rejectedFiles);
      onDropAccepted && acceptedFiles.length && onDropAccepted(acceptedFiles);
      onDropRejected && rejectedFiles.length && onDropRejected(rejectedFiles);

      if (!(event.target && 'value' in event.target)) return;
    },
    [disabled, getValidatedFiles, onDrop, onDropAccepted, onDropRejected],
  );

  const handleDragEnter = useCallback(
    (event: DropZoneEvent) => {
      stopEvent(event);
      if (disabled) return;

      const fileList = getDataTransferFiles(event);

      if (event.target && !dragTargets.current.includes(event.target)) {
        dragTargets.current.push(event.target);
      }

      if (dragging) return;

      const {rejectedFiles} = getValidatedFiles(fileList);

      setDragging(true);
      setInternalError(rejectedFiles.length > 0);

      onDragEnter && onDragEnter();
    },
    [disabled, dragging, getValidatedFiles, onDragEnter],
  );

  const handleDragOver = useCallback(
    (event: DropZoneEvent) => {
      stopEvent(event);
      if (disabled) return;
      onDragOver && onDragOver();
    },
    [disabled, onDragOver],
  );

  const document = isServer
    ? null
    : node.current?.ownerDocument || globalThis.document;

  const handleDragLeave = useCallback(
    (event: DropZoneEvent) => {
      event.preventDefault();

      if (disabled) return;

      dragTargets.current = dragTargets.current.filter((el: Node) => {
        const compareNode = dropOnPage && !isServer ? document : node.current;

        return el !== event.target && compareNode && compareNode.contains(el);
      });

      if (dragTargets.current.length > 0) return;

      setDragging(false);
      setInternalError(false);

      onDragLeave && onDragLeave();
    },
    [disabled, onDragLeave, dropOnPage, document],
  );

  const dropNode = dropOnPage && !isServer ? document : node.current;

  useEventListener('drop', handleDrop, dropNode);
  useEventListener('dragover', handleDragOver, dropNode);
  useEventListener('dragenter', handleDragEnter, dropNode);
  useEventListener('dragleave', handleDragLeave, dropNode);

  useComponentDidMount(() => {
    adjustSize();
  });

  useEffect(() => {
    if (!node.current) {
      return;
    }

    const observer = new ResizeObserver(adjustSize);
    observer.observe(node.current);

    return () => {
      observer.disconnect();
    };
  }, [adjustSize]);

  const uniqId = useId();
  const id = idProp ?? uniqId;

  const typeSuffix = capitalize(type);
  const allowMultipleKey = createAllowMultipleKey(allowMultiple);

  const overlayTextWithDefault =
    overlayText === undefined
      ? i18n.translate(
          `Polaris.DropZone.${allowMultipleKey}.overlayText${typeSuffix}`,
        )
      : overlayText;

  const errorOverlayTextWithDefault =
    errorOverlayText === undefined
      ? i18n.translate(`Polaris.DropZone.errorOverlayText${typeSuffix}`)
      : errorOverlayText;

  const labelValue =
    label ||
    i18n.translate(`Polaris.DropZone.${allowMultipleKey}.label${typeSuffix}`);
  const labelHiddenValue = label ? labelHidden : true;

  const classes = classNames(
    styles.DropZone,
    outline && styles.hasOutline,
    !outline && styles.noOutline,
    focused && styles.focused,
    (active || dragging) && styles.isDragging,
    disabled && styles.isDisabled,
    (internalError || error) && styles.hasError,
    !variableHeight && styles[variationName('size', size)],
    measuring && styles.measuring,
  );

  const dragOverlay =
    (active || dragging) &&
    !internalError &&
    !error &&
    overlay &&
    overlayMarkup(UploadIcon, overlayTextWithDefault);

  const dragErrorOverlay =
    dragging &&
    (internalError || error) &&
    overlayMarkup(AlertCircleIcon, errorOverlayTextWithDefault, 'critical');

  const context = useMemo(
    () => ({
      disabled,
      focused,
      size,
      type: type || 'file',
      measuring,
      allowMultiple,
    }),
    [disabled, focused, measuring, size, type, allowMultiple],
  );

  const open = useCallback(() => {
    if (!inputRef.current) return;
    inputRef.current.click();
  }, [inputRef]);

  const triggerFileDialog = useCallback(() => {
    open();
    onFileDialogClose?.();
  }, [open, onFileDialogClose]);

  function overlayMarkup(
    icon: FunctionComponent,
    text: string,
    color?: 'critical',
  ) {
    return (
      <div className={styles.Overlay}>
        <BlockStack gap="200" inlineAlign="center">
          {size === 'small' && <Icon source={icon} tone={color} />}
          {(size === 'medium' || size === 'large') && (
            <Text variant="bodySm" as="p" fontWeight="bold">
              {text}
            </Text>
          )}
        </BlockStack>
      </div>
    );
  }

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    if (disabled) return;

    return onClick ? onClick(event) : open();
  }

  useEffect(() => {
    if (openFileDialog) triggerFileDialog();
  }, [openFileDialog, triggerFileDialog]);

  return (
    <DropZoneContext.Provider value={context}>
      <Labelled
        id={id}
        label={labelValue}
        action={labelAction}
        labelHidden={labelHiddenValue}
      >
        <div
          ref={node}
          className={classes}
          aria-disabled={disabled}
          onClick={handleClick}
          onDragStart={stopEvent}
        >
          {dragOverlay}
          {dragErrorOverlay}
          <Text variant="bodySm" as="span" visuallyHidden>
            <input
              id={id}
              accept={accept}
              disabled={disabled}
              multiple={allowMultiple}
              name={name}
              onChange={handleDrop}
              onFocus={handleFocus}
              onBlur={handleBlur}
              type="file"
              ref={inputRef}
              autoComplete="off"
            />
          </Text>
          <div className={styles.Container}>{children}</div>
        </div>
      </Labelled>
    </DropZoneContext.Provider>
  );
};

function stopEvent(event: DropZoneEvent | React.DragEvent<HTMLDivElement>) {
  event.preventDefault();
  event.stopPropagation();
}

DropZone.FileUpload = FileUpload;
