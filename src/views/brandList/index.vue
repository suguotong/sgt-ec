<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  body {
    background: #fff;
  }

  .brandContent {
    height: 100%;
  }

  .brandList {
    .left {
      box-sizing: border-box;
      position: relative;
      .brandGroupBox {
        width: 100%;
      }
      .brandGroup {
        .title {
          height: 30px;
          line-height: 30px;
          background: #f0f0f0;
          color: #333;
          font-weight: bold;
          padding-left: 15px;
        }
        .brandBox {
          padding: 0 15px;
          background: #fff;
          .brand {
            @extend %fatherFlex;
            border-bottom: 1px solid #e6e6e6;
            padding: 15px 0;
            &:last-child {
              border-bottom: 1px solid #fff;
            }
            .brandLogo {
              border: 1px solid #eee;
              img {
                width: 65px;
                height: 45px;
              }
            }
            .brandName {
              @extend %childFlex;
              padding-left: 10px;
              line-height: 44px;
              color: #000;
            }
          }
        }
      }
    }
    .right {
      width: 30px;
      position: fixed;
      right: 0;
      top: 50%;
      z-index: 10;
      margin-top: -222px;
      .brandBtnBox {
        background: #fff;
      }
      .brandBtn {
        width: 30px;
        height: 16px;
        text-align: center;
        line-height: 16px;
        font-size: 12px;
      }
    }
  }
</style>
<template>
  <div class="brandContent">
    <div v-show="isShowLoading" class="isShowLoading">
      <load-more :tip="loadingTxt"></load-more>
    </div>
    <template v-if="!isShowLoading">
      <div class="brandList">
        <div class="left" id="left">
          <div class="brandGroupBox" id="brandGroupBox" ref="brandGroupBox">
            <div class="brandGroup" ref="brandGroup" v-for="(item, index) in brand">
              <div class="title">
                <p>{{index}}</p>
              </div>
              <div class="brandBox">
                <router-link v-for="(obj, index) in item" :to="{name:'brandDetail', query:{brandId:obj.id}}"
                             class="brand">
                  <div class="brandLogo">
                    <img :src="handleSrc(obj.brandLogo)" alt="">
                  </div>
                  <div class="brandName">{{obj.brandName}}</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="brandBtnBox">
            <div class="brandBtn" v-for="(item, index) in brandBtn" @click="handleBrandBtn(index,item)">{{item}}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script type="text/babel">
  import {LoadMore} from 'vux'
  import {mapState} from 'vuex'
  import {imgServer, apiServer} from '../../config'
  export default {
    data () {
      return {
        hdTitle: '全部品牌',
        query: {
          'token': ' ',
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx'
        },
        brandBtn: ["A", "B", "C", 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0-9'],
        brand: '',
        scrollTop: 0,
        topBrandLen: 0,
        isShowLoading: true,
        loadingTxt: '正在加载' // 显示正在加载字样
      }
    },
    created () {
      document.title = this.hdTitle
      this.url = `${apiServer}/p/goods/getGoodsBrandList`
      this.ajaxGetResultByQuery(this.query)
    },
    methods: {
      handleBrandBtn (index, item) {
        this.topBrandLen = 0
        let brand, brandArr, brandArrLen, len
        // brand所有品牌-对象；brandArrLen 有几个字母区间；topBrandLen点击字母之前的所有品牌的个数
        brand = this.brand
        brandArr = Object.entries(brand)
        brandArrLen = brandArr.length
        len = 0
        // this.$vux.toast.text(item, 'middle')
        for (var key of Object.keys(brand)) {
          if (item !== key) {
            this.topBrandLen = this.topBrandLen + parseInt(brand[key].length)
            len = len + 1;
            if (len == brandArrLen) {
             //  this.$vux.toast.text('空', 'middle')
            }
          } else if (item == key) {
            // topHeight点击的字母之前的高度；scrollTop文档滚动的距离
            let topHeight = this.topBrandLen * 78 + len * 30
            let scrollTop = this.scrollTop
            let timer
            let step
            clearInterval(timer);
            timer = setInterval(function () {
              step = (topHeight - scrollTop) / 10  // 步长
              step = step > 0 ? Math.ceil(step) : Math.floor(step)  //  取整步长
              scrollTop = scrollTop + step
              if (scrollTop == topHeight) {
                clearInterval(timer)
              }
              window.scrollTo(0, scrollTop)
            }, 20)
            //            return window.scrollTo(0, this.topBrand * 78 + len * 30)
          }
        }
      },
      handleSrc (url) {
        return `${imgServer}${url}`
      },
      ajaxGetResultByQuery (query) {
        const self = this
        const url = self.url
        // 成功回调
        let successCallback = (res) => {
          this.isShowLoading = false
          let dataList = res.data.data
          if (res.status === 200 && res.data && res.data.code === 0 && dataList.length !== 0) {
            this.brand = dataList
            window.scrollTo(0, 0)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.isShowLoading = false
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      menu () {
        this.scrollTop = document.body.scrollTop;
      }
    },
    mounted () {
      window.addEventListener('scroll', this.menu)
    },
    components: {
      LoadMore
    }
  }
</script>












