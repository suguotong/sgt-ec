<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .order-list-box {
    height: 100%;
    overflow: hidden;
    /*.isShowLoading {
      padding-top: 44px;
    }*/
    .order-list {
      // padding-top: 44px;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
      .oc-list-content {
        overflow: hidden;
      }
      &:before {
        border: 0;
      }
      .ol-scroller {
        height: 44px;
        box-sizing: border-box;
        .ol-navbar {
          background-color: map_get($colors, third);
          height: 44px;
          width: 100%;
          &:after {
            border-bottom: 1px solid map_get($colors, six);
          }
          li {
            width: 20%;
            text-align: center;
            -webkit-align-items: center;
            line-height: 44px;
            .ol-navbar-item {
              font-size: map_get($fontSize, primary);
              display: inline-block;
              position: relative;
              color:map_get($colors, four);
              &.ol-navbar-item-on {
                color:map_get($colors, primary);
                &:after {
                  position: absolute;
                  content: "";
                  width: 100%;
                  height: 2px;
                  background-color:map_get($colors, primary);
                  bottom: 0;
                  left: 50%;
                  margin-left: -50%;
                }
              }
            }
          }
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
            background-color: map_get($colors, ten);
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
        .sum {
          text-align: right;
          padding: 15px 15px 10px;
          font-size: map_get($fontSize, second);
          color: map_get($colors, five);
          .price {
            font-size: map_get($fontSize, primary);
            color: map_get($colors, four);
          }
        }
      }
      .ol-cell-ft-status {
        color: map_get($colors, primary);
        font-size: map_get($fontSize, primary);
      }
      .ol-btn-sp-area {
        text-align: right;
        padding: 0 15px 15px 10px;
        .weui_btn+.weui_btn {
          margin-top: 0;
        }
        .ol-btn-plain-primary {
          border: 1px solid map_get($colors, primary);
          color: map_get($colors, primary);
          font-size: map_get($fontSize, second);
          border-radius: 0;
        }
        .ol-btn-plain-default {
          border: 1px solid map_get($colors, six);
          color: map_get($colors, five);
          font-size: map_get($fontSize, second);
          border-radius: 0;
        }
      }
    }
  }
</style>
<style lang="scss" rel="stylesheet/scss">
  .weui_dialog_confirm .weui_dialog .weui_dialog_bd div {
    width: 100%;
    text-align: center;
  }
</style>
<template>
  <div class="order-list-box">
    <!--<cm-header :hdTitle="hdTitle"></cm-header>-->
    <div class="order-list">
      <scroller class="ol-scroller" lock-y :scrollbar-x=false>
      <ul class="weui_navbar ol-navbar">
        <li>
          <router-link class="ol-navbar-item" :class="handleTabActive()" :to="{ name: 'orderList' }">全部</router-link>
          <!--<a href="javascript:;" class="ol-navbar-item" :class="handleTabActive('')"  @click="handleStatusChange('')">全部</a>-->
        </li>
        <li>
          <router-link class="ol-navbar-item " :class="handleTabActive(1)" :to="{ name: 'orderList', query: { orderStatus: 1 }}">待付款</router-link>
          <!--<a href="javascript:;" class="ol-navbar-item" :class="handleTabActive(1)"  @click="handleStatusChange(1)">待付款</a>-->
        </li>
        <li>
          <router-link class="ol-navbar-item " :class="handleTabActive(2)" :to="{ name: 'orderList', query: { orderStatus: 2 }}">待发货</router-link>
          <!--<a href="javascript:;" class="ol-navbar-item" :class="handleTabActive(2)"  @click="handleStatusChange(2)">待发货</a>-->
        </li>
        <li>
          <router-link class="ol-navbar-item " :class="handleTabActive(3)" :to="{ name: 'orderList', query: { orderStatus: 3 }}">待收货</router-link>
          <!--<a href="javascript:;" class="ol-navbar-item" :class="handleTabActive(3)"  @click="handleStatusChange(3)">待收货</a>-->
        </li>
        <li>
          <router-link class="ol-navbar-item " :class="handleTabActive(4)" :to="{ name: 'orderList', query: { orderStatus: 4 }}">交易成功</router-link>
          <!--<a href="javascript:;" class="ol-navbar-item" :class="handleTabActive(4)"  @click="handleStatusChange(4)">交易成功</a>-->
        </li>
        <!--<li>
          <router-link class="ol-navbar-item " :class="handleTabActive(5)" :to="{ name: 'orderList', query: { orderStatus: 5 }}">交易关闭</router-link>
        </li>-->
      </ul>
    </scroller>
      <div v-show="isShowLoading" class="isShowLoading">
        <load-more :tip="loadingTxt"></load-more>
      </div>
      <template v-if="!isShowLoading">
        <scroller v-show="list.length > 0"  lock-x height="100%" ref="scroller" v-model="status" use-pulldown use-pullup :pulldown-config="pullDown" :pullup-config="pullUp">
          <div class="oc-list-content">
              <div v-for="(item, index) in list" class="weui_panel weui_panel_access oc-order-list">
                <div class="weui_cells ol-cells">
                  <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary">
                      <router-link v-if="item.shopStatus === '1'"  class="ol-shop-name"  :to="{ name: 'orderDetail', query: { orderCode: item.orderCode }}">订单编号：{{ item.orderCode }}</router-link>
                      <a href="javascript:;"  @click="handleFailure('goods', item.shopStatus)" class="ol-shop-name" v-if="item.shopStatus === '2'" >订单编号：{{ item.orderCode }}</a>
                    </div>
                    <div v-if="item.orderStatus === 1" class="weui_cell_ft ol-cell-ft-status">
                      待付款
                    </div>
                    <div v-if="item.orderStatus === 2" class="weui_cell_ft ol-cell-ft-status">
                      待发货
                    </div>
                    <div v-if="item.orderStatus === 3" class="weui_cell_ft ol-cell-ft-status">
                      待收货
                    </div>
                    <div v-if="item.orderStatus === 4 && item.closeType === 0" class="weui_cell_ft ol-cell-ft-status">
                      交易成功
                    </div>
                    <div v-if="item.orderStatus === 4 && item.closeType != 0" class="weui_cell_ft ol-cell-ft-status">
                      交易关闭
                    </div>
                  </div>
                </div>
                <div class="weui_panel_bd">
                  <div class="oc-order-item">
                    <router-link  v-if="item.shopStatus === '1'" v-for="orderDetailItem in item.orderDetailList"  class="weui_media_box weui_media_appmsg oc-media_appmsg" :to="{ name: 'orderDetail', query: { orderCode: orderDetailItem.orderCode }}">
                      <div class="weui_media_hd oc-media_appmsg_thumb">
                        <img class="weui_media_appmsg_thumb " :src="handleSrc(orderDetailItem.goodsUrlDefault)" :alt="orderDetailItem.goodsName" :title="orderDetailItem.goodsName">
                      </div>
                      <div class="weui_media_bd oc-media-bd">
                        <h4 class="">{{ orderDetailItem.goodsName }}</h4>
                        <p class="weui-media-box__desc" >
                          <template v-for="specItem in orderDetailItem.goodsSpecMsgList">
                            {{ specItem.specName }}:{{ specItem.specValue }}　
                          </template>
                        </p>
                      </div>
                      <div class="weui_media-ft">
                        <p class="price">{{ orderDetailItem.price | currency('￥') }}</p>
                        <p class="num">×{{ orderDetailItem.qty }}</p>
                      </div>
                    </router-link>
                    <a href="javascript:;"  v-if="item.shopStatus === '2'" v-for="orderDetailItem in item.orderDetailList"  class="weui_media_box weui_media_appmsg oc-media_appmsg" @click="handleFailure('goods', item.shopStatus)">
                      <div class="weui_media_hd oc-media_appmsg_thumb">
                        <img class="weui_media_appmsg_thumb " :src="handleSrc(orderDetailItem.goodsUrlDefault)" :alt="orderDetailItem.goodsName" :title="orderDetailItem.goodsName">
                      </div>
                      <div class="weui_media_bd oc-media-bd">
                        <h4 class="">{{ orderDetailItem.goodsName }}</h4>
                        <p class="weui-media-box__desc" >
                          <template v-for="specItem in orderDetailItem.goodsSpecMsgList">
                            {{ specItem.specName }}:{{ specItem.specValue }}　
                          </template>
                        </p>
                      </div>
                      <div class="weui_media-ft">
                        <p class="price">{{ orderDetailItem.price | currency('￥') }}</p>
                        <p class="num">×{{ orderDetailItem.qty }}</p>
                      </div>
                    </a>
                  </div>
                  <p class="sum">共<span>{{ getShopTotalNum(item.orderDetailList) }}</span>件商品 合计：<span class="price">{{ item.shouldPayAmount | currency('￥') }}</span>(含运费：{{ item.shippingFee | currency('￥') }})</p>
                  <div v-if="item.orderStatus === 1" class="button_sp_area ol-btn-sp-area">
                    <a href="javascript:;" class="weui_btn weui_btn_mini  weui_btn_plain_default ol-btn-plain-default ol-state-operation" @click="opeateOrder(1, item.id)">取消订单</a>
                    <a href="javascript:;" class="weui_btn weui_btn_mini  weui_btn_plain_primary ol-btn-plain-primary" @click="goPay(item.orderCode, item.orderAmount)">付款</a>
                  </div>
                  <div v-if="item.orderStatus === 3" class="button_sp_area ol-btn-sp-area">
                    <a href="javascript:;" class="weui_btn weui_btn_mini  weui_btn_plain_primary ol-btn-plain-primary" @click="opeateOrder(2, item.orderCode)">确认收货</a>
                  </div>
                </div>
              </div>
          </div>
        </scroller>
        <p v-show="!isHasData" class="noData">暂无数据</p>
      </template>
    </div>
  </div>
</template>
<script type="text/babel">
  import { Scroller, LoadMore } from 'vux'
  import { mapState } from 'vuex'
  // import cmHeader from '../../components/header/index.vue'
  import { apiServer, imgServer } from '../../config'
  export default {
    data () {
      return {
        hdTitle: '我的订单',
        isShowLoading: true, // 是否显示正在加载 默认显示
        loadingTxt: '正在加载', // 显示正在加载字样
        status: {
          pullupStatus: 'default',
          pulldownStatus: 'default'
        },
        pullDown: {
          content: '下拉可以刷新',
          height: 40,
          autoRefresh: false,
          downContent: '下拉可以刷新',
          upContent: '下拉可以刷新',
          loadingContent: '正在刷新数据',
          clsPrefix: 'clspullDown'
        },
        pullUp: {
          content: '上拉可以刷新',
          pullUpHeight: 60,
          height: 40,
          autoRefresh: false,
          downContent: '上拉可以刷新',
          upContent: '上拉可以刷新',
          loadingContent: '正在加载更多数据',
          clsPrefix: 'clspullUp '
        },
        query: {
          token: '',
          versionCode: '1',
          deviceId: '355848069264888',
          deviceType: 'wx',
          data: {
            pageNum: 1,
            pageSize: '10',
            orderStatus: ''
          }
        },
        isPullDown: true, // 1 下拉刷新 2 上拉加载
        list: [],
        isHasData: true, // 是否有数据
        isInit: true
      }
    },
    computed: mapState({
      login: state => state.login,
      openid: state => state.openid
    }),
    created () {
      let orderStatus = this.$route.query.orderStatus ? this.$route.query.orderStatus : ''
      this.query.data.orderStatus = orderStatus
      this.query.token = this.login.token
      this.isInit = true
      document.title = this.hdTitle
      this.ajaxGetResultByQuery(this.query)
    },
    methods: {
      getAuthorizationUrl (params) {
        const self = this
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
        self.$http.post(url, params).then(successCallback, errCallback)
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
          this.handleError(err)
        }
      },
      goPay (orderCode, totalAmount) {
        const self = this
        let params = {
          'token': self.login.token,
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'orderCode': orderCode,
            'totalAmount': String(totalAmount)
          }
        }
        // console.log(self.openid.length)
        if (!self.openid.length) {
          self.getAuthorizationUrl(params)
        } else {
          self.$router.push({ name: 'choosePayWay', query: {
            'orderCode': orderCode,
            'totalAmount': String(totalAmount)
          } })
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
      handleError (errMsg) {
        const self = this
        self.$vux.toast.show({
          text: errMsg,
          isShowMask: true,
          width: '80%',
          type: 'text'
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
            self.ajaxGetResultByQuery(self.query)
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
      handleStatusChange (orderStatus) {
        this.query.data.orderStatus = orderStatus
        this.query.data.pageNum = 1
        this.isShowLoading = true
        this.isInit = true
        this.ajaxGetResultByQuery(this.query)
      },
      handleTabActive (orderStatus) {
        let status = this.query.data.orderStatus
        if ((String(status) === String(orderStatus)) || (!status && !orderStatus)) {
          return 'ol-navbar-item-on'
        }
      },
      getShopTotalNum (list) {
        let totalNum = 0
        for (let i = 0; i < list.length; i++) {
          if (list[i].qty > 0) {
            totalNum = totalNum + list[i].qty
          }
        }
        return totalNum
      },
      handleSrc (url) {
        return `${imgServer}${url}`
      },
      ajaxGetResultByPage (curVal) {
        let self = this
        if (curVal === 'loading') {
          self.query.data.pageNum++
          self.ajaxGetResultByQuery(self.query)
        }
      },
      /**
       * 处理请求数据返回异常的状态
       * @param status
       */
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
        self.isPullDown = true
        if (timer) {
          clearTimeout(timer)
        }
        self.isInit = false
        let timer = setTimeout(function () {
          self.status.pullupStatus = 'default'
          self.status.pulldownStatus = 'default'
        }, 2000)
      },
      ajaxGetResultByQuery (query) {
        const self = this
        const url = `${apiServer}/p/order/orderList`
        // 成功回调
        let successCallback = (res) => {
          self.isShowLoading = false
          if (res.status === 200 && res.data && res.data.code === 0) {
            let orderList = res.data.data.ordersList
            if (orderList.length > 0) {
              self.isHasData = true
            } else {
              self.isHasData = false
            }
            if (self.isPullDown) {
              self.list = orderList
            } else {
              self.list = self.list.concat(orderList)
            }
            self.handleLoadingErr(1)
          } else {
            self.handleLoadingErr(3)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleLoadingErr(2)
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
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
        // let self = this
        // console.log(22)
        this.isPullDown = true
        this.query.data.pageNum = 1
        this.ajaxGetResultByQuery(this.query)
      },
      '$route.query' (currVal, oldVal) {
        const self = this
        self.handleStatusChange(currVal.orderStatus)
      }
    },
    components: {
      Scroller,
      // cmHeader,
      LoadMore
    }
  }
</script>
