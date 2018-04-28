console.log('---------------------------')
console.log('例子三')
console.log('---------------------------')
const fs = require('fs');

fs.readFile('./nodeTimer.md', () => {
  setTimeout(() => console.log(1));
  setImmediate(() => console.log(2));
});
///以上这个例子，说明，setTimeout已经去了次轮再次轮的循环