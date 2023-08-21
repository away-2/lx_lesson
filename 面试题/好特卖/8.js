const arr = ['name', 'first', '5', 7, 4, '2', 9]

function reverse(arr) {
  let newArr = []
  for (let i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

console.log(reverse(arr));