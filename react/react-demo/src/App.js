// import "./App.css";
// import { Button, Input } from "antd";
// import Child from "./components/child";
// import Child2 from "./components/child2";
// import { createContext, useRef, useState } from "react";
// function App() {
//   // const getChildInfo = useRef(null)
//   const [value, setValue] = useState("");
//   // const getChildInfo = (msg) => {
//   //   console.log(msg);
//   //   setValue(msg)
//   // }
//   const appMsg = "appMsg";
//   const [sendMessage, setSendMessage] = useState([])
//   const MsgContext = createContext();

//   return (
//     <div className="App">
//       <MsgContext.Provider value={appMsg}>
//         this is app page{value}
//         {/* <Child onRef={getChildInfo}/> */}
//         <Child2 />
//       </MsgContext.Provider>
//     </div>
//   );
// }

// export default App;


// import { Table } from 'antd';
// import React, {useRef} from 'react';
// const columns = [
//   {
//     title: 'Full Name',
//     width: 100,
//     dataIndex: 'name',
//     key: 'name',
//     fixed: 'left',
//   },
//   {
//     title: 'Age',
//     width: 100,
//     dataIndex: 'age',
//     key: 'age',
//     fixed: 'left',
//   },
//   {
//     title: 'Column 1',
//     dataIndex: 'address',
//     key: '1',
//     width: 150,
//   },
//   {
//     title: 'Column 2',
//     dataIndex: 'address',
//     key: '2',
//     width: 150,
//   },
//   {
//     title: 'Column 3',
//     dataIndex: 'address',
//     key: '3',
//     width: 150,
//   },
//   {
//     title: 'Column 4',
//     dataIndex: 'address',
//     key: '4',
//     width: 150,
//   },
//   {
//     title: 'Column 5',
//     dataIndex: 'address',
//     key: '5',
//     width: 150,
//   },
//   {
//     title: 'Column 6',
//     dataIndex: 'address',
//     key: '6',
//     width: 150,
//   },
//   {
//     title: 'Column 7',
//     dataIndex: 'address',
//     key: '7',
//     width: 150,
//   },
//   {
//     title: 'Column 8',
//     dataIndex: 'address',
//     key: '8',
//   },
//   {
//     title: 'Action',
//     key: 'operation',
//     fixed: 'right',
//     width: 100,
//     render: () => <a>action</a>,
//   },
// ];
// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }

import styled from '@emotion/styled'

const Button = styled.button`
  color: hotpink;
`
const App = () => (
  // <Table
  //   columns={columns}
  //   dataSource={data}
  //   scroll={{
  //     x: 1500,
  //     y: 300,
  //   }}
  // />
  // <div>11111</div>
  <Button>This is a hotpink button.</Button>
);
export default App;