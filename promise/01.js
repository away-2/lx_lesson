// try {
//     setTimeout(() => {
//       throw new Error('error')
//     }, 200);
//   } catch (err) {
//     console.log(err);
//   }
  
//   try {
//     Promise.resolve().then(() => {
//       throw new Error('err')
//     })
//   } catch (err) {
//     console.log(err);
//   }
  
new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error('err');
      } catch (err) {
        reject(err);
      }
    }, 200);
  })
    .then(() => {
      // 正常执行时的处理逻辑
    })
    .catch((err) => {
      console.log(err); // 这里会捕捉到错误
    });
  
  