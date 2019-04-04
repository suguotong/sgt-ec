<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .confirm-order-box {
    height: 100%;
    /*.isShowLoading {
      padding-top: 44px;
    }*/
    .confirm-order {
      height: 100%;
      // padding-top: 44px;
      padding-bottom: 50px;
      box-sizing: border-box;
      overflow: auto;
      .oc-address-lump {
        align-items: flex-start;
        margin-top: 10px;
        margin-bottom: 10px;
        .weui_cells:after {
          border-bottom: 2px solid map_get($colors, primary);
        }
        .oc-address {
          -webkit-align-items: flex-start;
          align-items: flex-start;
        }
        .weui_cell_hd {
          width: 20px;
          height: 20px;
        }
        .weui_media_title {
          font-size: map_get($fontSize, primary);
        }
        .weui_media_desc {
          font-size: map_get($fontSize, second);
        }
      }
      .oc-order-list {
        .oc-cells-info {
          margin-left: 15px;
          margin-right: 15px;
          p, label, textarea {
            font-size: map_get($fontSize, primary);
            color: map_get($colors, four);
          }
          .price, .num {
            text-align: right;
            color: map_get($colors, five);
          }
          .weui_cell {
            padding: 10px 0;
          }
        }
        .oc-order-item {
          p {
            font-size: map_get($fontSize, second);
            color: map_get($colors, five);
          }
        }
        .spec-list {
          dl {
            dd {
              font-size: map_get($fontSize, second);
              color: map_get($colors, five);
            }
          }
        }
        .price, .num {
          text-align: right;
        }
        .oc-panel_hd {
          color: map_get($colors, four);
          font-size: map_get($fontSize, primary);
          &:after {
            -webkit-transform-origin:initial;
            transform-origin: initial;
            -webkit-transform: initial;
            transform: initial;
            left: 0;
          }
        }
        .oc-media_appmsg {
          .oc-media_appmsg_thumb {
            width: 80px;
            height: 80px;
            img {
              height: 100%;
            }
          }
        }
        ul {
          li {
            display: flex;
            -webkit-flex: 1;
            /*margin: 5px 15px;*/
            background-color: map_get($colors, seven);
            /*padding:5px 10px;*/
            .spec-list, .item {
              width: 50%;
              box-sizing: border-box;
            }
            dl {
              dd {
                color: map_get($colors, fontColor);
              }
            }

          }
        }
        .oc-cell {
          -webkit-box-align: baseline;
          -webkit-align-items: baseline;
          align-items: baseline;
        }
        .sum {
          font-size: map_get($fontSize, second);
          text-align: right;
          padding: 10px 15px;
          .price {
            color: map_get($colors, eleven);
          }
        }
        .oc-media-bd {
          h4 {
            font-size: map_get($fontSize, primary);
            color: map_get($colors, five);
          }
        }
        .oc-cells-invoice {
          margin-top: 0;
          .weui_cell_ft {
            font-size: map_get($fontSize, primary);
            color: map_get($colors, five);
          }
          &:after {
            border: 0;
          }
        }
      }
    }
    .oc-footer {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 50px;
      width: 100%;
      background-color: map_get($colors, third);
      border-top:1px solid map_get($colors, six);
      box-sizing: border-box;
      ul {
        height: 100%;
        @extend %fatherFlex;
        li {
          &.total {
            width: 100%;
            line-height: 50px;
            text-align: right;
            padding-right: 15px;
            font-size: map_get($fontSize, third);
            span {
              color: map_get($colors, eleven);
            }
          }
          &.btn {
            width: 114px;
            height: 100%;
            .submit {
              width: 100%;
              height: 100%;
              line-height: 100%;
              border: 0;
              background-color: map_get($colors, primary);
              color: map_get($colors, third);
              font-size: map_get($fontSize, third);
              &.disabled {
                background-color: map_get($colors, eight);
              }
            }
          }
        }
      }
    }
    .weui_textarea {
      font-size: map_get($fontSize, second);
    }
  }
