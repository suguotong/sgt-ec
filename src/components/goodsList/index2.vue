<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  /**搜索-商品**/
  .gl-list {
    padding-top:88px;
    box-sizing: border-box;
    &.gl-list2 {
      padding-top:44px;
    }
  }
  .gl-list, .gl-list-items, .gl-panel {
    height: 100%;
  }
  .search-goods{
    ul{
      width: 100%;
      li{
        position: relative;
        float: left;
        font-size: 14px;
        width: 30%;
        height: 38px;
        line-height: 38px;
        text-align: center;
        .icon1{
          background-position-y: 92%;
          height: 16px;
        }
        .icon2{
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
            width: 16px;
            height: 16px;
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
        a i{
          display: inline-block;
          width: 16px;
          height: 16px;
          background: url(../../assets/images/icon-img-04.png) no-repeat;
          background-size:cover;
        }

      }
    }
  }
  .search-goods {
    .weui_cells {
      position: fixed;
      width: 100%;
      left: 0;
      top: 51px;
      // top:0;
      z-index: 998;
      &.search-sort {
        top: 0;
      }
    }
    .we_ul_cell {
      padding: 3px 15px;
    }
  }
  .weui_panel{
    margin-top: -1px;
    background-color: transparent;
  }
  .weui_media_box .weui_media_desc{
    color: map_get($colors, four);
  }
  .weui_cells:before{
    border-top:0;
  }
  .weui_cells{
    margin-top: 0;
  }
  .p-city{
    color: map_get($colors, eight);
    font-size: 14px;
  }
  .p-goodsName{
    white-space: nowrap;
  }
  .mb20{margin-bottom: 20px;}
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
    margin-top: 10px;
  }
</style>
<template>
  <div class="gl-list" :class="[isHideSearch ? 'gl-list2' : '']">
    <div class="gl-list-items">
      <!--条件排序-->
      <div class="search-goods">
        <div class="weui_cells weui_cells_access" :class="[isHideSearch ? 'search-sort' : '']">
          <div class="weui_cell we_ul_cell">
            <ul>
              <li><a href="javascript:;" :class="handleSort('default')" @click="handleSortData('default')">默认<!--<i class="icon1"></i>--></a></li>
              <li><a href="javascript:;" :class="handleSort('saleNum')" @click="handleSortData('saleNum')">销量</a></li>
              <li><a href="javascript:;" :class="handleSort('price')" @click="handleSortData('price')">价格<i class="icon2"></i></a></li>
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
        <div class="weui_panel weui_panel_access gl-panel"  v-show="!isShowLoading">
          <scroller  lock-x height="100%" ref="scroller" v-model="status" use-pulldown use-pullup :pulldown-config="pullDown" :pullup-config="pullUp">
            <div class="box2">
              <router-link v-for="items in list" :to="{name:'goodsDetail', query:{goodsId:items.goodsId}}" class="weui_media_box weui_media_appmsg">
                <div class="weui_media_hd bg-img">
                  <template v-if="items.imgUrl">
                    <img class="weui_media_appmsg_thumb" :src="handleSrc(items.imgUrl)" :alt="items.goodsName">
                  </template>
                </div>
                <div class="weui_media_bd">
                  <p class="weui_media_desc p-goodsName">{{ items.goodsName }}</p>
                  <!--<p class="p-city">{{ items.shopAddress }}</p>-->
                  <p class="g-price">{{ items.goodsPrice | currency('￥') }}</p>
                </div>
              </router-link>
            </div>
          </scroller>
        </div>
      </template>
    </div>
    <cm-result-status v-show="isShowInitStatus" :searchType="1"></cm-result-status>
  </div>
</template>
<script type="text/babel">
  import { imgServer, apiServer } from '../../config'
  import { Scroller, LoadMore } from 'vux'
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
              'keyWord': '',
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
          return `${apiServer}/p/goods/search`
        }
      },
      isHideSearch: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    created () {
      this.ajaxGetResultByQuery(this.query)
    },
    data () {
      return {
        list: [],
        isInit: true, // 初始化
        isShowInitStatus: false, // 是否显示初始化为空时的页面
        isPullDown: true, // 1 下拉刷新 2 上拉加载
        isShowLoading: true, // 是否显示正在加载 默认显示
        loadingTxt: '正在加载', // 显示正在加载字样
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
    mounted () {
    },
    methods: {
      handleSortData (status) {
        let self = this
        if (status) {
          switch (status) {
            case 'default':
              self.query.data.sortCode = ''
              break
            case 'saleNum':
              self.query.data.sortCode = 1
              break
            case 'price':
              if (self.query.data.sortCode !== 2) {
                self.query.data.sortCode = 2
              } else {
                self.query.data.sortCode = 3
              }
              break
          }
        } else {
          self.query.data.sortCode = 3
        }
        self.query.data.pageNum = 1
        self.isSort = true
        self.isShowLoading = true
        this.ajaxGetResultByQuery(self.query)
      },
      handleSort (status) {
        if (status === 'default' && !this.query.data.sortCode) {
          return 'f-col'
        } else if (status === 'saleNum' && this.query.data.sortCode === 1) {
          return 'f-col'
        } else if (status === 'price' && (this.query.data.sortCode === 3)) {
          return 'f-col'
        } else if (status === 'price' && (this.query.data.sortCode === 2)) {
          return 'f-col1'
        } else if (status === 'price' && (this.query.data.sortCode !== 2 && this.query.data.sortCode !== 3)) {
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
          let dataList = res.data.data.dataList
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
        this.isPullDown = true
        self.ajaxGetResultByPage(curVal)
      }
    },
    components: {
      imgServer,
      Scroller,
      LoadMore,
      cmResultStatus
    }
  }
</script>
