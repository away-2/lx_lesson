import PropTypes from "prop-types";

function List(props) {
  const arr = props.colors
  const lis = arr.map((item, index) => <li key={index}>{item.name}</li>)
  
  return (
    <ul>{lis}</ul>
  )
}

List.propTypes = { // 限定List组件中的props一定要接受一个colors类型为Array
  colors: PropTypes.array // array bool func number object string
}



function App() {
  return (
    <div className="app">
      <List colors={13}/>
    </div>
  )
}

export default App