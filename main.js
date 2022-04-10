const electron = require('electron')

const app = electron.app

const BrowserWindow = electron.BrowserWindow
var debug = true;

let mainWindow

function createWindow() {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  mainWindow.maximize();


  mainWindow.loadURL(`file://${__dirname}/dist/electron-app-demo/index.html`)
 
  
  mainWindow.on('closed', function () {

    mainWindow = null
  })
}

app.on('ready', createWindow)


app.on('window-all-closed', function () {
  
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  
  if (mainWindow === null) {
    createWindow()
  }
})

