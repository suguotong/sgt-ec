<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .login {
    height: 100%;
    background-color: map_get($colors, third);
    /*.login-form {
      padding-top: 44px;
    }*/
    .weui_tab{
      height: auto;
      .weui_tab_bd{
        padding-bottom: 10px;
        .log-img-div{
          background-color: map_get($colors, third);
          padding: 40px 10px 5px 10px;
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
      .w100 {
        width: 100%;
        padding-right: 40px;
      }
      .weui_cell_form{
        border-top: 1px solid map_get($colors, six);
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
          background: map_get($colors, primary);
          border-radius: 3px;
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
      .join-submit_col{
        background: map_get($colors, primary);
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
  <div class="login">
    <!--<cm-header :hdTitle="hdTitle"></cm-header>-->
    <form class="login-form">
      <div class="weui_tab">
        <div class="weui_tab_bd">
          <div class="log-img-div">
            <img class="log-img" src="../../assets/images/logo.png" alt="">
          </div>
          <!--登录-->
          <div class="weui_cells weui_cells_form">
            <div class="weui_cell">
              <span><i class="g-icon2 icon-user"></i></span>
              <div class="weui_cell__bd w100">
                <input class="weui_input" id="username" v-model="username" @keyup="handleKeyUp" type="text" placeholder="手机号/用户名/邮箱" emptytips="请输入用户账号">
              </div>
            </div>
            <div class="weui_cell weui_cell_form">
              <span><i class="g-icon2 icon-pwd"></i></span>
              <div class="weui_cell__bd  w100">

                <input class="weui_input" v-show="!isShowPwd" @keyup="handleKeyUp" v-model="password" type="password"  placeholder="请输入密码" emptytips="请输入密码" notmatchtips="请输入密码" >
                <input class="weui_input"  v-show="isShowPwd" @keyup="handleKeyUp" v-model="password" type="text"  placeholder="请输入密码" emptytips="请输入密码" notmatchtips="请输入密码" >
              </div><!--
              <div class="weui_cell__bd" id="pwd_show">
                <input class="weui_input" id="pwd_show_put"  type="text" required=""  maxlength="20" placeholder="请输入密码" emptytips="请输入密码" notmatchtips="请输入密码" >
              </div>-->
              <span class="weui_cell_spn" @click="handleShowPwd"><i :class="[isShowPwd ? 'g-icon2 g-icon-showPwd2' : 'g-icon2 icon-pwdShow']"></i></span>
            </div>
            <div class="weui_cell weui_cell_form">
              <div class="weui_cell__hd weui_reg_mbe">
                <router-link class="reg_a" :to="{ name: 'register' }">免费注册</router-link>
              </div>
              <div class="weui_cell__bd weui_fgt_pwd">
                <a class="pwd_a" href="javascript:;" @click="handleForgetPwd">忘记密码</a>
              </div>
            </div>
          </div>
          <!--登录-->
        </div>
        <div class="button-row">
          <!--<input type="submit" id="loginSubmitBtn"  class="join-submit" v-if="$validatorLogin.valid">-->
          <a href="javascript:;" id="loginSubmitBtn" @click="handleSubmit" class="join-submit" :class="{ isVaild: isVaild }">{{ loadingTxt }}</a>
        </div>
      </div>
    </form>
  </div>
</template>
<script type="text/babel">
  import { apiServer } from '../../config'
  import { mapActions } from 'vuex'
  import { USER_SIGNIN } from '../../store/login'
  // import cmHeader from '../../components/header/index.vue'
  export default {
    data () {
      return {
        hdTitle: '登录',
        username: '',
        password: '',
        isShowPwd: false,
        isVaild: false, // 是否验证通过
        btn: false, // true 已经提交过， false没有提交过
        loadingTxt: '登录'
      }
    },
    created () {
      document.title = this.hdTitle
      this.createDeviceId()
      this.$vux.toast.hide()
      // this.ajaxGetData()
    },
    methods: {
      ...mapActions([USER_SIGNIN]),
      handleShowPwd () {
        // console.log(111)
        const self = this
        self.isShowPwd = !self.isShowPwd
      },
      handleKeyUp () {
        const self = this
        // console.log(1111)
        if (self.username && self.password) {
          self.isVaild = true
        } else {
          self.isVaild = false
        }
      },
      /**
       * 处理登录成功失败后的状态
       */
      handleLoginStatus (status, res) {
        const self = this
        let txt = ''
        if (status) {
          if (res) {
            self.USER_SIGNIN(res.data.data)
            if (self.$route.query.redirect) {
              self.$route.params.token = res.data.data.token
              self.$router.push({ name: `${self.$route.query.redirect}`, query:self.$route.query.query, params: self.$route.params })
            } else {
              self.$router.push({ name: 'index' })
            }
          }
          self.btn = true
        } else {
          if (res.data.message || res.data.msg) {
            txt = res.data.message ? res.data.message : res.data.msg
          } else {
            txt = '登录失败'
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
        self.loadingTxt = '登录'
      },
      /**
       * 处理忘记密码
       */
      handleForgetPwd () {
        const self = this
        let isFreeze = parseInt(self.$store.state.login.isFreeze)
        if (isFreeze === 1) {
          self.$vux.toast.show({
            text: '由于安全原因，你的账号被暂停使用，请联系XXXX-XXX-XXX协调解决',
            isShowMask: true,
            width: '80%',
            type: 'text'
          })
        } else {
          self.$router.push({ name: 'forgetPwd' })
        }
      },
      // 生成唯一设备id
      createDeviceId () {
        let date = new Date().getTime()
        let random = parseInt(Math.random() * 100000)
        return `${date}${random}`
      },
      handleSubmit () {
        const self = this
        if (self.btn) {
          return false
        }
        let deviceId = self.createDeviceId()
        // console.log(self.username)
        // console.log(self.password)
        if (self.isVaild) {
          let url = `${apiServer}/p/login`
          let query = {
            'token': '',
            'versionCode': '1',
            'deviceId': deviceId,
            'deviceType': 'wx',
            'data': {
              'loginName': self.username,
              'loginPassword': self.password
            }
          }
          // 禁止用户重复点击，同时提示登录中
          self.isVaild = false
          self.loadingTxt = '登录中...'
          // 成功回调
          let successCallback = (res) => {
            if (res.status === 200 && res.data.code === 0) {
              if (parseInt(res.data.data.isFreeze) === 1) {
                self.$vux.toast.show({
                  text: '由于安全原因，你的账号被暂停使用，请联系XXXX-XXX-XXX协调解决',
                  isShowMask: true,
                  width: '80%',
                  type: 'text'
                })
              } else {
                self.handleLoginStatus(true, res)
              }
            } else {
              self.handleLoginStatus(false, res)
            }
          }
          // 失败回调
          let errCallback = () => {
            self.handleLoginStatus(false)
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
