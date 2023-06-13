// 随机模块

export function randomInt(min, max) { 
    const p = Math.random()
    return Math.floor(min * (1 - p) + max * p)
  }
  
  // const articleLength = randomInt(300, 500)
  
  // 随机从数组中选取一条数据
  // let lastPicked = null
  export function createRandomPick(arr) {
    // let picked = null
    // do {
    //   const index = randomInt(0, arr.length)
    //   picked = arr[index]
    // } while (picked === lastPicked);
    // lastPicked = picked
    // return picked
  
    arr = [...arr]
    function randomPick() {
      const len = arr.length - 1
      const index = randomInt(0, len)
      const picked = arr[index];
      [arr[index], arr[len]] = [arr[len], arr[index]]
      return picked
    }
    randomPick()
    return randomPick
  }
  
  
  // const randomPickFamous = createRandomPick(famous)
  // for (let i = 0; i < 10; i++) {
  //   randomPickFamous()
  // }