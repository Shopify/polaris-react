import type {Descriptor, SectionDescriptor} from 'types';

export function isSection(arr: Descriptor[]): arr is SectionDescriptor[] {
  return (
    typeof arr[0] === 'object' &&
    Object.prototype.hasOwnProperty.call(arr[0], 'options')
  );
}
