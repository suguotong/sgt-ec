<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .order-detail-box {
    height: 100%;
    /*.isShowLoading {
      padding-top: 44px;
    }*/
    .info {
      height: 100%;/*
      padding-top: 44px;*/
      padding-bottom: 60px;
      box-sizing: border-box;
      overflow: auto;
      .ol-cell-ft-status {
        color: map_get($colors, primary);
        font-size: map_get($fontSize, primary);
      }
    }
    .od-cells {
      margin-top: 10px;
      &:after, &:before {
        border-top: 0;
        border-bottom: 0;
      }
      .od-cell:before {
        border-top:1px solid map_get($colors, borderColor);
      }
    }
    .od-media-appmsg {
      -webkit-align-items: flex-start;
      align-items: flex-start;
      padding: 10px 0;
      margin: 0 15px;
      .weui_cell_hd {
        width: 18px;
        height: 18px;
        padding-right: 10px;
      }
      .weui_cell_ft {
        margin-top: 10px;
      }
      p {
        font-size: map_get($fontSize, primary);
        &:last-child {
          padding-top: 10px;
          font-size: map_get($fontSize, second);
          color: map_get($colors, five);
        }
      }
    }
    .od-row {
      width: 100%;
      padding:10px 15px;
      -webkit-align-items: center;
      align-items: center;
      .prompt {
        color: map_get($colors, four);
        font-size: map_get($fontSize, second);
        span {
          color: map_get($colors, primary);
        }
      }
      .tr {
        text-align: right;
      }
      .weui_btn+.weui_btn {
        margin-top: 10px;
      }
      .ol-defaultBtn {
        width: 80px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-size: map_get($fontSize, second);
        border-radius: 5px;
        border: none;
      }
      .cancelOrder {
        background: #66b6ff;
      }
      .payForOrder {
        background: #ef4747;
      }
      .confirmOrder {
        background: #f88741;
      }
    }
    .oc-order-list {
      margin-top: 10px;
      .ol-cells {
        margin-top: 0;
        &:before {
          border: 0;
        }
        .ol-shop-name {
          font-size: map_get($fontSize, primary);
          color: map_get($colors, four);
          i {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-top: 1px solid map_get($colors, six);
            border-right: 1px solid map_get($colors, six);
            transform: rotate(45deg);
          }
        }
      }
      .price {
        color: map_get($colors, four);
      }
      .num {
        color: map_get($colors, four);
      }
      .price, .num {
        text-align: right;
      }
      .oc-panel_hd {
        color: map_get($colors, second);
        font-size: 20px;
        &:after {
          -webkit-transform-origin:initial;
          transform-origin: initial;
          -webkit-transform: initial;
          transform: initial;
          left: 0;
        }
      }
      .oc-media-bd {
        h4 {
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-weight: 500;
          font-size: map_get($fontSize, primary);
          color: map_get($colors, five);
          line-height: 18px;
        }
        p {
          padding-top: 7px;
          font-size: map_get($fontSize, second);
          color: map_get($colors, eight);
          line-height: 22px;
        }
      }
      .oc-media_appmsg {
        padding: 0;
        margin: 0 15px;
        padding: 10px 0;
        position: relative;
        &:before {
          border: 0;
        }
        &:after {
          position: absolute;
          left: 0;
          bottom: 0;
          content: '';
          width: 100%;
          height: 1px;
          background-color: map_get($colors, six);
        }
        .oc-media_appmsg_thumb {
          width: 90px;
          height: 90px;
          img {
            height: 100%;
          }
        }
      }
      .oc-cell {
        -webkit-box-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }
      &.od-order-list {
        .od-sum {
          padding: 5px 0;
          margin: 0 15px;
          position: relative;
          &:after {
            position: absolute;
            content: '';
            width: 100%;
            height: 1px;
            left: 0;
            bottom: 0;
            background-color: map_get($colors, six);
          }
          p {
            text-align: left;
            line-height: 22px;
            color: map_get($colors, four);
            span {
              float: right;
            }
            &:last-child {
              color: map_get($colors, eight);
              font-size: map_get($fontSize, second);
            }
          }
          &.od-price {
            &:after {
              height: 0;
            }
            p {
              text-align: right;
              span {
                float: none;
                &.price {
                  color: map_get($colors, eleven);
                }
              }
            }
          }
        }
        .od-button_sp_area {
          padding: 0 15px 10px;
          a {
            padding: 8px 0;
            line-height: 1.6;
            font-size: map_get($fontSize, primary);
            background-color: map_get($colors, third);
            border:1px solid map_get($colors, eight);
            i {
              display: inline-block;
              width: 16px;
              height: 16px;
            }
          }
        }
      }
    }
    .od-pay-way {
      margin-top: 10px;
      margin-bottom: 10px;
      &:before, &:after {
        border: 0;
      }
    }
  }

