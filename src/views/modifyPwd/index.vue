<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  .weui_tab {
    .weui_tab_bd {
      padding-bottom: 10px;
      .log-img-div {
        background-color: map_get($colors, third);
        padding: 45px 10px 5px 10px;
        text-align: center;
        .log-img {
          height: 100px;
        }
      }
      .weui_cells_form1 {
        margin-top: 0px;
      }
    }
  }

  .weui_cells {
    margin-top: 1.17647059em;
    background-color: map_get($colors, third);
    line-height: 1.41176471;
    font-size: 17px;
    overflow: hidden;
    position: relative;
    .weui_cell_form {
      border-top: 1px solid map_get($colors, six);
    }
    .weui_cell_red {
      width: 100%;
      text-align: center;
      .weui-agree {
        width: 100%;
        .weui-agree_spn {
          font-size: 13px;
          a {
            color: map_get($colors, primary);
          }
        }
      }
    }
    .weui_cell {
      padding: 25px 0px 10px 0px;
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      .weui_cell__hd {
        .weui_label {
          display: block;
          width: 105px;
          word-wrap: break-word;
          word-break: break-all;
          font-size: inherit;
          cursor: default;
        }
      }
      .weui_cell__bd {
        margin-left: 10px;
        .weui_input {
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
      .weui_fgt_pwd {
        font-size: 13px;
        position: absolute;
        right: 15px;
        border-bottom: 1px solid map_get($colors, primary);
        width: 60px;
        .pwd_a {
          color: map_get($colors, primary);
        }
      }
      .weui_reg_mbe {
        font-size: 13px;
        .reg_a {
          color: map_get($colors, four);
        }
      }
      .weui_cell_spn {
        position: absolute;
        right: 2px;
      }
      .weui_cell_spn1 {
        padding: 5px 12px 5px 12px;
        bottom: 8px;
        background: map_get($colors, primary);
        border-radius: 3px;
        a {
          color: map_get($colors, third);
          font-size: 15px;
        }
      }
    }
    .weui_cell_form2 {
      padding: 15px;
    }
    .weui_cell_switch {
      padding-top: 6px;
      padding-bottom: 6px;
      .weui_cell_ft {
        text-align: right;
        color: #888;
        .weui_switch {
          border-color: map_get($colors, primary);
          background-color: map_get($colors, primary);
        }
      }
    }
  }

  .weui_cells_form {
    padding: 0px 15px;
  }

  .weui_cell:before {
    border-top: 0px solid map_get($colors, third);
  }

  .weui_cells_form:before {
    border-top: 0px solid map_get($colors, third);
  }

  .weui_cells_form:after {
    border-bottom: 0px solid map_get($colors, third);
  }

  .weui_cell_form1:before {
    border-top: 1px solid #d9d9d9;
  }

  i.g-icon2 {
    width: 30px;
    height: 30px;
  }

  .button-row {
    padding: 0px 30px;
    height: 45px;
    margin-top: 25px;
    font-size: 17px;
    .join-submit {
      background: map_get($colors, six);
      width: 100%;
      padding: 11px 0px 8px 0px;
      position: fixed;
      bottom: 0px;
      left: 0px;
      text-align: center;
      font-size: 18px;
      color: #fff;
      border-top: 1px solid #ccc;
      &.isVaild {
        background: map_get($colors, primary);
      }
    }
    .mdy-submit {
      background: map_get($colors, primary);
    }
  }

  .button-row1 {
    margin-top: 5px;
  }

  .button-row2 {
    margin-top: 0px;
  }

  #pwd_show {
    display: none;
  }

  /*.modifyPswForm {
    padding-top: 44px;
  }*/
</style>
<template>
  <div>
    <!--<cm-header :hdTitle="hdTitle"></cm-header>-->
    <form id="form" class="modifyPswForm">
      <div class="weui_tab">
        <div class="weui_tab_bd">
          <!--修改密码-->
          <div class="weui_cells weui_cells_form weui_cells_form1">
            <div class="weui_cell">
              <span><i class="g-icon2 icon-pwd"></i></span>
              <div class="weui_cell__bd">
                <input class="weui_input" type="password" placeholder="请输入原密码" v-show="isShowOldPwd"
                       @blur="handleLoginPasswordBlur"   v-model="loginPassword" pattern="(?![\d]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}">
                <input class="weui_input" type="text" placeholder="请输入原密码" v-show="!isShowOldPwd" @blur="handleLoginPasswordBlur"
                       v-model="loginPassword" pattern="(?![\d]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}">
              </div>
              <span class="weui_cell_spn"><i :class="[isShowOldPwd ? 'g-icon2 icon-pwdShow' : 'g-icon2 g-icon-showPwd2']" @click="handleOldPwd"></i></span>
            </div>
            <div class="weui_cell weui_cell_form">
              <span><i class="g-icon2 icon-pwd"></i></span>
              <div class="weui_cell__bd">
                <input class="weui_input" type="password" placeholder="请设置6-20位新密码" v-show="isShowNewPwd" @blur="handleLoginPasswordNewBlur"
                       v-model="loginPasswordNew" pattern="(?![\d]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}">
                <input class="weui_input" type="text" placeholder="请设置6-20位新密码" v-show="!isShowNewPwd" @blur="handleLoginPasswordNewBlur"
                       v-model="loginPasswordNew" pattern="(?![\d]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}">
              </div>
              <span class="weui_cell_spn"><i :class="[isShowNewPwd ? 'g-icon2 icon-pwdShow' : 'g-icon2 g-icon-showPwd2']" @click="handleNewPwd"></i></span>
            </div>
          </div>
          <!--修改密码-->
        </div>
        <div class="button-row button-row2">
          <a href="javascript:;" class="join-submit" :class="{ isVaild: isVaild }" @click="handleSubmit">{{ loadingTxt }}</a>
        </div>
      </div>
    </form>
  </div>
</template>
<script type="text/babel">
  import {apiServer} from '../../config'
  import {mapState, mapActions} from 'vuex'
  import { USER_SIGNOUT } from '../../store/login'
  // import cmHeader from '../../components/header/index.vue'
  export default {
    data () {
      return {
        hdTitle: '修改密码',
        isShowOldPwd: true,
        isShowNewPwd: true,
        isVaild: false,
        loginPassword: '',
        loginPasswordNew: '',
        regOldPwd: {},
        loadingTxt: '提交',
        btn: false, // true 已经提交过， false没有提交过
        isLoginPassword: false,
        isLoginPasswordNew: false
      }
    },
    created () {
      document.title = this.hdTitle
    },
    computed: mapState({ login: state => state.login }),
    methods: {
      ...mapActions([USER_SIGNOUT]),
      handleOldPwd () {
        const self = this
        self.isShowOldPwd = !self.isShowOldPwd
      },
      handleNewPwd () {
        const self = this
        self.isShowNewPwd = !self.isShowNewPwd
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
      handleSubmit () {
        const self = this
        if (self.btn) {
          return false
        }
        if (self.isVaild) {
          let url = `${apiServer}/p/member/changePassword`
          let query = {
            'token': self.login.token,
            'versionCode': '1',
            'deviceId': '355848069264888',
            'deviceType': 'wx',
            'data': {
              'loginPassword': self.loginPassword,
              'loginPasswordNew': self.loginPasswordNew
            }
          }
          // 禁止用户重复点击，同时提示登录中
          self.isValid = false
          self.loadingTxt = '提交中...'
          // 成功回调
          let successCallback = (res) => {
            if (res.status === 200 && res.data && res.data.code === 0) {
              self.handleError('密码设置成功')
              self.USER_SIGNOUT()
              setTimeout(() => {
                self.$router.push({ name: 'login' })
              }, 2500)
            } else {
              self.handleError(res.data.message)
              if (res.data.code == 4131) {
                setTimeout(function () {
                  self.$router.push({ name: 'login' })
                }, 2500)
              }
              self.isValid = true
              self.loadingTxt = '提交'
            }
          }
          // 失败回调
          let errCallback = () => {
            self.handleError('操作失败')
            self.isValid = true
            self.loadingTxt = '提交'
          }
          self.$http.post(url, query).then(successCallback, errCallback)
        }
      },
      handleLoginPasswordBlur () {
        this.checkLoginPassword(this.loginPassword, true)
      },
      checkLoginPassword (val, isShowErr) {
        // console.log()
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
      handleLoginPasswordNewBlur () {
        this.checkLoginPasswordNew(this.loginPasswordNew, true)
      },
      checkLoginPasswordNew (val, isShowErr) {
        let reg = /^(?![\d]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}$/
        let msg = '密码由6-20位字符，数字和字母组成'
        // 校验密码格式
        if (reg.test(val)) {
          this.isLoginPasswordNew = true
        } else {
          this.isLoginPasswordNew = false
          if (isShowErr) {
            this.handleError(msg)
          }
        }
      },
      // 校验提交按钮是否置灰
      isSubmitBtnDisabled () {
        // console.log(this.isLoginPassword)
        // console.log(this.isLoginPasswordNew)
        if (this.isLoginPassword && this.isLoginPasswordNew) {
          this.isVaild = true
        } else {
          this.isVaild = false
        }
      }
    },

    watch: {
      loginPassword (currVal) {
        this.checkLoginPassword(currVal)
      },
      loginPasswordNew (currVal) {
        this.checkLoginPasswordNew(currVal)
      },
      isLoginPassword () {
        this.isSubmitBtnDisabled()
      },
      isLoginPasswordNew () {
        this.isSubmitBtnDisabled()
      }
    },
    components: {
      // cmHeader
    }
  }
</script>
