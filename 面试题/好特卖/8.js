const arr = ['name', 'first', '5', 7, 4, '2', 9]

// function reverse(arr) {
//   let newArr = []
//   for (let i = arr.length-1; i >= 0; i--) {
//     newArr.push(arr[i])
//   }
//   return newArr
// }

function reverse(arr,start = 0, end = arr.length - 1) {
    
    if (start >= end) return
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    reverse(arr, start + 1, end - 1);
}
reverse(arr)
console.log(arr);