<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
</style>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  .bigBox {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .weui_dialog_confirm .weui_dialog .weui_dialog_bd {
    text-align: center;
  }
</style>
<template>
  <div v-if="detail" style="height: 100%">
    <div class="bigBox" v-if="detail.priceType == 1">
      <index-skugood></index-skugood>
    </div>
    <div class="bigBox" v-else="detail.priceType !== 1">
      <index-numgood></index-numgood>
    </div>
  </div>
</template>
<script type="text/babel">
  import {apiServer} from '../../config'
  import indexNumgood from './indexNumgood.vue'
  import indexSkugood from './indexSkugood.vue'
  import {mapState,mapActions} from 'vuex'
  export default {
    components: {
      indexNumgood,
      indexSkugood
    },
    created () {
      let query = this.$route.query
      const req = {
        'token': this.login.token,
        'versionCode': '1',
        'deviceId': '355848069264888',
        'deviceType': 'wx',
        'data': {
          'goodsId': query.goodsId,
          'skuId': query.skuId
        }
      }
      this.url = `${apiServer}/p/goods/basicInfo`
      this.ajaxGetResultByQuery(req)
    },
    data () {
      return {
        url: '',
        detail: null
      }
    },
    computed: mapState({login: state => state.login}),
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
      ajaxGetResultByQuery (query) {
        const self = this
        const url = self.url
        // 成功回调
        let successCallback = (res) => {
          self.isShowLoading = false
          if (res.status === 200 && res.data && res.data.code === 0) {
            let data = res.data.data
            self.detail = data
          } else {
            self.handleError(res.data.message)
            if (String(res.data.code) === '4131' || String(res.data.code) === '400') {
              setTimeout(function () {
                self.$router.push({ name: 'login', query: {redirect: 'goodsDetail', query: self.$route.query }})
                self.isShowLoading = false
              }, 2000)
            }
          }
        }
        // 失败回调
        let errCallback = () => {
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
      }
    }
  }
</script>
