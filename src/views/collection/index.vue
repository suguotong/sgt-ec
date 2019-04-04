<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  .container {
    @extend %fatherFlex;
    -webkit-flex-direction: column;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }

  /*热销产品*/
  .indexTitle {
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    .left {
      float: left;
      color: #666666;
      font-size: 14px;
      b {
        color: #cb1e1e;
      }
    }
    .right {
      float: right;
      color: #116dff;
      &.none{
        display: none;
      }
    }
  }

  /*收藏商品*/
  .collectBox {
    @extend %childFlex;
    overflow: hidden;
    position: relative;
    &.mb50 {
      margin-bottom: 50px;
    }
  }

  .collectGoods {
    background: #fff;
    .list {
      box-sizing: border-box;
      padding: 10px 15px;
      border-bottom: 1px solid #eeeeee;
      .car-media-hd-checbox {
        display: inline-block;
        line-height: 90px;
        margin-right: 10px;
        float: left;
        &.none {
          display: none;
        }
      }
      .g-checbox {
        position: relative;
        input[type=checkbox] {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
      .indexTitle {
        padding: 0 15px;
        height: 40px;
        line-height: 40px;
        .left {
          float: left;
          color: #666666;
          font-size: 14px;
          b {
            color: #cb1e1e;
          }
        }
        .right {
          float: right;
          color: #116dff;
        }
      }

      .linkA {
        @extend %fatherFlex;
        box-sizing: border-box;
        img {
          width: 90px;
          height: 90px;
        }
        .right {
          @extend %childFlex;
          padding: 0 10px;
          .goodsMes {
            height: 66px;
            .goodsName {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 14px;
              color: #333;
              line-height: 16px;
            }
            .goodsBrand {
              padding-top: 5px;
              color: #666;
              font-size: 12px;
            }
          }
          .goodsPrice {
            height: 24px;
            line-height: 24px;
            font-size: 16px;
            color: #e60014;
          }
        }
      }
      &.last {
        border: none;
      }

    }
  }

  /*编辑*/
  .editBox {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0 15px;
    box-sizing: border-box;
    line-height: 50px;
    background: #fff;
    &.none {
      display: none;
    }
    .all {
      float: left;
      color: #333333;
    }
    .btn {
      float: right;
      width: 80px;
      height: 26px;
      line-height: 26px;
      color: #cb1e1e;
      border: 1px solid #cb1e1e;
      font-size: 14px;
      margin-top: 10px;
      border-radius: 5px;
      text-align: center;
    }
    .car-media-hd-checbox {
      display: inline-block;
      line-height: 50px;
      margin-right: 10px;
      float: left;
    }
    .g-checbox {
      position: relative;
      input[type=checkbox] {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
  }
  .weui_icon_success:before{
    color: #cb1e1e;
  }
</style>
<template>
  <div class="container">
    <template v-if="isHasData">
    <div class="indexTitle clearfix">
      <div class="left">您收藏了<b>{{ total }}</b>个商品</div>
      <span class="right" @click="handleEdit()" :class="[list.length>0 ? '' : 'none']">{{ editText }}</span>
    </div>
    <div class="collectBox" :class="[edit ? 'mb50':'' ]">
      <!--<div v-show="isShowLoading" class="isShowLoading">
        <load-more :tip="loadingTxt"></load-more>
      </div>-->
      <template>
        <scroller :on-refresh="refresh" :on-infinite="infinite" :snappingHeight="60">
          <div class="collectGoods">
            <div class="list" v-if="list.length>0" v-for="item in list">
              <div class="weui_media_hd car-media-hd-checbox" :class="[edit ? '':'none']">
                <i class="g-checbox car-single-icon"
                   :class="[hasChecked(item.goodsFollowId, arrChecked ) ? 'weui_icon_success' : 'weui_icon_circle']"
                   @click="handleCheckbox(item.goodsFollowId, arrChecked )">
                  <input type="checkbox" name="skuId" value="1134"></i>
              </div>
              <router-link class="linkA" :to="{name:'goodsDetail',query:{goodsId:item.goodsId}}">
                <img :src="handleSrc(item.url)" alt="">
                <div class="right">
                  <div class="goodsMes">
                    <p class="goodsName">{{ item.goodsName }}</p>
                    <p class="goodsBrand">品牌：
                      <span v-if="item.brandName">{{item.brandName}}</span>
                      <span v-else="item.brandName">其他</span>
                    </p>
                  </div>
                  <p class="goodsPrice">￥{{ item.goodsPrice }}</p>
                </div>
              </router-link>
            </div>

          </div>
          <p v-show="!isHasData" class="noData">暂无数据</p>
        </scroller>
      </template>
    </div>
    <div class="editBox clearfix" :class="[edit ? '':'none']">
      <div class="weui_media_hd car-media-hd-checbox">
        <i class="g-checbox car-single-icon"
           :class="allCheck ? 'weui_icon_success':'weui_icon_circle' "
           @click='handleAllCheck()'>
          <input type="checkbox" name="skuId" value="1134">
        </i>
      </div>
      <div class="all">全部</div>
      <div class="btn" @click="cancelCollect()">取消收藏</div>
    </div>
    </template>
    <template v-if="!isHasData">
      <cm-result-status v-show="isShowInitStatus" goods="抱歉，没有您要收藏的商品！" :searchType="1"></cm-result-status>
    </template>
  </div>
</template>
<script type="text/babel">
  import {apiServer, imgServer} from '../../config'
  import {mapState, mapActions} from 'vuex'
  import {LoadMore} from 'vux'
  import cmResultStatus from '../../components/resultStatus/index.vue'
  export default{
    created () {
      const self = this
      self.url = `${apiServer}/p/goods/getFavoriteGoodsList`
      self.query.token = this.login.token
      document.title = this.hdTitle
      // self.ajaxGetResultByQuery(self.query)
      if (self.total === 0) {
        self.isShowInitStatus = true
      }
    },
    data () {
      return {
        hdTitle: '我的收藏',
        isShowInitStatus: false, // 是否显示初始化为空时的页面
        isPullDown: true, // 1 下拉刷新 2 上拉加载
        isShowLoading: true, // 是否显示正在加载 默认显示
        loadingTxt: '正在加载', // 显示正在加载字样
        list: [],
        pageInfo: {},
        url: '',
        query: {
          'token': ' ',
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'pageNum': 0,
            'pageSize': 16
          }
        },
        rowNum: 0, // 一共有几行
        arrChecked: [], //选中的id放入此数组中
        allCheck: false, // 默认是全不选中
        total: 0, // 总的收藏个数
        editText: '编辑',
        edit: false,
        loadingWay: 1,
        isHasData: true
      }
    },
    computed: mapState({login: state => state.login}),
    methods: {
      /**
       * 下拉刷新
       */
      refresh (done) {
        const self = this
        this.query.data.pageNum = 1
        this.loadingWay = 1
        this.ajaxGetResultByQuery(this.query,  (code, err ) => {
          if (code === 1) {
            done()
          }
          if (code === 2) {
            done(true)
          }
          if (code === 3) {
            done()
            if (err.code === 4131) {
              this.handleErr(err.message ? err.message : err.msg)
              self.$router.push({name: 'login', query: {'orderStatus': self.$route.query.orderStatus}})
            } else {
              this.handleErr('数据加载失败，请稍后重试')
            }
          }
          return true
        })
      },
      /**
       * 上拉加载
       */
      infinite (done) {
        const self = this
        this.query.data.pageNum++
        this.loadingWay = 2
        this.ajaxGetResultByQuery(this.query,  (code, err ) => {
          if (code === 1) {
            done()
          }
          if (code === 2) {
            done(true)
          }
          if (code === 3) {
            done()
            this.query.data.pageNum--
            if (err.code === 4131) {
              this.handleErr(err.message ? err.message : err.msg)
              self.$router.push({name: 'login', query: {'orderStatus': self.$route.query.orderStatus}})
            } else {
              this.handleErr('数据加载失败，请稍后重试')
            }
          }
          return true
        })
      },
      /**
       * 提示信息
       * */
      handleErr (errMsg) {
        const self = this
        self.$vux.toast.show({
          text: errMsg,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
      },
      /**
       * 删除数组中的指定元素
       * */
      removeByValue(arr, val) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == val) {
            arr.splice(i, 1);
            break;
          }
        }
      },
      /**
       * 判断当前商品是否选中--控制checkbox的class类
       */
      hasChecked (id, list) {
        const self = this
        if (self.arrChecked.length !== 0) {
          for (let i = 0; i < list.length; i++) {
            if (list[i] === id) {
              return true
            }
          }
        }
        return false
      },
      /**
       * 点击多选框
       */
      handleCheckbox (id, list) {
        const self = this
        let n = 0;
        for (let i = 0; i < list.length; i++) {
          if (list[i] === id) {
            n++;
          }
        }
        if (n === 1) {
          this.removeByValue(list, id);
          self.allCheck = false
        } else {
          list.push(id)
          if (self.arrChecked.length == self.rowNum) {
            self.allCheck = true
          } else {
            self.allCheck = false
          }
        }
      },
      /**
       *点击全选按钮
       ***/
      handleAllCheck () {
        const self = this
        if (self.allCheck) {
          self.allCheck = false
          self.arrChecked.splice(0, self.arrChecked.length);
          self.hasChecked()
          for (let i = 0; i < self.list.length; i++) {
            self.hasChecked(self.list[i].goodsFollowId, self.arrChecked)
          }
        } else {
          self.allCheck = true
          self.arrChecked.splice(0, self.arrChecked.length);
          for (let i = 0; i < self.list.length; i++) {
            self.arrChecked.push(self.list[i].goodsFollowId)
            self.hasChecked(self.list[i].goodsFollowId, self.arrChecked)
          }
        }
      },
      /**
       * 取消收藏---ajax取消收藏
       * */
      cancelCollect () {
        const self = this
        let url = `${apiServer}/p/goods/unFavoriteGoods`
        let query = {
          'token': self.login.token,
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            "goodsFollowId": self.arrChecked
          }
        }
        let successBack = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            self.handleErr('取消成功')
            setTimeout(() => {
              location.reload()
            }, 2000)
          } else {
            self.handleErr(res.data.message ? res.data.message : res.data.msg)
          }
        }
        let errBack = () => {

        }
        if (self.arrChecked.length > 0) {
          self.$http.post(url, query).then(successBack, errBack)
        } else {
          self.handleErr('请先选择商品')
        }
      },
      /**
       * 编辑
       * */
      handleEdit () {
        const self = this
        if (self.edit) {
          self.editText = '编辑'
          self.edit = false
        } else {
          self.editText = '完成'
          self.edit = true
        }
      },
      /**
       * 图片处理
       * */
      handleSrc (url) {
        return `${imgServer}${url}`
      },
      /**
       * ajax请求
       * */
      ajaxGetResultByQuery (query, cb) {
        // console.log(66666)
        const self = this
        const url = self.url
        // 成功回调
        let successCallback = (res) => {
          self.isShowLoading = false
          if (res.status === 200 && res.data && res.data.code === 0) {
            let data = res.data.data
            let List = data.pageInfo.list
            self.pageInfo = data.pageInfo
            self.rowNum = data.pageInfo.endRow
            self.total = data.pageInfo.total
            console.log(self.total)
            if (List && List.length > 0) {
              // 设置数据
              if (self.loadingWay === 1) {
                self.list = List
              } else {
                self.list = self.list.concat(List)
              }
              cb && cb(1)
            } else {
              if (!(cb && cb(2))) {
              }
            }
          } else {
            self.isNoDataToRender = true
            if (!(cb && cb(3, res.data))) {
            }
          }
          if (self.list.length > 0) {
            self.isHasData = true
          } else {
            self.isHasData = false
          }
        }
        // 失败回调
        let errCallback = (err) => {
          if (!(cb && cb(3, err))) {
            self.handleErr('数据加载失败，请稍后重试')
          }
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
      }
    },
    components: {
      LoadMore,
      cmResultStatus
    }
  }
</script>
