import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import routes from "./routes/index";
import "./App.css";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
// import 'antd/dist/antd.variable.min.css'
// import './styles/index.css'

// 以下引入千万不要删除 是全局的公共scss样式!!!!!!
// import scssStyle from './styles/common.module.scss'

moment.locale("en");

function App() {
  const element = useRoutes(routes);
  ConfigProvider.config({
    theme: {
      primaryColor: "#002FA7",
    },
  });
  return (
    <ConfigProvider locale={zhCN}>
      <div>
        <NavLink to="/signin" />
        <NavLink to="/home" />
        {element}
      </div>
    </ConfigProvider>
  );
}

export default App;
