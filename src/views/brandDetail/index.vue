<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  body {
    background: #f0f0f0;
  }

  .search-box-module {
    -webkit-flex-direction: column;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }

  .brandDetail {
    margin: 15px;
    padding: 15px;
    background: #fff;
    height: 110px;
    @extend %fatherFlex;
    .brandLogo {
      img {
        width: 100px;
        height: 70px;
        margin-top:20px;
      }
    }
    .right {
      @extend %childFlex;
      @extend %fatherFlex;
      flex-direction: column;
      -webkit-flex-direction: column;
      padding: 0 0 0 10px;
      .brandName {
        color: #333;
        font-weight: bold;
        word-wrap : break-word;
        word-break:break-all;
      }
      .brandMes {
        @extend %childFlex;
        overflow-y: scroll;
        p {
          color: #666;
          word-wrap : break-word;
          word-break:break-all;
        }
      }
    }
  }

  .s-result {
    @extend %childFlex;
    @extend %fatherFlex;
    -webkit-flex-direction: column;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    position: relative;
  }

  .s-result-list {
    height: calc(100% - 44px) !important;
  }

  /*商品列表*/
  .gl-list {
    /*
        padding-top:88px;*/
    box-sizing: border-box;
    &.gl-list2 {
      height: calc(100% + 44px) !important;
    }
  }

  .gl-list, .gl-list-items, .gl-panel {
    height: 100%;
  }

  .search-goods {
    background-color: #fff;
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
        .f-col1 {
          color: map_get($colors, four);
        }
        .f-col2 {
          color: map_get($colors, four);
          .icon2 {
            -webkit-transform: rotate(-180deg);
            transform: rotate(-180deg);
          }
          i {
            display: inline-block;
            width: 16px;
            height: 16px;
            background: url(../../assets/images/default-aroow.png) no-repeat;
            background-size: cover;
          }
        }
        .f-col {
          color: map_get($colors, primary);
          .icon2 {
            -webkit-transform: rotate(-180deg);
            transform: rotate(-180deg);
          }
        }
        a i {
          display: inline-block;
          width: 16px;
          height: 16px;
          background: url(../../assets/images/icon-img-04.png) no-repeat;
          background-size: cover;
        }

      }
    }
  }

  .search-goods {
    height: 44px;
    .weui_cells {
      /*
            position: fixed;
            width: 100%;
            left: 0;
            top: 51px;*/
      // top:0;
      z-index: 998;
      margin-top: 0;
      &.search-sort {
        top: 0;
      }
    }
    .we_ul_cell {
      padding: 3px 15px;
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
    font-size: 12px;
  }

  .goodsMes {
    height: 66px;
  }

  .p-goodsName {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #333;
    line-height: 16px;
  }

  .goodsPrice {
    height: 24px;
    line-height: 24px;
    font-size: 16px;
    color: map_get($colors, primary);
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
    margin-top: 10px;
  }

  .gl-panel {
    @extend %childFlex;
    position: relative;
  }

  .gl-top {
    position: fixed;
    right: 30px;
    bottom: 60px;
    width: 30px;
    height: 30px;
    background: url("../../assets/images/top.png") 100% 100%;
    background-size: 100% 100%;
  }

  .isShowGood {
    text-align: center;
  }
</style>

<style lang="scss" rel="stylesheet/scss">
  .brandDetail {
    &.none {
      display: none;
    }
  }
  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  // 定义滚动条轨道 内阴影+圆角
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  // 定义滑块 内阴影+圆角
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    background-color: #f33;
  }


</style>

