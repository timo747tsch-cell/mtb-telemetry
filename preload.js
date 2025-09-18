const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  // future safe APIs can be exposed here
});
