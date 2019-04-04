<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  /**搜索-商品**/
  .goodsCategoryBox {
    // padding-top: 44px;
    .all {
      margin-top: 0px;
    }
  }

  .box1 {
    .pointUp {
      width: 18px;
      height: 10px;
      -webkit-transform: translateY(-4PX) rotateX(0deg);
      -webkit-transition: all .2s;
    }

    .pointUp img {
      width: 100%;
      height: 100%;
    }

    .pointDown {
      width: 18px;
      height: 10px;
      -webkit-transform: translateY(-4PX) rotateX(180deg);
    }
  }

  .box2 {
    .pointUp {
      height: auto;
      overflow: hidden;
      -webkit-transition: all .5s;
    }

    .pointDown {
      height: 0px;
      overflow: hidden;
    }
  }

  .categoryBox a {
    display: block;
    height: 30px;
    width: 50%;
    line-height: 30px;
    text-align: center;
    float: left;
    font-size: 14px;
    color: #666;
  }
</style>
<template>
  <div>
    <!--<cm-header :hdTitle="hdTitle"></cm-header>-->
    <div class="container goodsCategoryBox">
      <div class="weui_cells weui_cells_access all">
        <router-link class="weui_cell"
                       :to="{name:'storeList', query:{shopId:querys.data.shopId,categoryName: '全部商品', shopCategoryId: ''}}">
          <div class="weui_cell_bd weui_cell_primary">
            <p>全部商品</p>
          </div>
          <div class="weui_cell_ft"></div>
        </router-link>
      </div>
      <div v-show="isShowLoading" class="isShowLoading">
        <load-more :tip="loadingTxt"></load-more>
      </div>
      <div class="weui_cells weui_cells_access">
        <div class="box" v-for="(item,index) in categoryList">
          <a class="weui_cell box1" href="javascript:;">
            <div class="weui_cell_bd weui_cell_primary">
              <p>{{ item.categoryName }}</p>
            </div>
            <div :class="defaultActive(index)" @click="handleActive(index)">
              <img src="../../assets/images/icon_up.png" alt="">
            </div>
          </a>
          <div class="box2">
            <div class="categoryBox clearfix" :class="defaultActive(index)">
              <router-link v-for="(item,index) in item.twoClassCategory"
                           :to="{name:'storeList', query:{shopId:item.shopId,categoryName:item.categoryName,shopCategoryId: item.id}}">
                {{ item.categoryName }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <cm-result-status v-show="isShowInitStatus" :searchType="1"></cm-result-status>
    </div>
  </div>
</template>
<script type="text/babel">
  import {apiServer} from '../../config'
  // import cmHeader from '../../components/header/index.vue'
  import {LoadMore} from 'vux'
  import cmResultStatus from '../../components/resultStatus/index.vue'
  export default {
    created () {
      this.querys.data.shopId = this.$route.query.shopId
      this.ajaxGetResultByQuery(this.querys)
      document.title = this.hdTitle
    },
    data () {
      return {
        categoryList: [],
        isInit: true, // 初始化
        isShowInitStatus: false, // 是否显示初始化为空时的页面
        isShowLoading: true, // 是否显示正在加载 默认显示
        loadingTxt: '正在加载', // 显示正在加载字样
        hdTitle: '商品分类',
        querys: {
          'token': '',
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'shopId': '71'
          }
        },
        active: ''
      }
    },
    methods: {
      defaultActive (index) {
        if (this.active === index) {
          return 'pointUp'
        } else {
          return 'pointUp pointDown'
        }
      },
      handleActive (index) {
        if (this.active === index) {
          this.active = ''
        } else {
          this.active = index
        }
      },
      /**
       * 处理请求数据返回异常的状态
       * @param status
       */
      ajaxGetResultByQuery (query) {
        const self = this
        const url = `${apiServer}/p/shop/shopCategoryList`
        // 成功回调
        let successCallback = (res) => {
          this.isShowLoading = false
          let dataList = res.data.data.categoryList
          if (res.status === 200 && res.data && res.data.code === 0 && dataList.length !== 0) {
            self.categoryList = dataList
            self.isInit = false // 没有数据时设置为false
          } else {
            if (self.isInit) {
              self.isShowInitStatus = true
            }
          }
        }
        // 失败回调
        let errCallback = () => {
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, query).then(successCallback, errCallback)
      }
    },
    components: {
      // cmHeader,
      LoadMore,
      cmResultStatus
    }
  }
</script>
