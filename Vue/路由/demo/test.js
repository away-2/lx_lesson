let arr = [1, 2, 3, 4, 5]

const res = arr.reduce((pre, item, arr) => {
  pre += item
  return pre
}, 0)

console.log(res);