<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  .goodsList {
    .filterTab {
      @extend %fatherFlex;
      height: 42px;
      background: #fff;
      line-height: 42px;
      border-bottom: 1px solid #cccccc;
      font-size: 14px;
      color: #333;
      .box {
        @extend %childFlex;
        text-align: center;
        .priceBox {
          display: inline-block;
          margin: auto;
          padding-right: 15px;
          background: url("../../assets/images/goodsPrice.png") no-repeat right center;
          &.small {
            background: url("../../assets/images/goodsPriceSmall.png") no-repeat right center;
          }
          &.big {
            background: url("../../assets/images/goodsPriceBig.png") no-repeat right center;
          }
        }

      }
      .on {
        color: #cb1e1e;
      }
    }
    .listBox {
      padding: 10px;
      .goods {
        display: block;
        float: left;
        width: 48%;
        margin-right: 10px;
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
        &:nth-child(2n) {
          margin-right: 0px;
        }
      }
    }
  }

  .storeHPContainer {
    height: 100%;
    overflow: hidden;
    position: relative;
    &.hideStoreHP {
      // margin-top: -114px;
      // animation:hideStore 200ms ease-out;
      // -webkit-animation:hideStore 200ms ease-out; /*Safari and Chrome*/
    }
    &.showStoreHP {
      // margin-top: 0;
      // animation:showStore 200ms ease-out;
      // -webkit-animation:showStore 200ms ease-out; /*Safari and Chrome*/
    }
    .storeLogoBox {
      position: absolute;
      width: 100%;
      height: 60px;
      left: 0;
      top: 44px;
      z-index: 998;
      background: #f0f0f0;
      margin: 0px;
      .whiteBox {
        background: white;
      }
      &:before {
        border: none;
      }
      &:after {
        border: none;
      }
      .storeLogo {
        width: 85px;
        height: 40px;
      }
      .storeName {
        font-size: 16px;
      }
    }
    .toggleBox {
      height: 100%;
      .tabBox {
        @extend %fatherFlex;
        position: absolute;
        width: 100%;
        left: 0;
        top: 114px;
        z-index: 998;
        height: 40px;
        background: #fff;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        span {
          display: block;
          @extend %childFlex;
          text-align: center;
          &.on {
            color: #cb1e1e;
            border-bottom: 2px solid #cb1e1e;
          }
        }
      }
      .toggleContent {
        height: 100%;
        .title {
          height: 34px;
          background: #fff;
          line-height: 34px;
          padding-left: 15px;
          span {
            display: inline-block;
            float: left;
            height: 24px;
            line-height: 24px;
            margin-top: 5px;
            padding-left: 5px;
            border-left: 2px solid #cb1e1e;
          }
          a {
            display: inline-block;
            float: right;
            padding-right: 10px;
            color: #000;
          }
        }
        .singleToggle {
          display: none;
          height: 100%;
        }
        .singleToggle1 {
          padding-top: 154px;
          padding-bottom: 50px;
          box-sizing: border-box;
          .goodsList {
            .title {
              margin-bottom: 10px;
            }
          }
          .goodsList .listBox {
            padding-top: 0px;
          }
        }
        .singleToggle2 {
          box-sizing: border-box;
          padding-top: 196px;
          padding-bottom: 50px;
        }
        .on {
          display: block;
        }
      }
    }
  }

  .gd-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid map_get($colors, six);
    background-color: map_get($colors, third);
    ul {
      display: flex;
      height: 100%;
      li {
        &.opeate {
          -webkit-flex: 1;
          height: 100%;
          box-sizing: border-box;
          border-right: 1px solid map_get($colors, six);
          text-align: center;
          font-size: map_get($fontSize, second);
          padding-top: 6px;
          a {
            color: map_get($colors, four);
            i {
              width: 20px;
              height: 20px;
              margin: 0 auto;
            }
          }
        }

      }
    }
  }

  .categoryBtn {
    width:50px;
    height:20px;
    line-height:20px;
    text-align: center;
    padding-top: 22px;
    float: right;
    background: url("../../assets/images/homeshop_classify.png") 14px 8px no-repeat;
    background-size: 22px 15px;
    font-size: 12px;
    color: #fff;
  }
  @-webkit-keyframes hideStore
  {
    from {
      margin-top: 0;
    }
    to {
      margin-top: -114px;
    }
  }
  @keyframes hideStore
  {
    from {
      margin-top: 0;
    }
    to {
      margin-top: -114px;
    }
  }
  @-webkit-keyframes showStore
  {
    from {
      margin-top: -114px;
    }
    to {
      margin-top: 0;
    }
  }
  @keyframes showStore
  {
    from {
      margin-top: -114px;
    }
    to {
      margin-top: 0;
    }
  }
