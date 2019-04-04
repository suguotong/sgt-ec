<template>
  <div class="account" v-if="isLoading">
    <div class="note">需要通过银行汇款进行支付，请汇入如下账户</div>
    <div class="mess">
      <div class="list">
        <span class="left">开户银行</span>
        <span class="name">{{paramsData.offpayAccount.bankName}}</span>
        <button :data-clipboard-text="paramsData.offpayAccount.bankName" class="copyBtn weui_btn_mini weui_btn_plain_primary">复制</button>
      </div>
      <div class="list">
        <span class="left">开户名</span>
        <span class="name">{{paramsData.offpayAccount.accountName}}</span>
        <button :data-clipboard-text="paramsData.offpayAccount.accountName" class="copyBtn weui_btn_mini weui_btn_plain_primary">复制</button>
      </div>
      <div class="list">
        <span class="left">银行账号</span>
        <span class="name">{{paramsData.offpayAccount.bankAccountNumber}}</span>
        <button :data-clipboard-text="paramsData.offpayAccount.bankAccountNumber" class="copyBtn weui_btn_mini weui_btn_plain_primary">复制</button>
      </div>
    </div>

    <div @click="nextWay" class="nextBtn">
      下一步
    </div>
  </div>
</template>

<script type="text/babel">
  import Clipboard from 'clipboard'
  import { mapState } from 'vuex'
  import { apiServer } from '../../config'
  export default {
    data() {
      return {
        paramsData: {},
        isLoading: false
      }
    },
    computed: mapState({
      login: state => state.login
    }),
    created() {
      document.title = '线下付款'
      this.ajaxGetOffPayAccount()
      let clipboard = new Clipboard('.copyBtn')
      clipboard.on('success', (e) => {
        this.$vux.toast.show({
          type: 'text',
          text: '复制成功',
          position: 'bottom'
        })
      })
      clipboard.on('error', () => {
        this.$vux.toast.show({
          type: 'text',
          text: '复制失败',
          position: 'bottom'
        })
      })
    },
    methods: {
      handleError (errMsg) {
        const self = this
        self.$vux.toast.show({
          text: errMsg,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
      },
      ajaxGetOffPayAccount () {
        const self = this
        const url = `${apiServer}/p/order/getOffPayAccount`
//          console.log(params)
        const params = {
          'token': self.login.token,
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': self.$route.query
        }
        self.$http.post(url, params).then((res) => {
//            console.log(res.body)
          if(res.body.code == 0) {
            self.paramsData = res.body.data
            self.paramsData.token = self.login.token
            self.isLoading = true
          }else {
            self.handleError(res.data.message ? res.data.message : res.data.msg)
          }
          self.isHasSubmit = false
        },(err) => {
          self.handleError('请求失败！')
          self.isHasSubmit = false
        })
      },
      nextWay() {
        const self = this
        console.log(self.paramsData)
        this.$router.push({
          name: 'payVoucher',
          query: {
            orderCode: self.paramsData.orderCode,
            totalAmount: self.paramsData.totalAmount
          }
        })
      }
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  @import "../../assets/themes/variables";

  .account {
    margin-top: 10px;
    .note {
      height: 30px;
      line-height: 30px;
      padding-left: 15px;
      background-color: #fef3f3;
      font-size: 12px;
      color: #999;
    }
    .mess {
      background-color: #fff;
      padding-left: 10px;
      padding-right: 10px;
      .list {
        @extend %fatherFlex;
        position: relative;
        height: 44px;
        line-height: 44px;
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
        &:last-child:after {
          border-bottom:none;
        }
        .left {
          color: #666;
          width: 85px;
        }
        .name {
          width: 220px;
        }
        .copyBtn {
          width: 40px;
          height: 20px;
          padding: 0;
          line-height: 20px;
          text-align: center;
          color: #666;
          border-color: #ccc;
          font-size: 12px;
          border-radius: 4px;
          margin-top: 12px;
        }
      }
    }
    .nextBtn {
      position: fixed;
      left: 0;
      bottom: 0;
      height: 50px;
      line-height: 50px;
      background-color: #cb1e1e;
      color: #fff;
      font-size: 16px;
      text-align: center;
      width: 100%;
    }
  }
</style>
