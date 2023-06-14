
// function* foo(x){
//     let y = 2 * (yield(x+1))
//     let z = yield(y/3)
//     return (x + y + z)
// }
// yield 相当于一个中止器，it.next()放行,第一个it.next()里面不放值(放了也没用)，下一个it.next(),()里的值是上一个yield的值
// return 与 yield 类似，next()可执行
// let it = foo(5) //{}
// it.next() // { value: 6, done: false }
// it.next(12) // { value: 8, done: false }
// it.next(13) // { value: 42, done: true }

// console.log(it.next(12));

function* fetch() {
    yield ajax(url, () =>{})
    yield ajax(url1, () =>{})
    yield ajax(url2, () =>{})
}

let it = fetch()
let res1 = it.next()  // { value: ajax1Res, done: false }
let res2 = it.next(res1)  // { value: ajax2Res, done: false }
let res3 = it.next(res2)  // { value: ajax3Res, done: true }