// electron 的启动入口 创建窗口
const { app, BrowserWindow } = require('electron')
const ProcessMessage = require('./processMessage')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // 让页面直接可以使用node
      contextIsolation: false
    }
  })

  win.loadFile('./src/index.html') // html页面加载到窗口中
  win.webContents.openDevTools() // 打开控制台

  // 主线程和渲染线程通讯
  const processMessage = new ProcessMessage(win)
  processMessage.init()
}
// app.commandLine.appendSwitch('enable-transparent-visuals');
// app.commandLine.appendSwitch('disable-gpu');
app.commandLine.appendSwitch('no-sandbox');
app.whenReady().then(createWindow)