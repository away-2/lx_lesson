// 查找斐波那锲中的n位数

// 1 1 2 3 5 8 13 21 34 55...

// f(n) = f(n-1) + f(n-2)

// function fib(n) {
//   if (n === 1 || n === 2) {
//     return 1
//   }
//   const res = fib(n - 1) + fib(n - 2)
//   return res
// }

// function fib(n) {
//   let res = [1, 1]
//   for (let i = 2; i < n; i++) {
//     res[i] = res[i - 1] + res[i - 2]
//   }
//   return res[n - 1]
// }

function fib(n) {
    let a = 1, b = 1, c; 
    for (let i = 2; i < n; i++) {
      c = a + b
      a = b
      b = c
    }
    return c
  }
  console.log(fib(11));