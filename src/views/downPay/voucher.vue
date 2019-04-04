<template>
  <div class="voucher">
    <div class="upImg">
      <div class="voucher_img">
        <template v-if="!isAndroidApp()">
          <vue-core-image-upload
            class="uploadBtn"
            :crop="false"
            text=""
            compress = 70
            :extensions= "extensions"
            inputAccept="image/jpg,image/jpeg,image/png"
            @imageuploaded= "imageuploaded"
            @errorhandle = "errorhandle"
            @imageuploading = "imageuploading"
            :max-file-size= "maxSize"
            :url= "uploadUrl" >
          </vue-core-image-upload>
          <img :src="downLoadURL ? downLoadURL:defaultImg" alt="上传图片">
        </template>
        <img v-if="isAndroidApp()" :src="downLoadURL ? downLoadURL:defaultImg" @click="uploadImg" alt="上传图片">
      </div>
      <p class="tiShi">请上传您的汇款凭证单并完善以下信息</p>
    </div>
    <div class="mess">
      <label class="name borderBottom">
          <span class="left">
            <em class="star">*</em>汇款人户名
          </span>
        <input type="text" v-model="name" class="textInput" maxlength="50">
      </label>
      <div class="name borderBottom">
        <div class="textInput">
          <datetime
            title="汇款时间"
            placeholder="请选择时间"
            format="YYYY-MM-DD"
            confirm-text="确定"
            cancel-text="取消"
            clear-text="请选择时间"
            :default-selected-value="defaultDate"
            @on-change="changDate">
          </datetime>
        </div>
      </div>
    </div>

    <div @click="sureBtn" class="sureBtn" :class="surePay ? 'able':''">
      确认完成汇款
    </div>
  </div>
</template>

