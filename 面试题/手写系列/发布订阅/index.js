class EventEmitter {
    constructor() {
        this.events = new Map();
    }
    on(type, fn) {
        if (!this.events.get(type)) { // 此事件没人订阅过
            this.events.set(type, [fn]); 
        } else {
            this.events.get(type).push(fn) // 同一个事件多人订阅
        }      
    }
    emit(type,...args) {
        const handle = this.events.get(type)  // 先读取到type
        handle.forEach(fn => { // 将handle中的所有事件触发
            fn.apply(this, args)    // fn执行掉
        })
    }
}

const emits = new EventEmitter()

emits.on('sell', (e) => { // 订阅事件
    console.log('小明去买房', e);
})
emits.on('sell', (e) => { // 订阅事件
    console.log('李华去买房', e);
})
emits.on('sellcar', (e) => { // 订阅事件
    console.log('小红去买车位', e);
})
emits.emit('sell',100)  // 发布事件