function Promise(executor) {
  // 添加属性
  this.PromiseState = "pending";
  this.PromiseResult = null;
  // 声明属性
  this.callback = [];
  // 保存实例对象的 this 的值
  const self = this;

  function resolve(data) {
    // 判断状态
    if (self.PromiseState !== "pending") return;
    // 1. 修改对象的状态(PromiseState)
    self.PromiseState = "fulfilled";
    // 2. 设置对象结果值(PromiseResult)
    self.PromiseResult = data;
    // 调用成功的回调函数
    self.callback.forEach((item) => {
      item.onResolved(data);
    });
  }

  function reject(data) {
    // 判断状态
    if (self.PromiseState !== "pending") return;
    // 1. 修改对象的状态(PromiseState)
    self.PromiseState = "rejected";
    // 2. 设置对象结果值(PromiseResult)
    self.PromiseResult = data;
    // 调用失败的回调函数
    self.callback.forEach((item) => {
      item.onRejected(data);
    });
  }
  try {
    // 同步调用 [执行器函数]
    executor(resolve, reject);
  } catch (e) {
    // 修改 promise 对象状态为 [失败]
    reject(e);
  }
}

// 添加 then 方法
Promise.prototype.then = function (onResolved, onRejected) {
  const self = this;
  return new Promise((resolve, reject) => {
    // 调用回调函数
    if (this.PromiseState === "fulfilled") {
      try {
        // 获取回调函数的执行结果
        let result = onResolved(this.PromiseResult);
        // 判断
        if (result instanceof Promise) {
          // 如果是 Promise 类型的对象
          result.then(
            (v) => {
              resolve(v);
            },
            (r) => {
              reject(r);
            }
          );
        } else {
          // 结果的对象状态为成功
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    }
    if (this.PromiseState === "rejected") {
      onRejected(this.PromiseResult);
    }
    // 判断 pending 状态
    if (this.PromiseState === "pending") {
      // 保存回调函数
      this.callback.push({
        onResolved: function () {
          try {
            // 执行成功的回调函数
            let result = onResolved(self.PromiseResult);
            // 判断
            if (result instanceof Promise) {
              result.then(v => {
                resolve(v);
              }, r => {
                reject(r);
              })
            } else {
              resolve(result);
            }
          } catch (e) {
            reject(e);
          }

        },
        onRejected: function () {
          try {
            // 执行失败的回调函数
            let result = onRejected(self.PromiseResult);
            // 判断
            if (result instanceof Promise) {
              result.then(v => {
                resolve(v);
              }, r => {
                reject(r);
              })
            } else {
              resolve(result);
            }
          } catch (e) {
            reject(e);
          }

        },
      });
    }
  });
};