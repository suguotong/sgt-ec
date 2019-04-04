<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .g-tab {
    width: 100%;
    display: -webkit-box;
    display: flex;
    -webkit-box-flex: 1;
    list-style: none;
    border-bottom: 1px solid map_get($colors, six);
    li {
      width: 33.3%;
      padding: 10px;
      list-style: none;
      text-align: center;
      box-sizing: border-box;
      font-size: map_get($fontSize, third);
      a {
        position: relative;
        color: map_get($colors, four);
      }
      &.active {
        border-bottom: 1px solid map_get($colors, primary);
        margin-bottom: -1px;
      }
    }
  }
</style>
<template>
  <scroller lock-y :scrollbar-x=false>
    <ul class="g-tab" :style="{ width:tabWidth }">
      <slot></slot>
    </ul>
  </scroller>
</template>
<script type="text/babel">
  import { Scroller } from 'vux'
  export default {
    props: {
      tabWidth: {
        type: String,
        default () {
          return '100%'
        }
      }
    },
    components: {
      Scroller
    }
  }
</script>
