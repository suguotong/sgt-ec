<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .forgetPwd {
    height: 100%;
    background-color: map_get($colors, third);
    /*.forgetPwd-form {
      padding-top: 44px;
    }*/
    .weui_tab{
      height: auto;
      .weui_tab_bd{
        padding-bottom: 10px;
        .log-img-div{
          background-color: map_get($colors, third);
          padding: 45px 10px 5px 10px;
          text-align: center;
          .log-img{
            height: 100px;
          }
        }
        .weui_cells_form1{
          margin-top: 0px;
        }
      }
    }
    .weui_cells{
      margin-top: 1.17647059em;
      background-color: map_get($colors, third);
      line-height: 1.41176471;
      font-size: 17px;
      overflow: hidden;
      position: relative;
      .weui_cell_form{
        border-bottom: 1px solid map_get($colors, six);
      }
      .weui_cell_red{
        width: 100%;
        text-align: center;
        .weui-agree{
          width: 100%;
          .weui-agree_spn{
            font-size: 13px;
            a{
              color: map_get($colors, primary);
            }
          }
        }
      }
      .weui_cell{
        padding: 25px 0px 10px 0px;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        .weui_cell__hd{
          .weui_label{
            display: block;
            width: 105px;
            word-wrap: break-word;
            word-break: break-all;
            font-size: inherit;
            cursor: default;
          }
        }
        .weui_cell__bd{
          margin-left: 10px;
          .weui_input{
            width: 100%;
            border: 0;
            outline: 0;
            -webkit-appearance: none;
            background-color: transparent;
            font-size: inherit;
            color: inherit;
            height: 1.41176471em;
            line-height: 1.41176471;
          }
        }
        .weui_fgt_pwd{
          font-size: 13px;
          position: absolute;
          right: 15px;
          border-bottom: 1px solid map_get($colors, primary);
          width: 60px;
          .pwd_a{
            color:map_get($colors, primary);
          }
        }
        .weui_reg_mbe{
          font-size: 13px;
          .reg_a{
            color:map_get($colors, four);
          }
        }
        .weui_cell_spn{
          position: absolute;
          right: 2px;
        }
        .weui_cell_spn1{
          padding: 5px 12px 5px 12px;
          bottom: 8px;
          border-radius: 3px;
          background: map_get($colors, six);
          &.isGetCode {
            background: map_get($colors, primary);
          }
          a{
            color: map_get($colors, third);
            font-size: 15px;
          }
        }
      }
      .weui_cell_form2{
        padding: 15px;
      }
      .weui_cell_switch{
        padding-top: 6px;
        padding-bottom: 6px;
        .weui_cell_ft{
          text-align: right;
          color: map_get($colors, eight);
          .weui_switch{
            border-color:map_get($colors, primary);
            background-color: map_get($colors, primary);
          }
        }
      }
    }

    .weui_cells_form{
      margin: 6px;
      padding: 0px 10px 0px 10px;
    }

    .weui_cell:before{
      border-top: 0px solid map_get($colors, third);
    }
    .weui_cells_form:before{
      border-top: 0px solid map_get($colors, third);
    }
    .weui_cells_form:after{
      border-bottom: 0px solid map_get($colors, third);
    }

    .weui_cell_form1:before{
      border-top: 1px solid map_get($colors, six);
    }


    i.g-icon2 { width: 30px;height: 30px;}

    .button-row {
      padding: 0px 30px;
      height: 45px;
      margin-top: 25px;
      font-size: 17px;
      .join-submit {
        border: none;
        background: map_get($colors, six);
        color: map_get($colors, third);
        text-align: center;
        border-radius: 5px;
        line-height: 45px;
        display: block;
      }
      .isVaild{
        background: map_get($colors, primary);
      }
    }
    .button-row1{
      margin-top: 5px;
    }
    .button-row2{
      margin-top: 0px;
    }

    #pwd_show{
      display: none;
    }
  }