</style>
<template>
  <div class="confirm-order-box">
    <!--<cm-header :hdTitle="hdTitle"></cm-header>-->
    <div v-show="isShowLoading" class="isShowLoading">
      <load-more :tip="loadingTxt"></load-more>
    </div>
    <template v-if="!isShowLoading">
      <div class="confirm-order">
        <!--address-->
        <div class="weui_panel oc-address-lump">
          <div class="weui_panel_bd">
            <div class="weui_media_box weui_media_small_appmsg">
              <div class="weui_cells weui_cells_access">
                <template v-if="isHasDefaultAddress(addressList) && !$route.query.addressId">
                  <router-link  :to="{ name: 'addressList', query: { isSubmitOrder: true }}" v-for="addressItem in addressList" v-if="addressItem.isDefault === '1'" class="weui_cell oc-address">
                    <div class="weui_cell_hd">
                      <i class="g-icon3 icon-address"></i>
                    </div>
                    <div class="weui_cell_bd weui_cell_primary">
                      <h4 class="weui_media_title">{{ addressItem.receiver }} {{ addressItem.mobilePhone | mobile }}</h4>
                      <p class="weui_media_desc">{{ addressItem.provinceName }} {{ addressItem.cityName }} {{ addressItem.districtName }} {{ addressItem.detailAddress }}</p>
                    </div>
                    <span class="weui_cell_ft"></span>
                  </router-link>
                </template>
                <template v-if="!isHasDefaultAddress(addressList) && !$route.query.addressId">
                  <router-link  :to="{ name: 'addressList', query: { isSubmitOrder: true }}" v-for="(addressItem, index) in addressList"  v-if="index === 0" class="weui_cell oc-address">
                    <div class="weui_cell_hd">
                      <i class="g-icon3 icon-address"></i>
                    </div>
                    <div class="weui_cell_bd weui_cell_primary">
                      <h4 class="weui_media_title">{{ addressItem.receiver }} {{ addressItem.mobilePhone }}</h4>
                      <p class="weui_media_desc">{{ addressItem.provinceName }} {{ addressItem.cityName }} {{ addressItem.districtName }} {{ addressItem.detailAddress }}</p>
                    </div>
                    <span class="weui_cell_ft"></span>
                  </router-link>
                </template>
                <template v-if="$route.query.addressId > 0">
                  <router-link  :to="{ name: 'addressList', query: { isSubmitOrder: true }}" v-for="(addressItem, index) in addressList"  v-if="isEqual(addressItem.id, $route.query.addressId)" class="weui_cell oc-address">
                    <div class="weui_cell_hd">
                      <i class="g-icon3 icon-address"></i>
                    </div>
                    <div class="weui_cell_bd weui_cell_primary">
                      <h4 class="weui_media_title">{{ addressItem.receiver }} {{ addressItem.mobilePhone }}</h4>
                      <p class="weui_media_desc">{{ addressItem.provinceName }} {{ addressItem.cityName }} {{ addressItem.districtName }} {{ addressItem.detailAddress }}</p>
                    </div>
                    <span class="weui_cell_ft"></span>
                  </router-link>
                </template>
                <!--地址为空执行-->
                <template v-if="addressList.length <= 0">
                  <router-link  :to="{ name: 'addressList', query: { isSubmitOrder: true }}" class="weui_cell oc-address">
                    <div class="weui_cell_hd">+</div>
                    <div class="weui_cell_bd weui_cell_primary">
                      点击添加收货地址
                    </div>
                    <span class="weui_cell_ft"></span>
                  </router-link>
                </template>
              </div>
            </div>
          </div>
        </div>
        <!--end address-->
        <!--order-->
        <div class="oc-order-list">
          <div v-for="shopItem in orderList" class="weui_panel weui_panel_access" v-if="shopItem.goodsList.length > 0">
            <!--<div class="weui_panel_hd oc-panel_hd">{{ shopItem.shopName }}</div>-->
            <div class="weui_panel_hd oc-panel_hd">商品信息</div>
            <div v-for="(goodItem, i) in shopItem.goodsList" class="oc-order-item">
              <template v-if="!isRepeatGood(i, shopItem.goodsList)">
                <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg oc-media_appmsg">
                  <div class="weui_media_hd oc-media_appmsg_thumb">
                    <img class="weui_media_appmsg_thumb " :src="handleSrc(goodItem.url)" :alt="goodItem.goods_name" :title="goodItem.goods_name">
                  </div>
                  <div class="weui_media_bd oc-media-bd">
                    <h4 class="weui_media_title" v-if="goodItem.displayName">{{ goodItem.displayName }}</h4>
                    <h4 class="weui_media_title" v-else>{{ goodItem.goodsName }}</h4>
                    <!--有规格显示区域-->
                    <template v-if="goodItem.specList.length > 0">
                      <ul>
                        <li>
                          <div class="spec-list">
                            <dl>
                              <dd v-if="idx<2" v-for="(specItem,idx) in goodItem.specList">{{ specItem.specName }}：{{ specItem.specValue }}</dd>
                            </dl>
                          </div>
                          <div class="item">
                            <p class="price" v-if="goodItem.promotionPrice">{{ goodItem.promotionPrice | currency('￥') }}</p>
                            <p class="price" v-if="!goodItem.promotionPrice">{{ goodItem.skuPrice | currency('￥') }}</p>
                            <p class="num">× {{ goodItem.number }}</p>
                          </div>
                        </li>
                      </ul>
                    </template>
                    <!--end 有规格显示区域-->
                    <!--没有规格显示区域-->
                    <template v-if="goodItem.specList.length <= 0">
                      <p class="price">{{ goodItem.skuPrice | currency('￥') }}</p>
                      <p class="num">×{{ goodItem.number }}</p>
                    </template>
                    <!--end 没有规格显示区域-->
                  </div>
                </a>
              </template>

            </div>
            <div class="weui_cells oc-cells-info">
              <div class="weui_cell">
                <div class="weui_cell_bd weui_cell_primary">
                  <p>物流费用</p>
                </div>
                <div class="weui_cell_ft">
                  <p class="price">{{ shopItem.feeAmount | currency('￥') }}</p>
                </div>
              </div>
              <!--<div class="weui_cells weui_cells_access oc-cells-invoice">
                <a class="weui_cell" href="javascript:;">
                  <div class="weui_cell_hd"><img src=""></div>
                  <div class="weui_cell_bd weui_cell_primary">
                    <p>发票信息</p>
                  </div>
                  <span class="weui_cell_ft">
                    普通发票
                  </span>
                </a>
              </div>-->
              <template v-for="(item,index) in shopList">
                <div class="weui_cell oc-cell" v-if="item.shopid == shopItem.shopId">
                  <div class="weui_cell_hd"><label class="weui_label">补充说明：</label></div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_textarea" type="text" v-model="item.remark" placeholder="选填：对本次交易的说明" maxlength="500">
                  </div>
                  <div class="clean">
                    <i class="weui_icon_clear" @click="clearRemark(index)"></i>
                  </div>
                </div>
              </template>
            </div>
            <p class="sum">共{{ getShopNum(shopItem.goodsList) }}件商品 小计（含运费）：<span class="price">{{ shopItem.allAmount | currency('￥') }}</span></p>
          </div>
        </div>
        <!--end order-->
      </div>
      <!--order footer-->
      <div class="oc-footer">
        <ul>
          <li class="total">
            共{{ totalNum }}件商品 合计：<span>{{ totalPrice | currency('￥') }}</span>
          </li>
          <li class="btn">
            <button class="submit" :class="[submitting ? 'disabled' : '']" @click="handleSubmit">{{ submittingTxt }}</button>
          </li>
        </ul>
      </div>
      <!--end order footer-->
    </template>
  </div>
