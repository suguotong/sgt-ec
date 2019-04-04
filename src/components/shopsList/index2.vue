<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .s-bg{
    background-color:map_get($colors, third);
  }
  .sp-list {
    height: 100%;
    padding-top: 44px;
    box-sizing: border-box;
    .search-shop{
      height: 100%;
      .gl-panel {
        height: 100%;
      }
      .weui_panel{
        background-color: map_get($colors, second);
        &:before{
          border-top: 0;
        }
        &:after{
          border-bottom: 0;
        }
        a.weui_media_box:active{
          background-color: map_get($colors, third);
        }
        /*.weui_media_box.weui_media_appmsg .weui_media_hd {
          margin-right: 1.8em;
          width: 70px;
          height: 38px;
          line-height: 38px;
          img{
            border: 1px solid map_get($colors, six);
            padding: 5px;
          }
        }*/
        .weui_media_box:before{
          border-top: 0;
        }
        .s-mb{
          margin-bottom: 10px;
          padding-left: 0;
        }
        .s-center{
          width: 125px;
          left: 50%;
          margin-left: 115px;
          color: map_get($colors,five);
        }
        .bg-img-cell-hd {
          width: 85px;
          height: 40px;
          background-color: map_get($colors, second);
          margin-right: 5px;
          .storeLogo{
            width: 100%;
            height: 100%;
           margin-right: 0;
          }
        }

      }
      .weui_cell{
        padding: 0;
      }
      .s-pb{
        padding-top: 0;
        ul {
          display: block;
          width: 100%;
          box-sizing: border-box;
          li {
            width: 33.3%;
            box-sizing: border-box;
            float: left;
            padding-left: 15px;
            img {
              width: 100%;
            }
          }
        }
      }

      .bg-img {
        background-color: map_get($colors, second);
        height: 104px;
        img {
          height: 100%;
        }
      }
    }
    .p-goodsName, .p-memberType {
      display: block;
      font-size: map_get($fontSize, primary);
      color: map_get($colors, four);
    }
    .p-memberType {
      width: 60px;
      line-height: 1.5;
      font-size: map_get($fontSize, second);
      color: map_get($colors, eight);
      border-radius: 5px;
      text-align: center;
      color: map_get($colors, third);
      background-color: map_get($colors, primary);
    }
    .g-goodsName {
      font-size:  map_get($fontSize, primary);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      word-wrap: break-word;
      word-break: break-all;
    }
  }
</style>
<template>
  <div class="sp-list">
    <div v-show="isShowLoading" class="isShowLoading">
      <load-more :tip="loadingTxt"></load-more>
    </div>
    <template v-if="list.length > 0">
      <div class="search-shop">
        <div class="weui_panel weui_panel_access gl-panel">
            <scroller  lock-x height="100%" ref="scroller" v-model="status" use-pulldown use-pullup :pulldown-config="pullDown" :pullup-config="pullUp">
              <div>
                <template v-for="items in list">
                  <router-link  :to="{name:'storeHomePage', query:{shopId:items.shopId}}" class="weui_media_box weui_media_appmsg s-bg">
                    <div class="weui_cell">
                      <div class="weui_cell_hd bg-img-cell-hd">
                        <template v-if="items.logoImg">
                          <img :src="handleSrc(items.logoImg)" :alt="items.shopName" class="storeLogo">
                        </template>
                      </div>
                      <div class="weui_cell_bd weui_cell_primary">
                        <span class="p-goodsName">{{ items.shopName }}</span>
                        <span class="p-memberType">{{ items.memberType }}</span>
                      </div>
                    </div>
                  </router-link>
                  <template v-if="handleGoodsList(items.goodsList)">
                  <div class="weui_media_box weui_media_appmsg s-bg s-pb s-mb">
                    <ul>
                      <li v-for="(key, index) in items.goodsList" class="s-pr">
                        <router-link :to="{name:'goodsDetail', query:{goodsId:key.goodsId}}" >
                          <div class=" bg-img">
                            <template v-if="key.imgUrl">
                              <img class="" :src="handleSrc(key.imgUrl)" :alt="key.goodsName">
                            </template>
                          </div>
                        </router-link>
                        <p class="g-goodsName">{{ key.goodsName }}</p>
                        <p class="g-price">{{ key.goodsPrice | currency('￥') }}</p>
                      </li>
                    </ul>
                  </div>
                  </template>
                </template>
              </div>
            </scroller>
        </div>
      </div>
    </template>
    <cm-result-status v-show="isShowInitStatus" :searchType="2"></cm-result-status>
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
          return {}
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
        isUsePullDown: true
      }
    },
    methods: {
      handleSrc (url) {
        return `${imgServer}${url}`
      },
      handleGoodsList (goodsList) {
        if (goodsList && goodsList.length > 0) {
          return true
        }
        return false
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
        const url = `${apiServer}/p/goods/search`
        // 成功回调
        let successCallback = (res) => {
          this.isShowLoading = false
          let dataList = res.data.data.dataList
          if (res.status === 200 && res.data && res.data.code === 0 && dataList.length !== 0) {
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
            // this.$set(self, 'list', res.data.data.dataList)
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
      LoadMore,
      cmResultStatus
    }
  }
</script>
