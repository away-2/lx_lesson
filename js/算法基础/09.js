// 搜索二维矩阵

// 14
let arr = [
    [5, 6, 10, 14],
    [6, 10, 13, 18],
    [10, 13, 18, 19]
  ]
  
  
  const search = (matrix, target) => {
    if (matrix.length === 0) {
      return false
    }
    let m = matrix.length, n = matrix[0].length
    let min = Math.min(m, n)
  
    let i = 0;
    while (i < min && target > matrix[i][i]) {
      i++
    }
    if (i < min && target === matrix[i][i]) {
      return true
    }
    // i-1 = 3  i = 4
    // 出现在[i-1, i-1]的这一行之后
    for (let x = i - 1; x < m; x++) {
      if (i - 1 >= 0 && matrix[x].includes(target)) {
        return true
      }
    }
    // 出现在[i, i]的这一列之后
    let z = i - 1, p = i
    while (z >= 0 && p < n) {
      if (matrix[z][p] === target) {
        return true
      }
      p++
      z--
    }
    return false
    // for (let i = 0; i < matrix.length; i++) {
    // }
    // return false
  }
  
  
  console.log(search(arr, 1));