module.exports = class Queue {
  constructor() {
    this.datastore = [];
  }

  enqueue(el) {
    this.datastore.push(el);
  }

  dequeue() {
    return this.datastore.shift();
  }

  front() {
    return this.datastore[0];
  }

  back() {
    return this.datastore[this.datastore.length - 1];
  }

  toString() {
    return this.datastore;
  }

  empty() {
    this.datastore = [];
  }
}
