module.exports =  class Stack {

  constructor() {
    this.datastore = [];
  }

  push(val) {
    this.datastore.push(val);
  }

  pop() {
    return this.datastore.pop();
  }

  peek() {
    return this.datastore[this.length() - 1];
  }

  length() {
    return this.datastore.length;
  }

  clear() {
    this.datastore = [];
  }
  getStack() {
    return this.datastore;
  }
};