</template>
<script type="text/babel">
  // import cmHeader from '../../components/header/index.vue'
  import { LoadMore } from 'vux'
  import { mapState, mapActions } from 'vuex'
  import { SET_REQ_CONFIRM_ORDER_PARAMS } from '../../store/reqConfirmOrderParams'
  import { apiServer, imgServer } from '../../config'
  export default {
    data () {
      return {
        hdTitle: '确认订单',
        isShowLoading: true, // 默认显示正在加载中
        loadingTxt: '正在加载', // 显示正在加载字样
        orderList: [], // 订单列表
        addressList: [], // 收货地址列表
        totalPrice: '0.00', // 总价 订单金额
        totalNum: 0, // 总数量
        addrid: '', // 收货地址id
        cartid: '', // 进货单id
        shouldPayAmount: '', // 订单金额+运费
        shopList: [], // 店铺列表  {shopId:'1',remark:'aaaa'}
        params: {},
        submitting: false,
        submittingTxt: '提交订单'
      }
    },
    computed: mapState({
      reqConfirmOrderParams: state => state.reqConfirmOrderParams,
      openid: state => state.openid
    }),
    created () {
      let params = this.$route.params
      if (params.token) {
        this.SET_REQ_CONFIRM_ORDER_PARAMS(params)
      } else {
        params = this.reqConfirmOrderParams
      }
      document.title = this.hdTitle
      this.params = params
      this.getGetData(params)
      // this.ajaxGetData()
    },
    methods: {
      ...mapActions([SET_REQ_CONFIRM_ORDER_PARAMS]),
      getAuthorizationUrl (query) {
        /*const self = this
        let url = `${apiServer}/wx/getAuthorizationUrl`
        // 成功回调
        let successCallback = (res) => {
          if (res.status === 200 && res.data) {
            if (res.data.code === 0) {
              // self.SET_OPEN_ID(res.data.data)
              location.href = res.data.data
            }
          }
        }
        // 失败回调
        let errCallback = () => {
        }
        self.$http.post(url, params).then(successCallback, errCallback)*/


        let url = `/choosePayWay?totalAmount=${query.totalAmount}&orderCode=${query.orderCode}&offPay=${query.offPay}`
        let href = `${apiServer}/wx/wxAuthorizeAndRedirect?redirectPath=${encodeURIComponent(url)}`
        window.location.href = href
      },
      isEqual (id, queryId) {
        if (String(id) === String(queryId)) {
          return true
        } else {
          return false
        }
      },
      getShopNum (list) {
        let sum = 0
        for (let i = 0; i < list.length; i++) {
          sum = list[i].number + sum
        }
        return sum
      },
      isWxOpen () {
        var ua = navigator.userAgent.toLowerCase()
        if (ua.match(/MicroMessenger/i) && (ua.match(/MicroMessenger/i)[0] === 'micromessenger')) {
          return true
        } else {
          return false
        }
      },
      handleSubmit () {
        const self = this
        if (self.submitting || self.handleInitAddress()) {
          return false
        }
        self.submitting = true
        self.submittingTxt = '提交中...'
        let url = `${apiServer}/p/order/confirmOrder`
        let param = self.params
        let query = {
          'token': param.token,
          'versionCode': param.versionCode,
          'deviceType': param.deviceType,
          'deviceId': param.deviceId,
          'data': {
            'addrid': String(self.addrid),
            'orderAmount': String(self.totalPrice),
            'shippingFee': '0',
            'shouldPayAmount': String(self.totalPrice),
            'dataList': param.data.dataList,
            'shoplist': self.shopList
          }
        }
        if (param.data.cartId) {
          query.data.cartid = String(param.data.cartId)
        }
        // console.log(JSON.stringify(query))
        // 成功回调
        let successCallback = (res) => {
          self.isShowLoading = false
          if (res.status === 200 && res.data && res.data.code === 0) {
            /*let params = {
              'token': param.token,
              'versionCode': param.versionCode,
              'deviceType': param.deviceType,
              'deviceId': param.deviceId,
              'data': {
                'orderCode': res.data.data.orderCode,
                'totalAmount': res.data.data.totalAmount,
              }
            }*/

            let query = {
              'orderCode': res.data.data.orderCode,
              'totalAmount': res.data.data.totalAmount,
              'offPay': res.data.data.canOffPay
            }
            if (!(self.openid && self.openid.length > 0) &&　self.isWxOpen()) {
              self.getAuthorizationUrl(query)
            } else {
              self.$router.push({ name: 'choosePayWay', query: query })
            }
            // self.submitting = false
            self.submittingTxt = '提交订单'
          } else {
            self.handleError(res.data.message)
            // self.submitting = false
            self.submittingTxt = '提交订单'
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleError('数据加载失败，请稍后再试')
          self.submitting = false
          self.submittingTxt = '提交订单'
        }
        setTimeout(function () {
          self.submitting = false
        }, 1000)
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      getCurrAddressId (list) {
        // console.log(list.length)
        if (list.length <= 0) {
          return ''
        }
        let isHasDefault = false
        let addressId = this.$route.query.addressId
        for (let i = 0; i < list.length; i++) {
          if (list[i].isDefault === '1' && !addressId) {
            isHasDefault = true
            return list[i].id
          }
          if (addressId === list[i].id) {
            return list[i].id
          }
        }
        if (!isHasDefault && !addressId) {
          return list[0].id
        }
      },
      isHasDefaultAddress (list) {
        let isTrue = false
        for (let i = 0; i < list.length; i++) {
          if (list[i].isDefault === '1') {
            isTrue = true
          }
        }
        return isTrue
      },
      clearRemark (index) {
        this.shopList[index].remark = ''
      },
      isRepeatGood (currIndex, list) {
        /* if (currIndex === 0) {
          return false
        } else {
          let prevIndex = currIndex - 1
          if (list[prevIndex].goodsId !== list[currIndex].goodsId) {
            return false
          } else {
            return true
          }
        } */
      },
      handleSrc (url) {
        return `${imgServer}${url}`
      },
      // 处理 校验没有收货地址
      handleInitAddress () {
        const self = this
        if (self.addressList <= 0) {
          self.$vux.alert.show({
            content: '请添加收货地址',
            onHide () {
              self.$router.push({ name: 'addressEdit', query: { isSubmitOrder: true } })
            }
          });
          return true;
        }
        return false;
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
      handleShopList (list) {
        let arr = []
        for (let i = 0; i < list.length; i++) {
          // console.log(list[i].goodsList.length)
          if (list[i].goodsList.length > 0) {
            let map = {}
            map.shopid = String(list[i].shopId)
            map.remark = ''
            arr.push(map)
          }
        }
        // console.log(arr)
        return arr
      },
      getGetData (params) {
        const self = this
        const url = `${apiServer}/p/cart/check`
        // 成功回调
        let successCallback = (res) => {
          self.isShowLoading = false
          if (res.status === 200 && res.data && res.data.code === 0) {
            let data = res.data.data
            let addressList = data.addressList
            let orderList = data.shopList
            let totalPrice = data.allAmount
            let totalNum = data.totalNum
            self.addressList = addressList.length > 0 ? addressList : []
            self.orderList = orderList.length > 0 ? orderList : []
            self.totalPrice = totalPrice
            self.totalNum = totalNum
            self.shopList = self.handleShopList(orderList)
            self.addrid = String(self.getCurrAddressId(self.addressList))
//            self.handleInitAddress()
          } else {
            self.handleError(res.data.message)
            setTimeout(() => {
              self.$router.push({ name: 'index' })
            }, 2500)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleError('数据加载失败，请稍后再试')
          self.isShowLoading = false
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, params).then(successCallback, errCallback)
      }
    },
    components: {
      // cmHeader,
      LoadMore
    }
  }
</script>
