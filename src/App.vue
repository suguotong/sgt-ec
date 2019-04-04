<template>
   <router-view></router-view>
</template>

<script>
</script>

<style scoped lang="less">
@import "lib/themes/weui.min.css";
@import "lib/themes/jquery-weui.min.css";
@import "assets/themes/base.css";
</style>
<style>
  body {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    body {bottom: auto;height: 200%;}
  }
</style>
