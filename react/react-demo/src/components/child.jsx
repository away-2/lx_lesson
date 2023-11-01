import React from "react";
import { Button, Input } from "antd";

export default function Child (props) {
    const childMsg = "this is a child page";
    console.log(props);
    return(
        <div>
            {/* <Input placeholder="请输入信息"></Input> */}
            <Button onClick={() => {
                props.onRef(childMsg)
            }}>提交</Button>
        </div>
    )
}