</style>
<template>
  <div class="forgetPwd">
    <!--<cm-header :hdTitle="hdTitle" ></cm-header>-->
    <form class="forgetPwd-form">
      <div class="weui_tab">
        <div class="weui_tab_bd">
          <!--注册-->
          <div class="weui_cells weui_cells_form">
            <div class="weui_cell weui_cell_form">
              <span><i class="g-icon2 icon-user"></i></span>
              <div class="weui_cell__bd">
                <input class="weui_input" type="text" v-model="loginName" @keyup="handleKeyUp" placeholder="请输入您的手机号" maxlength="11" pattern="1\d{10}" emptytips="请输入您的手机号" @blur="handleMobileCheck" >
              </div>
            </div>
            <div class="weui_cell weui_cell_form">
              <span><i class="g-icon2 icon-code"></i></span>
              <div class="weui_cell__bd">
                <input class="weui_input" type="text" v-model="mobileRegCode" @keyup="handleKeyUp" placeholder="请输入短信验证码"  maxlength="6" emptytips="请输入短信验证码" notmatchtips="请输入短信验证码">
              </div>
              <span class="weui_cell_spn weui_cell_spn1" :class="{ isGetCode:isGetCode }" @click="handleGetCode">
                <a href="javascript:;" class="join-submit">{{ codeTxt }}</a>
              </span>
            </div>
            <div class="weui_cell weui_cell_form">
              <span><i class="g-icon2 icon-pwd"></i></span>
              <div class="weui_cell__bd">
                <input class="weui_input" v-show="isShowPwd" v-model="loginPassword"  @keyup="handleKeyUp" type="text" placeholder="请设置6-20位密码" emptytips="请设置6-20位密码" notmatchtips="请设置6-20位密码" pattern="(?![\d]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}" @blur="handlePwdCheck" >
                <input class="weui_input" v-show="!isShowPwd" v-model="loginPassword"  @keyup="handleKeyUp" type="password" placeholder="请设置6-20位密码" emptytips="请设置6-20位密码" notmatchtips="请设置6-20位密码" pattern="(?![\d]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}" @blur="handlePwdCheck" >
              </div>
              <span class="weui_cell_spn" @click="handleShowPwd"><i :class="[isShowPwd ? 'g-icon2 g-icon-showPwd2' : 'g-icon2 icon-pwdShow']"></i></span>
            </div>
          </div>
          <!--注册-->
        </div>
        <div class="button-row button-row1">
          <a href="javascript:;" id="registerSubmitBtn" class="join-submit" :class="{ isVaild: isVaild }" @click="handleSubmit">{{ loadingTxt }}</a>
        </div>
      </div>
    </form>
  </div>
