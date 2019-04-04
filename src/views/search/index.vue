<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .weui_search_bar{
    position: fixed;
    margin-top: 8px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px 8px 10px;
    background-color: transparent;
    overflow: hidden;
    &:before{
      border-top:0;
    }
  }
  .weui_search_inner .weui_search_input {
    /*padding: 4px 0;*/
    /*width: 70%;*/
    height: 24px;
    line-height: 24px;
  }
  .weui_search_inner .weui_icon_search {
    top: 2px;
  }
  .weui_search_cancel {
    line-height: 32px;
  }
  .weui_search_inner .weui_icon_clear {
    z-index: 999;
    top: 1px;
  }
  .weui_search_input:not(:valid)~.weui_icon_clear {
    display: block;
  }
  .sch {
    position: absolute;
    z-index: 9999;
    .sel {
      left: 3px;
      top: 3px;
      z-index: 2;
      .icon-btmArrow {
        width: 20px;
        height: 20px;
      }
      span {
        display: flex;
        width: 50px;
        height: 22px;
        font-size: 14px;
        line-height: 24px;
        padding-left: 4px;
        cursor: pointer;
      }
      ul {
        background: #FFF;
        left: 0;
        top: 29px;
        width: 40px;
        border-top: none;
        padding: 3px 0;
        display: none;
        li {
          height: 24px;
          line-height: 24px;
          padding-left: 3px;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
  }
  ul, ol, li {
    list-style: none;
  }
  .f-pra {
    position: absolute;
  }
  .s-txt {
    z-index: -1;
  }
  .s-cancel {
    display: flex;
  }
  /*热门推荐*/
  .hot-recommend {
    padding: 50px 10px 0 10px;
    h2 {
      font-size: map_get($fontSize, primary);
      color: map_get($colors, four);
      font-weight: 500;
    }
    .search-recommend {
      ul {
        li {
          list-style: none;
          padding: 10px 10px 0 0;
          margin: 0;
          box-sizing: border-box;
          width: 33.3%;
          float: left;
          a {
            display: block;
            width: 100%;
            height: 30px;
            line-height: 30px;
            padding: 0 5px;/*
            border:1px solid map_get($colors, five);
            border-radius: 5px;*/
            box-sizing: border-box;
            text-align: center;
            font-size: map_get($fontSize, primary);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            background-color: map_get($colors, seven);
            color: map_get($colors, five);
          }
        }
      }
    }
  }

</style>
<template>
  <scroller>
    <div class="weui_search_bar" :class="[isFocus ? 'weui_search_bar-position' : '']" id="search_bar">
      <!--<div class="sch f-pra">
        <div class="sel f-pra">
        <span class="border" @click="handleSearchType">
          <label v-show="searchType===1">商品</label>
          <label v-show="searchType===2">店铺</label>
          <i class="g-icon4 icon-btmArrow"></i>
        </span>
          <input type="hidden" id="TopSearchType" value="产品">
        </div>
      </div>-->
      <form class="weui_search_outer" @submit.prevent="handleSearch">
        <div class="weui_search_inner">
          <i class="weui_icon_search"></i>
          <input type="search" @focus="handleSearchFocus" v-model="keyWord" @blur="handleSearchBlur" class="weui_search_input" id="search_input" placeholder="输入商品" @keyup.13="handleSearch" autofocus/>
          <a href="javascript:;" v-show="isFocus === true" class="weui_icon_clear" id="search_clear" @click="handleClearKeyWord"></a>
        </div>
      </form>
      <a href="javascript:" class="weui_search_cancel s-cancel"  @click="handleSearch" >搜索</a>
      <a href="javascript:" class="weui_search_cancel s-cancel"  @click="handleCancel" id="search_cancel">取消</a>
    </div>
    <div class="hot-recommend">
      <h2>
        热门搜索
      </h2>
      <div class="search-recommend">
        <ul>
          <li><router-link  href="javascript:;" :to="{name:'brandGoodsList', query:{brandId: 320}}"  class=""> 珠江开关</router-link></li>
          <li><router-link href="javascript:;" :to="{name:'brandGoodsList', query:{brandId: 321}}"  class=""> 利维开关</router-link></li>
        </ul>
      </div>
    </div>
  </scroller>
</template>
<script type="text/babel">
  import { mapActions } from 'vuex'
  import { SET_REQ_SEARCH_PARAMS_PARAMS } from '../../store/reqSearchResultParams'
  export default {
    data () {
      return {
        searchType: 1, // 搜索类型 1 商品 2 店铺
        isFocus: true, // 是否获得焦点
        keyWord: '',
        hdTitle: '搜索'
      }
    },
    computed: {
    },
    created () {
      document.title = this.hdTitle
      if (this.$route.query.keywords) {
        this.keyWord = this.$route.query.keywords
      }
    },
    methods: {
      ...mapActions([SET_REQ_SEARCH_PARAMS_PARAMS]),
      /**
       * 处理店铺或商品搜索
       */
      handleSearchType () {
         /*// console.log(this.searchType === 1)
        if (this.searchType === 1) {
          this.searchType = 2
          return
        }
        if (this.searchType === 2) {
          this.searchType = 1
          return
        }*/
      },
      /**
       * 处理取消按钮
       */
      handleCancel () {
        this.$router.push({
          name: 'index'
        })
      },
      /**
       * 处理获得焦点事件
       */
      handleSearchFocus (ev) {
        //ev.target.scrollIntoView()
        this.isFocus = true
      },
      /**
       * 处理失去焦点事件
       */
      handleSearchBlur () {
        if (!this.keyWord) {
          this.isFocus = false
        }
      },
      /**
       * 清除关键字
       */
      handleClearKeyWord () {
        this.keyWord = ''
        this.isFocus = false
      },
      /**
       * 处理搜索
       */
      handleSearch () {
        // console.log('search')
        const self = this
        const req = {
          'token': '',
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'keyWord': self.keyWord,
            'searchType': self.searchType,
            'pageNum': 0,
            'pageSize': 16
          }
        }
        // console.log('GO searchResult')
//         console.log(req)
        this.SET_REQ_SEARCH_PARAMS_PARAMS(req)
        self.$router.push({
         name: 'searchResult'
        })
        /* self.$http.get(url, req).then((res) => {
          if (res.status === 200) {
            this.$router.push({
              name: 'searchResult',
              params: res.data,
              query: req
            })
          }
        }, () => {
          // error callback
        }) */
      }
    },
    components: {
    }
  }
</script>

