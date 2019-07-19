const path  = require('path');
const url  = require('url');

const { app, BrowserWindow } = require('electron')

let win;

const { session } = require('electron')

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600, 
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  })


  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ['default-src \'self\'']
      }
    })
  })
  // win.loadURL(`file://${__dirname}/dist/index.html`)
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/phone-book-te-july19/index.html'),
    protocol: 'file:',
    slashes: true
  }))


  //// uncomment below to open the DevTools.
 win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})