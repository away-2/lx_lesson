import React, { Component } from 'react'

export class child extends Component {
    state = {
        name: 'child',
        msg: 'this is a child'
    }
  render() {
    let { name, msg } = this.state
    return (
      <div>
        child
        <p>{name}</p>
        <p>{msg}</p>
      </div>
    )
  }
}

export default child
