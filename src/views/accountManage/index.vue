<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .account-manage-box {
    height: 100%;
    /*.accountManage {
      padding-top: 44px;
    }*/

    .accountManage .leftList {
      color: map_get($colors, four);
    }

    .accountManage .leftList .listPoint:after {
      content: " ";
      display: inline-block;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      height: 6px;
      width: 6px;
      border-width: 2px 2px 0 0;
      border-color: map_get($colors, six);
      border-style: solid;
      position: relative;
      top: -2px;
      top: -1px;
      margin-left: .3em;
    }
    .exitBtn{
      width:100%;
      padding:11px 0px 8px 0px;
      background: map_get($colors, primary);
      position: fixed;
      bottom: 0px;
      left: 0px;
      text-align: center;
      font-size: map_get($fontSize, four);
      color: map_get($colors, third);
      border-top: 1px solid map_get($colors, six);
      &.disabled {
        background-color: map_get($colors, six);
      }
    }
  }
</style>
<template>
  <div class="account-manage-box">
    <!--<cm-header :hdTitle="hdTitle"></cm-header>-->
    <scroller>
    <div class="accountManage">
      <div class="weui_panel weui_panel_access">
        <div class="weui_cell leftList">
          <div class="weui_cell_bd weui_cell_primary">
            <p>帐户名</p>
          </div>
          <div class="weui_cell_ft">{{ login.loginName }}</div>
        </div>
        <div class="weui_cell leftList">
          <div class="weui_cell_bd weui_cell_primary">
            <p>账户类型</p>
          </div>
          <div class="weui_cell_ft" >{{ corpType }}</div>
        </div>
        <div class="weui_cell leftList">
          <div class="weui_cell_bd weui_cell_primary">
            <p>手机号</p>
          </div>
          <div class="weui_cell_ft">{{ login.mobilePhone }}</div>
        </div>
      </div>
      <div class="weui_panel weui_panel_access">
        <router-link :to="{name:'modifyPwd'}" class="weui_cell leftList">
          <div class="weui_cell_bd weui_cell_primary">
            <p>修改密码</p>
          </div>
          <div class="weui_cell_ft listPoint"></div>
        </router-link>
      </div>
    </div>
    </scroller>
    <a href="javascript:;" class="exitBtn" :class="{ disabled:isDisabled }" @click="handleExitBtn">{{ exitTxt }}</a>
  </div>
</template>
<script type="text/babel">
  import { mapState, mapActions } from 'vuex'
  import { USER_SIGNOUT } from '../../store/login'
  import { apiServer } from '../../config'
  export default {
    created () {
      this.corpTypeNum = this.login.corpType
      if (this.corpTypeNum === 1) {
        this.corpType = '个人'
      } else {
        this.corpType = '企业'
      }
      /* if (this.corpTypeNum === 1) {
        this.corpType = '个人'
      } else if (this.corpTypeNum === 2) {
        this.corpType = '原料商'
      } else if (this.corpTypeNum === 3) {
        this.corpType = '制造商'
      } else if (this.corpTypeNum === 4) {
        this.corpType = '分销商'
      } else if (this.corpTypeNum === 5) {
        this.corpType = '零售商'
      } */
document.title = this.hdTitle
    },
    data () {
      return {
        hdTitle: '账户管理',
        corpTypeNum: '',
        corpType: '',
        cancelTxt: '取消',
        isDisabled: false,
        exitTxt: '退出',
        menus: {
          menu1: '确认要退出登录吗？',
          menu2: '退出登录'
        }
      }
    },
    computed: mapState({ login: state => state.login }),
    methods: {
      ...mapActions([USER_SIGNOUT]),
      handleError (res) {
        const self = this
        self.$vux.toast.show({
          text: res.msg ? res.msg : res.message,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
        if (String(res.code) === '4131' || String(res.code) === '400') {
          setTimeout(function () {
            self.$router.push({ name: 'login' })
          }, 2000)
        }
      },
      ajaxLogout () {
        const self = this
        const url = `${apiServer}/p/logout`
        let query = {
          'token': self.login.token ? self.login.token : '',
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx'
        }
        self.isDisabled = true
        self.exitTxt = '正在退出登录...'
        // 成功回调
        let successCallback = (res) => {
          self.isDisabled = false
          self.exitTxt = '退出登录'
          if (res.status === 200 && res.data && res.data.code === 0) {
            self.USER_SIGNOUT()
            self.$router.push({ name: 'login' })
          } else {
            self.handleError(res.data)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.$vux.loading.hide()
          self.handleError('操作失败')
        }
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      handleExitBtn () {
        const self=this
        this.$vux.confirm.show({
          content: '<p style="text-align:center">确认要退出登录吗？</p>',
          onCancel () {

          },
          onConfirm () {
            self.ajaxLogout()
          }
        })
      }
    },
    components: {
    }
  }
</script>












