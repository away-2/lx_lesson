let list = [1, 2, 3, 4,'q']
list.push('a')

let arr: Array<number> = [1, 2, 3, 4]  // 数组泛型

// 元组
let tuple:Array<string | number | boolean> = [1, 'a', true]

// 枚举 Enum    异构枚举
enum Direction {
    NORTH='north',
    S='south',
    E='east',
    W='west' 
}

let dir: Direction = Direction.NORTH
console.log(dir);


