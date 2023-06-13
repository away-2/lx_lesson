// 反转一个3位数

// 123  321
// 900  9

function reserseInteger (num) {
    // Number(num.toString().split('').reverse().join(''))  // ['3', '2', '1']
    // return +num.toString().split('').reverse().join('')
  
    // return parseInt(num % 10) * 100 + parseInt((num % 100) / 10) * 10 + parseInt(num / 100) * 1
  
    let str = num.toString()
    return +(str.charAt(2) + str.charAt(1) + str.charAt(0))
  }
  
  
  let res = parseInt(3, 2) // 10
  console.log(res);
  