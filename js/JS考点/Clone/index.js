let a = {
    age: 18,
    like: {
      sports: 'running',
      books: 'JavaScript',
      person: 'jerry'
    }
  }
  
  // let b = Object.assign({}, a)
  // a.like.sports = 'swimming'
  // let b = {...a}
  // a.like.sports = 'swimming'
  // console.log(b);
  
  // 深拷贝
  let b = JSON.parse(JSON.stringify(a))
  a.like.sports = 'swimming'
  
  console.log(b);