document.createElement('ul')    // 创建一个ul标签
document.createDocumentFragment('select')     // 创建一个虚拟dom片段， 不会引起回流，可提高性能
ul.appendChild(li)    // 在ul标签中添加一个li标签
