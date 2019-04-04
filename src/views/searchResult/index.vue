<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .search-box-module {
    height: 100%;
    overflow: hidden;
  }
  .s-result {
    height: 100%;
    box-sizing: border-box;
    position: relative;
  }
  .s-result-list {
    height: calc(100% - 44px) !important;
  }
</style>
<template>
  <div class="search-box-module">
    <cm-search class="isShowReturn" v-if="!$route.query.isHideSearch" :keywords="reqSearchResultParams.data.keyWord"></cm-search>
    <div class="s-result">
      <template v-if="searchType === 1">
        <cm-goods-list class="s-result-list" :query="query" :isHideSearch="$route.query.isHideSearch"></cm-goods-list>
      </template>
      <template v-if="searchType === 2">
        <cm-shops-list :query="query" :isHideSearch="$route.query.isHideSearch"></cm-shops-list>
      </template>
    </div>
  </div>
</template>
<script type="text/babel">
  import { mapState, mapActions } from 'vuex'
  import cmSearch from '../../components/search/index.vue'
  import cmGoodsList from '../../components/goodsList/index.vue'
  import cmShopsList from '../../components/shopsList/index.vue'
  import { SET_REQ_SEARCH_PARAMS_PARAMS } from '../../store/reqSearchResultParams'
  export default {
    data () {
      return {
        hdTitle: '搜索结果',
        isShowReturn: true,
        searchType: '', // 1 商品 2 店铺
        // resultStatus: '', // 1 商品为空 2 店铺为空
        // list: [],
        // loadingTxt: '正在加载', // 显示正在加载字样
        // isShowLoading: true, // 是否显示正在加载 默认显示
        query: ''
      }
    },
    computed: mapState({ reqSearchResultParams: state => state.reqSearchResultParams }),
    created () {
      document.title = this.$route.query.title ? this.$route.query.title : this.hdTitle
      console.log('-this.reqSearchResultParams--')
      console.log(this.reqSearchResultParams)
      console.log(this.reqSearchResultParams.deviceId)
      if (!this.reqSearchResultParams.deviceId) {
        console.log(1)
        const req = {
          'token': '',
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'keyWord': '',
            'searchType': 1,
            'pageNum': 0,
            'pageSize': 16
          }
        }
        this.SET_REQ_SEARCH_PARAMS_PARAMS(req)
        this.query = req
      } else {
        this.query = this.reqSearchResultParams
      }
      this.query.data.pageNum = 0
      this.searchType = this.query.data.searchType
    },
    methods: {
      ...mapActions([SET_REQ_SEARCH_PARAMS_PARAMS])
    },
    components: {
      cmSearch,
      cmGoodsList,
      cmShopsList
    }
  }
</script>

