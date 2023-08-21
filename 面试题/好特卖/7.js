// 7. 写出①所在的 while 循环的作⽤；补全②的代码。 
/* isSymmetry ⽤来判断正整数n是否是⼀个对称数，例：12321是对称数，⽽123则不是*/ 

function isSymmetry (n) { 
    let i = n 
    let j = 0 
    // 循环的将数字i倒转
    while (i) { 
      j = j * 10 + i % 10  //  0      1    13   132  1321
      i = parseInt(i / 10)  // 1231   123  12    1   0
    }
    return j === n
  }
    
  console.log(isSymmetry (12321)) // true 
  console.log(isSymmetry (1231)) // false