<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .address-list {
    height: 100%;
    .weui_icon_success:before {
      color: map_get($colors, primary);
    }
    .g-radio {
      position: relative;
      input[type=radio] {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
    .weui-panel {
      height: 100%;
      overflow: auto;
      padding:0 0 44px 0;
      box-sizing: border-box;
      &.weui-panel-noBtm {
        padding-bottom: 0;
      }
      .weui-media-box {
        background-color: map_get($colors, third);
        padding: 15px;
        position: relative;
        border-bottom: 10px solid map_get($colors, second);
        /*&:first-child {
          margin-top: 10px;
        }*/
        .weui-media-box_text .weui-media-box__title {
          margin-bottom: 8px;
        }
        .weui-media-box__title {
          font-weight: 400;
          font-size: 17px;
          width: auto;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          word-wrap: break-word;
          word-break: break-all;
        }
        .weui-media-box__desc {
          padding-bottom: 10px;
          padding-top: 5px;
          color: map_get($colors, eight);
          font-size: 13px;
          line-height: 1.2;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .weui-media-box__info {
          margin-top: 12px;
          padding-bottom: 2px;
          font-size: 13px;
          line-height: 1em;
          list-style: none;
          overflow: hidden;
          .weui-media-box__info__meta {
            float: left;
            padding-right: 0.2em;
            color: map_get($colors, four);
            .weui-btn_mini {
              display: inline-block;
              padding-right: 2px;
              line-height: 0;
              font-size: 15px;
            }
            .weui-btn_default {
              color: #000000;
              background-color: map_get($colors, third);
            }
            .weui-btn_mini_left {
              padding-right: 8px;
            }
            .weui-img {
              height: 15px;
            }
          }
          .weui-media-box__info__meta__right {
            float: right;
          }

        }
        .weui-first-hr {
          height: 1px;
          border: none;
          border-top: 1px solid map_get($colors, second);
        }
      }
    }

    .weui-panel:before {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid map_get($colors, second);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }

    .weui-panel:after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid map_get($colors, second);
      -webkit-transform-origin: 0 100%;
      transform-origin: 0 100%;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }

    .weui_tabbar {
      position: fixed;
      .weui_tabbar_item {
        background-color: map_get($colors, primary);
        padding: 11px 0 8px 0;
        .weui_tabbar_label_add {
          color: map_get($colors, third);
          font-size: map_get($fontSize, third)
        }
      }
    }
    .clearfix {
      zoom: 1;
    }
    .clearfix:after {
      visibility: hidden;
      display: block;
      font-size: 0;
      content: "";
      clear: both;
      height: 0;
      overflow: hidden;
    }
    .detailedAddress {
      line-height: inherit !important;
      -webkit-line-clamp: inherit !important;
    }
    .operate {
      a {
        display: block;
        height: 16px;
        line-height: 16px !important;
        float: left;
        padding-left: 20px;
        margin-right: 5px;
        background: url("../../assets/images/editor.png") no-repeat;
        background-size: 15px 15px;
      }
      span {
        display: block;
        height: 16px;
        line-height: 16px !important;
        float: left;
        padding-left: 20px;
        background: url("../../assets/images/del.png") no-repeat;
        background-size: 15px 15px;
      }
    }
    .isShowLoading {
      padding-top: 44px;
    }
  }
</style>
<style lang="scss" rel="stylesheet/scss">
  .weui_dialog_confirm .weui_dialog .weui_dialog_bd {
    text-align: center;
  }
</style>
<template>
  <div class="address-list">
    <!--<cm-header :hdTitle="hdTitle"></cm-header>-->
    <div v-show="isShowLoading" class="isShowLoading">
      <load-more :tip="loadingTxt"></load-more>
    </div>
    <template v-if="!isShowLoading">
      <!--地址列表-->
      <div class="weui-panel " :class="[addressList.length >=10 ? 'weui-panel-noBtm' : '']" >
        <div v-for="(item, index) in addressList" class="weui-media-box weui-media-box_text">
          <div @click="handleConfirmOrderAddress(item.id)">
            <h4 class="weui-media-box__title">{{ item.receiver }} &nbsp; {{ item.mobilePhone | mobile }}</h4>
            <p class="weui-media-box__desc detailedAddress">{{ item.provinceName }} {{ item.cityName }} {{ item.districtName }}  {{ item.detailAddress }}</p>
          </div>
          <hr class="weui-first-hr"/>
          <ul class="weui-media-box__info">
            <li class="weui-media-box__info__meta">
              <i class="g-radio car-goods-icon" :class="[hasCurrSelectedId(item.id, item.isDefault) ? 'weui_icon_success' : 'weui_icon_circle']">
                <input  type="radio" :id="item.id" :value="item.id" v-model="defaultAddressId">
              </i>&nbsp;
              <label :for="item.id">默认地址</label>
            </li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta__right clearfix operate">
              <router-link :to="{ name:'addressEdit', params:{addressInfo:item}, query: { isSubmitOrder: isSubmitOrder} }"
                           class="weui-btn weui-btn_mini weui-btn_default weui-btn_mini_left">
                编辑
              </router-link>
              <span class="weui-btn weui-btn_mini weui-btn_default weui-btn_del"
                    @click="handleContactUs(item.id, index)">删除</span>
            </li>
          </ul>
        </div>
      </div>
      <!--地址列表-->
      <div v-if="addressList.length < 10" class="weui_tabbar">
        <router-link :to="{name:'addressEdit', query: { isSubmitOrder: isSubmitOrder}}"
                     class="weui_tabbar_item g-footer-item weui_bar_item_on">
          <p class="weui_tabbar_label weui_tabbar_label_add">添加新地址</p>
        </router-link>
      </div>
    </template>
  </div>

</template>
<script type="text/babel">
  // import cmHeader from '../../components/header/index.vue'
  import { LoadMore } from 'vux'
  import { mapState, mapActions } from 'vuex'
  import { SET_REGION_LIST } from '../../store/regionList'
  import { apiServer } from '../../config'
  export default {
    data () {
      return {
        hdTitle: '地址管理',
        isShowLoading: true,
        loadingTxt: '正在加载', // 显示正在加载字样
        addressList: [],
        defaultAddressId: '',
        isFirst: true,
        isSubmitOrder: false
      }
    },
    computed: mapState({ login: state => state.login, reqConfirmOrderParams: state => state.reqConfirmOrderParams, regionList: state => state.regionList }),
    created () {
      document.title = this.hdTitle
      if (this.$route.query.isSubmitOrder) {
        this.isSubmitOrder = this.$route.query.isSubmitOrder
      }
      this.ajaxGetAddressList()
      if (this.regionList.length <= 0) {
        this.ajaxGetRegoinList()
      }
    },
    methods: {
      ...mapActions([SET_REGION_LIST]),
      handleRegionList (list) {
        // console.log(list)
        let arr = []
        for (let i = 0; i < list.length; i++) {
          let map = {}
          if (list[i].parent === '1') {
            map.parent = String(0)
          } else {
            map.parent = String(list[i].parent)
          }
          map.name = list[i].name
          map.value = String(list[i].value)
          arr.push(map)
        }
        return arr
      },
      ajaxGetRegoinList () {
        const self = this
        let url = `${apiServer}/p/memberReceiveAddress/getRegionList`
        let query = {
          'token': self.login.token,
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx'
        }
        // 成功回调
        let successCallback = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            self.SET_REGION_LIST(self.handleRegionList(res.data.data.regionList))
          } else {
            self.handleError(res.data)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleError('数据获取失败')
        }
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      handleConfirmOrderAddress (addressId) {
        const self = this
        if (self.isSubmitOrder) {
          // console.log(111111)
          self.$router.push({ name: 'confirmOrder', params: self.reqConfirmOrderParams, query: { addressId: addressId } })
        }
      },
      hasCurrSelectedId (id, isDefault) {
        if (isDefault === '1') {
          this.defaultAddressId = id
          return true
        } else {
          return false
        }
      },
      handleError (res) {
        const self = this
        self.$vux.toast.show({
          text: res.msg ? res.msg : res.message,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
        if (res.code === 4131 || res.code === '400') {
          setTimeout(function () {
            self.$router.push({ name: 'login' })
          }, 2000)
        }
      },
      ajaxGetAddressList () {
        const self = this
        const query = {
          'token': self.login.token,
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx'
        }
        const url = `${apiServer}/p/memberReceiveAddress/memberReceiveAddressList`
        // 成功回调
        let successCallback = (res) => {
          self.isShowLoading = false
          if (res.status === 200 && res.data.code === 0) {
            self.addressList = res.data.data.adressList
          } else {
            self.handleError(res.data)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleError({ msg: '数据加载失败' })
        }
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      ajaxSetDefaultAddress (id) {
        const self = this
        const query = {
          'token': self.login.token,
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'id': String(id)
          }
        }
        const url = `${apiServer}/p/memberReceiveAddress/updateIsDefault`
        // 成功回调
        self.isShowLoading = true
        let successCallback = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            self.isFirst = false
            self.ajaxGetAddressList()
          } else {
            self.handleError(res.data)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleError({ msg: '操作失败' })
        }
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      ajaxDelAddress (id, index) {
        const self = this
        const query = {
          'token': self.login.token,
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'id': String(id)
          }
        }
        const url = `${apiServer}/p/memberReceiveAddress/delete`
        // 成功回调
        let successCallback = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            self.addressList.splice(index, 1)
          } else {
            self.handleError(res.data)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleError({ msg: '操作失败' })
        }
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      handleContactUs (id, index) {
        const self = this
        this.$vux.confirm.show({
          content: '确认删除吗？',
          onConfirm () {
            self.ajaxDelAddress(id, index)
          }
        })
      }
    },
    components: {
      // cmHeader,
      LoadMore
    },
    watch: {
      defaultAddressId (currVal, oldVal) {
        // console.log('----------currVal----------')
        // console.log(currVal)
        // console.log('----------currVal----------')
        const self = this
        self.ajaxSetDefaultAddress(currVal)
      }
    }
  }
</script>
