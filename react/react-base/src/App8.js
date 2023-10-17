import React, { Component } from 'react';

function SonA(props) {
  return (
    <div>SonA -- {props.msg} </div>
  )
}

function SonB(props) {
  const msgB = 'B组件中的数据'
  const sendHandler = () => {
    props.sendData(msgB)
  }

  return (
    <div onClick={sendHandler}>SonB</div>
  )
}



class App extends Component {
  state = {
    message: 'Hello'
  }

  sendData = (data) => {
    // console.log(data);
    this.setState({
      message: data
    })
  }

  render() {
    return (
      <>
        <SonA msg={this.state.message}/>
        <SonB sendData={this.sendData}/>
      </>
    )
  }
}

export default App