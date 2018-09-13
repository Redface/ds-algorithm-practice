export default class List {

  constructor() {
    this.datastore = [];
    this.currPos = 0;
  }

  append(el) {
    this.datastore[this.currPos++] = el;
  }

  remove(el) {
    const foundAt = this.findIndex(el);
    if (foundAt === -1) return false;
    this.datastore.splice(foundAt, 1);
    return true;
  }

  findIndex(el) {
    return this.datastore.indexOf(el);
  }

  insert(el, afterEl) {
    const insertPos = this.findIndex(afterEl);
    if (insertPos === -1) return false;
    this.datastore.splice(insertPos + 1, 0, el);
    return true;
  }

  clear() {
    this.datastore = [];
    this.currPos = 0;
  }

  moveToFront() {
    this.currPos = 0;
  }

  moveToEnd() {
    this.currPos = this.length() - 1;
  }

  moveToPrev() {
    if (this.currPos > 0) ++this.currPos;
  }

  moveToNext() {
    if (this.currPos < this.length()) ++this.currPos;
  }

  moveToPosition(index) {
    this.currPos = index;
  }

  getElement() {
    return this.datastore[this.currPos];
  }

  getCurrPos() {
    return this.currPos;
  }

  length() {
    return this.datastore.length;
  }

  toString() {
    return this.datastore;
  }
}