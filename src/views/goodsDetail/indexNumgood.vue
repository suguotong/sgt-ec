<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  .gd-detail {
    height: 100%;
    overflow: hidden;
    .gd-detail-con {
      height: 100%;
      overflow: auto;
    }
    .header {
      position: fixed;
      left: 0;
      top: 0;
    }
    .isShowLoading {
      padding-top: 44px;
    }
    .swiper {
      /*margin-top: 44px;*/
      .dotsClass {
        .vux-icon-dot {
          background-color: map_get($colors, third);
          &.active {
            background-color: map_get($colors, primary);
          }
        }
      }
    }
    .gd-store {
      .gd-media-hd {
        width: 85px;
        height: 40px;
      }
    }
    .gd-detail-item {
      margin-top: 10px;
      border-top: 1px solid map_get($colors, six);
      background-color: map_get($colors, third);
      .gd-item {
        width: 50%;
      }

    }
    .gd-detail-content {
      padding-bottom: 60px;
      height: calc(100% - 90px);
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      /*iframe {
        height: 100%;
      }*/
      .detailBox{
        padding: 15px;
        overflow: auto;
      }
      .afterSellBox{
        padding: 15px;
        overflow: auto;
        P{
          text-indent: 24px;
        }
      }
      .none{
        display: none;
      }
    }
    .gd-footer {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 10;
      width: 100%;
      height: 50px;
      border-top: 1px solid map_get($colors, six);
      background-color: map_get($colors, third);
      ul {
        display: flex;
        height: 100%;
        li {
          &.opeate {
            width: 63px;
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
          &.btn-box {
            -webkit-flex: 1;
            text-align: center;
            line-height: 50px;
            background-color: map_get($colors, primary);
            font-size: map_get($fontSize, four);
            a {
              color: map_get($colors, third);
            }

            &.disabled {
              background-color: map_get($colors, eight);
            }
          }
          .collect {
            background: url(../../assets/images/collect.png) no-repeat;
            background-size: 100%;
            &.collected{
              background: url(../../assets/images/collected.png) no-repeat;
              background-size: 100%;
            }
          }
        }
        .goCartBox{
          position: relative;
          .goCartNum{
            position: absolute;
            top:-5px;
            right:5px;
            width:24px;
            height:24px;
            border-radius: 12px;
            text-align: center;
            line-height:24px;
            color: #fff;
            background: #cb1e1e;
            font-size: 12px;
            &.none{
              display: none;
            }
          }
        }
      }
    }
  }
  .goodsDetail-afterSales {
    h2 {
      padding: .10rem 0;
      img {
        width: .28rem;
        height: .28rem;
      }
      font-size: .26rem;
      line-height: .30rem;
      color: #e96334;
      font-weight: 500;
    }
    p {
      font-size: .24rem;
      line-height: .36rem;
      color: #666666;
    }
  }
</style>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  .gd-detail {
    .dotsClass {
      .vux-icon-dot {
        background-color: map_get($colors, third) !important;
        &.active {
          background-color: map_get($colors, primary) !important;
        }
      }
    }
  }

  .weui_dialog_confirm .weui_dialog .weui_dialog_bd {
    text-align: center;
  }
</style>
<template>
  <div class="gd-detail"><!--
    <cm-header :hdTitle="hdTitle"></cm-header>-->
    <div v-show="isShowLoading" class="isShowLoading">
      <load-more :tip="loadingTxt"></load-more>
    </div>
    <template v-if="!isShowLoading">
      <div class="gd-detail-con">
          <!--幻灯片-->
          <swiper class="swiper" :auto="true" :list="goodsImgList" :aspectRatio="aspectRatio" :dotsPosition="dotsPosition"
                  :dotsClass="dotsClass"></swiper>
          <!--end 幻灯片-->
          <!--价格区间-->
          <price-range :priceRangeList="detail.priceList" :location="detail.location" :goodsTitle="detail.goodsTitle"
                       :salesCount="detail.salesCount" :faceToPrice="detail.faceToPrice"></price-range>
          <!--end 价格区间-->
          <!--属性-->
          <good-attr v-if="isShowAttr" :params="detail.params" :sku="handleSku()" :feeType="detail.feeType"
                     :feeRemark="detail.feeRemark" :goodsImgList="goodsImgList" :priceRangeList="detail.priceList"
                     :goodsTitle="detail.goodsTitle" :availableSaleNum="detail.availableSaleNum"
                     :status="detail.status" @sendNumToParent1="getFromChild2" :faceToPrice="detail.faceToPrice"></good-attr>
          <!--end 属性-->
          <!--店铺-->
          <!--<div class="weui_panel weui_panel_access gd-store">
            <div class="weui_panel_bd">
              <router-link  :to="{name:'storeHomePage', query:{shopId:detail.shopId}}" class="weui_media_box weui_media_appmsg">
                <div class="weui_media_hd gd-media-hd">
                  <img class="weui_media_appmsg_thumb" :src="handleSrc(detail.shopLogo)" alt="">
                </div>
                <div class="weui_media_bd gd-media-bd">
                  <p class="weui_media_desc">{{ detail.shopName }}</p>
                </div>
              </router-link>
            </div>
          </div>-->
          <!--end 店铺-->
          <!--商品详情 售后服务-->
          <cm-tab class="gd-detail-item">
            <li class="gd-item" :class="handleActiveTab(0)" @click="handleInfo(0)">
              <a href="javascript:;">商品详情</a>
            </li>
            <li class="gd-item" :class="handleActiveTab(1)" @click="handleInfo(1)">
              <a href="javascript:;">售后服务</a>
            </li>
          </cm-tab>
          <!--end 商品详情 售后服务-->
          <!--商品详情 售后服务 content-->
          <div class="gd-detail-content">
            <div class="detailBox" :class="[tabNumber>0 ? '':'none']" v-html="goodsDetail">
            </div>
            <div class="afterSellBox" :class="[tabNumber>0 ? 'none':'']">
              <div class="goodsDetail-afterSales">
                <h2><img src="../../assets/images/goodsDetail-4@3x.png">价格及货期说明</h2>
                <p>价格：是指普通会员最终购买商品的价格，若您是企业大量采购，可直接联系客服进行洽谈（全国热线服务：400-9916-950）。</p>
                <p>预计出货日：若为当日出货，表示买五金网有现货，可马上为您安排配送；</p>
                <p>若为XX天数出货，表示该商品目前无现货或库存不足，该日期仅为参考，在购买前请与客服联系确认出货日期。</p>
                <h2><img src="../../assets/images/goodsDetail-5@3x.png">保障说明</h2>
                <p>
                  买五金网向您保证所售商品均为正品货源，开具正规发票。
                </p>
                <p>
                  正品保障
                </p>
                <p>售后保障</p>
                <p>产品在使用过程中如因产品质量问题有“退换返修”的需求，您可通过买五金网提交您的售后申请或立刻联系客服咨询，客服会第一时间为您处理，在售后服务过程中如遇到问题也可致电客服热线（全国热线服务：400-9916-950）。</p>
                <p>注：退换货(包含有质量问题的商品）时，请务必将商品的内带附件、赠品（如有）、保修卡、说明书、发票、检测报告（针对需凭检测报告办理退换货的商品）等随同商品一起退回。友情提示：建议产品外包装、附件、赠品自收货之日起保留15日，退换货时附商品的原外包装。</p>
                <p>
                  *最终解释权归买五金网所有*
                </p>
                <h2><img src="../../assets/images/goodsDetail-6@3x.png">权利说明</h2>
                <p>买五金网上的所有商品信息（包括但不限于商品图片、商品介绍、产品视频及文档）、产品咨询信息，是买五金网重要的经营资源，未经许可，禁止非法转载及使用。</p>
                <br/>
              </div>
              <!--<p class="afterSale">买五金平台销售并发货的商品，由平台提供发票和相应的售后服务。请您放心购买！买五金平台向您保证所售商品均为正品行货</p>
              <p class="afterSale">您在购物的过程中如有什么问题都可直接致电客服联系电话400-9916-950</p>-->
            </div>
          </div>
          <!--end 商品详情 售后服务 content-->
        <!--操作-->
        <div class="gd-footer">
          <ul>
            <li class="opeate" @click="handleContactUs">
              <a class="" href="javscript:;">
                <i class="g-icon3 icon-contact"></i>
                联系
              </a>
            </li>
            <li class="opeate" @click="handleLogin(1)">
              <a href="javascript:;">
                <i class="g-icon3 collect" :class="[isCollected ? 'collected' : '']"></i>
                {{ collectTxt }}
              </a>
            </li>
            <li class="opeate goCartBox">
              <router-link :to="{ name: 'cart' }">
                <i class="g-icon2 icon-cart"></i>
                进货单
              </router-link>
              <span class="goCartNum" :class="[goCartNum>0 ? '':'none']" v-if="goCartNum<99">{{ goCartNum }}</span>
              <span class="goCartNum" :class="[goCartNum>0 ? '':'none']" v-else="goCartNum<99">99+</span>
            </li>
            <li v-if="detail.status === 4" class="btn-box disabled">
              <a class="go-cart" href="javascript:;">
                已下架
              </a>
            </li>
            <li v-if="detail.availableSaleNum === 0" class="btn-box disabled">
              <a class="go-cart" href="javascript:;">
                已售空
              </a>
            </li>
            <li v-if="detail.status === 3 && detail.availableSaleNum !== 0 && detail.faceToPrice ===0" class="btn-box" @click="handleShowSku">
              <a class="go-cart" href="javascript:;">
                立即购买
              </a>
            </li>
            <!--面议价格-->
            <li v-if="detail.faceToPrice === 1" class="btn-box disabled">
              <a class="go-cart" href="javascript:;">
                立即购买
              </a>
            </li>
          </ul>
        </div>
        <!--end 操作-->
      </div>
    </template>
  </div>
</template>
<script type="text/babel">
  import {imgServer, apiServer} from '../../config'
  import {Swiper, LoadMore} from 'vux'
  import cmHeader from '../../components/header/index.vue'
  import cmTab from '../../components/tab/index.vue'
  import priceRange from './priceRange.vue'
  import goodAttr from './goodAttr.vue'
  import {mapState,mapActions} from 'vuex'
  import {OPEN_POPUP_DIALOG} from '../../store/goodsDetail'
  export default {
    components: {
      cmHeader,
      Swiper,
      LoadMore,
      priceRange,
      goodAttr,
      cmTab
    },
    created () {
      let query = this.$route.query
      const req = {
        'token': this.login.token,
        'versionCode': '1',
        'deviceId': '355848069264888',
        'deviceType': 'wx',
        'data': {
          'goodsId': query.goodsId,
          'skuId': this.query && this.query.skuId ? this.query.skuId : '',
          'pageNum': 1,
          'pageSize': 6
        }
      }
      this.url = `${apiServer}/p/goods/basicInfo`
      this.ajaxGetResultByQuery(req)
      document.title = this.hdTitle
    },
    computed: mapState({login: state => state.login}),
    data () {
      return {
        isShowLoading: true, // 默认显示正在加载中
        loadingTxt: '正在加载',
        hdTitle: '商品详情',
        url: '',
        aspectRatio: 1, // 设置图片宽高比
        dotsPosition: 'center', // 设置点的位置
        dotsClass: 'dotsClass', // 设置点的样式
        goodsImgList: [], // 商品图片
        detail: {},
        active: 0, // 默认显示详情 0 详情 1 售后服务
        isShow: true,
        isCollected: false, //是否收藏
        collectTxt:'收藏', //收藏text
        tabNumber: 1, // 商品详情-售后服务的tab
        goodsDetail: '', // 商品详情
        goCartNum: 0 // 加入进货单的数量
      }
    },
    methods: {
      ...mapActions([OPEN_POPUP_DIALOG]),
      handleError (errMsg) {
        const self = this
        self.$vux.toast.show({
          text: errMsg,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
      },
      /**
       * 通过goodAttr子组件获取加入购物车的数量
       * */
      getFromChild2 (num) {
        this.goCartNum = num + this.goCartNum
      },
      /***
       * 点击时判断是否登录---收藏
       * @param status 1 收藏
       */
      handleLogin (status) {
        const self = this
        if (self.login && self.login.id) {
          if (status == 1) {
            self.ajaxCheckCollect()
          }
        } else {
          if (status === 1) {
            self.$router.push({name: 'login', query: {redirect: 'goodsDetail', query: self.$route.query}})
          }
        }
      },
      /**
       * 检测是否收藏
       */
      ajaxCheckCollect () {
        const self = this
        let url = `${apiServer}/p/goods/checkFavoriteGoods`
        let query = {
          'token': self.login.token,
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'goodsId': String(self.detail.goodsDetail.goodsId)
          }
        }
        let successCallback = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            if (res.data.data === "true") {
              self.handleError('该货品已收藏')
              self.isCollected = true
              self.collectTxt = '已收藏'
            } else {
              self.ajaxCollectGoods()
            }
          } else {
            self.handleError(res.data.message)
            if (String(res.code) === '4131' || String(res.code) === '400') {
              setTimeout(function () {
                self.$router.push({ name: 'login', query: {redirect: 'goodsDetail', query: self.$route.query }})
              }, 2000)
            }
          }
        }
        let errCallback =() => {
          self.handleError('收藏失败')

        }
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      /**
       * 收藏
       */
      ajaxCollectGoods () {
        const self = this
        let url1 = `${apiServer}/p/goods/addFavoriteGoods`
        let query1 = {
          'token': self.login.token,
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'shopId': String(self.detail.shopId),
            'goodsId': String(self.detail.goodsDetail.goodsId)
          }
        }
        let successBack = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            self.handleError('收藏成功')
            self.isCollected = true
            self.collectTxt = '已收藏'
          } else {
            self.handleError(res.data.message)
            if (res.data.code == 4131) {
              setTimeout(function () {
                self.$router.push({ name: 'login' })
              }, 2500)
            }
          }
        }
        let errBack = () => {

        }
        self.$http.post(url1, query1).then(successBack, errBack)
      },
      handleShowSku () {
        this.OPEN_POPUP_DIALOG({isOpenPopup: true, popUpStatus: 2})
      },
      handleSku () {
        const self = this
        if (self.detail.sku.length > 0) {
          return self.detail.sku
        } else {
          let arr = [
            {
              skuId: '',
              param1: '默认',
              inventoryCount: self.detail.availableSaleNum,
              number: 0,
              specName: '默认',
              specValue: '默认'
            }
          ]
          return arr
        }
      },
      handleContactUs () {
        let tel = this.detail.mobilePhone
        window.location.href = `tel:${tel}`
        /*this.$vux.confirm.show({
          content: tel,
          onCancel () {
          },
          onConfirm () {
            window.location.href = `tel:${tel}`
          }
        })*/
      },
      /**
       * @params status 0 商品详情 1 售后服务
       */
      handleInfo (status) {
        const self = this
        self.active = status
        if (status === 0) {
          self.tabNumber=1
        }
        if (status === 1) {
          self.tabNumber=-1
        }
      },
      handleActiveTab (index) {
        if (this.active === index) {
          this.handleInfo(index)
          return 'active'
        } else {
          return ''
        }
      },
      handleSrc (url) {
        return `${imgServer}${url}`
      },
      isShowAttr () {
        if (this.detail.params || this.detail.sku || this.detail.feeType) {
          return true
        }
        return false
      },
      handlePriceShowStatus () {
        if (this.detail && this.detail.priceList) {
          if (this.detail.priceList.length > 1) {
            return true
          }
          if (this.detail.priceList.length === 1) {
            return false
          }
        }
      },
      /**
       * 处理商品轮播图
       * @param imgList
       */
      handleGoodsImgList (imgList) {
        let goodsImgList = []
        if (imgList && imgList.length) {
          for (let i = 0; i < imgList.length; i++) {
            let img = `${imgServer}${imgList[i]}`
            let json = {
              url: 'javascript:;',
              img: img
            }
            goodsImgList.push(json)
          }
        }
        this.goodsImgList = goodsImgList
      },
      ajaxGetResultByQuery (query) {
        const self = this
        const url = self.url
        // 成功回调
        let successCallback = (res) => {
          if (res.status === 200 && res.data && res.data.code === 0) {
            let data = res.data.data
            // 获取商品轮播图
            self.handleGoodsImgList(data.headImgs)
            // 设置数据
            self.detail = data
            // 详情tab
            self.goodsDetail=self.detail.goodsDetail.goodsDetail
            self.goCartNum = self.detail.count
            // 是否收藏
            if (self.detail.mark) {
              self.isCollected = true
              self.collectTxt = '已收藏'
            }
            self.isShowLoading = false
          } else {
            self.handleError(res.data.msg ? res.data.msg : res.data.message)
            if (String(res.data.code) === '4131' || String(res.data.code) === '400') {
              setTimeout(function () {
                self.$router.push({ name: 'login', query: {redirect: 'goodsDetail', query: self.$route.query }})
                self.isShowLoading = false
              }, 2000)
            }
          }
        }
        // 失败回调
        let errCallback = () => {
          self.isShowLoading = false
          self.handleError('数据加载失败，请稍后再试')
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
      }
    }
  }
</script>
