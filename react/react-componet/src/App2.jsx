import React from 'react';

const List = ({pageSize = 10}) => {
  return (
    <div>props 的默认值为：{pageSize} </div>
  )
}

class Item extends React.Component {
  state = {
    name: '李白'
  }

  componentDidMount() {
    // 获取DOM  发请求
    console.log('componentDidMount');
  }

  shouldComponentUpdate() {
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    return 'hello'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  static defaultProps = {
    page: 1
  }

  render() {

    return (
      <div>
        类组件中props的默认值为：{this.props.page}
        <p onClick={() => this.setState({name: '江总'})}>{this.state.name}</p>
      </div>
    )
  }
}


const App = () => {
  return (
    <div>
      <List/>
      <Item/>
    </div>
  );
}

export default App;

