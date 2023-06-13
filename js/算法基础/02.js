// 水仙花数

// 153 = 1^3 + 5^3 + 3^3
// 370 = 3^3 + 7^3 + 0^3
// 一个N位的正整数，其各个位置的数字的N次方之和等于该数本身

const isTrue = num => {
    const str = num.toString() // (num + '').length
    const n = str.length
    let total = 0
  
    for (let i = 0; i < str.length; i++) {  
      total += Math.pow(str.charAt(i), n)
    }
  
    if (total === num) {
      return true
    } else {
      return false
    }
  }
  
  console.log(isTrue(32));

  // 给你一个n，代表n位的数，求出n位数中的所有水仙花数
  
  const findAll = (n) => {
    let min = Math.pow(10, n - 1)
    let max = Math.pow(10, n)
    let res = []
  
    for (let i = min; i < max; i++) {
      if (isTrue(i)) {
        res.push(i)
      }
    }
    return res
  }
  
  console.log(findAll(4));