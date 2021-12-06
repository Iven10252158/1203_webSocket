<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { useWebsocket } from '../hooks'
export default {
  created () {
    useWebsocket(handleMessage)

    function handleMessage (e) {
      console.log(e)
    }
    handleMessage(123)

    setTimeout(function () {
      useWebsocket.close()
    }, 5000)
  }
}
</script>
