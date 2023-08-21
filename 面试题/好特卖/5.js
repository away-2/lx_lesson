console.log(1) 

setTimeout(() => { 
  console.log(2) 
}, 0)

console.log(3) 

new Promise((resolve, reject) => { 
  console.log(4) 
  resolve() 
}).then(
  () => { 
    console.log(5) 
  }, 
  () => { 
    console.log(6) 
  }
)
console.log(7)

// // 1, 3, 4, 7, 5, 6, 2




let p = new Promise((resolve, reject) => {
  console.log(1);
  reject('no')
})
p.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log('error: ' + err);
  }
)
.catch(err => {
  console.log('err: ' + err);
})