const http = require('http');
const fs = require('fs');
const path = require('path');

// 创建一个服务/进程
const server = http.createServer((req, res) => {
    let filePath = path.resolve(__dirname, 'assets/index.html')
    const fileStream = fs.createReadStream(filePath)
    if (req.url.indexOf()) {
        // 在响应头中设置资源的类型
        res.writeHead(200,{
            'Content-Type': 'image/jpg',

        })
    }
   
    fileStream.pipe(res)
    
})

server.listen(3000, () => {
    console.log('listening on port 3000');
})

