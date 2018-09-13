const Stack  = require('../stack');

function mulBase(num, base) {
  const stack = new Stack();
  let newNum = num;
  do {
    stack.push(newNum % base);
    newNum = Math.floor(newNum / base);
  } while (newNum > 0);

  console.log(stack.datastore);
  return stack.getStack().join('');
}
console.log(mulBase(5, 2));
