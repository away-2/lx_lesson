import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
export default function Signin() {
  const [isLogin, setisLogin] = useState(true);
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const toHome = () => {
    console.log('去首页');
    navigate("/layout/home")
  }
  return (
    <div className="signin">
      <div className="signin-content">
        <span
          style={{
            fontSize: "25px",
            backgroundColor: "#fff",
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            lineHeight: "30px",
            margin: "10px",
          }}
        >
          {isLogin ? "登录" : "注册"}
        </span>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            className="login-input-style"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="请输入用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            className="login-input-style"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请输入密码"
            />
          </Form.Item>
    
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={toHome}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
