console.log('script start')

async function async1() {
  await async2() // await 在当前新版的浏览器中执行提前了
  console.log('async1 end') // await 会讲后续的代码阻塞到微任务队列
}

async function async2() {
  console.log('async2 end')
}

async1()

setTimeout(function () {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise') 
  resolve()
})
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })

console.log('script end')


// script start
//  ------------ async2 end
// Promise
// script end

// async1 end
// promise1
// promise2
// setTimeout




// [, then1, then2,]
//【setTimeout, 】