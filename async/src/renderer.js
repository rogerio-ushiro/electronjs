const electron = require("electron");
const { ipcRenderer } = electron;

const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title')

ipcRenderer.on('asynchronous-reply', (_event, arg) => {
  console.log(arg) // prints "pong" in the DevTools console
})

setButton.addEventListener('click', () => {
  ipcRenderer.send('asynchronous-message', titleInput.value + ' - do render para o terminal')
});
