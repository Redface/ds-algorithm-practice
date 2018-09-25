const assert = require('assert');
const Dequeue = require ('./dequeue');

function isPalindrome(str) {
  const dequeue = new Dequeue();
  const newStr = str.split('');
  do {
    dequeue.enqueueBack(newStr.pop());
  } while (newStr.length > 0);
  return str === dequeue.toString().join('');
}
assert(isPalindrome('rar'));
