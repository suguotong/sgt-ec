<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  /**搜索-商品**/
  .bigBox {
    height: 100%;
    overflow: hidden;
  }

  .gl-list {
    overflow: hidden;
    padding-top: 112px;
    box-sizing: border-box;
  }

  .gl-list, .gl-list-items, .gl-panel {
    height: 100%;
  }

  .search-goods {
    ul {
      width: 100%;
      li {
        position: relative;
        float: left;
        font-size: 14px;
        width: 30%;
        height: 38px;
        line-height: 38px;
        text-align: center;
        .icon1 {
          background-position-y: 92%;
          height: 16px;
        }
        .icon2 {
          background-position-y: 51%;
          height: 16px;
          top: 11px;
          position: absolute;
        }
        .f-col1{
          color:map_get($colors, four);
        }
        .f-col2 {
          color:map_get($colors, four);
          .icon2 {
            -webkit-transform: rotate(-180deg);
            transform: rotate(-180deg);
          }
          i{
            display: inline-block;
            width: 20px;
            height: 18px;
            background: url(../../assets/images/default-aroow.png) no-repeat;
            background-size:cover;
          }
        }
        .f-col{
          color:map_get($colors, primary);
          .icon2 {
            -webkit-transform: rotate(-180deg);
            transform: rotate(-180deg);
          }
        }

        a i {
          display: inline-block;
          width: 20px;
          background: url(../../assets/images/icon-img-04.png) no-repeat;
          background-size: cover;
        }

      }
    }
  }

  .search-goods {
    .weui_cells {
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 998;
    }
  }

  .weui_panel {
    margin-top: -1px;
    background-color: transparent;
  }

  .weui_media_box .weui_media_desc {
    color: map_get($colors, four);
  }

  .weui_cells:before {
    border-top: 0;
  }

  .weui_cells {
    margin-top: 0;
  }

  .p-city {
    color: map_get($colors, eight);
    font-size: 14px;
  }

  .p-goodsName {
    white-space: nowrap;
  }

  .mb20 {
    margin-bottom: 20px;
  }

  .weui_media_box.weui_media_appmsg .weui_media_hd {
    width: 90px;
    height: 90px;
    .weui_media_appmsg_thumb {
      width: 100%;
      height: 100%;
    }
  }

  .weui_media_box.weui_media_appmsg {
    background-color: map_get($colors, third);
    margin-bottom: 10px;
  }

  .gl-list {
    padding-top: 44px;
    .listBox {
      padding: 10px;
      .goods {
        display: block;
        width: 48%;
        float: left;
        margin-right: 10px;
        &:nth-child(2n) {
          margin-right: 0px;
        }
        .imgBox {
          width: 100%;
          img {
            width: 100%;
            height: 170px;
          }
        }
        .goodsMes {
          padding: 5px 10px;
          line-height: 22px;
          .p1 {
            height: 22px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 12px;
            color: #333;
          }
          .p2 {
            font-size: 14px;
            color: #cb1e1e;
          }
        }
      }
    }
  }
  .we_ul_cell {
    padding: 3px 15px;
  }
