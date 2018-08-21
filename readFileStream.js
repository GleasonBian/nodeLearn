/* 

1.什么是流？一种抽象的数据结构
  stream 是 Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。
2.标准输入流
  从键盘输入到应用程序，实际上它还对应着一个名字：标准输入流（stdin）。
3.标准输出流
  如果应用程序把字符一个一个输出到显示器上，这也可以看成是一个流，这个流也有名字：标准输出流（stdout）。
4.流的特点
  数据是有序的，而且必须依次读取，或者依次写入，不能像 Array 那样随机定位。

5.在 Node.js 中，流也是一个对象，我们只需要响应流的事件就可以了：
  data事件表示流的数据已经可以读取了，
  end事件表示这个流已经到末尾了，没有数据可以读取了，
  error事件表示出错了。
*/

// 下面是一个从文件流读取文本内容的示例：

'use strict';
let fs = require("fs");

// 打开一个流:
let rs = fs.createReadStream('sample.txt', 'utf-8');

rs.on('data', function (chunk) {
  console.log("DATA: ", chunk);
})

rs.on('end', function () {
  console.log("END");
})

rs.on('err', function (err) {
  console.log('ERROR' + err);
})

//注意，data事件可能会有多次，每次传递的chunk是流的一部分数据。