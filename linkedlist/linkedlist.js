class Node {
  constructor(el) {
    this.element = el;
    this.next = null;
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

  findPrevious(item) {
    let currNode = this.head;
    while (currNode.next !== null && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newEl, item) {
    const newNode = new Node(newEl);
    const current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  remove(item) {
    const prevNode = this.findPrevious(item);
    if (prevNode.next !== null) prevNode.next = prevNode.next.next;
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
