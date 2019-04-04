<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .gd-sku {
    padding-bottom: 65px;
    width:100%;
    height: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    .gd-sku-hd {
      width: 100%;
      height: 85px;
      border-bottom: 1px solid map_get($colors, six);
      .gd-sku-media-box {
        width: 100%;
        position: relative;
        padding: 15px 15px 10px 15px;
        box-sizing: border-box;
        .gd-sku-media-hd {
          position: absolute;
          width: 90px;
          height: 90px;
          left: 15px;
          top: -15px;
          overflow: hidden;
        }
        .gd-sku-media-bd {
          padding-left: 100px;
          .gd-sku-title {
            font-size: map_get($fontSize, primary);
            line-height: 20px;
          }
          .price {
            font-size: map_get($fontSize, third);
            color: map_get($colors, primary);
          }
        }
        .gd-sku-media-ft {
          transform: rotate(45deg);
          font-size: map_get($fontSize, nine);
        }
      }
    }
    .gd-sku-bd {
      height: 100%;
      overflow-y: auto;
      -webkit-box-flex: 1;
      .gd-sku-tab {
        width: 100%;
        display: -webkit-box;
        display: flex;
        -webkit-box-flex: 1;
        list-style: none;
        border-bottom: 1px solid map_get($colors, six);
        li {
          width: 33.3%;
          padding: 10px;
          list-style: none;
          text-align: center;
          box-sizing: border-box;
          font-size: map_get($fontSize, third);
          a {
            position: relative;
            color: map_get($colors, four);
            span {
              border-radius: 50%;
              font-size: map_get($fontSize, second);
              background-color: map_get($colors, primary);
              position: absolute;
              right: -16px;
              top: -14px;
              padding: 0 6px;
              color: map_get($colors, third);
            }
          }
          &.active {
            border-bottom: 1px solid map_get($colors, primary);
            margin-bottom: -1px;
          }
        }
      }
      .spec-list {
        ul {
          li {
            display: block;
            padding: 10px;
            position: relative;
            &:after {
              content: " ";
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              border-bottom: 1px solid map_get($colors, six);
            }
            dl {
              display: -webkit-box;
              -webkit-box-flex: 1;
              list-style: none;
              dt, dd {
                width: 33.3%;
                font-size: map_get($fontSize, primary);
              }
              dt {
                color: map_get($colors, four);
              }
              dd {
                color: map_get($colors, eight);
                .operate {
                  position: relative;
                  span {
                    position: absolute;
                    width: 25px;
                    height: 25px;
                    text-align: center;
                    background-color: map_get($colors, ten);
                    color: #666;
                    font-size: 16px;
                    line-height:26px;
                    &.minus {
                      left: 0;
                      top: 0;
                    }
                    &.plus {
                      right: 0;
                      top: 0;
                    }
                    &.active {
                      color: map_get($colors, six);
                      background: #eee;
                    }
                  }

                  .number {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 25px;
                    width: 100%;
                    text-align: center;
                    box-sizing: border-box;
                    border:1px solid #dcdcdc;
                    -webkit-appearance:none;
                  }
                }
              }
            }
          }
        }
      }
    }
    .gd-sku-ft {
      height: 65px;
      .btn-box {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        height:44px;
        .btn {
          display: block;
          @extend %childFlex;
          font-size: map_get($fontSize, third);
          line-height: 44px;
          text-align: center;
          color: map_get($colors, third);
          border: 0;
          background-color: map_get($colors, primary);
          &.disabled {
            background-color: map_get($colors, eight);
          }
          &.go-cart {
            background-color: map_get($colors, nine);
            &.disabled {
              background-color: map_get($colors, six);
            }
          }

        }
      }
      .total {
        text-align: right;
        padding-right: 15px;
        color: map_get($colors, eight);
        font-size: map_get($fontSize, second);
        span {
          color: map_get($colors, primary);
        }
      }
    }
  }
