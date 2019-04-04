<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .pay-status {
    height: 100%;
    background-color: map_get($colors, third);
    .order_success {
      // padding-top: 44px;
      .pay {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid map_get($colors,six);
        span:before {
          font-size: 60px;
          margin-right: 1rem;
        }
        .pay_zhi {
          font-size: map_get($fontSize, four);
          color: map_get($colors, four);
        }
      }

      .address {
        padding-top: 20px;
      }
      .address_list {
        line-height: 30px;
        height: 30px;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
      }
      .address_list_grey {
        width:100px;
        display: inline-block;
        text-align: right;
        color: map_get($colors, five)
      }
      .address_list_black {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        color: map_get($colors, four);
      }

      .btn {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        a {
          color: map_get($colors, primary);
          border: 1px solid map_get($colors, primary);
          display: block;
          border-radius: 6px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          width: 35%;
        }
      }
      .btn_right {
        margin-left: 20px;
      }
    }
  }
  .weui_icon_success:before{
    color: green;
  }
</style>
<template>
  <div class="pay-status">
    <!--<cm-header :hdTitle="hdTitle"></cm-header>-->
    <div class="order_success">
      <div class="pay">
        <span v-if="$route.query.status == 1" class="weui_icon_msg weui_icon_success"></span>
        <span v-if="$route.query.status == 2" class="weui_icon_msg weui_icon_warn"></span>
        <span v-if="$route.query.status != 2 && $route.query.status != 1" class="weui_icon_msg weui_icon_success"></span>
        <div class="pay_zhi">
          <p class="" v-if="isAndroidApp()">支付方式：支付宝支付</p>
          <p class="" v-if="!isAndroidApp()">支付方式：微信支付</p>
          <p v-if="$route.query.status == 1" class="">支付成功</p>
          <p v-if="$route.query.status == 2" class="">支付失败</p>
          <p v-if="$route.query.status != 2 && $route.query.status != 1" class="">支付完成</p>
          <!--<p class="">订单金额：<span class="price">￥100.00</span></p>-->
        </div>
      </div>

      <!--<div class="address">
        <p class="address_list">
          <span class="address_list_grey">收货人：</span>
          <span class="address_list_black">张老三 &nbsp;13881235456</span>
        </p>
        <p class="address_list">
          <span class="address_list_grey">收货地址：</span>
          <span class="address_list_black">吉林省长春市经济开发区中山路1号</span>
        </p>
      </div>-->

      <div class="btn">
        <router-link :to="{ name: 'orderList' }" class="">查看订单</router-link>
        <router-link :to="{ name: 'index' }"  class="btn_right">返回首页</router-link>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  // import cmHeader from '../../components/header/index.vue'
  import { mapState } from 'vuex'
  import { apiServer } from '../../config'
  export default {
    data () {
      return {
        hdTitle: '支付方式',
        status: null,
        count: 0,
        timer: null
      }
    },
    created () {
      document.title = this.hdTitle
      // this.ajaxGetOrderDetail()
    },
    computed: mapState({
      login: state => state.login
    }),
    methods: {
      isAndroidApp () {
        var ua = navigator.userAgent;
          // Mozi
        if (ua.indexOf('mwjapp') > -1) {
          // alert(1);
          return true;
        } else {
          // alert(2);
          return false;
        }
      },
      /*ajaxGetOrderDetail () {
        const self = this
        let url = `${apiServer}/p/order/detail`
        let query = {
          token: self.login.token,
          versionCode: '1',
          deviceId: '355848069264888',
          deviceType: 'wx',
          data: {
            orderCode: String(self.$route.query.orderCode)
          }
        }
        // 成功回调
        let successCallback = (res) => {
          self.isShowLoading = false
          if (res.status === 200 && res.data && res.data.code === 0) {
            if (res.data.data.orderStatus == 3) {
              self.status = 1
              clearTimeout(self.timer)
            } else {
              self.timer = setTimeout(function () {
                if (self.count == 5) {
                  self.status = 2
                  clearTimeout(self.timer)
                } else {
                  self.ajaxGetOrderDetail()
                }
                self.count++
              }, 1000)
            }
          } else {
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleError('操作失败')
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
      }*/
    },
    components: {
      // cmHeader
    }
  }
</script>