</style>
<template>
    <div class="storeHPContainer" :class="{ 'showStoreHP': isShowStore, 'hideStoreHP': isHideStore }">
      <div v-show="isShowLoading" class="isShowLoading">
        <load-more :tip="loadingTxt"></load-more>
      </div>
      <div v-show="!isShowLoading">
        <div v-if="shop.shopStatus==='1'">
          <cm-header :isShowReturn="false" :hdTitle="hdTitle">
            <router-link class="categoryBtn"
                         :to="{ name:'storeGoodsCategory', query: { shopId: $route.query.shopId } }">
              分类
            </router-link>
          </cm-header>
          <div class="weui_cells weui_cells_form storeLogoBox">
            <div class="weui_cell whiteBox">
              <div class="weui_cell_hd">
                <img :src="handleSrc(shop.logoImg)" alt="" class="storeLogo">
              </div>
              <div class="weui_cell_bd weui_cell_primary">
                <span class="storeName">{{ shop.provinceName }}/{{ shop.cityName }}</span>
              </div>
            </div>
          </div>
          <div class="toggleBox">
            <div class="tabBox" id="shopIndex">
              <span :class="handleActiveTab(0)" @click="handleInfo(0)">店铺首页</span>
              <span :class="handleActiveTab(1)" @click="handleInfo(1)">全部商品</span>
            </div>
            <div class="toggleContent">
              <div class="singleToggle singleToggle1" :class="handleActiveTab(0)">
                <div v-show="isShowLoading" class="isShowLoading">
                  <load-more :tip="loadingTxt"></load-more>
                </div>
                <template v-if="recommendList.length > 0">
                  <scroller lock-x height="100%" ref="scroller" v-model="status" use-pulldown use-pullup
                            :pulldown-config="pullDown" :pullup-config="pullUp">
                    <div class="goodsList">
                      <div class="title">
                        <span>推荐商品</span>
                        <router-link class="more"
                                     :to="{name:'storeList', query:{shopId:query.data.shopId,categoryName: '全部商品', shopCategoryId: ''}}">
                          更多>
                        </router-link>
                      </div>
                      <div class="listBox clearfix" v-show="!isShowLoading">
                        <router-link class="goods" v-for="(item,index) in recommendList"
                                     :to="{name:'goodsDetail', query:{goodsId:item.id}}">
                          <div class="imgBox">
                            <img :src="handleSrc(item.url)" alt="">
                          </div>
                          <div class="goodsMes">
                            <p class="p1">{{ item.goodsName }}</p>
                            <p class="p2">{{ item.maxPrice | currency('￥')　}}</p>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </scroller>
                </template>
              </div>
              <div class="singleToggle singleToggle2" :class="handleActiveTab(1)">
                <all-goods></all-goods>
              </div>
            </div>
            <cm-result-status v-show="isShowInitStatus" :searchType="1"></cm-result-status>
          </div>
          <div class="gd-footer">
            <ul>
            <li class="opeate">
              <router-link :to="{ name:'storeBusinessProfile',query:{shopShowUrl:'/p/'+shopShowUrl}}">
                <i class="g-icon2 icon-category"></i>
                商家简介
              </router-link>
            </li>
            <li class="opeate" @click="handleContactUs">
              <a class="" href="javscript:;">
                <i class="g-icon3 icon-contact"></i>
                联系卖家
              </a>
            </li>
          </ul>
          </div>
        </div>
        <cm-result-status v-if="isFreeze" :searchType="2" :shopMsg="shopMsg"></cm-result-status>
      </div>
    </div>
