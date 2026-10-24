const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from a Kyvel backend!');
}).listen(process.env.PORT || 3000, '0.0.0.0');