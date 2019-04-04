<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
</style>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  .gd-row {
    background-color: map_get($colors, third);
    padding: 10px;
    .weui_media_title {
      font-weight: 500;
      padding-bottom: 5px;
      font-size: map_get($fontSize, primary);
    }
    .faceToPrcie{
      height:24px;
      line-height:24px;
      color: #e60014;
      font-size: 16px;
      font-weight: normal;
    }
    .location {
      width: 100%;
      text-align: left;
      color: map_get($colors, eight);
      font-size: map_get($fontSize, second);
      .fl {
        float: left;
      }
      .fr {
        float: right;
      }
    }
    .price {
      color: map_get($colors, primary);
    }
    .num {
      color: map_get($colors, five);
    }
  }
</style>
<template>
  <div class="gd-row gd-row-first" v-if="priceRangeList">
    <h4 class=" weui_media_title">
      {{faceToPrice}} {{ goodsTitle }} {{faceToPrice}}
    </h4>
    <template v-if="faceToPrice==1">
      <h3 class="faceToPrcie">面议</h3>
    </template>
    <template v-else="faceToPrice==0">
      <div v-if="handlePriceShowStatus()" class="weui-row weui-no-gutter gd-price-interval ">
        <div class="weui-col-33" v-for="item in priceRangeList">
          <p class="price">{{ item.price | currency('￥') }}</p>
          <p class="num" v-if="item.maxNum">{{ item.minNum }}-{{ item.maxNum }}个</p>
          <p class="num" v-if="!item.maxNum">≥{{ item.minNum }}个</p>
        </div>
      </div>
      <div v-if="!handlePriceShowStatus()" class="weui-row weui-no-gutter gd-price-interval ">
        <div class="weui-col-90" v-for="item in priceRangeList">
          <p class="price">{{ item.price | currency('￥') }}</p>
          <p class="num">{{ item.minNum }}个起批</p>
        </div>
      </div>
      <p class="location clearfix"><span class="fl">已售{{ salesCount }}</span><span class="fr">发货地：{{ location }}</span>
      </p>
    </template>

  </div>
</template>
<script type="text/babel">
  export default {
    props: {
      salesCount: {
        type: Number,
        default () {
          return 0
        }
      },
      goodsTitle: {
        type: String,
        default () {
          return ''
        }
      },
      priceRangeList: {
        type: Array,
        default () {
          return []
        }
      },
      location: {
        type: String,
        default () {
          return ''
        }
      },
      faceToPrice: {
        type: Number,
        default () {
          return 0
        }
      }
    },
    data () {
      return {
      }
    },
    methods: {
      handlePriceShowStatus () {
        if (this.priceRangeList.length > 1) {
          return true
        }
        if (this.priceRangeList.length === 1) {
          return false
        }
      }
    }
  }
</script>
