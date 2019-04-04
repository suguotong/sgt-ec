<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .register {
    height: 100%;
    background-color: map_get($colors, third);
    /* .register-form {
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


    i.g-icon2, i.g-icon5 { width: 30px;height: 30px;}

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
  <div class="register">
    <!--<cm-header :hdTitle="hdTitle" ></cm-header>-->
    <form class="register-form">
      <div class="weui_tab">
        <div class="weui_tab_bd">
          <!--提交-->
          <div class="weui_cells weui_cells_form">
            <div class="weui_cell weui_cell_form">
              <span><i class="g-icon2 icon-user"></i></span>
              <div class="weui_cell__bd ">
                <input class="weui_input" type="text" v-model="loginName" placeholder="请输入您的手机号" maxlength="11" pattern="1\d{10}" emptytips="请输入您的手机号" @blur="handleLoginNameBlur" >
              </div>
            </div>
            <div class="weui_cell weui_cell_form">
              <span><i class="g-icon5 icon-validation"></i></span>
              <div class="weui_cell__bd">
                <input class="weui_input" type="text" v-model="kaptcha" placeholder="请输入验证码"  maxlength="4" pattern="/^\d{4}$/" emptytips="请输入验证码" notmatchtips="请输入验证码" @blur="handleKaptchaBlur" >
              </div>
              <div class="weui_cell_ft" @click="getImgCode">
                <img :src="imgCode">
              </div>
            </div>
            <div class="weui_cell weui_cell_form">
              <span><i class="g-icon2 icon-code"></i></span>
              <div class="weui_cell__bd">
                <input class="weui_input" type="text" v-model="mobileRegCode" placeholder="请输入短信验证码"  maxlength="6" emptytips="请输入短信验证码" @blur="handleMobileRegCodeBlur" notmatchtips="请输入短信验证码">
              </div>
              <span class="weui_cell_spn weui_cell_spn1" :class="{ isGetCode:isGetCode }" @click="handleGetCode">
                <a href="javascript:;" class="join-submit">{{ codeTxt }}</a>
              </span>
            </div>
            <div class="weui_cell weui_cell_form">
              <span><i class="g-icon2 icon-pwd"></i></span>
              <div class="weui_cell__bd">
                <input class="weui_input" v-show="isShowPwd" v-model="loginPassword" type="text" placeholder="请设置6-20位密码" emptytips="请设置6-20位密码" notmatchtips="请设置6-20位密码" maxlength="20" pattern="(?![\d]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}" @blur="handleLoginPasswordBlur" >
                <input class="weui_input" v-show="!isShowPwd" v-model="loginPassword" type="password" placeholder="请设置6-20位密码" emptytips="请设置6-20位密码" notmatchtips="请设置6-20位密码" maxlength="20" pattern="(?![\d]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}" @blur="handleLoginPasswordBlur" >
              </div>
              <span class="weui_cell_spn" @click="handleShowPwd"><i  :class="[isShowPwd ? 'g-icon2 g-icon-showPwd2' : 'g-icon2 icon-pwdShow']"></i></span>
            </div>
          </div>
          <!--提交-->
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
        isVaild: false, // 是否验证通过
        isGetCode: false, // true 短信验证码按钮可点击 false 不可点击
        btn: false, // true 已经提交过， false没有提交过
        loadingTxt: '提交',
        codeTxt: '获取短信验证码',
        imgCode: '', // 图片验证码
        count: 0,
        kaptcha: null,
        isInitKaptcha: true,
        isLoginName: false, // 手机号码是否正确
        isKaptcha: false, // true 图片验证码通过 false 失败
        isMobileRegCode: false, // 手机验证码
        isLoginPassword: false
      }
    },
    created () {
      // this.ajaxGetData()
      document.title = this.hdTitle
      this.getImgCode() // 获取图片验证码
    },
    methods: {
      /**
       * 获取图片验证码
       */
      getImgCode () {
        let random = Math.floor(Math.random()*100)
        let code = `${apiServer}/kaptcha.jpg?${random}`
        // console.log(code)
        this.imgCode = code
      },
      /**
       * 图片验证码校验
       */
      ajaxHandleImgCode () {
        const self = this
        let url = `${apiServer}/p/member/checkKaptcha`
        let query = {
          'token': '',
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'kaptcha': self.kaptcha
          }
        }
        // 成功回调
        let successCallback = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            self.isKaptcha = true
          } else {
            self.isKaptcha = false
            self.handleError(res.data.message)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.isKaptcha = false
          self.handleError('验证码错误')
        }
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      /**
       * 获取短信验证码
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
      /**
       * ajax获取短信验证码
       */
      ajaxHandleGetCode (url, query) {
        const self = this
        let timer
        self.count = 60
        self.isGetCode = false
        self.codeTxt = '正在发送...'
        clearInterval(timer)
        // 成功回调
        let successCallback = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            self.handleError('验证码发送成功')
            timer = setInterval(function () {
              self.count--
              if (self.count <= 0) {
                self.isGetCode = true
                self.codeTxt = '获取短信验证码'
              } else {
                self.codeTxt = `${self.count}后重新发送`
              }
            }, 1000)
          } else {
            self.count = 0
            self.handleError(res.data.message)
            self.isGetCode = true
            self.codeTxt = '获取短信验证码'
          }
        }
        // 失败回调
        let errCallback = () => {
          self.count = 0
          self.isGetCode = true
          self.codeTxt = '获取短信验证码'
          self.handleError('获取短信验证码失败')
        }
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      /**
       * 错误弹窗提示
       */
      handleError (msg) {
        const self = this
        self.$vux.toast.show({
          text: msg,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
      },
      /**
       * 密码显示隐藏
       */
      handleShowPwd () {
        const self = this
        self.isShowPwd = !self.isShowPwd
      },
      /**
       * 处理登录成功失败后的状态
       */
      handleForgetPwdStatus (status, res) {
        const self = this
        let txt = ''
        if (status) {
          if (res) {
            txt = '保存成功'
            setTimeout(() => {
              self.$router.push({ name: 'login' })
            }, 2500)
          }
          self.btn = true
        } else {
          if (res.data.message) {
            txt = res.data.message
          } else {
            txt = '失败'
          }
          self.btn = false
        }
        self.handleError(txt)
        self.isVaild = true
        self.loadingTxt = '提交'
      },
      /**
       * 提交表单
       */
      handleSubmit () {
        const self = this
        if (self.btn) {
          return false
        }
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
              if (res.data.data && parseInt(res.data.data.isFreeze) === 1) {
                self.handleError('由于安全原因，你的账号被暂停使用，请联系XXXX-XXX-XXX协调解决')
              } else {
                self.handleForgetPwdStatus(true, res)
              }
            } else {
              self.handleForgetPwdStatus(false, res)
            }
          }
          // 失败回调
          let errCallback = () => {
            self.handleLoginStatus(false)
          }
          self.$http.post(url, query).then(successCallback, errCallback)
        }
      },
      /**
       * 处理手机号码验证
       */
      handleLoginNameBlur () {
        this.checkLoginName(this.loginName, true)
      },
      checkLoginName (val, isShowErr) {
        let reg = /^1\d{10}$/
        let msg = '手机号码格式不正确'
        // 校验手机号码
        if (reg.test(val)) {
          this.isLoginName = true
        } else {
          this.isLoginName = false
          if (isShowErr) {
            this.handleError(msg)
          }
        }
      },
      handleKaptchaBlur () {
        this.checkKaptcha(this.kaptcha, true)
      },
      checkKaptcha (val, isShowErr) {
        let reg = /^\d{4}$/
        let msg = '验证码为4位正整数'
        // 校验图片验证码
        if (reg.test(val)) {
          this.ajaxHandleImgCode()
        } else {
          this.isKaptcha = false
          if (isShowErr) {
            this.handleError(msg)
          }
        }
      },
      handleMobileRegCodeBlur () {
        this.checkMobileRegCode(this.mobileRegCode, true)
      },
      checkMobileRegCode (val, isShowErr) {
        let reg = /^\d{6}$/
        let msg = '短信验证码为6位正整数'
        // 校验密码格式
        if (reg.test(val)) {
          this.isMobileRegCode = true
        } else {
          this.isMobileRegCode = false
          if (isShowErr) {
            this.handleError(msg)
          }
        }
      },
      handleLoginPasswordBlur () {
        this.checkLoginPassword(this.loginPassword, true)
      },
      checkLoginPassword (val, isShowErr) {
        let reg = /^(?![\d]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}$/
        let msg = '密码由6-20位字符，数字和字母组成'
        // 校验密码格式
        if (reg.test(val)) {
          this.isLoginPassword = true
        } else {
          this.isLoginPassword = false
          if (isShowErr) {
            this.handleError(msg)
          }
        }
        // console.log('----isLoginPassword----')
        // console.log(this.isLoginPassword)
      },
      // 获取短信验证码按钮是否置灰
      isCodeBtnDisabled () {
        if (this.isLoginName && this.isKaptcha && this.count === 0) {
          this.isGetCode = true
        } else {
          this.isGetCode = false
        }
      },
      // 校验提交按钮是否置灰
      isSubmitBtnDisabled () {
        if (this.isLoginName && this.isKaptcha && this.isMobileRegCode && this.isLoginPassword) {
          this.isVaild = true
        } else {
          this.isVaild = false
        }
      }
    },
    watch: {
      loginName (currVal) {
        this.checkLoginName(currVal)
      },
      kaptcha (currVal) {
        this.checkKaptcha(currVal)
      },
      mobileRegCode (currVal) {
        this.checkMobileRegCode(currVal)
      },
      loginPassword (currVal) {
        this.checkLoginPassword(currVal)
      },
      isLoginName (currVal) {
        this.isCodeBtnDisabled()
        this.isSubmitBtnDisabled()
      },
      isKaptcha (currVal) {
        this.isCodeBtnDisabled()
        this.isSubmitBtnDisabled()
      },
      isMobileRegCode () {
        this.isSubmitBtnDisabled()
      },
      isLoginPassword () {
        this.isSubmitBtnDisabled()
      }
    },
    components: {
      // cmHeader
    }
  }
</script>
