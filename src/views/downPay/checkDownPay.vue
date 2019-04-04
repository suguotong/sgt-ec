<template>
  <div class="checkDPay">
    <div class="vouchImg">
      <img :src="voucher.payVoucher" alt="付款凭证">
    </div>
    <div class="mess">
      <div class="list borderBottom">
        <span class="left">汇款人户名</span>
        <span class="right">{{voucher.remitter}}</span>
      </div>
      <div class="list borderBottom" v-if="voucher.remitterDate">
        <span class="left">汇款时间</span>
        <span class="right">{{voucher.remitterDate | date(sep1='date')}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        title: '线下凭证',
        voucher: {}
      }
    },
    created() {
      document.title = this.title
      this.voucher = this.$route.params
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  @import "../../assets/themes/variables";
  .borderBottom {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 200%;
      height: 0;
      border-bottom: 1px solid #ccc;
      -webkit-transform: scale(0.5, 0.5);
      -moz-transform: scale(0.5, 0.5);
      -ms-transform: scale(0.5, 0.5);
      -o-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transform-origin: 0 0;
      -ms-transform-origin: 0 0;
      transform-origin: 0 0;
    }
  }
  .checkDPay {
    .vouchImg {
      background-color: #fff;
      padding: 15px;
      margin-bottom: 5px;
    }
    .mess {
      background-color: #fff;
      padding: 0 15px;
      .list {
        line-height: 43px;
        @extend %fatherFlex;
      }
      .left {
        width: 98px;
        color: #666;
      }
      .right {
        @extend %childFlex;
      }
    }
  }

</style>
