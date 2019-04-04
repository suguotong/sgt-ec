<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .weui_search_bar:after, .weui_search_bar:before {
    height: 0;
    border: 0;
  }
  .weui_icon_search {
    top: 0px;
  }
  .idx-search-bar {
    display: inherit;
    position: static;
    height: 44px;
    box-sizing: border-box;
    padding: 8px 20px;
  /*  position: absolute;
    z-index: 999;
    width: 100%;
    background-color: transparent;
    padding: 8px 58px;*/
    &:after {
      border-bottom: 0;
    }
    .idx-search-outer {
      border-radius: 5px;
    }
    .idx-search-return {
      display: none;
    }
    &.isShowReturn {
      background-color: map_get($colors, primary);
      .idx-search-return {
        display: flex;
        border-left: 1px solid #fff;
        border-top: 1px solid #fff;
        width: 15px;
        height: 15px;
        transform: rotate(-45deg);
        position: absolute;
        left: 15px;
        top: 15px;
      }
    }

  }
</style>
<template>
  <!--搜索-->
  <div class="weui_search_bar idx-search-bar" id="search_bar">
    <!--<span class="idx-search-return" @click="handleCancel"></span>-->
    <form class="weui_search_outer idx-search-outer">
      <div class="weui_search_inner">
        <i class="weui_icon_search"></i>
        <input type="search" v-model="keywords" class="weui_search_input" id="search_input" placeholder="输入商品" required="" @focus="handleSearch">
      </div>
    </form>
  </div>
  <!--end 搜索-->
</template>
<script type="text/babel">
  export default {
    props: {
      keywords: {
        type: String,
        default () {
          return ''
        }
      }
    },
    data () {
      return {}
    },
    methods: {
      handleSearch (e) {
        // console.log(this)
        // console.log(e)
        this.$router.push({name: 'search', query: { keywords: this.keywords }})
      },
      handleCancel () {
        this.$router.go(-1)
      }
    }
  }
</script>