</style>
<template>
  <div class="gd-sku">
    <div class="gd-sku-hd">
      <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg  gd-sku-media-box">
        <div class="weui_media_hd gd-sku-media-hd">
          <img class="weui_media_appmsg_thumb" :src="goodsImgList[0].img" :alt="goodsTitle">
        </div>
        <div class="weui_media_bd  gd-sku-media-bd">
          <h4 class="weui_media_title gd-sku-title">{{ goodsTitle }}</h4>
          <p class="price" >{{ price | currency('￥') }}</p>
        </div>
        <div class="weui_media_ft gd-sku-media-ft" @click="closeSkuPopup">
          ＋
        </div>
      </a>
    </div>
    <div class="gd-sku-bd">
      <scroller lock-y :scrollbar-x=false>
        <ul class="gd-sku-tab" :style="{ width:skuTabWidth }">
          <li v-for="(item, index) in specList" :class="handleActiveTab(index)" @click="handleTab(index)">
            <a href="javascript:;">
              {{ item.mainSpec }}
              <span v-show="item.totalNum > 0">{{ item.totalNum }}</span>
            </a>
          </li>
        </ul>
      </scroller>
      <!--规格列表-->
      <div class="spec-list" style="">
        <ul>
          <li v-for="(key, index) in currSpecList">
            <dl>
              <dt v-if="specStatus === 2">{{ key.param2 }}</dt>
              <dt v-if="specStatus === 1">{{ key.param1 }}</dt>
              <dd>库存:{{ key.inventoryCount }}</dd>
              <dd>
                <template v-if="key.inventoryCount > 0">
                  <div class="operate">
                    <input type="number" class="number" v-model="key.number" @keyup="handleNumber(key.number, index, 0, key.inventoryCount)">
                    <span :class="handleClsMinus(key.number, 0)" @click="handleNum('minus', index, 0)">－</span>
                    <span :class="handleClsPlus(key.number, key.inventoryCount)" @click="handleNum('plus', index, key.inventoryCount)">＋</span>
                  </div>
                </template>
                <template v-if="key.inventoryCount === 0">
                  已售空
                </template>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
      <!--end 规格列表-->
    </div>
    <div class="gd-sku-ft">
      <p class="total">共 <span>{{ totalNum }}</span> 件  <span>{{ totalPrice | currency('￥') }}</span></p>
      <div class="btn-box">
        <button v-if="status === 4 && availableSaleNum != 0" class="btn disabled">已下架</button>
        <button v-if="availableSaleNum === 0" class="btn disabled">已售空</button>
        <button v-if="status === 3 && availableSaleNum !== 0" class="btn go-cart" :class="[isAllowPay ? '' : 'disabled']" @click="handleGoBuy(1)">{{ loadingGoCart }}</button>
        <button v-if="status === 3 && availableSaleNum !== 0" class="btn go-pay" :class="[isAllowPay ?  '' : 'disabled']" @click="handleGoBuy(2)">{{ loadingGoBuy }}</button>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  import { mapState, mapActions } from 'vuex'
  import { OPEN_POPUP_DIALOG } from '../../store/goodsDetail'
  import { SET_REQ_CONFIRM_ORDER_PARAMS, REMOVE_REQ_CONFIRM_ORDER_PARAMS } from '../../store/reqConfirmOrderParams'
  import { Scroller } from 'vux'
  import { apiServer } from '../../config'
  export default {
    components: {
      Scroller
    },
    props: {
      availableSaleNum: {
        type: Number,
        default () {
          return 0
        }
      },
      status: {
        type: Number,
        default () {
          return 3
        }
      },
      sku: {
        type: Array,
        default () {
          return [
            {
              inventoryCount: 13,
              param1: '黑色',
              param2: 'S',
              skuId: 245,
              specName: '颜色,尺寸',
              specValue: '黑色,S'
            }
          ]
        }
      },
      goodsImgList: {
        type: Array,
        default () {
          return []
        }
      },
      priceRangeList: {
        type: Array,
        default () {
          return []
        }
      },
      goodsTitle: {
        type: String,
        default () {
          return ''
        }
      }
    },
    data () {
      return {
        price: '0.00',
        skuTabWidth: '100%',
        active: 0, // 选中的索引值
        specList: [],
        currSpecList: [],
        totalNum: 0, // 已选规格的数量
        totalPrice: '0.00', // 已选规格的总结
        selectedList: [], // 已选规格的规格列表 加入进货单时的数据
        isAllowPay: false, // 是否允许加入进货单或支付
        specStatus: 2, // 默认几种规格 1 1种规格 2 为2种规格
        loadingGoCart: '加入进货单',
        loadingGoBuy: '立即购买'
      }
    },
    created () {
      // 处理价格
      this.handlePrice()
      // 处理tab宽度
      this.handleSkuTabWidth()
      // sku数据重组
      this.handleResetSku()
      // 处理规格列表
      this.handleCurrSpecList(this.active)
    },
    computed: mapState({ login: state => state.login }),
    methods: {
      ...mapActions([OPEN_POPUP_DIALOG, SET_REQ_CONFIRM_ORDER_PARAMS, REMOVE_REQ_CONFIRM_ORDER_PARAMS]),
      isAllowPayOrGoCart () {
        let self = this
        if (self.totalNum >= parseInt(self.priceRangeList[0].minNum)) {
          this.isAllowPay = true
        } else {
          this.isAllowPay = false
        }
      },
      handleTotalNum () {
        let num = 0
        let arr = []
        let key = 'totalNum'
        if (this.specStatus === 2) {
          arr = this.specList
        }
        if (this.specStatus === 1) {
          arr = this.currSpecList
          key = 'number'
        }
        for (let i = 0; i < arr.length; i++) {
          num = num + arr[i][key]
        }
        this.totalNum = num
      },
      handleSinglePrice () {
        let self = this
        for (let i = 0; i < self.priceRangeList.length; i++) {
          // console.log(self.totalNum)
          // console.log(self.priceRangeList[i].minNum)
          if (self.totalNum <= parseInt(self.priceRangeList[0].minNum)) {
            this.price = self.priceRangeList[0].price
          }
          if (self.totalNum >= parseInt(self.priceRangeList[i].minNum)) {
            this.price = self.priceRangeList[i].price
          }
        }
      },
      handleTotalPrice () {
        this.totalPrice = Math.floor(this.price * 100 * this.totalNum) / 100
      },
      handleSelectedList () {
        const self = this
        let arr = []
        if (self.specStatus === 2) {
          for (let i = 0; i < self.specList.length; i++) {
            if (self.specList[i].totalNum !== 0) {
              let list = this.specList[i].specList
              for (let j = 0; j < list.length; j++) {
                if (list[j].number > 0) {
                  let json = {}
                  json.spuId = self.$route.query.goodsId ? String(self.$route.query.goodsId) : ''
                  json.skuId = list[j].skuId ? String(list[j].skuId) : ''
                  json.number = list[j].number ? String(list[j].number) : ''
                  arr.push(json)
                }
              }
            }
          }
        }
        if (self.specStatus === 1) {
          for (let j = 0; j < self.currSpecList.length; j++) {
            if (self.currSpecList[j].number > 0) {
              let json = {}
              json.spuId = self.$route.query.goodsId ? String(self.$route.query.goodsId) : ''
              json.skuId = self.currSpecList[j].skuId ? String(self.currSpecList[j].skuId) : ''
              json.number = self.currSpecList[j].number ? String(self.currSpecList[j].number) : ''
              arr.push(json)
            }
          }
        }
        self.selectedList = arr
      },
      handleTotal () {
        // set购买数量
        this.handleTotalNum()
        // set单价
        this.handleSinglePrice()
        // 计算购买总价
        this.handleTotalPrice()
        // 获取已选规格列表
        this.handleSelectedList()
        this.isAllowPayOrGoCart()
      },
      handleNumber (num, index, min, max) {
        // console.log('----handleNumber-----')
        // console.log(num, min, max)
        // console.log('----handleNumber-----')
        // let num = this.currSpecList[index].number
        if (num <= min) {
          num = min
          this.handleClsMinus(num, min)
        }
        if (num >= max) {
          num = max
          this.handleClsPlus(num, max)
        }
        // console.log(num)
        this.currSpecList[index].number = num
        this.$set(this.currSpecList, index, this.currSpecList[index])
        this.handleResetSku()
        this.handleTotal()
      },
      handleNum (status, index, limit) {
        // console.log('----change num------')
        // console.log(status)
        // console.log(index)
        // console.log(limit)
        // console.log('----change num------')
        let num = this.currSpecList[index].number

        // console.log('----current num------')
        // console.log(num)
        // console.log('----current num------')
        if (status === 'minus') {
          // console.log('-----减------')
          num--
          if (num <= limit) {
            num = limit
            this.handleClsMinus(num, limit)
          }
        }
        if (status === 'plus') {
          num++
          // console.log('-----加------')
          if (num >= limit) {
            num = limit
            this.handleClsPlus(num, limit)
          }
        }
        this.currSpecList[index].number = num
        this.$set(this.currSpecList, index, this.currSpecList[index])
        this.handleResetSku()
        this.handleTotal()
      },
      handleClsMinus (num, min) {
        if (num === min) {
          return 'minus active'
        } else {
          return 'minus'
        }
      },
      handleClsPlus (num, max) {
        if (num < max) {
          return 'plus'
        } else {
          return 'plus active'
        }
      },
      handleCurrSpecList (index) {
        // console.log(index)
        // console.log(this.specList[index])
        // console.log(this.specList)
        if (this.specList[index]) {
          this.currSpecList = this.specList[index].specList
        }
      },
      /**
       * 获取规格列表 通过主规格
       * @params Array sku 规格列表
       * @return Array
       */
      getSpecListByMainSpec (mainSpec) {
        let arr = []
        const self = this
        for (let i = 0; i < mainSpec.length; i++) {
          let json = {}
          json.specList = []
          json.totalNum = 0
          for (let j = 0; j < self.sku.length; j++) {
            if (mainSpec[i].mainSpec === self.sku[j].param1) {
              json.mainSpec = self.sku[j].param1
              if (!self.sku[j].number) {
                self.sku[j].number = 0
              }
              json.totalNum = self.sku[j].number + json.totalNum
              json.specList.push(self.sku[j])
            }
          }
          arr.push(json)
        }
        // console.log(arr)
        return arr
      },
      /**
       * 获取主规格
       * @params Array sku 规格列表
       * @return Array
       */
      getMainSpec (sku) {
        let arr = []
        let json = {}
        for (let i = 0; i < sku.length; i++) {
          if (!json[sku[i].param1]) {
            json[sku[i].param1] = 1
            arr.push({
              mainSpec: sku[i].param1
            })
          }
        }
        // console.log('---------主规格------------')
        // console.log(arr)
        // console.log('---------end 主规格------------')
        return arr
      },
      handleOneSpec () {
        const self = this
        let arr = []
        for (let i = 0; i < self.sku.length; i++) {
          if (!self.sku[i].number) {
            self.sku[i].number = 0
          }
          arr.push(self.sku[i])
        }
        this.currSpecList = arr
      },
      /**
       * sku 数据重组
       */
      handleResetSku () {
        const self = this
        let arr = []
        let sku = self.sku
        if (sku.length > 0) {
          // 2种规格
          if (sku[0].specName && sku[0].param1 && sku[0].specName && sku[0].param2) {
            let mainSpec = this.getMainSpec(sku)
            // 获取主规格下的规格列表
            arr = this.getSpecListByMainSpec(mainSpec)
            this.specList = arr
            this.specStatus = 2
          }
          // 1种规格
          if (sku[0].param1 && !sku[0].param2) {
            this.handleOneSpec()
            this.specStatus = 1
          }
        }
        // return arr
      },
      handlePrice () {
        let price = ''
        let list = this.priceRangeList
        if (list.length > 0) {
          for (let i = 0; i < list.length; i++) {
            if (i === 0) {
              price = list[i].price
            }
            if (i === list.length - 1 && i !== 0) {
              price = price + '-' + list[i].price
            }
          }
        }
        this.price = price
      },
      handleSkuTabWidth () {
        let width = Math.ceil(this.getMainSpec(this.sku).length / 3) * 100
        // console.log(width)
        this.skuTabWidth = `${width}%`
      },
      closeSkuPopup () {
        this.OPEN_POPUP_DIALOG({isOpenPopup: false, popUpStatus: 2})
      },
      handleActiveTab (index) {
        if (this.active === index) {
          return 'active'
        } else {
          return ''
        }
      },
      handleTab (index) {
        this.active = index
        this.handleCurrSpecList(this.active)
      },
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
          'token': self.login.token,
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'dataList': self.selectedList
          }
        }
        // console.log(query)
        // 正在请求加入进货单或支付
        self.isAllowPay = false
        self.loadingGoCart = '正在加入进货单...'
        // 成功回调
        let successCallback = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            self.closeSkuPopup()
            self.handleGoErr('添加进货单成功')
          } else {
            self.closeSkuPopup()
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
          self.closeSkuPopup()
          self.handleGoErr('添加进货单失败')
        }
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      addRealPriceForSelectedList (selectedList) {
        const self = this
        let arr = []
        for (let i = 0; i < selectedList.length; i++) {
          selectedList[i].realPrice = String(self.price)
          arr.push(selectedList[i])
        }
        return arr
      },
      /***
       * ajax立即购买
       */
      ajaxGoPay (params) {
        const self = this
        const url = `${apiServer}/p/cart/check`
        self.isAllowPay = false
        self.loadingGoBuy = '正在购买...'
        // 成功回调
        let successCallback = (res) => {
          if (res.status === 200 && res.data && res.data.code === 0) {
            self.isAllowPay = true
            self.REMOVE_REQ_CONFIRM_ORDER_PARAMS()
            self.SET_REQ_CONFIRM_ORDER_PARAMS(params)
            self.closeSkuPopup()
            self.$router.push({ name: 'confirmOrder' })
            self.loadingGoBuy = '立即购买'
          } else {
            self.isAllowPay = true
            self.closeSkuPopup()
            self.handleErr(res.data.message)
            self.loadingGoBuy = '立即购买'
            if (res.data.code == 4131) {
              setTimeout(function () {
                self.$router.push({name: 'login'})
              }, 2500)
            }
          }
        }
        // 失败回调
        let errCallback = () => {
          self.isAllowPay = true
          self.closeSkuPopup()
          self.handleErr('数据加载失败，请稍后再试')
          self.loadingGoBuy = '立即购买'
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, params).then(successCallback, errCallback)
        // self.$router.push({ name: 'confirmOrder', params: params })
      },

      /**
       * 错误弹窗提示
       */
      handleErr (msg) {
        const self = this
        self.$vux.toast.show({
          text: msg,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
      },
      /***
       * 加入进货单
       * @param status 1 加入进货单 2 立即购买
       */
      handleGoBuy (status) {
        const self = this
        // 判断是否登录，未登录跳转至登录页面
        if (self.isAllowPay) {
          let params = {
            'token': self.login.token,
            'versionCode': '1',
            'deviceId': '355848069264888',
            'deviceType': 'wx',
            'data': {
              'dataList': self.addRealPriceForSelectedList(self.selectedList)
            }
          }
          if (self.login && self.login.id) {
            if (status === 1) {
              self.ajaxAddCart()
              this.$emit('sendNumToParent2',self.totalNum)
            } else {
              self.ajaxGoPay(params)
            }
          } else {
            if (status === 1) {
              self.$router.push({ name: 'login', query: { redirect: 'cart' } })
            } else {
              self.$router.push({ name: 'login', query: { redirect: 'confirmOrder' }, params: params })
            }
          }
        }
      }
    }
  }
</script>
