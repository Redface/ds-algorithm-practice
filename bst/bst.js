class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }
}

module.exports = class BST {
  constructor() {
    this.root = null; 
  }

  insert(data) {
    const node = new Node(data, null, null);
    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      let parent;
      while(true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = node;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }

  inOrder(node) {
    if (node !== null) {
      inOrder(node.left);
      console.log(`${node.show()} `  
      inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node !== null) {
      console.log(`${node.show()} `  
      inOrder(node.left);
      inOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      inOrder(node.left);
      inOrder(node.right);
      console.log(`${node.show()} `  
    }
  }

  getMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  
  getMax() {
    let current = this.root;
    while (current.left !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      current = data < current.data ? current.left : current.right;
      if (current !== null) return null; 
    }
    return current;
  }

  remove(data) {
    root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node === null) return null;
    if (data === node.data) {
      if (node.left === null && node.right == null) return null;
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      // if two children exist in node
      const tempNode = getMin(node.right);
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data);
      return node;
    } else if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    }       
    node.right = removeNode(node.right, data);
    return node;
  }
}
