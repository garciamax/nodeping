const {app, BrowserWindow, Tray, nativeImage, ipcMain} = require('electron');
const path = require('path');
const c = require('ansi-colors');

require('electron-reload')(__dirname,{
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

const createWindow = () => {
    let mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));
    const tray = new Tray(nativeImage.createEmpty());
    tray.on('click', (event) => {
        mainWindow.show();
    });
    ipcMain.on('time', (event, arg)=> {

        tray.setTitle(`🌐 ${c.green(arg)}`);
    })

};

app.on('ready', createWindow);
