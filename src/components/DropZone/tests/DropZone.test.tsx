import React from 'react';
import {act} from 'react-dom/test-utils';
import {clock} from '@shopify/jest-dom-mocks';
import {Label, Labelled, DisplayText, Caption} from 'components';
// eslint-disable-next-line no-restricted-imports
import {mountWithAppProvider, ReactWrapper} from 'test-utilities/legacy';
import {mountWithApp} from 'test-utilities';
import {DropZone} from '../DropZone';
import {DropZoneContext} from '../context';

const files = [
  {
    name: 'jpeg file',
    type: 'image/jpeg',
  },
  {
    name: 'svg file',
    type: 'image/svg',
  },
];
const duplicateFiles = [
  {
    name: 'jpegs files',
    type: 'image/jpeg',
  },
  {
    name: 'svg file',
    type: 'image/svg',
  },
];
const acceptedFiles = [files[0]];
const rejectedFiles = [files[1]];
const origGetBoundingClientRect = Element.prototype.getBoundingClientRect;
const origClick = HTMLElement.prototype.click;
const widths = {
  small: 99,
  medium: 159,
  large: 299,
  extraLarge: 1024,
};

describe('<DropZone />', () => {
  let spy: jest.Mock;

  beforeEach(() => {
    spy = jest.fn();
    clock.mock();
  });

  afterEach(() => {
    clock.restore();
    HTMLElement.prototype.click = origClick;
  });

  afterAll(() => {
    Element.prototype.getBoundingClientRect = origGetBoundingClientRect;
  });

  it('calls the onDrop callback when a drop event is fired', () => {
    const dropZone = mountWithAppProvider(<DropZone onDrop={spy} />);
    fireEvent({element: dropZone});
    expect(spy).toHaveBeenCalledWith(files, files, []);
  });

  it('calls the onDrop callback when a drop event is fired on document twice when a duplicate file is added consecutively', () => {
    const dropZone = mountWithAppProvider(<DropZone onDrop={spy} />);
    fireEvent({element: dropZone});
    expect(spy).toHaveBeenCalledWith(files, files, []);

    fireEvent({element: dropZone, testFiles: duplicateFiles});
    expect(spy).toHaveBeenCalledWith(duplicateFiles, duplicateFiles, []);
  });

  it('calls the onDrop callback with files when a drop event is fired on document', () => {
    mountWithAppProvider(<DropZone dropOnPage onDrop={spy} />);
    const event = createEvent('drop', files);
    act(() => {
      document.dispatchEvent(event);
    });
    expect(spy).toHaveBeenCalledWith(files, files, []);
  });

  it('calls the onDrop callback with files, acceptedFiles, and rejectedFiles when it accepts only jpeg', () => {
    const dropZone = mountWithAppProvider(
      <DropZone onDrop={spy} accept="image/jpeg" />,
    );
    fireEvent({element: dropZone});
    expect(spy).toHaveBeenCalledWith(files, acceptedFiles, rejectedFiles);
  });

  it('calls the onDropAccepted callback with acceptedFiles when it accepts only jpeg', () => {
    const dropZone = mountWithAppProvider(
      <DropZone onDropAccepted={spy} accept="image/jpeg" />,
    );
    fireEvent({element: dropZone});
    expect(spy).toHaveBeenCalledWith(acceptedFiles);
  });

  it('calls the onDropRejected callback with rejectedFiles when it accepts only jpeg', () => {
    const dropZone = mountWithAppProvider(
      <DropZone onDropRejected={spy} accept="image/jpeg" />,
    );
    fireEvent({element: dropZone});
    expect(spy).toHaveBeenCalledWith(rejectedFiles);
  });

  it('calls the onDragEnter callback when a dragenter event is fired', () => {
    const dropZone = mountWithAppProvider(<DropZone onDragEnter={spy} />);
    fireEvent({element: dropZone, eventType: 'dragenter'});
    expect(spy).toHaveBeenCalled();
  });

  it('calls the onDragOver callback when a dragover event is fired', () => {
    const dropZone = mountWithAppProvider(<DropZone onDragOver={spy} />);
    fireEvent({element: dropZone, eventType: 'dragover'});
    expect(spy).toHaveBeenCalled();
  });

  it('calls the onDragLeave callback when a dragleave event is fired', () => {
    const dropZone = mountWithAppProvider(<DropZone onDragLeave={spy} />);
    fireEvent({element: dropZone, eventType: 'dragleave'});
    expect(spy).toHaveBeenCalled();
  });

  it('validates files, acceptedFiles, and rejectedFiles when customValidator property is added', () => {
    const customValidator = (file: File) => {
      return file.type === 'image/jpeg';
    };
    const dropZone = mountWithAppProvider(
      <DropZone onDrop={spy} customValidator={customValidator} />,
    );
    fireEvent({element: dropZone});
    expect(spy).toHaveBeenCalledWith(files, acceptedFiles, rejectedFiles);
  });

  it('does not call any callbacks when disabled', () => {
    const dropZone = mountWithAppProvider(
      <DropZone
        disabled
        onDrop={spy}
        onDropAccepted={spy}
        onDropRejected={spy}
        onDragEnter={spy}
        onDragLeave={spy}
        onDragOver={spy}
      />,
    );
    fireEvent({element: dropZone, spy});
    expect(spy).not.toHaveBeenCalled();
    fireEvent({element: dropZone, eventType: 'dragenter', spy});
    expect(spy).not.toHaveBeenCalled();
    fireEvent({element: dropZone, eventType: 'dragleave', spy});
    expect(spy).not.toHaveBeenCalled();
    fireEvent({element: dropZone, eventType: 'dragover', spy});
    expect(spy).not.toHaveBeenCalled();
  });

  it('calls callbacks when not allowed multiple and a replacement file is uploaded', () => {
    const dropZone = mountWithAppProvider(
      <DropZone
        allowMultiple={false}
        onDrop={spy}
        onDragEnter={spy}
        onDragLeave={spy}
        onDragOver={spy}
        accept="image/jpeg"
      />,
    );

    // Initial event to populate zone with data (should succeed)
    fireEvent({element: dropZone, spy});
    expect(spy).toHaveBeenCalledWith(files, acceptedFiles, rejectedFiles);

    // Attempt to replace the current file
    fireEvent({element: dropZone, spy});
    expect(spy).toHaveBeenCalledWith(files, acceptedFiles, rejectedFiles);
    fireEvent({element: dropZone, eventType: 'dragenter', spy});
    expect(spy).toHaveBeenCalled();
    fireEvent({element: dropZone, eventType: 'dragleave', spy});
    expect(spy).toHaveBeenCalled();
    fireEvent({element: dropZone, eventType: 'dragover', spy});
    expect(spy).toHaveBeenCalled();
  });

  it('renders <Labelled /> when `label` is provided', () => {
    const labelText = 'My DropZone label';
    const dropZone = mountWithAppProvider(<DropZone label={labelText} />);
    const labelled = dropZone.find(Labelled);
    expect(labelled.prop('label')).toStrictEqual(labelText);
  });

  it('renders a <Label /> with matching id for the file input', () => {
    const id = 'Test';
    const dropZone = mountWithAppProvider(
      <DropZone id={id} label="My DropZone label" />,
    );
    const label = dropZone.find(Label);
    expect(label.prop('id')).toStrictEqual(id);
    const input = dropZone.find('input[type="file"]');
    expect(input.prop('id')).toStrictEqual(id);
  });

  it('renders a disabled input when the disabled prop is true', () => {
    const dropZone = mountWithAppProvider(<DropZone disabled />);
    expect(dropZone.find('input[type="file"]').prop('disabled')).toBe(true);
  });

  describe('onClick', () => {
    it('calls the onClick when clicking the dropzone if one is provided', () => {
      const spy = jest.fn();
      const dropZone = mountWithAppProvider(
        <DropZone label="My DropZone label" onClick={spy} />,
      );

      dropZone
        .find('div')
        .at(4)
        .simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('does not calls the onClick when the dropzone is disabled', () => {
      const spy = jest.fn();
      const dropZone = mountWithAppProvider(
        <DropZone disabled label="My DropZone label" onClick={spy} />,
      );

      dropZone
        .find('div')
        .at(4)
        .simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });

    it('triggers the file input click event if no onClick is provided', () => {
      const dropZone = mountWithApp(<DropZone label="My DropZone label" />);

      const fileInput = dropZone.find('input')!.domNode;

      const spy = jest.spyOn(fileInput as HTMLElement, 'click');
      dropZone.find('div', {'aria-disabled': false})!.trigger('onClick');

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('labelAction', () => {
    it("passes 'labelAction' to the Labelled options", () => {
      const callbackDropZone = {
        onAction: () => {},
      };
      const dropZone = mountWithAppProvider(
        <DropZone label="My DropZone label" labelAction={callbackDropZone} />,
      );
      expect(dropZone.find(Labelled).props()).toHaveProperty(
        'action',
        callbackDropZone,
      );
    });
  });

  describe('labelHidden', () => {
    it("passes 'labelHidden' to the Labelled options", () => {
      const dropZone = mountWithAppProvider(
        <DropZone label="My DropZone label" labelHidden />,
      );
      expect(dropZone.find(Labelled).props()).toHaveProperty(
        'labelHidden',
        true,
      );
    });
  });

  describe('overlayText', () => {
    const overlayText = 'overlay text';
    it('does not render the overlayText on small screens', () => {
      setBoundingClientRect('small');
      const dropZone = mountWithAppProvider(
        <DropZone overlayText={overlayText} />,
      );
      fireEvent({element: dropZone, eventType: 'dragenter'});
      const displayText = dropZone.find(DisplayText);
      const caption = dropZone.find(Caption);
      expect(displayText).toHaveLength(0);
      expect(caption).toHaveLength(0);
    });

    it('renders a Caption containing the overlayText on medium screens', () => {
      setBoundingClientRect('medium');
      const dropZone = mountWithAppProvider(
        <DropZone overlayText={overlayText} />,
      );
      fireEvent({element: dropZone, eventType: 'dragenter'});
      const captionText = dropZone.find(Caption);
      expect(captionText.contains(overlayText)).toBe(true);
    });

    it('renders a Caption containing the overlayText on large screens', () => {
      setBoundingClientRect('large');
      const dropZone = mountWithAppProvider(
        <DropZone overlayText={overlayText} />,
      );
      fireEvent({element: dropZone, eventType: 'dragenter'});
      const captionText = dropZone.find(Caption);
      expect(captionText.contains(overlayText)).toBe(true);
    });

    it('renders a DisplayText containing the overlayText on extra-large screens', () => {
      setBoundingClientRect('extraLarge');
      const dropZone = mountWithAppProvider(
        <DropZone overlayText={overlayText} />,
      );
      fireEvent({element: dropZone, eventType: 'dragenter'});
      const displayText = dropZone.find(DisplayText);
      expect(displayText.contains(overlayText)).toBe(true);
    });
  });

  describe('errorOverlayText ', () => {
    const errorOverlayText = "can't drop this";
    it("doesn't render the overlayText on small screens", () => {
      setBoundingClientRect('small');
      const dropZone = mountWithAppProvider(
        <DropZone errorOverlayText={errorOverlayText} accept="image/gif" />,
      );
      fireEvent({element: dropZone, eventType: 'dragenter'});
      const displayText = dropZone.find(DisplayText);
      const caption = dropZone.find(Caption);
      expect(displayText).toHaveLength(0);
      expect(caption).toHaveLength(0);
    });

    it('renders a Caption containing the overlayText on medium screens', () => {
      setBoundingClientRect('medium');
      const dropZone = mountWithAppProvider(
        <DropZone errorOverlayText={errorOverlayText} accept="image/gif" />,
      );
      fireEvent({element: dropZone, eventType: 'dragenter'});
      const captionText = dropZone.find(Caption);
      expect(captionText.contains(errorOverlayText)).toBe(true);
    });

    it('renders a Caption containing the overlayText on large screens', () => {
      setBoundingClientRect('large');
      const dropZone = mountWithAppProvider(
        <DropZone errorOverlayText={errorOverlayText} accept="image/gif" />,
      );
      fireEvent({element: dropZone, eventType: 'dragenter'});
      const captionText = dropZone.find(Caption);
      expect(captionText.contains(errorOverlayText)).toBe(true);
    });

    it('renders a DisplayText containing the overlayText on extra-large screens', () => {
      setBoundingClientRect('extraLarge');
      const dropZone = mountWithAppProvider(
        <DropZone errorOverlayText={errorOverlayText} accept="image/gif" />,
      );
      fireEvent({element: dropZone, eventType: 'dragenter'});
      const displayText = dropZone.find(DisplayText);
      expect(displayText.contains(errorOverlayText)).toBe(true);
    });
  });

  describe('onFileDialogClose', () => {
    it('triggers onFileDialogClose when openFileDialog is true', () => {
      const spy = jest.fn();
      mountWithApp(
        <DropZone
          label="My DropZone label"
          openFileDialog
          onFileDialogClose={spy}
        />,
      );
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('context', () => {
    it('sets type from props on context', () => {
      const type = 'image';

      function Component() {
        return (
          <DropZone type="image">
            <DropZoneContext.Consumer>
              {(ctx) => {
                return type === ctx.type ? <div /> : null;
              }}
            </DropZoneContext.Consumer>
          </DropZone>
        );
      }

      const component = mountWithApp(<Component />);
      expect(component).toContainReactComponent('div');
    });

    it('sets focused to true when the input file is focused', () => {
      const dropZone = mountWithAppProvider(
        <DropZone>
          <DropZoneContext.Consumer>
            {({focused}) => {
              return focused ? <div id="focused" /> : null;
            }}
          </DropZoneContext.Consumer>
        </DropZone>,
      );
      const fileInput = dropZone.find(`input[type="file"]`);
      fileInput.simulate('focus');
      expect(dropZone.find('#focused')).toHaveLength(1);
    });

    it('sets focused to false when the input file is blur', () => {
      const dropZone = mountWithAppProvider(
        <DropZone>
          <DropZoneContext.Consumer>
            {({focused}) => {
              return focused ? null : <div id="blurred" />;
            }}
          </DropZoneContext.Consumer>
        </DropZone>,
      );
      const fileInput = dropZone.find(`input[type="file"]`);
      fileInput.simulate('blur');
      expect(dropZone.find('#blurred')).toHaveLength(1);
    });

    it('sets disabled to true when the dropzone is disabled', () => {
      const dropZone = mountWithAppProvider(
        <DropZone disabled>
          <DropZoneContext.Consumer>
            {({disabled}) => {
              return disabled ? <div id="disabled" /> : null;
            }}
          </DropZoneContext.Consumer>
        </DropZone>,
      );

      expect(dropZone.find('#disabled')).toHaveLength(1);
    });

    it('sets the default type to file if not specified', () => {
      const dropZone = mountWithAppProvider(
        <DropZone>
          <DropZoneContext.Consumer>
            {({type}) => {
              return type === 'file' ? <div id="file" /> : null;
            }}
          </DropZoneContext.Consumer>
        </DropZone>,
      );

      expect(dropZone.find('#file')).toHaveLength(1);
    });
  });

  describe('lifecycle', () => {
    it('triggers the file input dialog on mount when openFileDialog is true', () => {
      const spy = jest.spyOn(HTMLElement.prototype, 'click');

      mountWithApp(<DropZone label="My DropZone label" openFileDialog />);
      expect(spy).toHaveBeenCalled();
    });

    it('updates safely', () => {
      const dropZone = mountWithAppProvider(<DropZone />);

      expect(() => {
        dropZone.setProps({openFileDialog: true});
      }).not.toThrow();
    });

    it('unmounts safely', () => {
      const dropZone = mountWithAppProvider(<DropZone />);

      expect(() => {
        dropZone.unmount();
      }).not.toThrow();
    });
  });

  describe('newDesignLanguage', () => {
    it('adds a newDesignLanguage class when newDesignLanguage is enabled', () => {
      const dropZone = mountWithApp(<DropZone />, {
        features: {newDesignLanguage: true},
      });

      act(() => {
        dropZone
          .find('div', {'aria-disabled': false})!
          .domNode!.dispatchEvent(new Event('dragenter'));
      });

      dropZone.forceUpdate();

      expect(dropZone).toContainReactComponent('div', {
        className:
          'DropZone hasOutline isDragging newDesignLanguage sizeExtraLarge measuring',
      });
      expect(dropZone).toContainReactComponent('div', {
        className: 'Overlay newDesignLanguage',
      });
    });

    it('does not add a newDesignLanguage class when newDesignLanguage is disabled', () => {
      const dropZone = mountWithApp(<DropZone />, {
        features: {newDesignLanguage: false},
      });
      act(() => {
        dropZone
          .find('div', {'aria-disabled': false})!
          .domNode!.dispatchEvent(new Event('dragenter'));
      });

      dropZone.forceUpdate();

      expect(dropZone).not.toContainReactComponent('div', {
        className:
          'DropZone hasOutline isDragging newDesignLanguage sizeExtraLarge measuring',
      });
      expect(dropZone).not.toContainReactComponent('div', {
        className: 'Overlay newDesignLanguage',
      });
    });
  });
});

function createEvent(name: string, files: any) {
  const evt = new CustomEvent(name);
  Object.defineProperty(evt, 'dataTransfer', {
    enumerable: true,
    value: {files},
  });
  return evt;
}

function setBoundingClientRect(size: keyof typeof widths) {
  jest
    .spyOn(Element.prototype, 'getBoundingClientRect')
    .mockImplementation(() => {
      return {
        width: widths[size],
        height: 100,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON() {},
      };
    });
}

function fireEvent({
  element,
  eventType = 'drop',
  testFiles = files,
  spy,
}: {
  element: ReactWrapper;
  eventType?: string;
  spy?: jest.Mock;
  testFiles?: object[];
}) {
  act(() => {
    if (spy) {
      spy.mockReset();
    }
    const event = createEvent(eventType, testFiles);

    element
      .find('div')
      .at(4)
      .getDOMNode()
      .dispatchEvent(event);

    if (eventType === 'dragenter') {
      clock.tick(50);
    }
  });
  element.update();
}
