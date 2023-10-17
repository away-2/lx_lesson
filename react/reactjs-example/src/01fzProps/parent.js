import React, { Component } from 'react'
import Child from './child'
export class parent extends Component {
  state = {
    name: 'parent',
    msg: 'this is a parent'
  }
  render() {
    let { name, msg } = this.state
    return (
      <div>
        parent
        <p>{name}</p>
        <p>{msg}</p>
        <Child />
      </div>
    )
  }
}

export default parent
