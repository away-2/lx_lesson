import { Segmented, Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import React ,{ useState } from "react";
import "./layout.css";

export default function mainLayout() {
    const { Header, Content } = Layout;
    const [value, setValue] = useState()
    const Navigate = useNavigate(state.pathname)
    const state = useLocation()
    const changePage = (value) => {
     
    }
  return (
    <Layout className="layout">
    <Header
        className="header"
        style={{
            height: 60,
            position: "fixed",
            xIndex: 1,
            width: "100%",
            display: "flex",
            padding: "0 20px",
            backgroundColor: "#3853E2"
        }}
    >
      <div className="logo" 
        style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
        }}
      >
        <span>写个demo</span>
      </div>
      <Segmented
      style={{ height: "100"}}
      options={[
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>主页</div>
            </div>
          ),
          value: 'home',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>第二页</div>
            </div>
          ),
          value: 'two',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>第三页</div>
            </div>
          ),
          value: 'three',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>第四页</div>
            </div>
          ),
          value: 'four',
        },
        {
            label: (
              <div style={{ padding: 4 }}>
                <div>第五页</div>
              </div>
            ),
            value: 'five',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <div>第六页</div>
              </div>
            ),
            value: 'six',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <div>第七页</div>
              </div>
            ),
            value: 'seven',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <div>第八页</div>
              </div>
            ),
            value: 'eight',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <div>第九页</div>
              </div>
            ),
            value: 'nine',
          },
      ]}
      value={value}
      onChange={(value) => changePage(value)}
    />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <div className="site-layout-content">Content</div>
    </Content>
  </Layout>
  );
}
