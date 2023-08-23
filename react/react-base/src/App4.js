// 受控组件  --- 组件的状态受组件自己的控制
import { Component } from "react"

class InputComponent extends Component {
    state = {
            message: "Hello world "
        }
    changeHandler = (e) => {
        console.log(e,'/////////');
    }
    render() {
        return (
            <div>
                <input value={this.state.message} onChange={this.changeHandler}/>
            </div>
        )
    }
}
function App() {
    return (
        <div>
            <InputComponent />
        </div>
    )
}

export default App 