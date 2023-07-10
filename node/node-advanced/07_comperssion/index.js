const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
  let filePath = path.resolve(__dirname, `www/${req.url}`)
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) { // 前端请求的是目录
      filePath = path.join(filePath, 'index.html')
    }

    // 缓存
    const { ext } = path.parse(filePath) // .html  .png
    const timeStamp = req.headers['if-modified-since']
    let status = 200
    if (timeStamp && Number(timeStamp) === stats.mtimeMs) {
      status = 304
    }

    const mimeType = mime.getType(ext)
    
    const responseHeaders = {
      'Content-Type': mimeType,
      'Cache-Control': 'max-age=86400', // 缓存一天
      'Last-Modified': stats.mtimeMs,
    }
    const acceptEncoding = req.headers['accept-encoding']
    // text/xxx   application/xxx 类型的文件才进行压缩
    const compress = acceptEncoding && /^(text|application)\//.test(mimeType)      // mimeType.startsWith('text') || mimeType.startsWith('application')
    
    if (compress) {
      acceptEncoding.split(/\s*,\s*/).some((encoding) => {
        if (encoding === 'gzip') {
          responseHeaders['Content-Encoding'] = 'gzip'
          return true
        }
        if (encoding === 'deflate') {
          responseHeaders['Content-Encoding'] = 'deflate'
          return true
        }
        if (encoding === 'br') {
          responseHeaders['Content-Encoding'] = 'br'
          return true
        }
        return false
      })
      
    }
    const compressionEncoding = responseHeaders['Content-Encoding']
    res.writeHead(status, responseHeaders)


    // 读取文件并返回
    if (status === 200) {
      const fileStream = fs.createReadStream(filePath)
      if (compress && compressionEncoding) {
        let comp;
        if (compressionEncoding === 'gzip') {
          comp = zlib.createGzip()
        } else if (compressionEncoding === 'deflate') {
          comp = zlib.createDeflate()
        } else {
          comp = zlib.createBrotliCompress()
        }
        fileStream.pipe(comp).pipe(res)
      } else { // 不需要被压缩的文件
        fileStream.pipe(res)
      }
    } else {
      res.end()
    }


  } else {
    res.writeHead(404, {'Content-Type': 'text/html'})
    res.end('<h1>Not Found</h1>')
  }
})

server.listen(3000, () => {
  console.log('Server is running on port 3000');
})