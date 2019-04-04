<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .goodsList {
    height: 100%;
    // margin-top: -44px;
    padding-top: 44px;
  }
  .cm-list {
    padding-top: 0 !important;
  }
</style>
<style lang="scss" rel="stylesheet/scss">
  .cm-list {
    .search-goods {
      .weui_cells {
        margin-top: -44px;
      }
    }
  }
</style>
<template>
  <div class="goodsList">
    <!--<cm-header :hdTitle="hdTitle"></cm-header>-->
    <cm-goods-list class="cm-list" :url="url" :query="query"></cm-goods-list>
  </div>
</template>
<script type="text/babel">
  // import cmHeader from '../../components/header/index.vue'
  import cmGoodsList from '../../components/goodsList/index.vue'
  import { apiServer } from '../../config'
  export default {
    data () {
      return {
        url: '',
        hdTitle: '商品分类列表',
        query: ''
      }
    },
    created () {
      // this.ajaxGetData()
      let self = this
      let query = this.$route.query
      let categoryId = query.categoryId
      // 设置title
      if (query.categoryName) {
        this.hdTitle = query.categoryName
      }
      const req = {
        'token': '',
        'versionCode': '1',
        'deviceId': '355848069264888',
        'deviceType': 'wx',
        'data': {
          'categoryId': categoryId,
          'sortCode': '',
          'attrValues': '',
          'pageNum': 1,
          'pageSize': 16
        }
      }
      document.title = this.hdTitle
      self.url = `${apiServer}/p/goods/getGoodsList`
      self.query = req
    },
    methods: {
    },
    components: {
      // cmHeader,
      cmGoodsList
    }
  }
</script>
