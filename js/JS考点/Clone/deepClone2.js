let obj = {
    a: '1',
    b: {
        c: '2',
        d: {
            e: '3',
            f:  '4'
        }
    }
}

function deepClone(obj) {
    return new Promise((resolve) =>{
        const { port1, port2 } = new MessageChannel()
        port1.postMessage(obj)
        port2.onmessage = (msg) =>{
            // console.log(msg.data);
            resolve(msg.data)
        }
    })
}

deepClone(obj).then(res =>{
    obj.b.d.e = 8
    console.log(res);
})