</template>
<script type="text/babel">
  import { apiServer } from '../../config'
  // import cmHeader from '../../components/header/index.vue'
  export default {
    data () {
      return {
        hdTitle: '找回密码',
        isShowPwd: true,
        loginName: '',
        loginPassword: '',
        mobileRegCode: '',
        agree: true,
        isVaild: false, // 是否验证通过
        isGetCode: false, // true 验证码按钮可点击 false 不可点击
        btn: false, // true 已经提交过， false没有提交过
        loadingTxt: '提交',
        codeTxt: '获取验证码'
      }
    },
    created () {
      // this.ajaxGetData()
      document.title = this.hdTitle
    },
    methods: {
      /**
       * 处理获取验证码按钮事件
       */
      handleGetCode () {
        const self = this
        if (self.isGetCode) {
          let url = `${apiServer}/p/member/sendMobileRegCode`
          let query = {
            'token': '',
            'versionCode': '1',
            'deviceId': '355848069264888',
            'deviceType': 'wx',
            'data': {
              'loginName': self.loginName,
              'type': 'forgotPass'
            }
          }
          self.ajaxHandleGetCode(url, query)
        }
      },
      ajaxHandleGetCode (url, query) {
        const self = this
        let timer
        let count = 60
        self.isGetCode = false
        self.codeTxt = '正在发送...'
        clearInterval(timer)
        // 成功回调
        let successCallback = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            self.$vux.toast.show({
              text: '验证码发送成功',
              isShowMask: true,
              width: '80%',
              type: 'text'
            })
            timer = setInterval(function () {
              count--
              if (count <= 0) {
                self.isGetCode = true
                self.codeTxt = '获取验证码'
              } else {
                self.codeTxt = `${count}后重新发送`
              }
            }, 1000)
          } else {
            self.$vux.toast.show({
              text: res.data.message,
              isShowMask: true,
              width: '80%',
              type: 'text'
            })
            self.isGetCode = true
            self.codeTxt = '获取验证码'
          }
        }
        // 失败回调
        let errCallback = () => {
          self.$vux.toast.show({
            text: '验证码发送失败',
            isShowMask: true,
            width: '80%',
            type: 'text'
          })
        }
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      /**
      * 处理验证错误
      */
      handleErr (e, errTxt, isGetCode) {
        const self = this
        let el = e.target
        let isValid = el.checkValidity()
        // console.log(isValid)
        if (!isValid) {
          self.isVaild = false
          if (isGetCode) {
            self.isGetCode = false
          }
          self.$vux.toast.show({
            text: errTxt,
            isShowMask: true,
            width: '80%',
            type: 'text'
          })
        } else {
          self.isVaild = true
          if (isGetCode) {
            self.isGetCode = true
          }
        }
      },
      /**
       * 处理手机号码验证
       */
      handleMobileCheck (e) {
        this.handleErr(e, '手机号码格式错误', true)
      },
      /**
       * 处理密码验证
       */
      handlePwdCheck (e) {
        this.handleErr(e, '由6-20位字符，数字和字母组成', false)
      },
      handleShowPwd () {
        const self = this
        self.isShowPwd = !self.isShowPwd
      },
      handleKeyUp () {
        const self = this
        // console.log(self.loginName)
        // console.log(self.loginPassword)
        // console.log(self.mobileRegCode)
        // console.log(self.loginName && self.loginPassword && self.mobileRegCode)
        if (self.loginName && self.loginPassword && self.mobileRegCode) {
          self.isVaild = true
        } else {
          self.isVaild = false
        }
      },
      /**
       * 处理登录成功失败后的状态
       */
      handleForgetPwdStatus (status, res) {
        const self = this
        let txt = ''
        if (status) {
          txt = '提交成功'
          self.$vux.toast.show({
            text: txt,
            isShowMask: true,
            width: '80%',
            type: 'text'
          })
          self.btn = true
          setTimeout(() => {
            self.$router.push({ name: 'login' })
          }, 2500)
        } else {
          if (res.data.message) {
            txt = res.data.message
          } else {
            txt = '提交失败'
          }
          self.btn = false
          self.$vux.toast.show({
            text: txt,
            isShowMask: true,
            width: '80%',
            type: 'text'
          })
        }
        self.isVaild = true
        self.loadingTxt = '提交'
      },
      handleSubmit () {
        const self = this
        if (self.btn) {
          return false
        }
        // console.log(self.username)
        // console.log(self.password)
        if (self.isVaild) {
          let url = `${apiServer}/p/member/forgetPassword`
          let query = {
            'token': '',
            'versionCode': '1',
            'deviceId': '355848069264888',
            'deviceType': 'wx',
            'data': {
              'loginName': self.loginName,
              'loginPasswordNew': self.loginPassword,
              'mobileRegCode': self.mobileRegCode
            }
          }
          // 禁止用户重复点击，同时提示登录中
          self.isVaild = false
          self.loadingTxt = '提交中...'
          // 成功回调
          let successCallback = (res) => {
            if (res.status === 200 && res.data.code === 0) {
              self.handleForgetPwdStatus(true, res)
            } else {
              self.handleForgetPwdStatus(false, res)
            }
          }
          // 失败回调
          let errCallback = () => {
            self.handleForgetPwdStatus(false)
          }
          self.$http.post(url, query).then(successCallback, errCallback)
        }
      }
    },
    components: {
      // cmHeader
    }
  }
</script>
