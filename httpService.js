/*
  node.js 开发 HTTP 服务器程序 通过 操作 http 模块 提供的 request 和 response 对象
  request对象: 封装了 http请求 调用 request对象的属性和方法可以拿到 所有 http 请求的信息
  response对象: 封装 http响应  操作 response对象的方法 就可以把 http 响应返回给浏览器
*/
//实现一个最简单的 Web 程序,对于所有请求，都返回 Hello world!

//使用严格模式
'use strict';

// 导入 http 模块
let http = require('http');

// 创建 http server 并 传入回调函数
let server = http.createServer(function (request, response) {
  // 回调函数接收 request 和 response 对象
  // 获得 http 请求的 method he url
  console.log(request.method + ':' + request.url);
  // 将 http 响应状态码 200 写入 response 同时设置 content-Type:text/html
  response.writeHead(200, {
    'content-Type': 'text/html'
  });
  //将 http 响应 html内容 写入 response
  response.end('<h1>hello world</h1>');
})

// 让服务器 监听 8080 端口
server.listen(8080);

console.log("server is runing at 127.0.0.1:8080/")
