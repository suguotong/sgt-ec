<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  .box {
    padding: 15px;
  }

  .active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
  }

  .active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
  }

  .active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
  }

  .tab-swiper {
    background-color: #f0f0f0;
    /*height: 100px;*/
  }
  .detailSkuContainer {
    width: 100%;
    height: 100%;
    @extend %fatherFlex;
    -webkit-flex-direction: column;
    flex-direction: column;
    .detailHeader {
      width: 100%;
    }

    .vux-swiper-item {
      overflow: auto;
    }

    /*-------商品--------*/
    .slider1 {
      /*图片轮播*/
      .swiper {
        .dotsClass {
          .vux-icon-dot {
            background-color: map_get($colors, third);
            &.active {
              background-color: map_get($colors, primary);
            }
          }
        }
      }
      /*商品信息一*/
      .goodsMes1 {
        padding: 5px 15px;
        margin-bottom: 10px;
        background: #fff;
        .goodsName {
          line-height: 24px;
          color: #333;
          font-size: 14px;
        }
        .goodsPrice {
          line-height: 26px;
          color: #333;
          font-size: 16px;
          .span1 {
            color: #e60014;
          }
          .oldPrice {
            text-decoration: line-through;
            font-size: 12px;
            color: #666;
          }
        }
      }
      .goodsMes2 {
        padding: 10px 15px;
        background: #fff;
        margin-bottom: 10px;
        .leftRight {
          width: 100%;
          height: 24px;
          @extend %fatherFlex;
          .left {
            width: 90px;
            height: 24px;
            line-height: 24px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #999;
            margin-right: 10px;
          }
          .right {
            @extend %childFlex;
            overflow: hidden;
            p {
              width: 100%;
              height: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #333;
            }
          }
        }
        .chooseAmountBox {
          width: 100%;
          @extend %fatherFlex;
          .left {
            width: 90px;
            height: 30px;
            line-height: 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #999;
            margin-right: 10px;
          }
          .chooseAmountRight {
            @extend %childFlex;
          }
          .choose-amount {
            position: relative;
            margin-right: 20px;
            margin-top: 2px;
            .chooseBtn {
              float: left;
              width: 26px;
              height: 26px;
              border: 1px solid #dcdcdc;
              line-height: 26px;
              text-align: center;
              color: #666;
              font-size: 12px;
              background-color: #fff;
              &.btn-reduce {
                border-right: 0;
                padding-right: 1px;
              }
              &.btn-add {
                border-left: 0;
                padding-left: 1px
              }
              &:hover {
                border: 1px solid #cb1e1e;
                color: #cb1e1e;
                padding: 0;
                text-decoration: none
              }
              &.curr-reduce {
                background: #EEE;
                color: #cdcdcd;
                border-right: 0;
                padding-right: 1px;
              }
              &.curr-add {
                background: #EEE;
                color: #cdcdcd;
                border-left: 0;
                padding-left: 1px
              }
              &.curr-reduce:hover {
                background: #EEE;
                color: #cdcdcd;
                border: 1px solid #dcdcdc;
                border-right: 0;
                padding-right: 1px
              }
              &.curr-add:hover {
                background: #EEE;
                color: #cdcdcd;
                border: 1px solid #dcdcdc;
                border-left: 0;
                padding-left: 1px;
              }
            }
            .buy-num {
              width: 65px;
              height: 26px;
              color: #333;
              background-color: #fff;
              text-align: center;
              float: left;
              border-radius: 0;
              border: 1px solid #e5e5e5;
              -webkit-appearance: none;
              &:hover {
                border: 1px solid #cb1e1e;
              }
            }
            .choose-amountTip {
              display: none;
              position: absolute;
              left: 0;
              top: -25px;
              width: 140px;
              height: 18px;
              padding: 0 2px;
              line-height: 18px;
              border: 1px solid #cb1e1e;
              border-radius: 4px;
              background-color: #fff;
              color: #cb1e1e;
              text-align: center;
              &.hasErrorTip {
                display: block;
              }
            }
          }
        }
        /*两个规格--限制盒子高度*/
        .specBox {
          max-height: 48px;
          overflow: hidden;
        }
      }
      /*其他规格商品列表*/
      .otherSkuGood {
        padding: 0 15px;
        background: #fff;
        .title {
          height: 44px;
          &.none {
            display: none;
          }
          span {
            display: inline-block;
            height: 14px;
            padding-left: 5px;
            margin-top: 15px;
            border-left: 2px solid #e60014;
            line-height: 14px;
            color: #e60014;
            font-size: 14px;
          }
        }
      }
      .otherSkuGoodsList {
        display: -webkit-flex; /* Safari */
        -webkit-flex-wrap: wrap; /* Safari 6.1+ */
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        box-sizing: border-box;
        .list {
          width: 50%;
          box-sizing: border-box;
          padding-right: 7px;
          img {
            width: 100%;
            vertical-align: bottom
          }
          .p1 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 5px 10px;
            color: map_get($colors, four);
            font-size: 12px;
          }
          .p2 {
            padding: 0px 10px 5px 10px;
            color: map_get($colors, primary);
          }
          &:nth-child(2n) {
            padding-right: 0;
            padding-left: 7px;
          }
        }
      }
    }
    /*-------详情--------*/
    .slider2 {
      @extend %fatherFlex;
      flex-direction: column;
      -webkit-flex-direction: column;
      height: 100%;
      .tabBox {
        height: 30px;
        padding: 0 15px;
        background: #fff;
        margin-top: 10px;
        margin-bottom: 10px;
        @extend %fatherFlex;
        .tabLink {
          @extend %childFlex;
          text-align: center;
          line-height: 30px;
          color: map_get($colors, four);
          &.active {
            color: #e60014;
          }
        }
      }
      .tabContent {
        @extend %childFlex;
        overflow: scroll;
        padding: 0 15px;
        background: #fff;
        .tabContentBox {
          display: none;
        }
        .active {
          display: block;
        }
      }
      .titleLine {
        height: 1px;
        border-top: 1px solid #ddd;
        text-align: center;
        span {
          position: relative;
          top: -10px;
          background: #fff;
          padding: 0 20px;
        }
      }
      .introduction {
        img {
          width: 100%;
        }
        p {
          color: #333;
          line-height: 24px;
          text-indent: 24px;
          padding: 5px 0;
        }
      }
      .tableBox {
        width: 100%;
        margin-bottom: 20px;
        border-left: 1px solid #cccccc;
        border-top: 1px solid #cccccc;
        .trBox {
          /*height: 30px;*/
          @extend %fatherFlex;
          .tdBox1 {
            width: 75px;
            padding-left: 15px;
            line-height: 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            color: map_get($colors, eight);
          }
          .tdLast {
            @extend %childFlex;
            line-height: 30px;
            /*overflow: hidden;*/
            /*text-overflow: ellipsis;*/
            /*white-space: nowrap;*/
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            color: map_get($colors, four);
            padding-left: 15px;
          }
        }
      }
      .afterSale {
        line-height: 24px;
        color: map_get($colors, four);
        text-indent: 24px;
        padding-bottom: 5px;
      }
    }
    /*底部*/
    .gd-footer {
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
            &.collected {
              background: url(../../assets/images/collected.png) no-repeat;
              background-size: 100%;
            }
          }
        }
        .goCartBox {
          position: relative;
          .goCartNum {
            position: absolute;
            top: -5px;
            right: 5px;
            width: 24px;
            height: 24px;
            border-radius: 12px;
            text-align: center;
            line-height: 24px;
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
  .bottomBox {
    display: none;
    &.showBox {
      display: block;
      height: 250px;
    }
  }
  .goodsDetail-afterSales {
    h2 {
      padding: .10rem 0;
      vertical-align:bottom;
      img {
        width: .28rem;
        height: .28rem;
      }
      font-size: .26rem;
      // line-height: .30rem;
      color: #e96334;
      font-weight: 500;
    }
    p {
      font-size: .24rem;
      // line-height: .36rem;
      color: #666666;
    }
  }
  /*魅族*/
  @media only screen and (min-device-width :412px) {
    .goodsDetail-afterSales {
      h2 {
        padding: .10rem 0;
        img {
          width: .6rem;
          height: .6rem;
        }
      }
    }
  }
</style>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  .vux-slider {
    @extend %childFlex;
    background: #f0f0f0;
  }

  .swiperDetail > .vux-swiper {
    position: static;
  }

</style>
<template>
  <div class="detailSkuContainer">
    <tab :line-width=2 active-color='#e60014' v-model="index" custom-bar-width="50px">
      <tab-item class="vux-center detailHeader" :selected="demo1 === item" v-for="(item, index) in list2"
                @click="demo1 = item"
                :key="index">{{item}}
      </tab-item>
    </tab>

    <swiper v-model="index" class="swiperDetail" height="100%" :threshold=200 :show-dots="false"
            :min-moving-distance=200>
      <swiper-item v-for="(item, index) in list2" :key="index">
        <div class="tab-swiper vux-center slider1" v-if="index==0">
          <scroller ref="my_scroller3" :on-infinite="infinite" :snappingHeight="60">
          <!--幻灯片-->
          <swiper class="swiper" :auto="true" :list="goodsImgList" :aspectRatio="aspectRatio" :dotsPosition="dotsPosition"
                  :dotsClass="dotsClass"></swiper>
          <!--end 幻灯片-->
          <!--商品信息一-价格及名称-->
          <div class="goodsMes1">
            <p class="goodsName">{{ skuCurr.displayName }}</p>
            <p class="goodsPrice"><span class="span1">￥{{ singlePrice }}</span>/<span class="span2">{{detail.unitName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="oldPrice" v-if="isDiscount">原价：￥{{ oldPrice }}</span></p>
          </div>
          <!--商品信息二-商品规格等-->
            <div class="goodsMes2">
              <div class="leftRight">
                <p class="left">商品型号</p>
                <div class="right">
                  <p>{{ skuCurr.goodsCode }}</p>
                </div>
              </div>
              <div class="leftRight">
                <p class="left">品牌</p>
                <div class="right">
                  <p v-if="detail.brandName">{{ detail.brandName }}</p>
                  <p v-else="detail.brandName">其他</p>
                </div>
              </div>
              <div class="leftRight">
                <p class="left">预计出货日期</p>
                <div class="right">
                  <p v-if="skuCurr.inventoryCount > skuCurr.stockAlertValue">当天发货</p>
                  <p v-else="skuCurr.inventoryCount < skuCurr.stockAlertValue">30天内发货</p>
                </div>
              </div>
              <div class="leftRight">
                <p class="left">最小起批量</p>
                <div class="right">
                  <p>{{ batch }}</p>
                </div>
              </div>
              <div class="specBox">
                <div class="leftRight" v-for="spec in skuCurr.specMsgList">
                  <p class="left">{{ spec.specName }}</p>
                  <div class="right">
                    <p>{{ spec.specValue }}</p>
                  </div>
                </div>
              </div>
              <div class="chooseAmountBox">
                <p class="left">数量</p>
                <div class="chooseAmountRight">
                  <div class="choose-amount clearfix">
                    <a href="javascript:;" class="chooseBtn btn-reduce"
                       @click="handleNum('reduce',batch)" :class="handleBtnClass('reduce',batch)">-</a>
                    <div class="buyNumBox fl" @click="handleBottomBox()">
                      <input type="number" class="g-text buy-num" v-model="goodsNum"
                             @blur="handleNum('buyNum',batch,999999)">
                    </div>
                    <a href="javascript:;" class="chooseBtn btn-add"
                       @click="handleNum('add',999999)" :class="handleBtnClass('add',999999)">+</a>
                    <div class="choose-amountTip" :class="[errorTip ? 'hasErrorTip' : ' ']">数量不能小于起批量</div>
                  </div>
                </div>
              </div>
            </div>

            <!--其他规格商品列表-->
            <div class="otherSkuGood">

              <div class="title" :class="[otherSku.length>0 ? '':'none']"><span>关联商品</span></div>
              <div class="otherSkuGoodsList" style="position: relative">

                <a href="javascript:;" class="list" v-for="otherSkuGood in otherSku" target="_blank"
                   @click="flushCom(otherSkuGood.goodsId, otherSkuGood.skuId)">
                  <img :src="firstImg" alt="">
                  <p class="p1">{{ otherSkuGood.displayName }}</p>
                  <p class="p2" v-if="!otherSkuGood.promotionPrice">￥{{ otherSkuGood.skuPrice }}</p>
                  <p class="p2" v-if="otherSkuGood.promotionPrice">￥{{ otherSkuGood.promotionPrice }}</p>
                </a>
              </div>
            </div>
            <div class="bottomBox" :class="[isShowBox ? 'showBox' : '']"></div>
          </scroller>
        </div>
        <div class="tab-swiper vux-center slider2" v-if="index==1">
          <scroller ref="my_scroller2">
            <div class="tabBox">
              <a href="javascript:;" class="tabLink" @click="handleActiveNumber(0)"
                 :class="activeNumber === 0 ? 'active' : ''">商品简介</a>
              <a href="javascript:;" class="tabLink" @click="handleActiveNumber(1)"
                 :class="activeNumber === 1 ? 'active' : ''">规格参数</a>
              <a href="javascript:;" class="tabLink" @click="handleActiveNumber(2)"
                 :class="activeNumber === 2 ? 'active' : ''">售后服务</a>
            </div>
            <div class="tabContent">
              <div class="tabContentBox tabContent1" :class="activeNumber === 0 ? 'active' : ''">
                <div style="height: 20px;"></div>
                <div class="titleLine">
                  <span>商品简介</span>
                </div>
                <div style="height: 20px;"></div>
                <div class="introduction" v-html="goodsDetail">
                </div>
              </div>
              <div class="tabContentBox tabContent2" :class="activeNumber === 1 ? 'active' : ''">
                <div style="height: 20px;"></div>
                <div class="titleLine">
                  <span>规格参数</span>
                </div>
                <div style="height: 20px;"></div>
                <div class="tableBox">
                  <div class="trBox" v-for="param in detail.params">
                    <div class="tdBox1">{{ param.attrName }}</div>
                    <div class="tdLast">{{ param.attrValues }}</div>
                  </div>
                  <div class="trBox" v-for="sku in skuCurr.specMsgList">
                    <div class="tdBox1">{{ sku.specName }}</div>
                    <div class="tdLast">{{ sku.specValue }}</div>
                  </div>
                </div>
              </div>
              <div class="tabContentBox tabContent3" :class="activeNumber === 2 ? 'active' : ''">
                <div style="height: 20px;"></div>
                <div class="titleLine">
                  <span>售后服务</span>
                </div>
                <div style="height: 20px;"></div>
                <div class="goodsDetail-afterSales">
                  <h2><img src="../../assets/images/goodsDetail-4@3x.png"><span>价格及货期说明</span></h2>
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
               <!-- <p class="afterSale">买五金平台销售并发货的商品，由平台提供发票和相应的售后服务。请您放心购买！买五金平台向您保证所售商品均为正品行货</p>
                <p class="afterSale">您在购物的过程中如有什么问题都可直接致电客服联系电话400-9916-950</p>-->
              </div>
            </div>
          </scroller>
        </div>
      </swiper-item>
    </swiper>
    <!--操作-->
    <div class="gd-footer">
      <ul>
        <li class="opeate" @click="handleContactUs">
          <a class="" href="javscript:;">
            <i class="g-icon3 icon-contact"></i>
            联系
          </a>
        </li>
        <li class="opeate" @click="handleLogin(2)">
          <a href="javascript:;">
            <i class="g-icon3 collect" :class="[isCollected ? 'collected':'']"></i>
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
        <!--已下架-->
        <li v-if="detail.status === 4 || detail.status === 1 || detail.status === 2 || detail.status === 5" class="btn-box disabled">
          <a class="go-cart" href="javascript:;">
            已下架
          </a>
        </li>
        <!--自己发布的商品-->
        <li v-if="detail.disabled === 2" class="btn-box disabled">
          <a class="go-cart" href="javascript:;">
            加入进货单
          </a>
        </li>
        <li v-if="detail.disabled === 1 && detail.status === 3" class="btn-box" @click="handleLogin(1)">
          <a class="go-cart" href="javascript:;">
            {{ loadingGoCart }}
          </a>
        </li>
      </ul>
    </div>
    <!--end 操作-->
  </div>
</template>
<script>
  import {imgServer, apiServer} from '../../config'
  import {Tab, TabItem, Swiper, SwiperItem} from 'vux'
  import {mapState, mapActions} from 'vuex'
  const list = () => ['商品', '详情']
  export default {
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem
    },
    created () {
      console.log(document.body.clientWidth)
      this.query = this.$route.query
      const req = {
        'token': this.login.token,
        'versionCode': '1',
        'deviceId': '355848069264888',
        'deviceType': 'wx',
        'data': {
          'goodsId': this.query.goodsId,
          'skuId': this.query && this.query.skuId ? this.query.skuId : '',
          'pageNum': 1,
          'pageSize': 6
        }
      }
      this.req = req
      this.url = `${apiServer}/p/goods/basicInfo`
      this.ajaxGetResultByQuery(this.req)
      this.goCartData()
      document.title = this.hdTitle
    },
    computed: mapState({login: state => state.login}),
    data () {
      return {
        hdTitle: '商品详情',
        url: '',
        list2: list(),
        demo1: '商品',
        index: 0,
        aspectRatio: 1, // 设置图片宽高比
        dotsPosition: 'center', // 设置点的位置
        dotsClass: 'dotsClass', // 设置点的样式
        goodsImgList: [], // 商品图片
        detail: {},
        activeNumber: 0, // 详情页tab切换，默认显示第一个
        skuCurr: {}, // 当前规格
        otherSku: [], // 关联规格
        firstImg: '', // 第一个图片
        goodsNum: 0, // 选择商品的数量
        batch: 0, // 起批量
        allMoney: 0, // 商品的总价格
        singlePrice: 0, // 商品单价
        oldPrice: 0, // 原价
        isDiscount: false, // 是否有折扣
        isAllowPay: false, // 是否允许加入进货单或支付
        goCartArr: [], // 加入进货单时想后台出入的数据
        loadingGoCart: '加入进货单',
        goodsDetail: '', //详情页的详情
        isCollected: false, //是否收藏
        collectTxt: '收藏', //收藏text
        errorTip: false,
        query: null,
        req: null,
        loadingWay: 1,
        goCartNum: 0, // 加入进货单的数量
        isShowBox: false
      }
    },
    mounted() {
    },
    methods: {
      handleScrollTop () {
        const self = this
        console.log(self.$refs.buyNum[0].offsetTop)
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
      /**
       * 上拉加载
       */
      infinite (done) {
        this.loadingWay = 2
        this.req.data.pageNum++
        this.ajaxGetResultByQuery2(this.req,  (code, err) => {
          // console.log(code)
          // console.log(list)
          if (code === 1) {
            done()
          }
          if (code === 2) {
            done(true)
          }
          if (code === 3) {
            console.log('1111111111111111111111111111111111')
            done(true)
            this.req.data.pageNum--
            this.handleErr('数据加载失败，请稍后重试')
          }
          return true
        })
      },
      /**
       * 商品详情页点击关联商品--页面重新加载
       * */
      flushCom (goodsId, skuId) {
        /*this.query.goodsId = goodsId
         this.query.skuId = skuId
         const req = {
         'token': '',
         'versionCode': '1',
         'deviceId': '355848069264888',
         'deviceType': 'wx',
         'data': {
         'goodsId': this.query.goodsId,
         'skuId': this.query.skuId
         }
         }
         this.ajaxGetResultByQuery(req)*/
        this.$router.push({name: 'goodsDetail', query: {goodsId: goodsId, skuId: skuId}})
        location.reload()
        // this.$router.go(0);
      },
      /**
       * 商品详情页的图片
       * */
      handleSrc (url) {
        return `${imgServer}${url}`
      },
      /**
       *详情页中的tab切换
       * */
      handleActiveNumber(num) {
        console.log(1111)
        this.activeNumber = num
      },
      /**
       * 处理图片轮播
       *
       */
      handleGoodsImgList (imgList) {
        let goodsImgList = []
        if (imgList && imgList.length > 0) {
          this.firstImg = `${imgServer}${imgList[0]}`
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
      /**
       *加减控制商品数量
       *
       */
      handleNum (status, limit, limit1) {
        const self = this
        if (status === 'reduce') {
          if (self.goodsNum > limit) {
            self.goodsNum--
            this.handleBtnClass(status, limit)
          }
          this.handleErrorTip()
        } else if (status === 'add') {
          if (self.goodsNum < limit) {
            self.goodsNum++
            this.handleBtnClass(status, limit)
          }
          this.handleErrorTip()
        } else if (status === 'buyNum') {
          self.isShowBox = false
          if (self.goodsNum < limit) {
            self.goodsNum = limit
            this.handleBtnClass(status, limit)
            this.handleErrorTip()
          }
          if (self.goodsNum > limit1) {
            self.goodsNum = limit1
            this.handleBtnClass(status, limit1)
            this.handleErrorTip()
          }
          self.goodsNum = parseInt(self.goodsNum)
        }
        this.handleAllMoney()
        this.goCartData()
      },
      /**
       * handleBottomBox
       * */
      handleBottomBox () {
        const self = this
        if(self.isShowBox){
          self.isShowBox = false
        }else {
          self.isShowBox = true
        }

      },
      /**
       *加减按钮的置灰
       *
       */
      handleBtnClass (status, limit) {
        const self = this
        if (status === 'reduce') {
          if (self.goodsNum === limit) {
            return 'curr-reduce'
          }
        } else if (status === 'add') {
          if (self.goodsNum === limit) {
            return 'curr-add'
          }
        }
      },
      /**
       * 点击减号--小于起批量时给错误提示信息*
       * */
      handleErrorTip () {
        const self = this
        if (self.goodsNum === self.batch) {
          self.errorTip = true
        } else {
          self.errorTip = false
        }
        clearTimeout(cl)
        let cl = setTimeout(() => {
          self.errorTip = false
        }, 4000)
      },
      /**
       * 计算商品总价格
       */
      handleAllMoney () {
        const self = this
        self.allMoney = parseFloat(self.goodsNum * self.singlePrice).toFixed(2)
      },
      /**
       * 联系卖家
       */
      handleContactUs () {
        let tel = this.detail.mobilePhone
        window.location.href = `tel:${tel}`
      },
      /**
       * 加入进货单提示信息
       */
      handleGoErr (errMsg) {
        const self = this
        self.$vux.toast.show({
          text: errMsg,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
        self.loadingGoCart = '加入进货单'
        self.loadingGoBuy = '立即购买'
        self.isAllowPay = true
      },
      /***
       * ajax加入进货单
       */
      ajaxAddCart () {
        const self = this
        // let url = `http://192.168.1.253:8086/p/cart/addcart`
        let url = `${apiServer}/p/cart/addcart`
        // let url = 'http://192.168.1.253:8086/p/cart/cartList'
        let query = {
          'token': self.login && self.login.token ? self.login.token : '',
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'dataList': self.goCartArr
          }
        }
        // 正在请求加入进货单或支付
        self.isAllowPay = false
        self.loadingGoCart = '正在加入进货单...'
        // 成功回调
        let successCallback = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            self.handleGoErr('添加进货单成功')
          } else {
            self.handleGoErr(res.data.message)
            if (res.data.code == 4131) {
              setTimeout(function () {
                self.$router.push({name: 'login'})
              }, 2500)
            }
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleGoErr('添加进货单失败')
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
            'goodsId': String(self.skuCurr.goodsId)
          }
        }
        let successBack = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            self.handleGoErr('收藏成功')
            self.isCollected = true
            self.collectTxt = '已收藏'
          } else {
            self.handleGoErr(res.data.message)
            if (res.data.code == 4131) {
              setTimeout(function () {
                self.$router.push({name: 'login'})
              }, 2500)
            }
          }
        }
        let errBack = () => {

        }
        self.$http.post(url1, query1).then(successBack, errBack)
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
            'goodsId': String(self.skuCurr.goodsId)
          }
        }
        let successCallback = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            if (res.data.data === "true") {
              self.handleGoErr('该货品已收藏')
              self.isCollected = true
              self.collectTxt = '已收藏'
            } else {
              self.ajaxCollectGoods()
            }
          } else {
            self.handleGoErr(res.data.message)
            if (res.data.code == 4131) {
              setTimeout(function () {
                self.$router.push({name: 'login'})
              }, 2500)
            }
          }
        }
        let errCallback = () => {
          self.handleGoErr('收藏失败')

        }
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      /***
       * 点击时判断是否登录---加入进货单/收藏
       * @param status 1 加入进货单 2 收藏
       */
      handleLogin (status) {
        const self = this
        self.isAllowPay = true
        // 判断是否登录，未登录跳转至登录页面
        if (self.isAllowPay) {
          if (self.login && self.login.id) {
            if (status === 1) {
              self.ajaxAddCart()
              self.goCartNum = self.goodsNum + self.goCartNum
            }
            if (status == 2) {
              self.ajaxCheckCollect()
            }
          } else {
            if (status === 1 || status === 2) {
              self.$router.push({name: 'login', query: {redirect: 'goodsDetail', query: self.$route.query}})
            }
          }
        }
      },
      /**
       * 加入进货单，向后台传入的数据
       */
      goCartData() {
        const self = this
        let json = {}
        json.spuId = String(self.skuCurr.goodsId)
        json.skuId = String(self.skuCurr.skuId)
        json.number = String(self.goodsNum)
        json.realPrice = String(self.allMoney)
        self.goCartArr[0] = json
      },
      /**
       * 请求，获取数据
       */
      ajaxGetResultByQuery (query, cb) {
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
            self.skuCurr = self.detail.skuCurr
            // self.otherSku = self.detail.sku
            self.batch = self.detail.startedWholesaleNum
            this.goodsNum = this.batch
            self.singlePrice = self.skuCurr.promotionPrice ? self.skuCurr.promotionPrice : self.skuCurr.skuPrice
            if (self.skuCurr.promotionPrice){
              self.isDiscount = true
            } else {
              self.isDiscount = false
            }
            self.oldPrice = self.skuCurr.skuPrice
            self.allMoney = parseFloat(self.goodsNum * self.singlePrice).toFixed(2)
            self.goodsDetail = self.detail.goodsDetail.goodsAppDetail
            if (self.detail.mark) {
              self.isCollected = true
              self.collectTxt = '已收藏'
            }
            this.goCartData()
            self.goCartNum = self.detail.count
            if (self.detail && self.detail.sku.length > 0) {
              if (self.loadingWay === 1) {
                // self.list = self.list.unshift(dataList)
                self.otherSku = self.detail.sku
              } else {
                self.otherSku = self.otherSku.concat(self.detail.sku)
              }
              cb && cb(1)
            } else {
              if (!(cb && cb(2))) {
                if (String(res.data.code) === '4131' || String(res.data.code) === '400') {
                  setTimeout(function () {
                    self.$router.push({ name: 'login', query: {redirect: 'goodsDetail', query: self.$route.query }})
                  }, 2000)
                }
              }
            }

          } else {
            if (!(cb && cb(3, res.message))) {
            }
          }
        }
        // 失败回调
        let errCallback = () => {
          console.log(3)
          if (!(cb && cb(3))) {
            self.handleErr('数据加载失败，请稍后重试')
          }
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      /**
       * 请求，获取数据
       */
      ajaxGetResultByQuery2 (query, cb) {
        const self = this
        const url = self.url
        // 成功回调
        let successCallback = (res) => {
          self.isShowLoading = false
          if (res.status === 200 && res.data && res.data.code === 0) {
            let data = res.data.data
            // 设置数据
            self.detail = data
            if (self.detail && self.detail.sku.length > 0) {
              if (self.loadingWay === 1) {
                // self.list = self.list.unshift(dataList)
                self.otherSku = self.detail.sku
              } else {
                self.otherSku = self.otherSku.concat(self.detail.sku)
              }
              cb && cb(1)
            } else {
              if (!(cb && cb(2))) {}
            }

          } else {
            console.log(2)
            if (!(cb && cb(3, res.message))) {}
          }
        }
        // 失败回调
        let errCallback = () => {
          console.log(3)
          if (!(cb && cb(3))) {
            self.handleErr('数据加载失败，请稍后重试')
          }
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
      }
    }
  }
</script>




