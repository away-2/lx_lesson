const http = require('http')
const multiparty = require('multiparty')
const path = require('path')
const fse = require('fs-extra')

const server = http.createServer()
const UPLOAD_DIR = path.resolve(__dirname, '.', 'qiepian')

server.on('request', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')

  if (req.url === '/upload') {
    const multipart = new multiparty.Form()
    multipart.parse(req, async(err, fields, files) => {
      if (err) {
        console.log(err);
        return
      }
      const [file] = files.file
      const [fileName] = fields.fileName
      const [chunkName] = fields.chunkName

      const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`)

      if (!fse.existsSync(chunkDir)) {
        await fse.mkdirs(chunkDir)
      }

      // 把切片移动进chunkDir
      await fse.move(file.path, `${chunkDir}/${chunkName}`)
      res.end(JSON.stringify({
        code: 0,
        message: '切片上传成功'
      }))
    })
  }

  if (req.url === '/merge') { // 该去合并切片了
    const data = await resolvePost(req)
    const {fileName, size} = data
    const filePath = path.resolve(UPLOAD_DIR, fileName)
    await mergeFileChunk(filePath, fileName, size)

    res.end(JSON.stringify({
      code: 0,
      message: '文件合并成功'
    }))
  }
})


// 合并
async function mergeFileChunk(filePath, fileName, size) {
  const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`)

  let chunkPaths = await fse.readdir(chunkDir)
  chunkPaths.sort((a, b) => a.split('-')[1] - b.split('-')[1])

  const arr = chunkPaths.map((chunkPath, index) => {
    return pipeStream(
      path.resolve(chunkDir, chunkPath),
      // 在指定的位置创建可写流
      fse.createWriteStream(filePath, {
        start: index * size,
        end: (index + 1) * size
      })
    )
  })
  await Promise.all(arr)
  fse.rmdirSync(chunkDir)
}


function pipeStream(path, writeStream) {
  return new Promise(resolve => {
    const readStream = fse.createReadStream(path)
    readStream.on('end', () => {
      fse.unlinkSync(path)
      resolve()
    })
    readStream.pipe(writeStream)
  })
}

function resolvePost(req) {
  return new Promise(resolve => {
    let chunk = ''
    req.on('data', data => {
      chunk += data
    })
    req.on('end', () => {
      resolve(JSON.parse(chunk))
    })
  })
}

server.listen(3000, () => {
  console.log('服务已启动');
})