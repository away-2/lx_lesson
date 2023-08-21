var fn = [] 

for (var i = 0; i < 10; i++) { 
  fn[i] = function (param) { 
    console.log(i + param) 
  }
} 
fn[5](5)  // 15

var data = { a: 10, b: 20 } 
console.log('第' + i + '条数据：' + data) // 第10条数据：[object Object]