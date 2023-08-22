// JSX 模板语法  ejs vue
// import './App.css'
// const songs = [
//   {id: 1, name: '晴天'},
//   {id: 2, name: '雨天'},
//   {id: 3, name: '阴天'}
// ]

// const flag = true
// const styleObj = {
//   color: 'blue'
// }

// function App() {
//   return (
//     <div className="App">
//       <ul>
//         {
//           songs.map(item => {
//             return <li key={item.id}>{item.name}</li>
//           })
//         }
//       </ul>
//       {flag ? 'react真有趣' : 'vue666'}
//       {flag ? <span>这是一个span标签</span> : null}
//       <div style={{color: 'red'}}>this is div </div>
//       <div style={ styleObj }>this is div2 </div>
//       <div className="title">this is div3</div>
//       <div className={flag ? 'title' : ''}>this is div4</div>

//     </div>
//   )
// }

function Hello() {
  const clickHandler = (e) => {
    console.log('wow~~',e);
  }
  return (
  <div>
    <p>这是一个函数组件</p>
    <button onClick={clickHandler}>点我</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Hello></Hello>
    </div>
  )
}
export default App