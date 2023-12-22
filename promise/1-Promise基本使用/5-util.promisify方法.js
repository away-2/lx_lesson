/**
 * util.promisify 方法
 */
let util = require('util');
let fs = require('fs');
// 返回一个新的函数
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./resource/content.txt')
.then(value =>{
    console.log(value.toString());
}, reason => {
    console.log(reason);
})