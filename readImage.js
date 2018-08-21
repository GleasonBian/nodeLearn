'use strict';
let fs = require('fs');
fs.readFile('sample.webp', function (err, data) {
  if (err) {
    console.err(err);
  } else {
    console.log(data);
    console.log(data.length + ' bytes');
    // 将 buffer 转换 为 string
    var text = data.toString('utf-8');
    console.log(text);
  }
}); 