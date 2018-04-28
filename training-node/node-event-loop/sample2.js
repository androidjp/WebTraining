console.log('---------------------------')
console.log('例子二')
console.log('---------------------------')
const fs = require('fs');

const timeoutScheduled = Date.now();
// 异步任务一：3ms 后执行的定时器
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms`);
},3);

// 异步任务二：文件读取后，有一个 200ms 的回调函数
fs.readFile('./nodeTimer.md', () => {
  const startCallback = Date.now();
  while (Date.now() - startCallback < 200) {
    // 什么也不做
  }
});
/// 试试改一下setTimeout()的延时
