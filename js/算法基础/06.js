// 姓名去重
const person = [
    'TOM',
    'tom',
    'Tom',
    'jerry',
    'Jerry',
    'nick',
    'hello world',
    'HelloWorld'
  ]
  
  const deDup = (names) => {
    names.forEach((item, index) => {
      names[index] = item.toLowerCase()
    });
  
    return [...new Set(names)]
  }
  
  console.log(deDup(person));