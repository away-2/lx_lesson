function throttle(func, wait) {
    let preTime = 0;  // 上一次的时间
    return function () {
        let args = [...arguments];  // 获取事件参数
        let now = +new Date();  // 时间戳 精准到秒

        if(now - preTime > wait) {  // 点击第二次的时候判断时间有没有到
            func.apply(this, args);
            preTime = now;  // 更新上一次的时间
        }
    }
}