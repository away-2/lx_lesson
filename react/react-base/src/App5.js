// 非受控组件  --- 组件的状态受组件自己的控制
import { Component, createRef } from "react"

class InputComponent extends Component {
    // 创建一个存放dom的对象容器
    msgRef = createRef()
    changeHandler = () => {
        console.log(this.msgRef);
    }

    render() {
        return (
            <div>
                <input ref={this.msgRef}/>
                <button onClick={this.changeHandler}>click</button>
            </div>
        )
    }
}
function App() {
    return (
        <div className="App">
            <InputComponent />
        </div>
    )
}

export default App 