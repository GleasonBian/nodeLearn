/* 
  以流的形式写入文件，只需要不断调用 write()方法，最后以 end() 结束：
*/
'use strict';
let fs = require('fs');
let ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write("使用 stream 写入文本数据...\n");
ws1.write('End');
ws1.end();

let ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用stream 写入 二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('End', 'utf-8'));
ws2.end();