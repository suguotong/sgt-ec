<style scoped lang="scss" rel="stylesheet/scss">
</style>
<template>
  <h1>关于我们</h1>
</template>
<script type="text/babel">
  export default {
    data () {
      return {
        hdTitle: '关于我们'
      }
    },
    created () {
      document.title = this.hdTitle
    }
  }
</script>
