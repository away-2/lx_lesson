class EventEmitter {
    constructor() {
        this.events = new Map();
    }
    on(type, fn) {
        if (this.events.get(type)) {
            this.events.set(type, [fn]); 
        } else {
            this.events.get(type).push(fn) // 同一个事件多人订阅
        }      
    }
    emit(type,...args) {
        const handle = thi.events.get(type)
        handle.forEach(fn => {
            fn.apply(this, args)
        })
    }
}

const emits = new EventEmitter()

emits.on('sell', () => { // 订阅事件
    console.log('去买房');
})

emits.emit('sell')  // 发布事件