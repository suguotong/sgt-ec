<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  /**搜索-商品**/
  .gl-list {/*
    padding-top:88px;*/
    box-sizing: border-box;
    &.gl-list2 {
      height: calc( 100% + 44px ) !important;
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
    height: 44px;
    .weui_cells {/*
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
    font-size: 12px;
  }
  .goodsMes {
    height: 66px;
  }
  .p-goodsName{
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
    color: map_get($colors,primary);
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
  .gl-list-items {
    @extend %fatherFlex;
    -webkit-flex-direction: column;
    flex-direction: column;
  }
  .gl-panel {
    @extend %childFlex;
    position: relative;
  }
  .gl-top {
    position: fixed;
    right: 30px;
    bottom:60px;
    width: 30px;
    height: 30px;
    background: url("../../assets/images/top.png") 100% 100%;
    background-size: 100% 100%;
  }
</style>
<template>
  <div class="gl-list" :class="[isHideSearch ? 'gl-list2' : '']">
    <div class="gl-list-items">

      <!--<div v-show="isShowLoading" class="isShowLoading">
        <load-more :tip="loadingTxt"></load-more>
      </div>-->
      <template v-if="isHasData">
        <!--条件排序-->
        <div class="search-goods">
          <div class="weui_cells weui_cells_access" :class="[isHideSearch ? 'search-sort' : '']">
            <div class="weui_cell we_ul_cell">
              <ul>
                <li><a href="javascript:;" :class="handleSort('default')" @click.stop="handleSortData('default')">默认<!--<i class="icon1"></i>--></a></li>
                <li><a href="javascript:;" :class="handleSort('saleNum')" @click.stop="handleSortData('saleNum')">销量</a></li>
                <li><a href="javascript:;" :class="handleSort('price')" @click.stop="handleSortData('price')">价格<i class="icon2"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <!--end 条件排序-->
        <!--商品-->
        <div class="weui_panel weui_panel_access gl-panel" >
          <scroller  ref="my_scroller" :on-refresh="refresh" :on-infinite="infinite" :snappingHeight="60">
          <!--<scroller  lock-x height="100%" ref="scroller" v-model="status" use-pulldown use-pullup :pulldown-config="pullDown" :pullup-config="pullUp">-->
            <div class="box2">
              <router-link v-for="items in list" :to="{name:'goodsDetail', query:{goodsId:items.goodsId}}" class="weui_media_box weui_media_appmsg">
                <div class="weui_media_hd bg-img">
                  <template v-if="items.imgUrl">
                    <img class="weui_media_appmsg_thumb" :src="handleSrc(items.imgUrl)" :alt="items.goodsName">
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
          <!--</scroller>-->
          </scroller>
          <div class="gl-top" @click="returnTop" v-show="isShowTop"></div>
        </div>
      </template>
    </div>
    <cm-result-status v-show="isShowInitStatus" :searchType="1"></cm-result-status>
  </div>
</template>
<script type="text/babel">
  import { imgServer, apiServer } from '../../config'
  import {  LoadMore } from 'vux'
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
              'pageNum': 0,
              'pageSize': 16,
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
    data () {
      return {
        list: [],
        //isInit: true, // 初始化
        isHasData: true,
        isShowInitStatus: false, // 是否显示初始化为空时的页面
        isShowLoading: true, // 是否显示正在加载 默认显示
        loadingTxt: '正在加载', // 显示正在加载字样
        sortCodeStatus: '', // 排序状态码 1:销量倒叙,2:价格正序,3:价格倒序；默认为不填：默认排序
        isSort: false, // 是否排序
        loadingWay: 1,
        x: 0,
        y: 0,
        timer: 0,
        isShowTop: false
      }
    },
    created () {
      // this.ajaxGetResultByQuery(this.query)
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
          if (ch <= this.y) {
            this.isShowTop = true
          } else {
            this.isShowTop = false
          }
        }
      }, 50)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    methods: {
      returnTop () {
        this.$refs.my_scroller.scrollTo(0, 0, true)
        this.x = 0
        this.y = 0

      },
      /**
       * 下拉刷新
       */
      refresh (done) {
        this.query.data.pageNum = 1
        this.loadingWay = 1
        this.ajaxGetResultByQuery(this.query,  (code, list) => {
          // console.log(code)
          // console.log(list)
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
        // console.log('------this.query.data.pageNum-------')
        console.log(this.query.data.pageNum)
        this.query.data.pageNum++
        this.loadingWay = 2
        this.ajaxGetResultByQuery(this.query,  (code, err) => {
          // console.log(code)
          // console.log(list)
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
      handleErr (msg) {
        const self = this
        self.$vux.toast.show({
          text: msg,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
      },
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
        self.query.data.pageNum = 0
        self.isSort = true
        self.isShowLoading = true
        self.loadingWay = 1
        this.$refs.my_scroller.triggerPullToRefresh()
        this.$refs.my_scroller.finishInfinite(false)
        // this.ajaxGetResultByQuery(self.query)
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
      ajaxGetResultByQuery (query, cb) {
        const self = this
        const url = self.url
        // 成功回调
        let successCallback = (res) => {
          this.isShowLoading = false
          let dataList = res.data.data.dataList
          if (res.status === 200 && res.data && res.data.code === 0 && dataList.length !== 0) {
            if (!self.isSort) {
              if (self.loadingWay === 1) {
                // self.list = self.list.unshift(dataList)
                self.list = dataList
              } else {
                self.list = self.list.concat(dataList)
              }
              /*self.$nextTick(() => {
                this.$refs.scroller.reset()
              })*/
              // self.isInit = false // 没有数据时设置为false
            } else {
              console.log(self.isSort)
              self.list = dataList
              self.isSort = false
            }
            cb && cb(1, dataList)
          } else {
            if (self.list.length <= 0) {
              self.isHasData = false
              self.isShowInitStatus = true
            }
            if (!(cb && cb(2))) {
            }
          }
        }
        // 失败回调
        let errCallback = () => {
          self.isShowLoading = false
          if (!(cb && cb(3))) {
            self.handleErr('数据加载失败，请稍后重试')
          }
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
      }
    },
    components: {
      imgServer,
      LoadMore,
      cmResultStatus
    }
  }
</script>
