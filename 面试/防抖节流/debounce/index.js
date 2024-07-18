function debounce(func, wait) {
    let timeout,result;
    return function() {
        let args = [...arguments];  // 获取事件参数
        clearTimeout(timeout);   // 清除上一次的定时器
        timeout = setTimeout(()=>{
            result = func.apply(this, args);  // this显示绑定
        }, wait);
        return result;  // 保证返回函数连续调用时，只执行最后一次的结果
    }
}