import React from "react";
// import { Button, Input } from "antd";
import Child3 from "./child3";

export default function Child2 () {
    // console.log(props, "Child2");
    return(
        <div>
            this is Child2{}
            <Child3 />
        </div>
    )
}