</style>
<style lang="scss" rel="stylesheet/scss">
  .weui_dialog_confirm .weui_dialog .weui_dialog_bd {
    text-align: center;
  }

  .weui_cells_access .noArrow:after {
    display: none;
  }
</style>
<template>
  <div class="order-detail-box">
    <!--<cm-header :hdTitle="hdTitle"></cm-header>-->
    <div v-show="isShowLoading" class="isShowLoading">
      <load-more :tip="loadingTxt"></load-more>
    </div>
    <template v-if="!isShowLoading">
      <div class="info">
        <!--订单状态-->
        <div class="weui_panel weui_panel_access">
          <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
              <p>订单号：{{ detail.orderCode }}</p>
            </div>
            <div v-if="detail.orderStatus === 1" class="weui_cell_ft ol-cell-ft-status">
              <template v-if="detail.payWay==4 || detail.payWay ==7">
                支付凭证待确认
              </template>
              <template v-else>
                待付款
              </template>
            </div>
            <div v-if="detail.orderStatus === 2" class="weui_cell_ft ol-cell-ft-status">
              待收货
            </div>
            <div v-if="detail.orderStatus === 3" class="weui_cell_ft ol-cell-ft-status">
              待收货
            </div>
            <div v-if="detail.orderStatus === 4" class="weui_cell_ft ol-cell-ft-status">
              交易成功
            </div>
            <div v-if="detail.orderStatus === 5" class="weui_cell_ft ol-cell-ft-status">
              交易关闭
            </div>
          </div>
        </div>
        <!--end 订单状态-->
        <!--物流地址补充说明-->
        <div class="weui_cells weui_cells_access od-cells">
          <router-link :to="{ name: 'logisticsInfo', params: { orderLogistics: detail.orderLogistics }}" v-if="detail.orderLogistics && detail.orderLogistics.logisticsCode" class="weui_cell  od-media-appmsg" href="javascript:;">
            <div class="weui_cell_hd">
              <i class="g-icon3 icon-waitShip"></i>
            </div>
            <div class="weui_cell_bd weui_cell_primary">
              <p>物流公司：{{ detail.orderLogistics.company }}</p>
              <p>物流编号：{{ detail.orderLogistics.logisticsCode }}</p>
            </div>
            <span class="weui_cell_ft"></span>
          </router-link>
          <a class="weui_cell od-cell od-media-appmsg" href="javascript:;">
            <div class="weui_cell_hd">
              <i class="g-icon3 icon-address"></i>
            </div>
            <div class="weui_cell_bd weui_cell_primary">
              <p>{{ detail.orderAddress.consignee }} {{ detail.orderAddress.mobilePhone }}</p>
              <p>{{ detail.orderAddress.provinceName }}{{ detail.orderAddress.cityName }}{{ detail.orderAddress.districtName }}{{ detail.orderAddress.detailAddress }}</p>
            </div>
          </a>
          <a v-if="detail.remark" class="weui_cell od-cell od-media-appmsg" href="javascript:;">
            <div class="weui_cell_hd">
              <i class="g-icon3 icon-desc"></i>
            </div>
            <div class="weui_cell_bd weui_cell_primary">
              <p>补充说明：</p>
              <p>{{ detail.remark }}</p>
            </div>
          </a>
        </div>
        <!--物流地址补充说明-->
        <!--商品-->
        <div class="weui_panel weui_panel_access oc-order-list od-order-list">
          <div class="weui_cells ol-cells">
            <div class="weui_cell">
              <div class="weui_cell_bd weui_cell_primary">
                <div  class="ol-shop-name">商品信息 <i></i></div>
              </div>
              <!--<div v-if="detail.orderStatus === 1" class="weui_cell_ft ol-cell-ft-status">
                待付款
              </div>
              <div v-if="detail.orderStatus === 2" class="weui_cell_ft ol-cell-ft-status">
                待发货
              </div>
              <div v-if="detail.orderStatus === 3" class="weui_cell_ft ol-cell-ft-status">
                待收货
              </div>
              <div v-if="detail.orderStatus === 4" class="weui_cell_ft ol-cell-ft-status">
                交易成功
              </div>
              <div v-if="detail.orderStatus === 5" class="weui_cell_ft ol-cell-ft-status">
                交易关闭
              </div>-->
            </div>
          </div>
          <div class="weui_panel_bd od-panel-bd">
            <div class="oc-order-item"  v-for="item in detail.orderDetailList">
                <router-link  v-if="detail.sellerInfoPojo.shopStatus === '1'" :to="{ name: 'goodsDetail', query: { goodsId: item.goodsId,skuId: item.skuId}}" class="weui_media_box weui_media_appmsg oc-media_appmsg">
                  <div class="weui_media_hd oc-media_appmsg_thumb">
                    <img class="weui_media_appmsg_thumb " :src="handleSrc(item.goodsUrlDefault)" :alt="item.goodsName" :title="item.goodsName">
                  </div>
                  <div class="weui_media_bd oc-media-bd">
                    <h4 class="">{{ item.goodsName }}</h4>
                    <p class="weui-media-box__desc" >
                      <template v-if='idx<2' v-for="(specItem,idx) in item.goodsSpecMsgList">
                        {{ specItem.specName }}:{{ specItem.specValue }}　
                      </template>
                    </p>
                  </div>
                  <div class="weui_media-ft">
                    <p class="price">{{ item.price | currency('￥') }}</p>
                    <p class="num">×{{ item.qty }}</p>
                  </div>
                </router-link>
              <a href="javascript:;" v-if="detail.sellerInfoPojo.shopStatus === '2'" class="weui_media_box weui_media_appmsg oc-media_appmsg"  @click="handleFailure('goods', detail.sellerInfoPojo.shopStatus)">
                <div class="weui_media_hd oc-media_appmsg_thumb">
                  <img class="weui_media_appmsg_thumb " :src="handleSrc(item.goodsUrlDefault)" :alt="item.goodsName" :title="item.goodsName">
                </div>
                <div class="weui_media_bd oc-media-bd">
                  <h4 class="">{{ item.goodsName }}</h4>
                  <p class="weui-media-box__desc" >
                    <template v-for="specItem in item.goodsSpecMsgList">
                      {{ specItem.specName }}:{{ specItem.specValue }}　
                    </template>
                  </p>
                </div>
                <div class="weui_media-ft">
                  <p class="price">{{ item.price | currency('￥') }}</p>
                  <p class="num">×{{ item.qty }}</p>
                </div>
              </a>
              <!--有规格显示区域-->
              <!--end 有规格显示区域-->
            </div>
            <div class="od-sum">
              <p class="">商品总价：<span>{{ detail.orderAmount | currency('￥') }}</span></p>
              <p class=""> +运费：<span>{{ detail.shippingFee | currency('￥') }}</span></p>
            </div>
            <div class="od-sum od-price">
              <p class=""> 实付款：<span class="price">{{ detail.shouldPayAmount | currency('￥') }}</span></p>
              <p class=""> 下单时间：{{ detail.createDate | date }}</p>
            </div>
          </div>

          <div class="od-button_sp_area">
            <a href="javascript:;" @click="contactSeller" class="weui_btn weui_btn_default">
              <i class="g-icon3 icon-phone"></i>
              联系卖家</a>
          </div>
        </div>
        <!--end 商品-->
        <!--支付方式-->
        <div class="weui_cells od-pay-way">
          <div class="weui_cell weui_cells_access">
            <div class="weui_cell_bd weui_cell_primary">
              <p>支付方式</p>
            </div>
            <div class="weui_cell_ft noArrow" v-if="detail.payWay === 1 && detail.orderStatus !== 1">
              支付宝
            </div>
            <div class="weui_cell_ft noArrow" v-if="detail.payWay === 5 && detail.orderStatus !== 1">
              微信
            </div>
            <div class="weui_cell_ft noArrow" v-if="detail.payWay === 6 && detail.orderStatus !== 1">
              微信
            </div>
            <div class="weui_cell_ft noArrow" v-if="detail.payWay === 2 && detail.orderStatus !== 1">
              银行卡支付
            </div>
            <router-link :to="{name: 'checkDPay' , params: detail.orderPayVoucher}" class="weui_cell_ft" v-if="detail.payWay === 4 || detail.payWay === 7">
              线下支付
            </router-link>
          </div>
        </div>
        <!--end 支付方式-->
      </div>
      <!--操作-->
      <div v-if="detail.orderStatus === 1 && detail.payWay!=4 && detail.payWay!=7" class="weui_tabbar">
        <div class="weui-row weui-no-gutter od-row">
          <div class="weui-col-50 prompt">超时订单将自动关闭</div>
          <div class="weui-col-50 tr"><a href="javascript:;" class="weui_btn weui_btn_mini  weui_btn_plain_primary ol-defaultBtn cancelOrder"  @click="opeateOrder(1, detail.orderId)">取消订单</a>
            <a href="javascript:;" class="weui_btn weui_btn_mini  weui_btn_plain_primary ol-defaultBtn payForOrder" @click="goPay(detail.orderCode, detail.shouldPayAmount,detail.canOffPay)">付款</a>
          </div>
        </div>
      </div>
      <div v-if="detail.orderStatus === 3" class="weui_tabbar">
        <div class="weui-row weui-no-gutter od-row">
          <div class="weui-col-50 prompt">收货剩余时间：<br/><span>{{ day }}</span>天<span>{{  hour }}</span>小时<span>{{ minute }}</span>分钟<span>{{ second }}</span>秒</div>
          <div class="weui-col-50 tr">
            <a href="javascript:;" class="weui_btn weui_btn_mini  weui_btn_plain_primary ol-defaultBtn confirmOrder" @click="opeateOrder(2, detail.orderCode)">确认收货</a>
          </div>
        </div>
      </div>
      <!--end 操作-->
    </template>
  </div>
