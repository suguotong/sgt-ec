<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .search_noshop{
    .s-noshop {
      height: 110px;
      top: 50%;
      left: 50%;
      position: absolute;
      margin: -65px 0 0 -44px;
      img {
        width: 86px;
        height: 88px;
      }
    }
    .s-message{
      height: 38px;
      top: 50%;
      left: 50%;
      position: absolute;
      margin: 35px 0 0 -105px;
      color:map_get($colors, five);
      font-size: 14px;
    }
  }
</style>
<template>
  <div class="by-bag">
    <div class="search_noshop">
      <template v-if="searchType === 1">
        <div class="s-noshop">
          <img src="../../assets/images/search_nogoods.png" alt="">
        </div>
        <div class="s-message">
          {{ goods }}
          <!--抱歉，没有找到符合条件的商品！-->
        </div>
      </template>
      <template v-if="searchType === 2">
        <div class="s-noshop">
          <img src="../../assets/images/search_noshop.png" alt="">
        </div>
        <div class="s-message">
          <!--抱歉，没有找到符合条件的店铺！-->
          {{ shops }}
        </div>
      </template>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    props: {
      searchType: {
        type: Number,
        default () {
          return 1
        }
      },
      goods: {
        type: String,
        default () {
          return '抱歉，没有找到符合条件的商品！'
        }
      },
      shops: {
        type: String,
        default () {
          return '抱歉，没有找到符合条件的店铺！'
        }
      }
    }
  }
</script>
