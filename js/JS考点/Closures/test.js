// for(var i =1;i <= 5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000)
// }

// 改进 (闭包方法)
// for(var i = 1;i <= 5;i++){
//     (function(j){
  
//     setTimeout(function(){
//         console.log(j);
//     },j*1000)
//  })(i)
// }

// 定时器第三个参数
// for(var i =1;i <= 5;i++){
//     setTimeout(function(j){
//         console.log(j);
//     },i*1000,i)
// }

// 
for(let i =1;i <= 5;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000)
}