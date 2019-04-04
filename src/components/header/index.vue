<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .header {
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background-color: map_get($colors, primary);
    .idx-search-return {
      display: flex;
      border-left: 1px solid map_get($colors, third);
      border-top: 1px solid  map_get($colors, third);
      width: 15px;
      height: 15px;
      transform: rotate(-45deg);
      position: absolute;
      left: 15px;
      top: 15px;
    }
    .hd-title {
      font-size: 18px;
      color: map_get($colors, third);
      padding-left: 47px;
      &.hd-title-center {
        text-align: center;
        justify-content: center;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        box-sizing: border-box;
        padding-left: 0;
        z-index: -1;
      }
    }
  }
</style>
<template>
  <div class="header">
    <span v-if="isShowReturn" class="idx-search-return" @click="handleCancel"></span>
    <span class="hd-title" :class="[isTitleCenter ? 'hd-title-center': '']">{{ hdTitle }}</span>
    <slot></slot>
  </div>
</template>
<script type="text/babel">
  export default {
    props: {
      hdTitle: {
        type: String,
        default () {
          return ''
        }
      },
      isShowReturn: {
        type: Boolean,
        default () {
          return true
        }
      },
      isTitleCenter: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    data () {
      return {}
    },
    created () {
      document.title = this.hdTitle
    },
    methods: {
      handleCancel () {
        // let fromPath = this.$router.app.fromPath
        // console.log(this.$router)
        // this.$router.go(fromPath)
        this.$router.go(-1)
      }
    }
  }
</script>
