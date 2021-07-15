export function onSpaceOrEnter(keyCode: number, toDo: Function) {
  if (keyCode === 13 || keyCode === 32) {
    toDo();
  }
}
