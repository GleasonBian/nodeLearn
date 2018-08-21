'use strict';
let fs = require('fs');
fs.readFile('sample.txt', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    let date = new Date;
    fs.writeFile('output.txt', data + date, function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('文件写入成功');
      }
    })
  }
})