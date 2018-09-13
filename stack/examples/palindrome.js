const Stack = require('../stack');

function isPalindrome(str) {
  const stack = new Stack();
  let newStr = str.split('');
  do {
    stack.push(newStr.pop())
  } while (newStr.length > 0);
  return str === stack.getStack().join('');
}
