const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  })
  mainWindow.loadFile('./src/index.html')
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {

  //Asynchronous 
  ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg)
    event.reply('asynchronous-reply', 'pong')
  })


  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