</style>
<template>
  <div class="bigBox"><!--
    <cm-header :hdTitle="hdTitle"></cm-header>-->
    <div class="gl-list">
      <div class="gl-list-items">
        <!--条件排序-->
        <div class="search-goods">
          <div class="weui_cells weui_cells_access">
            <div class="weui_cell we_ul_cell">
              <ul>
                <li><a href="javascript:;" :class="handleSort('default')" @click="handleSortData('default')">默认
                  <!--<i class="icon1"></i>--></a></li>
                <li><a href="javascript:;" :class="handleSort('saleNum')" @click="handleSortData('saleNum')">销量</a></li>
                <li><a href="javascript:;" :class="handleSort('price')" @click="handleSortData('price')">价格<i
                  class="icon2"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <!--end 条件排序-->
        <div v-show="isShowLoading" class="isShowLoading">
          <load-more :tip="loadingTxt"></load-more>
        </div>
        <template v-if="list.length > 0">
          <!--商品-->
          <scroller lock-x height="100%" ref="scroller" v-model="status" use-pulldown use-pullup
                    :pulldown-config="pullDown" :pullup-config="pullUp">
            <div class="listBox clearfix" v-show="!isShowLoading">
              <router-link class="goods" v-for="(item,index) in list"
                           :to="{name:'goodsDetail', query:{goodsId:item.id}}">
                <div class="imgBox">
                  <img :src="handleSrc(item.url)" alt="">
                </div>
                <div class="goodsMes">
                  <p class="p1">{{ item.goodsName }}</p>
                  <p class="p2">{{ item.maxPrice | currency('￥') }}</p>
                </div>
              </router-link>
            </div>
          </scroller>
        </template>
      </div>
      <cm-result-status v-show="isShowInitStatus" :searchType="1"></cm-result-status>
    </div>
  </div>
