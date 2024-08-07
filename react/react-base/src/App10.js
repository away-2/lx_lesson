import React, { Component, createRef } from 'react';

function Todo(props) {
  const GoodsName = createRef()
  const GoodsPrice = createRef()

  const add = () => {
    // 拿到两个input的value
    // 传给App父组件
    // 让父组件将这两个vaule存放成 对象 ，再push 到list中
    // console.log(GoodsName.current.value, GoodsPrice.current.value);
    props.getTitle(GoodsName.current.value, GoodsPrice.current.value)
  }

  return (
    <>
      <input placeholder='name' ref={GoodsName}/>
      <input placeholder='price' ref={GoodsPrice}/>
      <button onClick={add}>添加</button>
    </>
  )
}


function ListItem (props) {
  // console.log(props.info);
  const { name, price, id } = props.info

  const delHandler = (id) => {
    // console.log(id);
    props.delHandler(id) // 调用父组件的delHandler
  }

  return (
    <div>
      <h3 style={{display: 'inline-block'}}>{name}</h3>
      <span>{price}</span>
      <button onClick={() => delHandler(id)}>删除</button>
    </div>
  )
}


class App extends Component {
  state = {
    list: [
      {id: 1, name: '棒棒糖', price: 1.5},
      {id: 2, name: '碎碎冰', price: 2},
      {id: 3, name: '农夫山泉', price: 2.5}
    ]
  }

  delHandler = (id) => {
    // let index = this.state.list.findIndex((item) => item.id === id);
    // this.state.list.splice(index, 1)
    // this.setState({
    //   list: this.state.list
    // })

    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }

  getTitle = (name, price) => {
    console.log(name, price);

    let list = this.state.list
    list.push({
      id: this.state.list.length + 1, 
      name: name, 
      price: price
    })
    this.setState({
      list: list
    })
  }

  render() {
    return (
      <>
        <Todo getTitle={this.getTitle}/>
        {
          this.state.list.map(item => {
            return <ListItem 
                    key={item.id} 
                    info={item} 
                    delHandler={this.delHandler}
                  />
          })
        }
      </>
    )
  }
}

export default App