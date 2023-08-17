class MinStack {
    constructor() {
      this.stack = new Map()
    }
  
    push(val) {
      this.stack.set(Symbol(val), val)
    }
  
    pop() {
      let keys = this.stack.keys()
      let top = null
      for (let key of keys) {
        top = key
      }
      let res = null
      res = this.stack.get(top)
      this.stack.delete(top)
      return res
    }
  
    getMin() {
      let min = Infinity
      this.stack.forEach((value, key) => {
        if (value < min) min = value
      })
      return min
    }
  }