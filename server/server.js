const webSocket = require('ws')

;((ws) => {
  const wss = new ws.Server({ port: 3000 })

  function init () {
    bindEvent()
  }

  function bindEvent () {
    wss.on('open', handleOpen)
    wss.on('close', handleClose)
    wss.on('error', handleError)
    wss.on('connection', handleConnection)
  }

  function handleOpen () {
    console.log('webSocket Open')
  }

  function handleClose () {
    console.log('webSocket Close')
  }

  function handleError () {
    console.log('webSocket Error')
  }

  function handleConnection (ws) {
    console.log('webSocket Connection')

    ws.on('message', handleMessage)
  }

  function handleMessage (msg) {
    console.log('msg', msg)
  }
  init()
})(webSocket)
