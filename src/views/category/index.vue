<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .category {
    @extend %fatherFlex;
    -webkit-flex-direction: column;
    flex-direction: column;
    height: 100%;
    .isShowLoading {
      padding-top: 44px;
    }
    .cy-search {
      background-color: map_get($colors, primary);
    }
    .cy-main {
      height: 100%;
      box-sizing: border-box;
      padding: 0 0 55px 0;
      @extend %fatherFlex;
      font-size: map_get($fontSize, primary);
      .cy-slider {
        width: 86px;
        background-color: map_get($colors, third);
        box-sizing: border-box;
        overflow-y:hidden;
        position: relative;
        ul {
          border-right: 1px solid map_get($colors, six);
          overflow: hidden;
          li {
            position: relative;
            border-top: 1px solid map_get($colors, six);
            color: map_get($colors, four);
            text-align: center;
            padding: 18px 0;
            box-sizing: content-box;
            &.active {
              background-color: map_get($colors, second);
              color: map_get($colors, primary);
            }
          }
        }
        &:after{
          position: absolute;
          width: 1px;
          height: 100%;
          border-right: 1px solid map_get($colors, six);
          content: '';
          right: 0;
          top: 0;
        }
      }
      .cy-content {
        @extend %childFlex;
        position: relative;
        overflow-y:hidden;
        dl {
          dt {
            padding: 21px 0 10px 14px;
          }
          dd {
            ul li {
              float: left;
              padding-left: 14px;
              width: 31.7%;
              box-sizing: border-box;
              margin-bottom: 10px;
              a {
                display: block;
                background-color: map_get($colors, third);
                padding: 10px 5px;
                .cy-bg-img {
                  margin: 0 auto;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .cy-txt {
                  display: block;
                  font-size: map_get($fontSize, second);
                  text-align: center;
                  color: map_get($colors, five);
                  line-height: 2.0;
                  overflow: hidden;
                  height: 24px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
<template>
  <div class="category">
    <!--搜索-->
    <cm-search class="cy-search"></cm-search>
    <!--end 搜索-->
    <section class="cy-main" v-show="!isShowLoading">
      <div class="cy-slider">
        <scroller>
          <ul>
            <li v-for="(item, index) in list" :class="handleClass(index, 0)" @click="handleChildLevel(index)">{{ item.categoryName }}</li>
          </ul>
        </scroller>
      </div>
      <div class="cy-content">
        <scroller>
          <dl class="clearfix" v-for="(item, index) in subTwoList" v-if="item.subCategoryList">
            <dt> {{ item.categoryName }}</dt>
            <dd>
              <ul>
                <li v-for="(item2, i) in item.subCategoryList">
                    <router-link :to="{ name: 'goodsList', query: { categoryId: item2.id, categoryName: item2.categoryName }}">
                      <p class="cy-bg-img" >
                        <img :src="handleSrc(item2.icoUrl)">
                      </p>
                      <p class="cy-txt">{{ item2.categoryName }}</p>
                    </router-link>
                </li>
              </ul>
            </dd>
          </dl>
        </scroller>
      </div>
    </section>
    <div v-show="isShowLoading" class="isShowLoading">
      <load-more :tip="loadingTxt"></load-more>
    </div>
    <!--底部-->
    <cm-footer></cm-footer>
    <!--end 底部-->
  </div>
</template>
<script type="text/babel">
  import { apiServer, imgServer } from '../../config'
  import cmFooter from '../../components/footer/index.vue'
  import cmSearch from '../../components/search/index.vue'
  import { LoadMore } from 'vux'
  export default {
    data () {
      return {
        hdTitle: '分类',
        isShowReturn: false,
        loadingTxt: '正在加载', // 显示正在加载字样
        isShowLoading: true, // 是否显示正在加载 默认显示
        list: [],
        subTwoList: [],
        currCategoryIndex: 0
      }
    },
    created () {
      this.ajaxGetData()
      document.title = this.hdTitle
    },
    methods: {
      handleSrc (url) {
        // console.log(url)
        if (url) {
          return `${imgServer}${url}`
        } else {
          return `${imgServer}group1/M00/03/3B/Chvyk1lCPQ-AbvcGAABhUBAmCaQ626.jpg`
        }
      },
      handleSubList () {
        let self = this
        // console.log(self.list[self.currCategoryIndex])
        return self.list[self.currCategoryIndex]
      },
      handleSubThreeList () {
        return []// self.list[self.currCategoryIndex].subCategoryList[index]
      },
      handleClass (index) {
        let self = this
        if (index === self.currCategoryIndex) {
          return 'active'
        }
      },
      handleChildLevel (index) {
        let self = this
        let jcyc = document.getElementsByClassName('cy-content')[0]
        jcyc.scrollTop = 0
        self.currCategoryIndex = index
        self.subTwoList = self.list[index].subCategoryList
      },
      ajaxGetData () {
        const self = this
        const url = `${apiServer}/p/goods/getCateList`
        const req = {
          'token': '',
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx'
        }
        // 成功回调
        let successCallback = (res) => {
          this.isShowLoading = false
          let dataList = res.data.data.dataList
          let isSuccess = res.status === 200 && res.data && res.data.code === 0 && dataList.length !== 0
          if (isSuccess) {
            self.list = dataList
            self.subTwoList = self.list[0].subCategoryList
          } else {
          }
        }
        // 失败回调
        let errCallback = () => {
          self.isShowLoading = false
          this.$router.push({name: '404'})
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, req).then(successCallback, errCallback)
      }
    },
    components: {
      cmFooter,
      cmSearch,
      LoadMore
    }
  }
</script>
