'use stirct';

const { app, BrowserWindow } = require('electron');

let win = null;
app.on('ready', () => {
    
    win = new BrowserWindow({
        width: 450,
        height: 350,
    });

    win.loadURL(`file://${__dirname}/index.html`);
});