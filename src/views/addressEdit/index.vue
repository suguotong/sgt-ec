<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .address-edit-box {
    .dialog {
      display: none;
      width: 100%;
      height: 40px;
      margin-top: -40px;
      background-color: red;
      position: relative;
      opacity: 0;
      &.showDialog {
        display: block;
      }
    }
    .weui_cells {
      margin-top: 0px;
      background-color: map_get($colors, third);
      line-height: 1.41176471;
      font-size: 14px;
      overflow: hidden;
      position: relative;
      .weui_cell_form {
        border-top: 1px solid map_get($colors, second);
      }
      .weui_cell {
        padding: 10px 15px;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        .weui_cell__hd {
          .weui_label {
            display: block;
            width: 105px;
            word-wrap: break-word;
            word-break: break-all;
            font-size: inherit;
            cursor: default;
          }
        }
        .weui_cell__bd {
          width: 100%;
          .weui_input {
            width: 100%;
            border: 0;
            outline: 0;
            -webkit-appearance: none;
            background-color: transparent;
            font-size: inherit;
            color: inherit;
            height: 1.41176471em;
            line-height: 1.41176471;
          }
        }
      }
      .weui_cell_switch {
        padding-top: 6px;
        padding-bottom: 6px;
        .weui_cell_ft {
          text-align: right;
          .weui_switch {
            border-color: map_get($colors, primary);
            background-color: map_get($colors, primary);
          }
        }
      }
    }

    .weui_cells:before {
      border-top: 0px;
    }

    .weui_cells_form {
      .weui_cell_ft {
        font-size: 0;
        text-align: right;
        color: #888;
      }
      .weui_icon_warn {
        display: none;
      }
      .weui_cell_warn {
        .weui_icon_warn {
          display: inline-block;
        }
      }

      input, textarea, label[for] {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
    }

    .weui_cell:before {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      border-top: 0px;
      color: #d9d9d9;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
      left: 15px;
    }

    .weui_tabbar {
      position: fixed;
      z-index: 100;
      .g-footer-item {
        background-color: map_get($colors, primary);
        padding: 11px 0 8px 0;
        .weui_tabbar_label_add {
          color: map_get($colors, third);
          font-size: 18px;
        }
        &.disabled {
          background-color: map_get($colors, six);
        }
      }
    }

    .aa_choise {
      position: absolute;
      right: 10px;
      top: 10px;
      color: map_get($colors, fontColor);
      z-index: 1;
    }

    .aa_cell_primary {
      position: relative;
      z-index: 2;
    }

    .aa_input-address {
      width: 100%;
      padding-right: 65px;
      box-sizing: border-box;
    }

    /*.addressForm {
      padding-top: 44px;
    }*/
  }
  .vux-cell-box:before {
    left: 0;
  }
</style>
<style lang="scss" rel="stylesheet/scss">
  .vux-popup-dialog {
    z-index: 9999;
  }
</style>
<template>
  <div class="address-edit-box">
    <!--<cm-header :hdTitle="hdTitle"></cm-header>-->
    <form id="form" class="addressForm">
      <div class="weui_tab">
        <div class="weui_cells ">
            <div class="weui_cell">
              <div class="weui_cell__hd"><label class="weui_label">收货人姓名：</label></div>
              <div class="weui_cell__bd">
                <input class="weui_input" type="text" v-model="receiver" minlength="2" maxlength="25" placeholder="" @blur="handleNameCheck" @keyup="handleKeyUp">
              </div>
            </div>
            <div class="weui_cell weui_cell_form">
              <div class="weui_cell__hd"><label class="weui_label">联系电话：</label></div>
              <div class="weui_cell__bd">
                <input class="weui_input" type="text" v-model="mobilePhone" placeholder="" pattern="^\d{11}$" @blur="handleMobileCheck" @keyup="handleKeyUp">
              </div>
            </div>
          <popup-picker v-model="addressIdList" title="所在地区：" :columns="3" :data="regionList" showName placeholder="请选择" @on-hide="handlePopupHide" @on-show="handlePopupShow">
          </popup-picker>
          <div class="dialog" :class="[ isShow ? 'dialog showDialog' : 'dialog']"></div>
            <div class="weui_cell weui_cell_form">
              <div class="weui_cell__hd"><label class="weui_label">详细地址：</label></div>
              <div class="weui_cell__bd">
                <input class="weui_input" type="text" v-model="detailAddress" placeholder="街道、楼牌号等" required maxlength="80" @blur="handleDetailCheck" @keyup="handleKeyUp">
              </div>
            </div>
            <div class="weui_cell weui_cell_switch weui_cell_form">
              <div class="weui_cell_hd weui_cell_primary">设为默认地址：</div>
              <div class="weui_cell_ft">
                <input class="weui_switch" value="1" v-model="isDefault" type="checkbox">
              </div>
            </div>
          </div>
        <div class="weui_tabbar">
          <a href="javascript:;" id="formSubmitBtn" class="weui_tabbar_item g-footer-item " :class="[isVaild ? '' : 'disabled']" @click="handleSave">
            <p class="weui_tabbar_label weui_tabbar_label_add">保存</p>
          </a>
        </div>
      </div>
    </form>
  </div>
</template>
<script type="text/babel">
  // import cmHeader from '../../components/header/index.vue'
  import { PopupPicker, Picker } from 'vux'
  import { mapState, mapActions } from 'vuex'
  import { SET_REGION_LIST } from '../../store/regionList'
  import { apiServer } from '../../config'
  export default {
    data () {
      return {
        hdTitle: '地址管理',
        isVaild: false, // 是否验证通过
        addressIdList: [],
        receiver: '',
        mobilePhone: '',
        detailAddress: '',
        isDefault: true,
        isEdit: false, // 是否是编辑 false 新增 true编辑
        id: '',
        provinceName: '',
        cityName: '',
        districtName: '',
        isShow: false
      }
    },
    computed: mapState({ login: state => state.login, regionList: state => state.regionList, reqConfirmOrderParams: state => state.reqConfirmOrderParams }),
    created () {
      document.title = this.hdTitle
      // 获取省市县级联数据
      if (this.regionList.length <= 0) {
        this.ajaxGetRegoinList()
      }
      let addressInfo = this.$route.params.addressInfo
      if (this.$route.params && addressInfo) {
        this.receiver = addressInfo.receiver
        this.mobilePhone = addressInfo.mobilePhone
        this.detailAddress = addressInfo.detailAddress
        if (addressInfo.isDefault === '1') {
          this.isDefault = true
        } else {
          this.isDefault = false
        }
        this.addressIdList[0] = String(addressInfo.provinceId)
        this.addressIdList[1] = String(addressInfo.cityId)
        this.addressIdList[2] = String(addressInfo.districtId)
        this.provinceName = addressInfo.provinceName
        this.cityName = addressInfo.cityName
        this.districtName = addressInfo.districtName
        this.isEdit = true
        this.id = addressInfo.id
        this.isVaild = true
      }
    },
    methods: {
      ...mapActions([SET_REGION_LIST]),
      handlePopupShow () {
        this.isShow = true
      },
      handlePopupHide () {
        let self = this
        setTimeout(() => {
          self.isShow = false
        }, 1000)
      },
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
            self.handleError(res.data.message)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleError('数据获取失败')
        }
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      handleSave () {
        const self = this
        if (self.isVaild) {
          let url
          if (self.isEdit) {
            url = `${apiServer}/p/memberReceiveAddress/update`
          } else {
            url = `${apiServer}/p/memberReceiveAddress/add`
          }
          let idMap = self.id ? {'id': String(self.id)} : ''
          let query = {
            'token': self.login.token,
            'versionCode': '1',
            'deviceId': '355848069264888',
            'deviceType': 'wx',
            'data': {
              ...idMap,
              'receiver': self.receiver,
              'mobilePhone': self.mobilePhone,
              'provinceName': self.provinceName,
              'cityName': self.cityName,
              'districtName': self.districtName,
              'detailAddress': self.detailAddress,
              'isDefault': self.isDefault ? '1' : '0'
            }
          }
          // 禁止用户重复点击，同时提示登录中
          self.isVaild = false
          // 成功回调
          let successCallback = (res) => {
            if (res.status === 200 && res.data.code === 0) {
              if (self.$route.query.isSubmitOrder) {
                self.$router.push({ name: 'addressList' ,query: { isSubmitOrder: true }})
              } else {
                self.$router.push({ name: 'addressList' })
              }
            } else {
              self.handleError(res.data.message)
            }
          }
          // 失败回调
          let errCallback = () => {
            self.handleError('保存失败')
          }
          self.$http.post(url, query).then(successCallback, errCallback)
        }
      },
      handleDetailCheck (e) {
        this.handleErr(e, '详细地址格式错误，请输入80位以内的任意字符')
      },
      handleMobileCheck (e) {
        this.handleErr(e, '联系电话格式错误，请输入11位数字')
      },
      handleNameCheck (e) {
        this.handleErr(e, '收货人姓名格式错误，请输入2-25位任意字符')
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
      /**
       * 处理验证错误
       */
      handleErr (e, errTxt) {
        const self = this
        let el = e.target
        let isValid = el.checkValidity()
        if (!isValid) {
          self.isVaild = false
          self.$vux.toast.show({
            text: errTxt,
            isShowMask: true,
            width: '80%',
            type: 'text'
          })
        }
      },
      handleKeyUp (e) {
//        alert(e.keyCode)
        const self = this
        if (self.receiver && self.mobilePhone && self.detailAddress && self.addressIdList.length > 0) {
          self.isVaild = true
        } else {
          self.isVaild = false
        }
      },
      onShow () {
        // console.log('on show')
      },
      getAddressNameByVal (val) {
        const self = this
        let list = self.regionList
        for (let i = 0; i < list.length; i++) {
          if (list[i].value === val) {
            return list[i].name
          }
        }
        return ''
      },
      setAddress (list) {
        this.provinceName = this.getAddressNameByVal(list[0])
        this.cityName = this.getAddressNameByVal(list[1])
        this.districtName = this.getAddressNameByVal(list[2])
      }
    },
    components: {
      // cmHeader,
      PopupPicker,
      Picker
    },
    watch: {
      addressIdList (currVal) {
        const self = this
        self.setAddress(currVal)
        self.handleKeyUp()
      }
    }
  }
</script>