<template>
  <div class="search-box-module">
    <div v-show="isShowLoading" class="isShowLoading">
      <load-more :tip="loadingTxt"></load-more>
    </div>
    <template v-if="isShowBrand">
      <div class="brandDetail" v-if="!isShowLoading" :class="handleDetailClass()" ref="brandDetail">
        <div class="brandLogo">
          <img :src=handleSrc(goodsBrand.brandLogo) alt="">
        </div>
        <div class="right">
          <p class="brandName">{{goodsBrand.brandName}}</p>
          <div class="brandMes">
            <p>{{goodsBrand.brandBrief}}</p>
          </div>
        </div>
      </div>
      <div class="s-result">
        <div v-show="!isShowGood" class="isShowGood">
          <p>暂无商品</p>
        </div>
        <template v-if="isShowGood">
          <!--条件排序-->
          <div class="search-goods">
            <div class="weui_cell we_ul_cell">
              <ul>
                <li><a href="javascript:;" :class="handleSort('default')" @click.stop="handleSortData('default')">默认</a>
                </li>
                <li><a href="javascript:;" :class="handleSort('saleNum')" @click.stop="handleSortData('saleNum')">销量</a>
                </li>
                <li><a href="javascript:;" :class="handleSort('price')" @click.stop="handleSortData('price')">价格<i
                  class="icon2"></i></a></li>
              </ul>
            </div>
          </div>
          <!--end 条件排序-->
          <!--商品-->
          <div class="weui_panel weui_panel_access gl-panel">
            <scroller ref="my_scroller" :on-refresh="refresh" :on-infinite="infinite" :snappingHeight="60">
              <div class="box2">
                <router-link v-for="items in goodsList" :to="{name:'goodsDetail', query:{goodsId:items.goodsId}}"
                             class="weui_media_box weui_media_appmsg">
                  <div class="weui_media_hd bg-img">
                    <template v-if="items.url">
                      <img class="weui_media_appmsg_thumb" :src="handleSrc(items.url)" :alt="items.goodsName">
                    </template>
                  </div>
                  <div class="weui_media_bd">

                    <div class="goodsMes">
                      <p class="weui_media_desc p-goodsName">{{ items.goodsName }}</p>
                      <p class="p-city">品牌：
                        <span v-if="items.brandName">{{ items.brandName }}</span>
                        <span v-else="items.brandName">其他</span>
                      </p>
                    </div>
                    <p class="goodsPrice">{{ items.goodsPrice | currency('￥') }}</p>
                  </div>
                </router-link>
              </div>
            </scroller>
            <div class="gl-top" @click="returnTop" v-show="isShowTop"></div>
          </div>
          <cm-result-status v-show="isShowInitStatus" :searchType="1"></cm-result-status>
        </template>
      </div>
    </template>
  </div>
