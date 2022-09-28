const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {

  const splash = new BrowserWindow({
    width: 400,
    height: 200,
    show: true,
  })
  splash.loadFile('./src/splash.html');
  splash.center();

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  })
  mainWindow.loadFile('./src/index.html');

  setTimeout(function () {
    splash.close();
    mainWindow.show();
  }, 5000);

  // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
