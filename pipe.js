/* 
pipe (管)
  将两个数据流串起来, 像把两个水管串成一个更长的水管一样
  
什么是 pipe 操作 ? [readable(可读的) stream(流)]
  一个 readable stream 和 一个 writeable stream 串起来后 所有的数据自动从 readable 流 进入 writeable 流 这种操作叫 pipe

在 Node.js 中，Readable 流有一个 pipe()方法

*/

'use strict';
let fs = require('fs');
let rs = fs.createReadStream('sample.txt');
let ws = fs.createWriteStream('copied.txt');
rs.pipe(ws, {
  end: false
});

/* 
  默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。
  如果我们不希望自动关闭Writable流，需要传入参数：

  readable.pipe(writable, {
    end: false
  }); 
  
*/