<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  .idx-index-box {
    height: 100%;
  }

  .idx-index {
    padding-bottom: 55px;
    height: 100%;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;

  }

  .idx-content {
    position: relative;
    flex: 1;
  }

  .idx-swiper {
    height: 210px;
    img {
      width: 100%;
      height: 210px;
    }
  }

  .idx-grids {
    background-color: map_get($colors, third);
    &:before {
      border: 0;
    }
    .idx-gird {
      width: 25%;
      &:before {
        border: 0;
      }
      .idx-grid-icon {
        width: 50px;
        height: 50px;
      }
    }
    .idx-gird-good {
      width: 50%;
      padding: 0 15px;
      .idx-grid-good-img {
        width: 100%;
        height: 100%;
      }
      p {
        text-align: left;

      }
    }
    &.idx-grids-goods {
      background-color: transparent;
      padding-bottom: 20px;

    }
  }

  .idx-title-single-product {
    margin-top: 20px;
  }

  .idx-pannel-access {
    position: relative;
    .idx-media-appmsg {
      -webkit-align-items: flex-start;
      align-items: flex-start;
      padding: 0 15px 15px 15px;
      &:before {
        border: 0;
      }
      .idx-media-hd {
        width: 140px;
        height: 100%;
      }
      .g-price {
        position: absolute;
        bottom: 15px;
      }
    }
  }

  .idx-search-bar {
    padding: 8px 15px;
    background-color: map_get($colors, third);
    z-index: 999;
    .weui_search_outer {
      background-color: #f7f7f7;
      border-radius: 5px;
      &:after {
        border: 0;
      }
    }
    .weui_search_inner {
      border-radius: 5px;
      background-color: #f7f7f7;
    }
  }

  .idx-grids_div {
    padding: 17.5px 0px 17.5px 0px;
    margin-bottom: 2px;
    .idx-gird {
      width: 49.9%;
      padding: 0px 10px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      .weui_grid_div {
        width: 45px;
        height: 45px;
        margin-right: 15px;
        margin-left: 30px;
      }
      .grid_label_div {
        font-size: 14px;
      }
    }
    img {
      height: 60px;
      width: 1px;
      position: absolute;
      left: 50%;
    }
  }

  .module-con_div {
    padding: 0px 0px 0px 0px;
    .layout-type2-con {
      .mui-flex {
        display: -webkit-box !important;
        display: -webkit-flex !important;
        display: -ms-flexbox !important;
        display: flex !important;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        .cell {
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          -ms-flex: 1;
          flex: 1;
          width: 0;
          -webkit-flex-basis: 0;
          -ms-flex-preferred-size: 0;
          flex-basis: 0;
          max-width: 100%;
          display: block;
          padding: 0 !important;
          position: relative;
          .component {
            padding: -6px 0px 0px 0px;
            display: block;
            color: #051B28;
            font-size: 14px;
            line-height: 28px;
            height: 28px;
            text-align: center;
            .vline {
              display: inline-block;
              border-bottom: 1px solid;
              width: 30px;
              margin-bottom: 5px;
              border-color: #ff6048;
            }
            .left {
              margin-right: 6px;
            }
            .right {
              margin-left: 6px;
            }
            .title {
              color: #ff6048;
            }
            img {
              height: 15px;
              margin: 0 auto 5px;
              background-color: transparent;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }

  .weui_grids_div {
    background-color: #ffffff;
    padding: 0px 8px;
    .idx_grid_a {
      border: 1px solid #f0f0f0;
      background-color: #f0f0f0;
      width: 33.3%;
      margin: 0px;
      padding: 2px;
      .idx-grid-good-img {
        background-color: #ffffff;
        img {
          width: 100%;
          height: 20px;
        }
      }
      .grid_icon_div {
        height: 16px;
        width: 80%;
        border-bottom: 1px solid #f0f0f0;
        padding: 12px 10%;
      }
      .grid_icon_text {
        height: 40px;
        width: 80%;
        padding: 0px 10%;
        line-height: 20px;
        color: #666666;
        font-size: 11px;
        text-align: center;
        -webkit-box-pack: center;
        -moz-box-pack: center;
        -webkit-box-align: center;
        -moz-box-align: center;
        display: -webkit-box;
        display: -moz-box;
      }
    }
  }

  .grids_div {
    margin-top: 4px;
    padding: 0px 7.5px 0px 7.5px;
    .idx-gird-good {
      padding: 0px 7.5px 0px 7.5px;
    }
    .weui_grid_label {
      font-size: 12px;
      color: #666666;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .g-price {
      font-size: 14px;
      color: #cb1e1e;
    }
  }

  .scroll_div {
    display: block;
    margin-bottom: 0px;
    font-size: 12px;
    color: #808080;
    img {
      width: 12px;
      margin: 5px 2px;
    }
  }

  .idx-grids.idx-grids-goods {
    padding-bottom: 0px;
  }

  /*导航*/
  .nav {
    display: -webkit-flex; /* Safari */
    -webkit-flex-wrap: wrap; /* Safari 6.1+ */
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: #fff;
    padding-bottom: 10px;
    .box {
      display: block;
      width: 25%;
      padding-top: 15px;
      text-align: center;
      img {
        width: 40px;
        height: 40px;
      }
      p {
        color: #666;
        height: 24px;
        line-height: 24px;
      }
    }
  }

  /*热销产品*/
  .indexTitle {
    padding: 0 15px;
    height: 44px;
    line-height:44px;
    span {
      float: left;
      display: inline-block;
      height: 14px;
      padding-left: 5px;
      margin-top: 15px;
      border-left: 2px solid #e60014;
      line-height: 14px;
      color: #333;
      font-weight: bold;
      font-size: 14px;
    }
    .span2 {
      float: right;
      color: #999999;
      font-size: 12px;
    }
  }

  .goodsStyle1 {
    @extend %fatherFlex;
    -webkit-flex-wrap: wrap; /* Safari 6.1+ */
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    margin-bottom: -20px;
    .singleBox {
      @extend %childFlex;
      width: 50%;
      padding-right: 7px;
      box-sizing: border-box;
      margin-bottom: 15px;
      &:nth-child(2n) {
        padding-right: 0;
        padding-left: 7px;
      }
    }
    .list {
      background: #fff;
      padding-top: 10px;
      img {
        display: block;
        margin: auto;
        width: 138px;
        height: 138px;
        vertical-align: bottom
      }
      .p1 {
        /*display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;*/
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 5px 10px;
        color: map_get($colors, four);
        font-size: 12px;
        background: #fff;
      }
      .p2 {
        padding: 0px 10px 5px 10px;
        color: #e60014;
        background: #fff;
      }

    }
  }

  /*推荐商品*/
  .recommend {
    padding: 0 15px;
    background: #fff;
  }

  .goodsStyle2 {
    .list {
      @extend %fatherFlex;
      box-sizing: border-box;
      padding: 10px 0;
      border-bottom: 1px solid #eeeeee;
      img {
        width: 90px;
        height: 90px;
      }
      .right {
        @extend %childFlex;
        padding: 0 10px;
        .goodsMes {
          height: 66px;
          .goodsName {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
            color: #333;
            line-height: 16px;
          }
          .goodsBrand {
            padding-top: 5px;
            color: #666;
            font-size: 12px;
          }
        }
        .goodsPrice {
          height: 24px;
          line-height: 24px;
          font-size: 16px;
          color: #e60014;
        }
      }
      &.last {
        border: none;
      }
    }
  }

  .idx-goodsList {
    position: relative;
    flex: 1;
  }

  /*品牌*/
  .brandContent {
    width: 100%;
    .brandTitle {
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      .span1 {
        float: left;
        color: #ff5542;
        font-weight: bold;
      }
      .span2 {
        float: right;
        color: #999999;
        font-size: 12px;
      }
    }
    .brandList {
      background: #fff;
      @extend %fatherFlex;
      -webkit-flex-wrap: wrap; /* Safari 6.1+ */
      flex-wrap: wrap;
      .singleBox {
        width: 20%;
        .brand {
          display: block;
          width: 65px;
          height: 45px;
          margin: auto;
          img {
            width: 65px;
            height: 45px;
          }
        }
      }
    }
  }

  /*品牌-end*/

  .slide-wrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 40%;
    overflow: hidden;
    .slide-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }


</style>
<template>
  <div class="idx-index-box">
    <div class="idx-index" v-if="!isShowLoading">
      <!--搜索-->
      <div class="weui_search_bar idx-search-bar" id="search_bar">
        <form class="weui_search_outer idx-search-outer">
          <div class="weui_search_inner">
            <i class="weui_icon_search"></i>
            <input type="search" class="weui_search_input" id="search_input" placeholder="输入商品" @focus="goSearch()"
                   required="">
            <a href="javascript:" class="weui_icon_clear" id="search_clear"></a>
          </div>
        </form>
      </div>
      <!--end 搜索-->
      <div class="idx-content">
        <scroller ref="idxScroller" :onInfinite="onInfinite">
          <!--图片轮播-->
          <!--<div v-if="items.length" class="slide-wrapper">
            <div class="slide-content">
              <slide ref="slide">
                <div v-for="item in items">
                  <a :href="item.linkUrl">
                    <img :src="item.picUrl">
                  </a>
                </div>
              </slide>
            </div>
          </div>-->
          <!--图片轮播--end-->
          <!--幻灯片-->
          <swiper loop auto dots-class="dotsBgColor" :list="index_img" height="210px" dots-position="center"></swiper>
          <!--end 幻灯片-->
          <!--导航-->
          <div class="nav clearfix">
            <a v-for="item in partTwo" class="box" :href="item.content">
              <img :src="handleSrc(item.picPath)" alt="">
              <p class="navName">{{ item.contentTitle }}</p>
            </a>
          </div>
          <!--end 导航-->

          <!--品牌-->
          <div class="brandContent">
            <div class="indexTitle clearfix"><span>{{ brandTitle }}</span><router-link :to='{name:"brandList"}' class="span2">更多></router-link></div>
            <div class="brandList">
              <div class="singleBox" v-for="(item,index) in partFour">
                <router-link :to="{name:'brandDetail', query:{brandId:item.paramId}}" class="brand">
                  <img :src=handleSrc(item.picPath) alt="">
                </router-link>
              </div>
            </div>
          </div>
          <!--品牌-end->
          <!--热销商品-->
          <div class="idx-goodsList" v-if="floorArr.length > 0">
            <template v-for="item in floorArr">
              <div class="indexTitle clearfix"><span>{{item.floorName}}</span></div>
              <div class="goodsStyle1" v-if="item.contentType == 2">
                <template v-for="(key, index) in partThree">
                  <router-link v-if="key.floorId == item.floorId"
                               :to="{name:'goodsDetail', query:{goodsId: key.goodsMain.goodsId}}" class="singleBox">
                    <div class="list">
                      <img :src="handleSrc(key.goodsMain.url)" alt="">
                      <p class="p1">{{key.goodsMain.goodsName}}</p>
                      <p class="p2">{{key.goodsMain.goodsPrice | currency('￥')}}</p>
                    </div>
                  </router-link>
                </template>
              </div>
              <div class="recommend" v-if="item.contentType == 1">
                <div class="goodsStyle2">
                  <template v-for="(key, index) in partThree">
                    <router-link v-if="key.floorId == item.floorId"
                                 :to="{name:'goodsDetail', query:{goodsId: key.goodsMain.goodsId}}" class="list">
                      <img :src="handleSrc(key.goodsMain.url)" alt="">
                      <div class="right">
                        <div class="goodsMes">
                          <p class="goodsName">{{key.goodsMain.goodsName}}</p>
                          <p class="goodsBrand" v-if="key.goodsMain.brandName">品牌：{{key.goodsMain.brandName}}</p>
                          <p class="goodsBrand" v-else>品牌：其他</p>
                        </div>
                        <p class="goodsPrice">{{key.goodsMain.goodsPrice | currency('￥')}}</p>
                      </div>
                    </router-link>
                  </template>
                </div>
              </div>
            </template>
          </div>
          <!--新品推荐-end-->
          <a @click="handleReq(1)" class="weui-infinite-scroll scroll_div">
            <img src="../../assets/images/pullUp.png"/>查看更多
          </a>
        </scroller>
      </div>
    </div>
    <div v-show="isShowLoading" class="isShowLoading">
      <load-more :tip="loadingTxt"></load-more>
    </div>
    <cm-footer></cm-footer>
  </div>
</template>
<script type="text/babel">
  import {LoadMore} from 'vux'
  import cmFooter from '../../components/footer/index.vue'
  import cmSearch from '../../components/search/index.vue'
  import {Swiper} from 'vux'
  import {mapActions} from 'vuex'
  import {apiServer, imgServer} from '../../config'
  import {SET_REQ_SEARCH_PARAMS_PARAMS} from '../../store/reqSearchResultParams'
  import Slide from '../../components/slide/slide.vue'
  export default {
    data () {
      return {
        isShowReturn: false,
        index_img: [],
        hdTitle: '首页',
        partTwo: [],
        partThree: [],
        partFour: [],
        floorArr: [],
        goodList: [],
        brandTitle: '',
        page: 1,
        isShowLoading: true,
        loadingTxt: '正在加载',
        items: [
          {
            linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
            id: 11351
          },
          {
            linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
            id: 11372
          },
          {
            linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
            id: 11378
          },
          {
            linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
            id: 11375
          },
          {
            linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
            id: 11287
          }
        ]
      }
    },
    created () {
      document.title = this.hdTitle
      this.ajaxGetData()
      console.log('test：cache')
    },
    methods: {
      ...mapActions([SET_REQ_SEARCH_PARAMS_PARAMS]),
      onInfinite (done) {
        if (this.partThree.length === this.goodList.length) {
          done(true)
        } else {
          this.page++
          const self = this
          setTimeout(() => {
            self.partThree = this.getFloorDataByPage(self.page)
            self.floorArr = self.getAllFloor(self.partThree)
            console.log(self.floorArr)
            done()
          }, 2000)
        }
      },
      // banner
      getImgList (list) {
        let arr = []
        console.log(list)
        for (let i = 0; i < list.length; i++) {
          let map = {}
          map.url = list[i].content
          map.img = `${imgServer}${list[i].picPath}`
          arr.push(map)
        }
        this.index_img = arr
      },
      //获取所有楼层
      getAllFloor (list) {
        let arr = []
        for (let i = 0; i < list.length; i++) {
          if (i === 0 || list.length === 2) {
            let map = {}
            map.floorId = list[i].floorId
            map.floorName = list[i].floorName
            map.contentType = list[i].contentType
            arr.push(map)
          } else if (list[i + 1] && list[i].floorId !== list[i + 1].floorId) {
            let map = {}
            map.floorId = list[i + 1].floorId
            map.floorName = list[i + 1].floorName
            map.contentType = list[i + 1].contentType
            arr.push(map)
          }
        }
        console.log('------getAllFloor---------')
        console.log(list)
        return arr
      },
      getFloorDataByPage (page) {
        return this.goodList.slice(0, page * 10)
      },
      // 获取首页信息
      ajaxGetData () {
        const url = `${apiServer}/p/wxIndex`
        const self = this
        // 成功回调
        let successCallback = (res) => {
          self.isShowLoading = false
          if (res.status === 200 && res.data.code === 0) {
            self.getImgList(res.data.data.partOne)
            self.partTwo = res.data.data.partTwo
            self.partFour = res.data.data.partFour
            if (self.partFour.length > 0) {
              self.brandTitle = self.partFour[0].contentTitle
            }
            //self.partThree = self.resetPartThree(res.data.data.partThree)
            self.goodList = res.data.data.partThree
            self.partThree = self.getFloorDataByPage(self.page)
            self.floorArr = self.getAllFloor(self.partThree)
            console.log(self.floorArr)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.isShowLoading = false
        }
        console.log('hahah' +  url)
        self.$http.post(url).then(successCallback, errCallback)
      },
      handleSrc (url) {
        return `${imgServer}${url}`
      },
      /**
       * 处理搜索
       */
      handleReq (searchType) {
        const req = {
          'token': '',
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'keyWord': '',
            'searchType': searchType,
            'pageNum': 0,
            'pageSize': 16
          }
        }
        let title = searchType === 1 ? '全部商品' : '热门店铺'
        this.SET_REQ_SEARCH_PARAMS_PARAMS(req)
        this.$router.push({
          name: 'searchResult',
          query: {
            isHideSearch: true,
            title: title
          },
          params: req
        })
      },
      goSearch () {
        this.$router.push({name: 'search'})
      },
    },
    watch: {
      floorArr () {
        console.log(this.floorArr)
      }
    },
    components: {
      cmFooter,
      cmSearch,
      LoadMore,
      Swiper,
      Slide
    }
  }
</script>
