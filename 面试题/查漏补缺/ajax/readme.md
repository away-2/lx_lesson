# AsyncchronousJavascriptAndXML
- 是一种在无需重新加载整个网页的情况下，能实现部分页面更新的技术

# XMLHttpRequest
readyState的状态：
0：请求刚刚创建
1：请求准备完成
2：客户端接收到响应头
3：正在接收响应体
4：接收完成

# 不同的请求方式
GET：通常用于从服务端获取数据
POST：通常用于向服务端传递数据
PUT：向服务端存放数据
DELETE：删除服务端上的某些数据
HEAD：只要服务器返回响应头，不要响应体
OPTIONS：发送探测请求（请求预检）

# get VS post
1. get的参数拼接在url后面，post参数在请求体中
2. get请求传输的数据会被浏览器主动缓存，post则需要手动设置
3. get请求的参数会完整保留在历史记录中，post不会
4. get请求只能使用url编码，post支持多种编码


# Fetch



