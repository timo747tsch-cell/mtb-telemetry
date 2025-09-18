const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow(){
  const win = new BrowserWindow({
    width: 1400, height: 900,
    webPreferences: { preload: path.join(__dirname,'preload.js'), contextIsolation: true }
  });
  win.loadURL('http://localhost:3000');
}
app.whenReady().then(createWindow);
app.on('window-all-closed', ()=>{ if(process.platform !== 'darwin') app.quit(); });
