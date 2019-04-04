<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  .choose-pay-way {
    height: 100%;
    background-color: map_get($colors, third);
    overflow: hidden;
    .order_payMethod {
      /*padding-top: 44px;*/
      .weui_cells {
        &:before {
          border-top: 0;
        }
        &:after {
          margin: 0 10px;
          width: calc(100% - 20px);
          border-bottom: 1px solid map_get($colors,six);
        }
      }
      .weui_cell{
        &:before{
          border: 0;
        }
      }
      /*img{
        width: 43px;
        height: 44px;
      }*/
      .price {
        color: map_get($colors, eleven);
      }
      /*.xianPay {
        width: 34px;
        height: 36px;
      }*/
      .oc-address {
        img {
          width: 44px;
          height: 37px;
        }
      }
    }
    .isWxOpen {
      position: absolute;
      left: 0;
      height: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #000;
      opacity: .6;
      z-index: 9999;
      .prompt {
        position: absolute;
        right: 20px;
        top: 50px;
        width: 310px;
        height: 187px;
        background: url("../../assets/images/pay-prompt.png") no-repeat;
        background-size: 100% 100%;
      }
      .btn {
        margin-top: 300px;
        display: flex;
        justify-content: center;
        a {
          color: map_get($colors, third);
          border: 1px solid map_get($colors, third);
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
    .isWxClose {
      display: none;
    }
  }
</style>
<template>
  <div class="choose-pay-way">
    <!--<cm-header :isShowReturn="false" :hdTitle="hdTitle"></cm-header>-->
    <div class="order_payMethod">

      <div class="weui_cells">
        <div class="weui_cell">
          <div class="weui_cell_bd weui_cell_primary">
            <p>订单金额</p>
          </div>
          <div class="weui_cell_ft">
            <p class="price">{{ query.totalAmount | currency('￥') }}</p>
          </div>
        </div>
      </div>

      <div class="weui_media_box weui_media_small_appmsg">
        <div class="weui_cells weui_cells_access" v-if="!isAndroidApp()">
          <div class="weui_cell oc-address" @click="handleGoPay(isWx)">
            <div class="weui_cell_hd"><img src="../../assets/images/wxPay.png"></div>
            <div class="weui_cell_bd weui_cell_primary">
              微信支付
            </div>
            <span class="weui_cell_ft"></span>
          </div>
        </div>
        <div class="weui_cells weui_cells_access" v-if="isWx == 6">
          <div class="weui_cell" @click="handleGoPay(9)">
            <div class="weui_cell_hd"><img src="../../assets/images/zhifubao.png" class="alipay"></div>
            <div class="weui_cell_bd weui_cell_primary">
              支付宝支付
            </div>
            <span class="weui_cell_ft"></span>
          </div>
        </div>
        <div class="weui_cells weui_cells_access" v-if="query.offPay == 1">
          <div class="weui_cell" @click="handleGoPay(7)">
            <div class="weui_cell_hd"><img src="../../assets/images/xianxian.png" class="xianPay"></div>
            <div class="weui_cell_bd weui_cell_primary">
              线下支付
            </div>
            <span class="weui_cell_ft"></span>
          </div>
        </div>
      </div>
    </div>
    <div v-html="payForm"></div>
  </div>
</template>
<script type="text/babel">
  // import cmHeader from '../../components/header/index.vue'
  import { apiServer } from '../../config'
  import { mapState, mapActions } from 'vuex'
  import { SET_OPEN_ID } from '../../store/openid'
  export default {
    data () {
      return {
        hdTitle: '选择支付方式',
        query: {},
        paramsData:{},
        payForm: '',
        isShowDialog: false,
        isHasSubmit: false,// 是否已经提交
        isWx: 5 //
      }
    },
    created () {
      const self = this
      document.title = this.hdTitle
      this.query = this.$route.query
      this.isWxOpen()
      if (this.isWx == 5) {
        if (self.query.openid && !(self.openid && self.openid.length > 0)) {
          // self.REMOVE_OPEN_ID('openid')
          self.SET_OPEN_ID(self.query.openid)
        } else {
          self.query.openid = self.openid
        }
      }
    },
    computed: mapState({
      login: state => state.login,
      openid: state => state.openid
    }),
    methods: {
      ...mapActions([SET_OPEN_ID]),
      isWxOpen () {
        var ua = navigator.userAgent.toLowerCase()
//        console.log(ua)
        if (ua.match(/MicroMessenger/i) && (ua.match(/MicroMessenger/i)[0] === 'micromessenger')) {
          /*微信端*/
          this.isWx = 5
        } else {
          this.isWx = 6
        }
      },
      handleError (errMsg) {
        const self = this
        self.$vux.toast.show({
          text: errMsg,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
      },
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
      handleGoPay (payWay) {
        const self = this
        if (self.isHasSubmit) {
          return false
        }
        self.query.payWay = String(payWay)
        let params = {
          'token': self.login.token,
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': self.query
        }
//        return;
        if (payWay === 5 || payWay === 6) {
          self.ajaxWxPay(params, payWay)
        }else if (payWay === 9) {
          /*支付宝支付*/
          if (self.isAndroidApp()) {
             fun.alipay( self.login.token,`${self.query.orderCode}`,`${self.query.totalAmount}`)
          } else {
            window.open(`${apiServer}/p/order/payAppWeb?orderCode=${self.query.orderCode}&totalAmount=${self.query.totalAmount}&payWay=${self.query.payWay}`)
          }
          
        }else if(payWay === 7) {
          self.$router.push({
            name: 'downPay',
            query: self.query
          })
          /*线下支付*/
          /*const url = `${apiServer}/p/order/getOffPayAccount`
//          console.log(params)
          self.$http.post(url, params).then((res) => {
//            console.log(res.body)
            if(res.body.code == 0) {
              self.$router.push({
                name: 'downPay',
                params: res.body.data
              })
            }else {
              self.handleError(res.data.message ? res.data.message : res.data.msg)
            }
            self.isHasSubmit = false
          },(err) => {
            self.handleError('请求失败！')
            self.isHasSubmit = false
          })*/
        }
      },
      ajaxWxPay (params, payWay) {
        const self = this
        // 成功回调
        const url = `${apiServer}/p/order/pay`
        let successCallback = (res) => {
          if (res.status === 200 && res.data.data && res.data.data != '') {
            if (payWay == 5) {
              let jsonData = JSON.parse(res.data.data.returnStr)
              self.wxPay(jsonData)
            } else if (payWay == 6) {
              let jsonData = JSON.parse(res.data.data.returnStr)
              let mwebUrl=jsonData.mwebUrl
              const redirect_url = encodeURIComponent(`${apiServer}/dist/index.html#/payStatus?orderCode=${self.query.orderCode}`)
              window.location.href=`${mwebUrl}&redirect_url=${redirect_url}`
            }

          } else {
            self.handleError(res.data.message ? res.data.message : res.data.msg)
          }
          self.isHasSubmit = false
        }
        // 失败回调
        let errCallback = (err) => {
          self.handleError('请求失败！')
          self.isHasSubmit = false
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, params).then(successCallback, errCallback)
      },
      parseDom (arg) {
        let objE = document.createElement('div')
        objE.innerHTML = arg
        return objE.childNodes
      },
      wxPay (jsonData) {
        if (typeof WeixinJSBridge === 'undefined') {
          if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false)
          } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady)
            document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady)
          }
        } else {
          this.onBridgeReady(jsonData)
        }
      } ,
      onBridgeReady (jsonData) {
        console.log('---jsonData----------')
        console.log(jsonData)
        const self = this
        if (WeixinJSBridge) {
          WeixinJSBridge.invoke(
            'getBrandWCPayRequest', {
              'appId': jsonData.appId,     		// 公众号名称，由商户传入
              'timeStamp': jsonData.timeStamp,     // 时间戳，自1970年以来的秒数
              'nonceStr': jsonData.nonceStr, 	// 随机串
              'package': jsonData.package,
              'signType': jsonData.signType,     // 微信签名方式：
              'paySign': jsonData.paySign 		// 微信签名
            },
            function (res) {
              console.log('---res:WeixinJSBridge------')
              console.log(res)
              if (res.err_msg === 'get_brand_wcpay_request:ok') {
                self.$router.push({name: 'payStatus', query: {'status': 1}})
              } else {
                console.log('---err:res.err_msg------')
                console.log(res.err_msg)
                WeixinJSBridge.log(res.err_msg)
                // console.log('失败')

                self.$router.push({name: 'payStatus', query: {'status': 2}})
              }
            }
          )
        }
      }
    },
    components: {
      // cmHeader
    },
    watch: {
      payForm (currVal, oldVal) {
        const self = this
        self.parseDom(currVal)[0].submit()
      }
    }
  }
</script>
