const http = require('http')
const urllib = require('url')

http.createServer(function (req, res) {
  const { query } = urllib.parse(req.url, true)
  // console.log(query);
  if (query && query.callback) {
    const { name, age, callback } = query
    const person = `${name}今年${age}岁了`
    const str = `${callback}('${person}')` // 'callback(xxxx)'
    res.end(str)
  }

  // res.end('hello world')

}).listen(3000, () => {
  console.log('listening on port 3000');
})