<script type="text/babel">
  import VueCoreImageUpload  from 'vue-core-image-upload';
  import { Datetime } from 'vux'
  import { apiServer,imgServer } from '../../config'
  import defaultImg from '../../assets/images/icon-uploadDefault.png'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        defaultImg: defaultImg,
        maxSize: 3145728,
        uploadUrl: '',
        extensions: 'jpg,png,jpeg,JPG,PNG,JPEG',
        name: '',
        voucherDate: 0,
        defaultDate: 0,
        downLoadURL: ''
      }
    },
    created() {
      document.title = '上传凭证'
      this.uploadUrl = `${apiServer}/upload/uploadFile?size=${this.maxSize}&_type=${this.extensions}`
      let now = new Date()
      let cmonth = now.getMonth() + 1
      let day = now.getDate()
      let hour = now.getHours()
      let minutes = now.getMinutes()
      this.defaultDate = now.getFullYear() + '-' + this.zeroize(cmonth) + '-' + this.zeroize(day) +" "+ this.zeroize(hour)+':'+ this.zeroize(minutes)
      if (this.isAndroidApp()) {
        const self = this
        if (timer) {
            clearInterval(timer)
        }
        let timer = setInterval(function(){
          if (localStorage.getItem('imgData')) {
            self.imageuploaded(localStorage.getItem('imgData'))
          }
        },2000)
      }
    },
    computed: mapState({
      login: state => state.login,
      surePay () {
        if(this.name != '' && this.downLoadURL) {
          return true
        }
        return false
      }
    }),
    methods: {
      isAndroidApp () {
        var ua = navigator.userAgent;
          // Mozi
        if (ua.indexOf('mwjapp') > -1) {
          // alert(1);
          return true;
        } else {
          // alert(2);
          return false;
        }
      },
      uploadImg () {
        if (localStorage.getItem('imgData')) {
          localStorage.removeItem('imgData')
        }
        fun.uploadPic(this.login.token)      
      },
      imageuploaded(res) {
//        console.log(res)
        if (this.isAndroidApp()) {
          this.downLoadURL = `${imgServer}${res}`
        } else {
          if(res.code == 0) {
            this.downLoadURL = res.data.downLoadURL
            this.$vux.toast.show({
              type: 'text',
              text: '上传成功',
              position: 'bottom'
            })
          }
        }
        
      },
      imageuploading() {
        this.$vux.toast.show({
          type: 'text',
          text: '上传中...',
          position: 'bottom'
        })
      },
      errorhandle(err) {
        this.$vux.toast.show({
          type: 'text',
          text: err,
          position: 'bottom'
        })
      },
      changDate(val) {
        this.voucherDate = val;
      },
      sureBtn() {
        let self = this
        if(self.surePay) {
          let url = `${apiServer}/p/order/wechatOffPay`
          let data = {
            "data" : {
              "orderCode" : self.$route.query.orderCode,
              "totalAmount" : self.$route.query.totalAmount,
              "payWay" :"7",
              "payVoucher": this.downLoadURL,
              "remitter": this.name,
              "remitterDate":  this.voucherDate,
            },
            'token': self.login.token,
            'versionCode': '1',
            'deviceId': '355848069264888',
            'deviceType': 'wx',
          }

//          console.log(data)
          self.$http.post(url,data).then((res) => {
            localStorage.removeItem('imgData')
            if(res.body.code == 0) {
              self.$vux.alert.show({
                title: '提交成功',
                content: '您的汇款凭证已经提交成功，我们会尽快审核通过！',
                onShow () {},
                onHide () {
                  self.$router.push({
                    name: 'orderList'
                  })
                }
              })
            }else {
              self.$vux.toast.show({
                type: 'text',
                text: res.body.message,
                position: 'bottom'
              })
            }
          },(err) => {
            console.log(err)
          })
        }
      },
      zeroize(val) {
        if(val < 10) {
          return val = '0'+ val
        }
        return val;
      }
    },
    components: {
      'vue-core-image-upload': VueCoreImageUpload,
      Datetime
    },
    watch: {

    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  @import "../../assets/themes/variables";
  .borderBottom {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 200%;
      height: 0;
      border-bottom: 1px solid #ccc;
      -webkit-transform: scale(0.5, 0.5);
      -moz-transform: scale(0.5, 0.5);
      -ms-transform: scale(0.5, 0.5);
      -o-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transform-origin: 0 0;
      -ms-transform-origin: 0 0;
      transform-origin: 0 0;
    }
  }
  .voucher {
    .upImg {
      background-color: #fff;
      margin-bottom: 10px;
      position: relative;
      .tiShi {
        height: 30px;
        line-height: 30px;
        padding-left: 15px;
        background-color: #fef3f3;
        font-size: 12px;
        color: #999;
      }
      .voucher_img {
        padding: 15px;
        position: relative;
        .uploadBtn {
          position: absolute;
          top: 15px;
          left: 15px;
          z-index: 10;
          width: 75px;
          height: 75px;
          text-align: center;
          line-height: 75px;
        }
        img {
          width: 75px;
          height: 75px;
        }
      }
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 200%;
        height: 0;
        border-bottom: 1px solid #ccc;
        -webkit-transform: scale(0.5, 0.5);
        -moz-transform: scale(0.5, 0.5);
        -ms-transform: scale(0.5, 0.5);
        -o-transform: scale(0.5, 0.5);
        transform: scale(0.5, 0.5);
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
      }
    }
    .mess {
      padding-left: 15px;
      background-color: #fff;
      .name {
        @extend %fatherFlex;
        height: 43px;
        line-height: 43px;
        .left {
          width: 85px;
        }
        .textInput {
          @extend %childFlex;
          font-size: 14px;
          border: 0;
          .weui_cell {
            padding: 0 20px 0 0;
          }
        }
        .star {
          color: #cb1e1e;
          font-size: 14px;
          margin-right: 5px;
          vertical-align: middle;
        }
      }
    }
    .sureBtn {
      position: fixed;
      left: 0;
      bottom: 0;
      height: 50px;
      line-height: 50px;
      background-color: #999999;
      color: #fff;
      font-size: 16px;
      text-align: center;
      width: 100%;
      &.able {
        background-color: #cb1e1e;
      }
    }
  }

</style>
<style rel="stylesheet/scss" lang="scss">
  .textInput {
    .weui_cell_primary {
      color: #000;
    }
    .weui-cell {
      padding: 0 15px;
    }
  }
</style>
