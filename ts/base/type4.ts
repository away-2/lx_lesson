// function add(x: number, y: number){
//     return x + y
// }
// add(1,3)

// function formateTime<T>(time: T): T{
//     return time
// }
// formateTime('2023-08-02')

function identity<T, U>(value: T,message: U): T {
    console.log(message);
    return value;  
}
identity(12, 'asd')  // identity<number, string>(12, 'asd')