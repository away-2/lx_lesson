// hooks --- 一套能够使函数组件更强大的钩子
// 1. 解决组件状态逻辑复用问题  2. class组件自身的问题

import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([1, 2, 3, 4])
  const [obj, setObj] = useState({age: 18})
  
  const add = () => {
    // setCount(count + 1)
    // list.splice(1, 1)

    setObj(oldObj => {
      return {age: oldObj.age + 1}
    })
  }

  return (
    <div>
      <button onClick={add}>{count}</button>
      <ul>
        {
          list.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>

      <p>{obj.age}</p>
    </div>
  );
}

export default App;
