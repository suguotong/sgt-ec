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
      margin-top: 44px;
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
      -webkit-overflow-scrolling:touch;overflow:auto;
      iframe {
        height: 100%;
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
        }
      }
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
  <div class="gd-detail">
    <cm-header :hdTitle="hdTitle"></cm-header>
    <div v-show="isShowLoading" class="isShowLoading">
      <load-more :tip="loadingTxt"></load-more>
    </div>
    <template  v-if="!isShowLoading">
      <div class="gd-detail-con">
        <!--幻灯片-->
        <swiper class="swiper" :list="goodsImgList" :aspectRatio="aspectRatio" :dotsPosition="dotsPosition" :dotsClass="dotsClass"></swiper>
        <!--end 幻灯片-->
        <!--价格区间-->
        <price-range :priceRangeList="detail.priceList" :location="detail.location" :goodsTitle="detail.goodsTitle" :salesCount="detail.salesCount"></price-range>
        <!--end 价格区间-->
        <!--属性-->
        <good-attr v-if="isShowAttr" :params="detail.params" :sku="handleSku()" :feeType="detail.feeType" :feeRemark="detail.feeRemark" :goodsImgList="goodsImgList" :priceRangeList="detail.priceList" :goodsTitle="detail.goodsTitle" :availableSaleNum="detail.availableSaleNum" :status="detail.status"></good-attr>
        <!--end 属性-->
        <!--店铺-->
        <div class="weui_panel weui_panel_access gd-store">
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
        </div>
        <!--end 店铺-->
        <!--商品详情 售后服务-->
        <cm-tab class="gd-detail-item">
          <li class="gd-item"  :class="handleActiveTab(0)" @click="handleInfo(0)">
            <a href="javascript:;">商品详情</a>
          </li>
          <li class="gd-item"  :class="handleActiveTab(1)" @click="handleInfo(1)">
            <a href="javascript:;">售后服务</a>
          </li>
        </cm-tab>
        <!--end 商品详情 售后服务-->
        <!--商品详情 售后服务 content-->
        <div class="gd-detail-content">
          <iframe :src="contentUrl" frameborder="0" scrolling="auto" width="100%">
          </iframe>
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
            <li class="opeate">
              <router-link :to="{ name: 'storeHomePage', query: { shopId: detail.shopId }}">
                <i class="g-icon3 icon-car"></i>
                店铺
              </router-link>
            </li>
            <li class="opeate">
              <router-link :to="{ name: 'cart' }">
                <i class="g-icon3 icon-shop"></i>
                进货单
              </router-link>
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
            <li v-if="detail.status === 3 && detail.availableSaleNum !== 0" class="btn-box" @click="handleShowSku">
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
  import { imgServer, apiServer } from '../../config'
  import { Swiper, LoadMore } from 'vux'
  import cmHeader from '../../components/header/index.vue'
  import cmTab from '../../components/tab/index.vue'
  import priceRange from './priceRange.vue'
  import goodAttr from './goodAttr.vue'
  import { mapActions } from 'vuex'
  import { OPEN_POPUP_DIALOG } from '../../store/goodsDetail'
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
        'token': '',
        'versionCode': '1',
        'deviceId': '355848069264888',
        'deviceType': 'wx',
        'data': {
          'goodsId': query.goodsId
        }
      }
      this.url = `${apiServer}/p/goods/basicInfo`
      this.ajaxGetResultByQuery(req)
    },
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
        contentUrl: ''
      }
    },
    methods: {
      ...mapActions([OPEN_POPUP_DIALOG]),
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
      /**
       * @params status 0 商品详情 1 售后服务
       */
      handleInfo (status) {
        const self = this
        self.active = status
        let url = ''
        if (status === 0) {
          url = self.detail.detailUrl
        }
        if (status === 1) {
          url = self.detail.afterSellUrl
        }
        this.contentUrl = `${apiServer}${url}`
        // console.log('--detail---')
        // this.ajaxGetInfo(url)
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
          self.isShowLoading = false
          if (res.status === 200 && res.data && res.data.code === 0) {
            let data = res.data.data
            // 获取商品轮播图
            self.handleGoodsImgList(data.headImgs)
            // 设置数据
            self.detail = data
          } else {
          }
        }
        // 失败回调
        let errCallback = () => {
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
      }
    }
  }
</script>
