<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  input{
    -webkit-appearance:none;
  }
  .no-cart {
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -100px;
    .gwc-empty-bg {
      text-align: center;
      img {
        width: 130px;
      }
    }
    .s-message {
      text-align: center;
      color:map_get($colors, five);
      font-size: map_get($fontSize, primary);
      padding: 20px 0 30px 0;
    }
    .btn {
      color: map_get($colors, primary);
      border: 1px solid map_get($colors, primary);
      display: block;
      border-radius: 5px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      width: 143px;
      margin: 0 auto;
    }
  }
</style>
<template>
  <div class="no-cart">
    <div class="gwc-empty-bg">
      <img src="../../assets/images/gwc_empty.png" alt="">
    </div>
    <div class="s-message">
      进货单空空如也，赶快去选购吧
    </div>
    <router-link class="btn" :to="{ name: 'index' }">去逛逛</router-link>
  </div>
</template>
<script type="text/babel">
  export default {
    data () {
      return {
      }
    },
    methods: {
    },
    components: {
    }
  }
</script>
