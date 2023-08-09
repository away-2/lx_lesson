const { effect, reactive } = require('@vue/reactivity');

let dummy;
const couter = reactive({ num1: 1, num2: 2 });

effect(() => {
    dummy = couter.num1 + couter.num2
    console.log(dummy);
})

setInterval(() => {
    couter.num1 ++
},1000)