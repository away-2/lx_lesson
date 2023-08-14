const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const url = path.join(__dirname,req.url);
    const fileStream =  fs.createReadStream(url);
    // 压缩
    const compression = zlib.createDeflate()
    let type = 'text/html'
    if (req.url.endsWith('jpg')){
        type = 'image/jpeg'
    }
    res.writeHead(200, { 
        'content-Encoding': 'deflate',
        'content-type': type
    });

    fileStream.pipe(compression).pipe(res);
})

server.listen(3000)