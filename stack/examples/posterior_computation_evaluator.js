const Stack = require('../stack');

function getSyntaxStack(syntaxStr) {
  const stack = new Stack();
  const syntaxArr = syntaxStr.split(' ')
  while (syntaxArr.length > 0) {
    stack.push(syntaxArr.pop());
  }
  return stack;
}

function getOperationResult(op1, op2, operator) {
  const operatorMap = new Map()
    .set('+', op1 + op2)
    .set('-', op1 - op2)
    .set('*', op1 * op2)
    .set('/', op1 / op2);
  return operatorMap.get(operator) || null;
}

function calc(syntaxStr) {
  const syntaxStack = getSyntaxStack(syntaxStr);
  let calcArr = [];
  do {
    const poppedVal = syntaxStack.pop();
    if (Number.isNaN(Number(poppedVal)) === false) {
      calcArr.push(Number(poppedVal));  
    } else {
      const [op1, op2] = calcArr; 
      const result = getOperationResult(op1, op2, poppedVal);
      syntaxStack.push(result);
      calcArr = [];
    }
  } while ((syntaxStack.length() === 1 && typeof syntaxStack.peek() === 'number') === false);
  return syntaxStack.pop();
}
const syntaxStr = '1 2 +';
console.log(calc(syntaxStr));
