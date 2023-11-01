import "./App.css";
import { Button } from "antd";
import Child from "./components/child";
import Child2 from "./components/child2";
import { createContext, useRef, useState } from "react";
function App() {
  // const getChildInfo = useRef(null)
  const [value, setValue] = useState("");
  // const getChildInfo = (msg) => {
  //   console.log(msg);
  //   setValue(msg)
  // }
  const appMsg = "appMsg";
  const MsgContext = createContext();

  return (
    <div className="App">
      <MsgContext.Provider value={appMsg}>
        this is app page{value}
        {/* <Child onRef={getChildInfo}/> */}
        <Child2 />
      </MsgContext.Provider>
    </div>
  );
}

export default App;
