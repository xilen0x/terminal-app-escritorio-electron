console.log("Ejecutando Electron");

const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    let mainWindow = new BrowserWindow();

    mainWindow.loadURL(`file://${__dirname}/index.html`);
});