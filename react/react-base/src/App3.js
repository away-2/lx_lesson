// import React from "react"
import { Component } from 'react'

class TestComponent extends Component {
    constructor() {
        super()
    }
    state = {
        count:0
    }
    setCount = () => {
        console.log(this);
        this.setState({
            count: this.state.count + 1
        })
    }
    clickhandle(){
        console.log('click handle');
    }
    render() {
        return (
            <div>
                <button onClick={this.setCount}>click me{this.state.count}</button>
            </div>
        )
    }
}

function App () {
    return (
        <div>
            <TestComponent></TestComponent>
        </div>
    )
}

export default App