</template>
<script type="text/babel">
  import {apiServer, imgServer} from '../../config'
  import {Scroller, LoadMore} from 'vux'
  import cmHeader from '../../components/header/index.vue'
  import allGoods from './allGoods.vue'
  import cmResultStatus from '../../components/resultStatus/index.vue'
  export default {
    data () {
      return {
        isFreeze: false,
        shopMsg: '该店铺涉嫌违规，已被平台冻结，暂无法访问',
        isShowStore: false,
        isHideStore: false,
        loadingTxt: '正在加载', // 显示正在加载字样
        isShowLoading: true, // 是否显示正在加载 默认显示
        isShowInitStatus: false, // 是否显示初始化为空时的页面
        hdTitle: '店铺首页',
        recommendList: [],
        shop: {},
        shopShowUrl: '',
        active: 0,
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
        isPullDown: true, // 1 下拉刷新 2 上拉加载
        isInit: true, // 初始化
        query: {
          'token': '',
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'shopId': 0,
            'searchType': 1,
            'pageNum': '1',
            'pageSize': 10
          }
        }
      }
    },
    created () {
      this.query.data.shopId = this.$route.query.shopId
      this.ajaxGetData(this.query)
      if (this.shop.shopName) {
        this.hdTitle = this.shop.shopName
      }
      document.title = this.hdTitle
    },
    methods: {
      handleContactUs () {
        let tel = this.shop.phone
        this.$vux.confirm.show({
          content: tel,
          onCancel () {
            // console.log('plugin cancel')
          },
          onConfirm () {
            window.location.href = `tel:${tel}`
          }
        })
      },
      handleLoadingErr (status) {
        let self = this
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
      handleSrc (url) {
        if (url) {
          return `${imgServer}${url}`
        } else {
          return ''
        }
      },
      handleActiveTab (index) {
        if (this.active === index) {
          return 'on'
        } else {
          return ''
        }
      },
      handleInfo (status) {
        this.active = status
      },
      ajaxGetData (query) {
        const self = this
        const url = `${apiServer}/p/shop/shopIndex`
        // 成功回调
        let successCallback = (res) => {
          this.isShowLoading = false
          let isSuccess = res.status === 200 && res.data && res.data.code === 0

          let status
          if (isSuccess) {
            let dataList = res.data.data.goodsList
            let shop = res.data.data.shop
            self.shopShowUrl = res.data.data.shopShowUrl
            if (shop) {
              self.shop = shop
              self.hdTitle = self.shop.shopName
            }
            if (dataList.length > 0) {
              if (self.isPullDown) {
                // self.list = self.list.unshift(dataList)
                self.recommendList = dataList
              } else {
                self.recommendList = self.recommendList.concat(dataList)
              }
              self.$nextTick(() => {
                this.$refs.scroller.reset()
              })
              status = 1
            } else {
              status = 3
              self.isInit = false // 没有数据时设置为false
            }
          } else {
            if (self.isInit) {
              self.isShowInitStatus = true
            }
            if (res.data.code === 1) {
              self.isFreeze = true
            } else {
              self.isFreeze = false
            }
            status = 2
          }
          self.handleLoadingErr(status)
        }
        // 失败回调
        let errCallback = () => {
          self.isShowLoading = false
          let status = 2
          self.handleLoadingErr(status)
          this.$router.push({name: '404'})
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
          self.ajaxGetData(self.query)
        }
      },
      /**
       *
       * @param status pullup 上拉 pulldown  下拉
       */
      handleScrollPosition (status) {
        if (status === 'pullup') {
          this.isShowStore = false
          this.isHideStore = true
        }
        if (status === 'pulldown') {
          this.isShowStore = true
          this.isHideStore = false
        }
      }
    },
    watch: {
      'status.pullupStatus' (curVal) {
        let self = this
        // console.log(11)
        this.isPullDown = false
        self.handleScrollPosition('pullup')
        self.ajaxGetResultByPage(curVal)
      },
      'status.pulldownStatus' (curVal) {
        let self = this
        // console.log(22)
        self.handleScrollPosition('pulldown')
        this.isPullDown = true
        self.ajaxGetResultByPage(curVal)
      }
    },
    components: {
      Scroller,
      LoadMore,
      cmHeader,
      allGoods,
      cmResultStatus
    }
  }
</script>
