const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const { fileURLToPath } = require("node:url");

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

//const indexPath = path.join(__dirname, "dist/renderer/preload.js");

const isDev = !app.isPackaged;

//TODO: SORT OUT TYPES
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    if (isDev) {
        win.loadURL("http://localhost:5173");
        win.webContents.openDevTools();
    } else {
        win.loadFile(path.join(__dirname, "renderer/index.html"));
    }
}

app.whenReady().then(() => {
    createWindow();
});