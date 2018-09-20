const Stack = require('../stack');

const RED = 'red', YELLOW = 'yellow', WHITE = 'white';

function filterCandy(pezDispenserStack, color) {
  const reversedStack = new Stack();
  do {
    const poppedColor = pezDispenserStack.peek();
    poppedColor === color ? pezDispenserStack.pop() : reversedStack.push(pezDispenserStack.pop());
  } while(pezDispenserStack.length() > 0);

  do {
    pezDispenserStack.push(reversedStack.pop());
  } while(reversedStack.length() > 0);
  return pezDispenserStack.getStack();
}
const pezDispenserStack = new Stack();
pezDispenserStack.push(RED);
pezDispenserStack.push(YELLOW);
pezDispenserStack.push(WHITE);
pezDispenserStack.push(WHITE);
pezDispenserStack.push(YELLOW);
console.log(filterCandy(pezDispenserStack, YELLOW));
