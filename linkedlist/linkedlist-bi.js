class Node {
  constructor(el) {
    this.element = el;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  findLast() {
    let currNode = this.head;
    while (currNode !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newEl, item) {
    const newNode = new Node(newEl);
    const current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
  }

  remove(item) {
    const currNode = this.find(item);
    if (currNode !== null) {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
    }
  }

  display() {
    let currNode = this.head;
    while (currNode.next !== null) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
}
module.exports = LinkedList;
