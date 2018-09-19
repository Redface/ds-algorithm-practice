const Stack = require('../stack');

const bracketDict = { 
  '(': ')', 
  ')': '(', 
  '{': '}', 
  '}': '{', 
  '[': ']', 
  ']': '[', 
};
const calcSyntax = '2.3 + 23 / 12 + (3.14159 * .24';

function getBracketStack(calcSyntax) {
  const stack = new Stack();
  const bracketKeys = Object.keys(bracketDict);
  calcSyntax
    .trim()
    .split('')
    .forEach(str => {
      if (bracketDict[str]) stack.push(str)
    });
  return stack;
}
function validateCalcBracket(calcSyntax) {
  const bracketStack = getBracketStack(calcSyntax);
  const comparisonStack = new Stack();

  do {
    const comparator = bracketStack.pop();
    comparator === bracketDict[comparisonStack.peek()] ? comparisonStack.pop() : comparisonStack.push(comparator);
  } while(bracketStack.length() > 0);
  
  return comparisonStack.length() === 0;
}

console.log(validateCalcBracket(calcSyntax));