</template>
<script type="text/babel">
  // import cmHeader from '../../components/header/index.vue'
  import { LoadMore } from 'vux'
  import { mapState } from 'vuex'
  import { apiServer, imgServer } from '../../config'
  export default {
    data () {
      return {
        hdTitle: '订单详情',
        isShowLoading: true,
        loadingTxt: '正在加载', // 显示正在加载字样
        detail: {},
        day: '00', // 天
        hour: '00', // 小时
        minute: '00', // 分钟
        second: '00', // 秒
        query: {
          token: '',
          versionCode: '1',
          deviceId: '355848069264888',
          deviceType: 'wx',
          data: {
            orderCode: ''
          }
        }
      }
    },
    computed: mapState({
      login: state => state.login,
      openid: state => state.openid
    }),
    created () {
      const self = this
      let orderCode = this.$route.query.orderCode
      self.query.token = self.login.token
      self.query.data.orderCode = String(orderCode)
      self.ajaxGetOrderDetail(self.query)
      document.title = this.hdTitle
      /*self.handleTime()
      setInterval(function () {
        self.handleTime()
      }, 1000)*/
      setInterval(function () {
        self.handleTime()
      }, 1000)
    },
    methods: {
      isWxOpen () {
        var ua = navigator.userAgent.toLowerCase()
        if (ua.match(/MicroMessenger/i) && (ua.match(/MicroMessenger/i)[0] === 'micromessenger')) {
          return true
        } else {
          return false
        }
      },
      getAuthorizationUrl (query) {
        let url = `/choosePayWay?totalAmount=${query.totalAmount}&orderCode=${query.orderCode}&offPay=${query.offPay}`
        let href = `${apiServer}/wx/wxAuthorizeAndRedirect?redirectPath=${encodeURIComponent(url)}`
        window.location.href = href
      },
      goPay (orderCode, totalAmount,offPay) {
        const self = this
        let query = {
          'orderCode': orderCode,
          'totalAmount': String(totalAmount),
          'offPay': offPay
        }
        if (!(self.openid && self.openid.length > 0) &&　self.isWxOpen()) {
          self.getAuthorizationUrl(query)
        } else {
          self.$router.push({ name: 'choosePayWay', query: query })
        }
      },
      /**
       * @param type ‘goods’ 点击商品 ‘shop’ 点击店铺
       * @param status 店铺状态 1未冻结  2 已冻结
       */
      handleFailure (type, status) {
        let err = ''
        if (type === 'shop') {
          err = '该店铺涉嫌违规，已被平台冻结，暂无法访问'
        }
        if (type === 'goods') {
          err = '该商品所在店铺涉嫌违规，已被平台冻结，暂无法访问'
        }
        if (status === '2') {
          this.handleGoErr(err)
        }
      },
      handleGoErr (errMsg) {
        const self = this
        self.$vux.toast.show({
          text: errMsg,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
      },
      flag (time) {
        time <= 0 ? time = 0 : time
        return time < 10 ? `0${time}` : time
      },
      handleTime () {
        let settleDate = this.detail.settleDate
        // let currentDate = this.detail.currentDate
        // let remainingTime = settleDate - currentDate
        let now = new Date()
        let endTime = settleDate
        let leftTime = endTime - now
        let d = Math.floor(leftTime / 1000 / 60 / 60 / 24)
        let h = Math.floor(leftTime / 1000 / 60 / 60 % 24)
        let m = Math.floor(leftTime / 1000 / 60 % 60)
        let s = Math.floor(leftTime / 1000 % 60)
        if (d) {
          this.day = this.flag(d)
        }
        if (h) {
          this.hour = this.flag(h)
        }
        if (m) {
          this.minute = this.flag(m)
        }
        if (s) {
          this.second = this.flag(s)
        }
      },
      opeateOrder (opeate, orderCode) {
        const self = this
        let dialogTxt
        if (opeate === 1) {
          dialogTxt = '确定取消订单吗？'
        }
        if (opeate === 2) {
          dialogTxt = '确定已经收到商品了吗？'
        }
        this.$vux.confirm.show({
          content: dialogTxt,
          onConfirm () {
            self.ajaxOpeateOrder(opeate, orderCode)
          }
        })
      },
      ajaxOpeateOrder (opeate, orderCode) {
        const self = this
        let url
        if (opeate === 1) {
          url = `${apiServer}/p/order/cancel`
        }
        if (opeate === 2) {
          url = `${apiServer}/p/order/receive`
        }
        let querys = {
          token: self.login.token,
          versionCode: '1',
          deviceId: '355848069264888',
          deviceType: 'wx',
          data: {
            orderCode: String(orderCode)
          }
        }
        // 成功回调
        let successCallback = (res) => {
          if (res.status === 200 && res.data && res.data.code === 0) {
            self.ajaxGetOrderDetail(self.query)
          } else {
            self.handleError(res.data.message)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleError('操作失败')
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, querys).then(successCallback, errCallback)
      },
      contactSeller () {
        let tel = this.detail.sellerInfoPojo.mobilePhone
        window.location.href = `tel:${tel}`
      },
      handleSrc (url) {
        return `${imgServer}${url}`
      },
      handleError (errMsg) {
        const self = this
        self.$vux.toast.show({
          text: errMsg,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
      },
      ajaxGetOrderDetail (query) {
        const self = this
        let url = `${apiServer}/p/order/detail`
        // 成功回调
        let successCallback = (res) => {
          self.isShowLoading = false
          if (res.status === 200 && res.data && res.data.code === 0) {
            self.detail = res.data.data
            self.handleTime()
          } else {
            self.handleError(res.data.message)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleError('操作失败')
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
      }
    },
    components: {
      // cmHeader,
      LoadMore
    }
  }
</script>
