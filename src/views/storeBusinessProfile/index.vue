<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  .bigBox{
    height:100%;
    overflow: hidden;
    background:white;
  }
  .content{
    height:100%;
    // padding-top: 44px;
    overflow: hidden;
  }
</style>
<template>
  <div class="bigBox">
    <!--<cm-header :hdTitle="hdTitle"></cm-header>-->
    <div class="content">
      <iframe :src="linkUrl" frameborder="0" scrolling="auto" width="100%" height="100%">
      </iframe>
    </div>
  </div>
</template>
<script type="text/babel">
  import {apiServer} from '../../config'
  // import cmHeader from '../../components/header/index.vue'
  import {LoadMore} from 'vux'
  export default {
    created () {
      const self = this
      self.linkUrl = `${apiServer}${self.$route.query.shopShowUrl}`
      document.title = this.hdTitle
    },
    data () {
      return {
        isInit: true, // 初始化
        isShowInitStatus: false, // 是否显示初始化为空时的页面
        isShowLoading: true, // 是否显示正在加载 默认显示
        loadingTxt: '正在加载', // 显示正在加载字样
        hdTitle: '商家简介',
        linkUrl: '',
        profile: ''
      }
    },
    methods: {
      /**
       * 处理请求数据返回异常的状态
       * @param status
       */
      ajaxGetResultByQuery () {
        const self = this
        const url = `${apiServer}${self.linkUrl}`
        // 成功回调
        let successCallback = (res) => {
          this.isShowLoading = false
          let dataList = res.data
          if (res.status === 200 && res.data && res.data.code === 0) {
            self.profile = dataList
            self.isInit = false // 没有数据时设置为false
          } else {
            if (self.isInit) {
              self.isShowInitStatus = true
            }
          }
        }
        // 失败回调
        let errCallback = () => {
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url).then(successCallback, errCallback)
      }
    },
    components: {
      // cmHeader,
      LoadMore
    }
  }
</script>
