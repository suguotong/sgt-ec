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
    }
  }

  /*收藏商品*/
  .collectBox {
    @extend %childFlex;
    overflow: hidden;
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

</style>
<template>
  <div class="container">
    <div class="indexTitle clearfix">
      <div class="left">您收藏了<b>{{ total }}</b>个商品</div>
      <span class="right" @click="handleEdit()">{{ editText }}</span>
    </div>
    <div class="collectBox" :class="[edit ? 'mb50':'' ]">
      <div v-show="isShowLoading" class="isShowLoading">
        <load-more :tip="loadingTxt"></load-more>
      </div>
      <template v-if="list.length>0">
        <scroller lock-x height="100%" ref="scroller" v-model="status" use-pulldown use-pullup
                  :pulldown-config="pullDown"
                  :pullup-config="pullUp">
          <div class="collectGoods">
            <div class="list" v-for="item in list">
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
                    <p class="goodsBrand">品牌：{{item.brandName}}</p>
                  </div>
                  <p class="goodsPrice">￥{{ item.goodsPrice }}</p>
                </div>
              </router-link>
            </div>
            <p v-show="!isHasData" class="noData">暂无数据</p>
          </div>
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
  </div>
</template>
<script type="text/babel">
  import {apiServer, imgServer} from '../../config'
  import {mapState, mapActions} from 'vuex'
  import {Scroller, LoadMore} from 'vux'
  export default{
    created () {
      const self = this
      self.url = `${apiServer}/p/goods/getFavoriteGoodsList`
      self.query.token = this.login.token
      self.ajaxGetResultByQuery(self.query)
    },
    data () {
      return {
        isInit: true, // 初始化
        isShowInitStatus: false, // 是否显示初始化为空时的页面
        isPullDown: true, // 1 下拉刷新 2 上拉加载
        isShowLoading: true, // 是否显示正在加载 默认显示
        loadingTxt: '正在加载', // 显示正在加载字样
        status: {
          pullupStatus: 'default',
          pulldownStatus: 'default'
        },
        pullDown: {
          content: '下拉可以刷新',
          height: 60,
          autoRefresh: false,
          downContent: '下拉可以刷新',
          upContent: '松开立即刷新',
          loadingContent: '正在刷新数据',
          clsPrefix: 'clspullDown'
        },
        pullUp: {
          content: '上拉可以刷新',
          pullUpHeight: 60,
          height: 40,
          autoRefresh: false,
          downContent: '上拉可以刷新',
          upContent: '松开立即刷新',
          loadingContent: '正在加载更多数据',
          clsPrefix: 'clspullUp'
        },
        isUsePullDown: true,
        list: {},
        pageInfo: {},
        url: '',
        query: {
          'token': ' ',
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'pageNum': 1,
            'pageSize': 16
          }
        },
        isHasData: true, // 是否有数据
        rowNum: 0, // 一共有几行
        arrChecked: [], //选中的id放入此数组中
        allCheck: false, // 默认是全不选中
        total: 0, // 总的收藏个数
        editText: '编辑',
        edit: false
      }
    },
    computed: mapState({login: state => state.login}),
    methods: {
      /**
       * 提示信息
       * */
      handleGoErr (errMsg) {
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
            self.handleGoErr('取消成功')
            setTimeout(() => {
              self.$router.go(0)
            }, 2000)
          } else {
            self.handleGoErr(res.data.message)
          }
        }
        let errBack = () => {

        }
        self.$http.post(url, query).then(successBack, errBack)
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
       * 处理请求数据返回异常的状态
       * @param status
       */
      handleLoadingErr (status) {
        let self = this
        // console.log(status)
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
        if (timer) {
          clearTimeout(timer)
        }
        let timer = setTimeout(function () {
          self.status.pullupStatus = 'default'
          self.status.pulldownStatus = 'default'
        }, 2000)
      },
      /**
       * ajax请求
       * */
      ajaxGetResultByQuery (query) {
        const self = this
        const url = self.url
        // 成功回调
        let successCallback = (res) => {
          self.isShowLoading = false
          if (res.status === 200 && res.data && res.data.code === 0 && res.data.data.pageInfo.list) {
            let data = res.data.data
            // 设置数据
            self.pageInfo = data.pageInfo
            self.rowNum = data.pageInfo.endRow
            self.total = data.pageInfo.total
            let List = data.pageInfo.list
            if (self.isPullDown) {
              self.list = List
            } else {
              self.list = self.list.concat(List)
            }
            self.handleLoadingErr(1)
            self.isHasData = true
          } else {
            self.isHasData = false
            self.handleLoadingErr(3)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleLoadingErr(2)
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      ajaxGetResultByPage (curVal) {
        let self = this
        if (curVal === 'loading') {
          if (!self.isPullDown) {
            self.query.data.pageNum++
          } else {
            self.query.data.pageNum = 1
          }
          self.ajaxGetResultByQuery(self.query)
        }
      }
    },
    watch: {
      'status.pullupStatus' (curVal) {
        let self = this
        this.isPullDown = false
        self.ajaxGetResultByPage(curVal)
        self.allCheck = true
        self.handleAllCheck(self.allCheck)
      },
      'status.pulldownStatus' (curVal) {
        let self = this
        this.isPullDown = true
        self.ajaxGetResultByPage(curVal)
        self.allCheck = true
        self.handleAllCheck(self.allCheck)
      }
    },
    components: {
      Scroller,
      LoadMore
    }
  }
</script>
