import { WS_ADDRESS } from '../configs/server.js'

function useWebsocket (handleMessage) {
  const ws = new WebSocket(WS_ADDRESS) // 放著後端的地址
  console.log('ws', ws)

  function init () {
    bindEvent()
  }

  function bindEvent () {
    ws.addEventListener('open', handleOpen)
    ws.addEventListener('close', handleClose)
    ws.addEventListener('error', handleError)
    ws.addEventListener('message', handleMessage)
  }

  function handleOpen (e) {
    console.log('WebSocket open', e)
  }
  function handleClose (e) {
    console.log('WebSocket Close', e)
  }
  function handleError (e) {
    console.log('WebSocket error', e)
  }

  init()

  return ws
}

export default useWebsocket
