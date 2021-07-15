import {isServer} from '../target';

export const SCROLL_LOCKING_ATTRIBUTE = 'data-lock-scrolling';

let scrollPosition = 0;

export class ScrollLockManager {
  private scrollLocks = 0;
  private locked = false;

  registerScrollLock() {
    this.scrollLocks += 1;
    this.handleScrollLocking();
  }

  unregisterScrollLock() {
    this.scrollLocks -= 1;
    this.handleScrollLocking();
  }

  handleScrollLocking() {
    if (isServer) return;

    const {scrollLocks} = this;
    const {body} = document;

    if (scrollLocks === 0) {
      body.removeAttribute(SCROLL_LOCKING_ATTRIBUTE);
      window.scroll(0, scrollPosition);
      this.locked = false;
    } else if (scrollLocks > 0 && !this.locked) {
      scrollPosition = window.pageYOffset;
      body.setAttribute(SCROLL_LOCKING_ATTRIBUTE, '');

      this.locked = true;
    }
  }

  resetScrollPosition() {
    scrollPosition = 0;
  }
}
