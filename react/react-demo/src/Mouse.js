import React, { useState, useEffect } from "react";
import "./mouse.css";


export default function MouseEvent() {
 
  let defaultShowMenu = true;
  let isRunnedRecursion = false;
  const [treeCollapseStatus, setTreeCollapseStatus] = useState("collapse");
  const dragedMenuWidth = React.useRef(null);
  // 处理munu可鼠标伸缩
  const handleMenuResize = (resize, menu) => {
    resize.onmouseenter = function (e) {
      resize.style.backgroundColor = "#479192";
    };
    resize.onmouseleave = function (e) {
      resize.style.backgroundColor = "rgb(234, 234, 234)";
    };
    resize.onmousedown = function (e) {
      resize.style.backgroundColor = "#479192";
      let startX = e.clientX;
      resize.left = resize.offsetLeft;
      document.onmousemove = function (e) {
        let endX = e.clientX;
        let moveLen = resize.left + (endX - startX) - 72; // （endx-startx）=移动的距离。resize[i].left+移动的距离=左边区域最后的宽度
        if (moveLen < 0) moveLen = 0; // 左边区域的最小宽度为0px
        if (moveLen > 350) moveLen = 350; // 左边区域最大宽度为400px
        resize.style.left = moveLen;
        menu.style.width = moveLen + "px"; // 设置左侧区域的宽度
      };
      document.onmouseup = function (evt) {
        if (parseFloat(menu.style.width) > 0) {
          dragedMenuWidth.current = menu.style.width;
          if (defaultShowMenu) {
            setTreeCollapseStatus("collapse");
          } else {
            setTreeCollapseStatus("shrink");
          }
        } else {
          if (defaultShowMenu) {
            setTreeCollapseStatus("shrink");
          } else {
            setTreeCollapseStatus("collapse");
          }
        }
        //颜色恢复
        resize.style.backgroundColor = "rgb(234, 234, 234)";
        document.onmousemove = null;
        document.onmouseup = null;
        resize.releaseCapture && resize.releaseCapture(); //不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
      };
      // 只有ie浏览器支持
      resize.setCapture && resize.setCapture();
      return false;
    };
  };

  useEffect(() => {
    const resize = document.getElementById("resize");
    const menu = document.getElementById("menuBox");
    handleMenuResize(resize, menu);
    return () => {
      isRunnedRecursion = false;
      resize.onmouseenter = null;
      resize.onmouseleave = null;
    };
  }, []);
  return (
    <div className="app">
        <div id="menuBox"></div>
       <div id="resize"></div>
    </div>
  );
}
