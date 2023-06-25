const net = require('net'); // import net from 'net'

function responseData(str, status = 200, desc = 'OK') {
  return `HTTP/1.1 ${status} ${desc}
  Connection: keep-alive
  Date: ${new Date()}
  Content-Length: ${str.length}
  Content-Type: text/html

  ${str}
  `
}

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    const matched = data.toString('utf-8').match(/^GET ([/\w]+) HTTP/)
    console.log(matched);

    if (matched.length) {
      const path = matched[1]
      if (path === '/') {
        socket.write(responseData('<h1>Hello Wolrd</h1>'))
      } else {
        socket.write(responseData('<h1>Not Found</h1>', 404, 'Not Found'))
      }
      
    }
    console.log(`DATA: \n\n${data}`);
  })

  socket.on('close', () => {
    console.log('连接断开');
  })
})

server.on('error', (err) =>{
  throw err
});

server.listen({
  host: '0.0.0.0', // *
  port: 3000
}, () => {
  console.log('server listening on port 3000', server.address());
})




// GET / HTTP/1.1
// Host: localhost:3000
// Connection: keep-alive
// sec-ch-ua: "Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "macOS"
// Upgrade-Insecure-Requests: 1
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
// Sec-Fetch-Site: none
// Sec-Fetch-Mode: navigate
// Sec-Fetch-User: ?1
// Sec-Fetch-Dest: document
// Accept-Encoding: gzip, deflate, br
// Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
// Header: xxxx
// Body: xxx