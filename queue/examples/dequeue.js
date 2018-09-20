class Dequeue {
  constructor() {
    this.datastore = [];
  }

  enqueueBack(el) {
    this.datastore.push(el);
  }
  dequeueFront() {
    return this.datastore.shift();
  }

  enqueueFront(el) {
    this.datastore.unshift(el);
  }
  dequeueBack() {
    return this.datastore.pop();
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
const assert = require('assert');
function testEnqueue() {
  const dequeue = new Dequeue();
  dequeue.enqueueBack('a');
  dequeue.enqueueBack('b');
  assert(dequeue.front() === 'a');
  assert(dequeue.back() === 'b');

  dequeue.enqueueFront('c');
  dequeue.enqueueFront('d');
  assert(dequeue.front() === 'd');
}
function testDequeue() {
  const dequeue = new Dequeue();
  dequeue.enqueueBack('a');
  dequeue.enqueueBack('b');
  dequeue.enqueueBack('c');

  dequeue.dequeueFront();
  assert(dequeue.front() === 'b');

  dequeue.dequeueBack();
  assert(dequeue.front() === 'b');
}

testEnqueue();
testDequeue();

module.exports = Dequeue;