</template>
<script type="text/babel">
  import {LoadMore} from 'vux'
  import {imgServer, apiServer} from '../../config'
  import cmGoodsList from '../../components/goodsList/index.vue'
  import cmResultStatus from '../../components/resultStatus/index.vue'
  import {mapState, mapActions} from 'vuex'
  export default {
    data () {
      return {
        hdTitle: '品牌详情',
        searchType: 1, // 1 商品 2 店铺
        loadingTxt: '正在加载', // 显示正在加载字样
        isShowLoading: true, // 是否显示正在加载 默认显示
        url: '',
        goodsList: [],
        goodsBrand: '',
        query: '',
        isShowTop: false,
        isShowGood: false,
        isShowBrand: false,
        isSort: false,
        isShowInitStatus: false, // 是否显示初始化为空时的页面
        loadingWay: 1,
        detailNone: false,
      }
    },
    created () {
      document.title = this.hdTitle
      let getQuery = this.$route.query
      this.query = {
        'token': '',
        'versionCode': '1',
        'deviceId': '355848069264888',
        'deviceType': 'wx',
        'data': {
          'brandId': getQuery.brandId,
          'sortCode': 4,
          'searchType': 1,
          'pageNum': 1,
          'pageSize': 16
        }
      }
      this.url = `${apiServer}/p/goods/getGoodsBrandInfo`
      this.ajaxGetResultByQuery(this.query)
    },
    methods: {
      handleErr (msg) {
        const self = this
        self.$vux.toast.show({
          text: msg,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
      },
      handleDetailClass () {
        if (this.detailNone) {
          return 'none'
        } else {
          return ''
        }
      },
      /**
       * 下拉刷新
       */
      refresh (done) {
        this.query.data.pageNum = 1
        this.loadingWay = 1
        this.ajaxGetGoodsList(this.query, (code, list) => {
          if (code === 1) {
            done()
          }
          if (code === 2) {
            done(true)
          }
          if (code === 3) {
            done()
            if (err.code === 4131) {
              this.handleErr(err.message)
              self.$router.push({name: 'login', query: {'orderStatus': self.$route.query.orderStatus}})
            } else {
              this.handleErr('数据加载失败，请稍后重试')
            }
          }
          return true
        })
      },
      /**
       * 上拉加载
       */
      infinite (done) {
        this.query.data.pageNum++
        this.loadingWay = 2
        this.ajaxGetGoodsList(this.query, (code, err) => {
          if (code === 1) {
            done()
          }
          if (code === 2) {
            done(true)
          }
          if (code === 3) {
            done()
            this.query.data.pageNum--
            if (err.code === 4131) {
              this.handleErr(err.message)
              self.$router.push({name: 'login', query: {'orderStatus': self.$route.query.orderStatus}})
            } else {
              this.handleErr('数据加载失败，请稍后重试')
            }
          }
          return true
        })
      },
      returnTop () {
        this.$refs.my_scroller.scrollTo(0, 0, true)
        this.x = 0
        this.y = 0
      },
      handleSort (status) {
        if (status === 'default' && this.query.data.sortCode === 4) {
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
      handleSortData (status) {
        let self = this
        if (status) {
          switch (status) {
            case 'default':
              self.query.data.sortCode = 4
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
        self.query.data.pageNum = 0
        self.isSort = true
        self.loadingWay = 1
        this.$refs.my_scroller.triggerPullToRefresh()
        this.$refs.my_scroller.finishInfinite(false)
      },
      handleSrc (src) {
        return `${imgServer}${src}`
      },
      ajaxGetResultByQuery (query) {
        const self = this
        const url = self.url
        let successCallback = (res) => {
          this.isShowLoading = false
          let dataList = res.data.data
          if (res.status === 200 && res.data && res.data.code === 0 && dataList.length !== 0) {
            self.goodsBrand = dataList.goodsBrand
            self.goodsList = dataList.goodsList
            self.hdTitle = self.goodsBrand.brandName
            document.title = this.hdTitle
            self.isShowBrand = true
            if (self.goodsList.length > 0) {
              self.isShowGood = true
            }
          }
        }
        let errorCallback = () => {
          this.isShowLoading = false
          self.handleErr('数据加载失败，请稍后重试')
        }
        self.$http.post(url, query).then(successCallback, errorCallback)
      },
      ajaxGetGoodsList (query, cb) {
        const self = this
        const url = self.url
        let successCallback = (res) => {
          let dataList = res.data.data.goodsList
          if (res.status === 200 && res.data && res.data.code === 0 && dataList.length != 0) {
            self.isShowGood = true
            if (!self.isSort) {
              if (self.loadingWay === 1) {
                self.goodsList = dataList
              } else {
                self.goodsList = self.goodsList.concat(dataList)
              }
            } else {
              self.goodsList = dataList
              self.isSort = false
            }
            cb && cb(1, dataList)
          } else {
            if (dataList.length <= 0) {
              self.isShowGood = true
            }
            if (!(cb && cb(2))) {
            }
          }
        }
        let errorCallback = (res) => {
          if (!(cb && cb(3))) {
            self.handleErr('数据加载失败，请稍后重试')
          }
        }
        self.$http.post(url, query).then(successCallback, errorCallback)
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        if (this.$refs.my_scroller) {
          let {left, top} = this.$refs.my_scroller.getPosition()
          this.x = left
          this.y = top
          let ch = document.body.clientHeight
          // console.log(this.y)
          // console.log(ch)
          // console.log(ch <= this.y)
          if (this.y > 300) {
//            this.$refs.brandDetail.slideUp()
            this.detailNone = true
          } else {
//            this.$refs.brandDetail.slidDown()
            this.detailNone = false
          }

          if (ch <= this.y) {
            this.isShowTop = true
          } else {
            this.isShowTop = false
          }
        }
      }, 50)
    },
    components: {
      cmGoodsList,
      LoadMore,
      cmResultStatus
    }
  }
</script>

