// 合并两个有序数组变成新的有序数组

let A = [1, 2, 3, 4]
let B = [2, 4, 5, 6]
// [1, 2, 2, 3, 4, 4, 5, 6]

const merge = (A, B) => {
  // let newArr = [...A, ...B] // A.concat(B)
  // return newArr.sort((a, b) => a - b)

  let arr = [], i = 0, j = 0;
  while (i < A.length && j < B.length) {
    if (A[i] <= B[j]) {
      arr.push(A[i])
      i++
    } else {
      arr.push(B[j])
      j++
    }
  }

  if (i < A.length) {
    arr = arr.concat(A.slice(i))
  }
  if (j < B.length) {
    arr = arr.concat(B.slice(j))
  }

  return arr
}

console.log(merge(A, B));