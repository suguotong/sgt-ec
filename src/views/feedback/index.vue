<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .feedback {
    .txt {
      padding: 15px;
      textarea {
        width: 100%;
        height: 200px;
        line-height: 1.5;
        font-size: map_get($fontSize, primary);
        box-sizing: border-box;
        padding: 5px;
        border-radius: 5px;
        border:1px solid map_get($colors, six);
        outline:none;resize:none;
      }
    }
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
  }
</style>
<template>
  <div class="feedback">
    <div class="txt">
      <textarea placeholder="请输入您的宝贵意见" v-model="feedback" maxlength="200" onpaste="return false" ></textarea>
    </div>
    <div class="button-row">
      <!--<input type="submit" id="loginSubmitBtn"  class="join-submit" v-if="$validatorLogin.valid">-->
      <a href="javascript:;" id="loginSubmitBtn" @click="handleSubmit"  class="join-submit" :class="{ isVaild: isVaild }">提交</a>
    </div>
  </div>
</template>
<script type="text/babel">
  import {apiServer} from '../../config'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        hdTitle: '意见反馈',
        feedback: '',
        isVaild: false, // 是否验证通过
        btn: false // true 已经提交过， false没有提交过
      }
    },
    created () {
      document.title = this.hdTitle
    },
    computed: mapState({
      login: state => state.login
    }),
    methods: {
      // 禁止以下字符输入
      cleanSpelChar (th) {
        if (/["'<>%;)(&+]/.test(th.value)) {
          th.value = th.value.replace(/["'<>%;)(&+]/,"");
        }
      },
      handleKeyUp (ev) {
        /*const self = this
        self.cleanSpelChar(ev.target);

        if (self.feedback.length>0) {
          self.isVaild = true
        } else {
          self.isVaild = false
        }*/
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
          let url = `${apiServer}/p/help/saveFeedback`
          let query = {
            'token': self.login.token,
            'versionCode': '1',
            'deviceId': '355848069264888',
            'deviceType': 'wx',
            'data': {
              'suggestion': self.feedback
            }
          }
          // 禁止用户重复点击，同时提示登录中
          self.isVaild = false
          self.loadingTxt = '提交中...'
          // 成功回调
          // 成功回调
          let successCallback = (res) => {
            if (res.status === 200 && res.data && res.data.code === 0) {
              self.handleError('提交成功')
              self.isVaild = true
              self.loadingTxt = '提交'
              setTimeout(() => {
                self.$router.push({name: 'home'})
              }, 2500)
            } else {
              self.handleError(res.data.message ? res.data.message : res.data.msg)
              if (res.data.code == 4131) {
                setTimeout(function () {
                  self.$router.push({ name: 'login' })
                }, 2500)
              }
              self.isVaild = true
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
      }
    },
    watch: {
      feedback (curr) {
        this.cleanSpelChar(curr)
        if (curr.length>0) {
          this.isVaild = true
        } else {
          this.isVaild = false
        }
      }
    }
  }
</script>
