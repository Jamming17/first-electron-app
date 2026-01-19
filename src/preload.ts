const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    //nothing for now
});