</template>
<script type="text/babel">
  import {imgServer, apiServer} from '../../config'
  import {Scroller, LoadMore} from 'vux'
  // import cmHeader from '../../components/header/index.vue'
  import cmResultStatus from '../../components/resultStatus/index.vue'
  export default {
    props: {
      query: {
        type: Object,
        default () {
          return {
            'token': '',
            'versionCode': '1',
            'deviceId': '355848069264888',
            'deviceType': 'wx',
            'data': {
              'shopId': '0',
              'shopCategoryId': '',
              'searchType': 1,
              'pageNum': 1,
              'pageSize': 10,
              'sortCode': '' // 排序状态码 1:销量倒叙,2:价格正序,3:价格倒序；默认为不填：默认排序
            }
          }
        }
      },
      url: {
        type: String,
        default () {
          return `${apiServer}/p/shop/shopGoodsList`
        }
      }
    },
    created () {
      const self = this
      self.hdTitle = self.$route.query.categoryName
      this.url = `${apiServer}/p/shop/shopGoodsList`
      this.query.data.shopId = String(this.$route.query.shopId)
      this.query.data.shopCategoryId = String(this.$route.query.shopCategoryId)
      document.title = this.hdTitle
      this.ajaxGetResultByQuery(this.query)
    },
    data () {
      return {
        url: '',
        query: {
          'token': '',
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'shopId': '0',
            'shopCategoryId': '',
            'searchType': 1,
            'pageNum': 1,
            'pageSize': 10,
            'sortCode': '' // 排序状态码 1:销量倒叙,2:价格正序,3:价格倒序；默认为不填：默认排序
          }
        },
        list: [],
        isInit: true, // 初始化
        isShowInitStatus: false, // 是否显示初始化为空时的页面
        isPullDown: true, // 1 下拉刷新 2 上拉加载
        isShowLoading: true, // 是否显示正在加载 默认显示
        loadingTxt: '正在加载', // 显示正在加载字样
        hdTitle: '',
        status: {
          pullupStatus: 'default',
          pulldownStatus: 'default'
        },
        pullDown: {
          content: '下拉可以刷新',
          height: 60,
          autoRefresh: false,
          downContent: '下拉可以刷新',
          upContent: '松开立即刷新',
          loadingContent: '正在刷新数据',
          clsPrefix: 'clspullDown'
        },
        pullUp: {
          content: '上拉可以刷新',
          pullUpHeight: 60,
          height: 40,
          autoRefresh: false,
          downContent: '上拉可以刷新',
          upContent: '松开立即刷新',
          loadingContent: '正在加载更多数据',
          clsPrefix: 'clspullUp'
        },
        isUsePullDown: true,
        sortCodeStatus: '', // 排序状态码 1:销量倒叙,2:价格正序,3:价格倒序；默认为不填：默认排序
        isSort: false // 是否排序
      }
    },
    methods: {
      handleSortData (status) {
        let self = this
        if (status && self.query.data.sortCode !== 'priceMax') {
          switch (status) {
            case 'default':
              self.query.data.sortCode = ''
              break
            case 'saleNum':
              self.query.data.sortCode = 'sales'
              break
            case 'price':
              self.query.data.sortCode = 'priceMax'
              break
          }
        } else {
          self.query.data.sortCode = 'priceMin'
        }
        self.isSort = true
        self.isShowLoading = true
        this.ajaxGetResultByQuery(self.query)
      },
      handleSort (status) {
        if (status === 'default' && !this.query.data.sortCode) {
          return 'f-col'
        } else if (status === 'saleNum' && this.query.data.sortCode === 'sales') {
          return 'f-col'
        } else if (status === 'price' && (this.query.data.sortCode === 'priceMax')) {
          return 'f-col1'
        } else if (status === 'price' && (this.query.data.sortCode === 'priceMin')) {
          return 'f-col'
        } else if (status === 'price' && (this.query.data.sortCode !== 'priceMax' && this.query.data.sortCode !== 'priceMin')) {
          return 'f-col2'
        } else {
          return 'f-col1'
        }
      },
      handleSrc (url) {
        return `${imgServer}${url}`
      },
      /**
       * 处理请求数据返回异常的状态
       * @param status
       */
      handleLoadingErr (status) {
        let self = this
        // console.log(status)
        if (status === 3) {
          self.pullUp.loadingContent = '已全部加载完毕'
          self.pullDown.loadingContent = '已全部加载完毕'
          self.query.data.pageNum--
        }
        if (status === 2) {
          self.pullUp.loadingContent = '加载失败，稍后请重新加载'
          self.pullDown.loadingContent = '加载失败，稍后请重新加载'
          self.query.data.pageNum--
        }
        if (status === 1) {
          self.pullUp.loadingContent = '正在加载更多数据'
          self.pullDown.loadingContent = '正在刷新数据'
        }
        if (timer) {
          clearTimeout(timer)
        }
        let timer = setTimeout(function () {
          self.status.pullupStatus = 'default'
          self.status.pulldownStatus = 'default'
        }, 2000)
      },
      ajaxGetResultByQuery (query) {
        const self = this
        const url = self.url
        // 成功回调
        let successCallback = (res) => {
          this.isShowLoading = false
          let dataList = res.data.data.goodsList
          // console.log(this.categoryName)
          if (res.status === 200 && res.data && res.data.code === 0 && dataList.length !== 0) {
            if (!self.isSort) {
              if (self.isPullDown) {
                // self.list = self.list.unshift(dataList)
                self.list = dataList
              } else {
                self.list = self.list.concat(dataList)
              }
              self.$nextTick(() => {
                this.$refs.scroller.reset()
              })
              let status = 1
              self.handleLoadingErr(status)
              self.isInit = false // 没有数据时设置为false
            } else {
              self.list = dataList
              self.isSort = false
              self.$nextTick(() => {
                this.$refs.scroller.reset({
                  top: 0
                })
              })
            }
          } else {
            if (self.isInit) {
              self.isShowInitStatus = true
            }
            let status = 3
            self.handleLoadingErr(status)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.isShowLoading = false
          let status = 2
          self.handleLoadingErr(status)
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      ajaxGetResultByPage (curVal) {
        let self = this
        if (curVal === 'loading') {
          if (!self.isPullDown) {
            self.query.data.pageNum++
          } else {
            self.query.data.pageNum = 1
          }
          self.ajaxGetResultByQuery(self.query)
        }
      }
    },
    watch: {
      'status.pullupStatus' (curVal) {
        let self = this
        // console.log(11)
        this.isPullDown = false
        self.ajaxGetResultByPage(curVal)
      },
      'status.pulldownStatus' (curVal) {
        let self = this
        // console.log(22)
        this.isPullDown = true
        self.ajaxGetResultByPage(curVal)
      }
    },
    components: {
      imgServer,
      Scroller,
      // cmHeader,
      LoadMore,
      cmResultStatus
    }
  }
</script>
