<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .idx-index {
    padding-bottom: 55px;
  }
  .idx-swiper {
    height: 210px;
    img {
      width: 100%;
      height: 210px;
    }
  }
  .idx-grids {
    background-color: map_get($colors, third);
    &:before {
      border: 0;
    }
    .idx-gird {
      width: 25%;
      &:before {
        border: 0;
      }
      .idx-grid-icon {
        width: 50px;
        height: 50px;
      }
    }
    .idx-gird-good {
      width: 50%;
      padding: 0 15px;
      .idx-grid-good-img {
        width: 100%;
        height: 100%;
      }
      p {
        text-align: left;

      }
    }
    &.idx-grids-goods {
      background-color: transparent;
      padding-bottom: 20px;

    }
  }
  .idx-title-single-product {
    margin-top: 20px;
  }
  .idx-pannel-access {
    position: relative;
    .idx-media-appmsg {
      -webkit-align-items:flex-start;
      align-items:flex-start;
      padding: 0 15px 15px 15px;
      &:before {
        border: 0;
      }
      .idx-media-hd {
        width: 140px;
        height: 100%;
      }
      .g-price {
        position: absolute;
        bottom: 15px;
      }
    }
  }

  .idx-search-bar{
    padding: 8px 15px;
  }
  .idx-grids_div{
    padding: 17.5px 0px 17.5px 0px;
    margin-bottom: 2px;
    .idx-gird{
      width: 49.9%;
      padding: 0px 10px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      .weui_grid_div{
        width: 45px;
        height: 45px;
        margin-right: 15px;
        margin-left: 30px;
      }
      .grid_label_div{
        font-size: 14px;
      }
    }
    img{
      height: 60px;
      width: 1px;
      position: absolute;
      left: 50%;
    }
  }

  .module-con_div{
    padding:0px 0px 0px 0px;
    .layout-type2-con{
      .mui-flex{
        display: -webkit-box!important;
        display: -webkit-flex!important;
        display: -ms-flexbox!important;
        display: flex!important;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        .cell{
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          -ms-flex: 1;
          flex: 1;
          width: 0;
          -webkit-flex-basis: 0;
          -ms-flex-preferred-size: 0;
          flex-basis: 0;
          max-width: 100%;
          display: block;
          padding: 0!important;
          position: relative;
          .component{
            padding:-6px 0px 0px 0px;
            display: block;
            color: #051B28;
            font-size: 14px;
            line-height: 28px;
            height: 28px;
            text-align: center;
            .vline{
              display: inline-block;
              border-bottom: 1px solid;
              width: 30px;
              margin-bottom: 5px;
              border-color: #ff6048;
            }
            .left{
              margin-right: 6px;
            }
            .right{
              margin-left: 6px;
            }
            .title{
              color: #ff6048;
            }
            img{
              height: 15px;
              margin: 0 auto 5px;
              background-color: transparent;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }

  .weui_grids_div{
    background-color: #ffffff;
    padding: 0px 8px;
    .idx_grid_a{
      border: 1px solid #f0f0f0;
      background-color: #f0f0f0;
      width: 33.3%;
      margin: 0px;
      padding: 2px;
      .idx-grid-good-img{
        background-color: #ffffff;
        img{
          width: 100%;
          height: 20px;
        }
      }
      .grid_icon_div{
        height: 16px;
        width: 80%;
        border-bottom: 1px solid #f0f0f0;
        padding: 12px 10%;
      }
      .grid_icon_text{
        height: 40px;
        width: 80%;
        padding: 0px 10%;
        line-height: 20px;
        color: #666666;
        font-size: 11px;
        text-align: center;
        -webkit-box-pack: center;
        -moz-box-pack: center;
        -webkit-box-align: center;
        -moz-box-align: center;
        display: -webkit-box;
        display: -moz-box;
      }
    }
  }

  .grids_div{
    margin-top: 4px;
    padding: 0px 7.5px 0px 7.5px ;
    .idx-gird-good{
      padding: 0px 7.5px 0px 7.5px ;
    }
    .weui_grid_label{
      font-size: 12px;
      color: #666666;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .g-price{
      font-size: 14px;
      color: #cb1e1e;
    }
  }

  .scroll_div{
    margin-bottom: 0px;
    font-size: 12px;
    color: #808080;
    img{
      margin: 10px 2px;
    }
  }

  .idx-grids.idx-grids-goods{
    padding-bottom: 0px;
  }


</style>
<template>
  <div>
    <div class="idx-index">
      <!--搜索-->
      <div class="weui_search_bar idx-search-bar" id="search_bar">
        <form class="weui_search_outer idx-search-outer">
          <div class="weui_search_inner">
            <i class="weui_icon_search"></i>
            <input type="search" class="weui_search_input" id="search_input" placeholder="输入商品/店铺名称" required="">
            <a href="javascript:" class="weui_icon_clear" id="search_clear"></a>
          </div>
        </form>
      </div>
      <!--end 搜索-->
      <!--幻灯片-->
      <div class="swiper-container idx-swiper" data-space-between='10' data-pagination='.swiper-pagination' data-autoplay="1000">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../assets/temp/banner.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/temp/banner.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/temp/banner.jpg" alt=""></div>
        </div>
        <div class="swiper-pagination gd-pagination"></div>
      </div>
      <!--end 幻灯片-->
      <!--导航-->
      <div class="weui_grids idx-grids idx-grids_div">
        <a href="javascript:;" class="weui_grid js_grid idx-gird" data-id="button">
          <div class="weui_grid_icon idx-grid-icon weui_grid_div">
            <i class="g-icon1 icon-allGoods"></i>
          </div>
          <div class="weui_grid_label grid_label_div">
            全部商品
          </div>
        </a>
        <img src="../../assets/images/home_upright@2x.png"/>
        <a href="javascript:;" class="weui_grid js_grid idx-gird" data-id="toast">
          <div class="weui_grid_icon idx-grid-icon weui_grid_div">
            <i class="g-icon1 icon-popShop"></i>
          </div>
          <p class="weui_grid_label grid_label_div">
            热门店铺
          </p>
        </a>
      </div>
      <!--end 导航-->

      <!--start 推荐店铺-->
      <div class="module-con module-con_div" id="J_Tmall_rushCardTitleForH5Con">
        <div class="layout-type2-con big-layout j_Tmall_rushCardTitleForH5" data-spm="Tmall_rushCardTitleForH5">
          <div class="j_exposure"></div>
          <ul class="mui-flex">
            <li class="cell" style="">
              <div class="component type39">
                <span class="vline left"></span>
                <img src="../../assets/images/home_hot.png">
                <span class="title">推荐店铺</span>
                <span class="vline right"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="weui_grids idx-grids idx-grids-goods weui_grids_div">
        <a href="javascript:;" class="weui_grid js_grid idx-gird idx-gird-good idx_grid_a" data-id="button">
          <div class="weui_grid_icon idx-grid-good-img grid_icon_div">
            <img src="../../assets/temp/img-01.jpg">
          </div>
          <div class="weui_grid_icon idx-grid-good-img grid_icon_text">
            小米专场
          </div>
        </a>
        <a href="javascript:;" class="weui_grid js_grid idx-gird idx-gird-good idx_grid_a" data-id="button">
          <div class="weui_grid_icon idx-grid-good-img grid_icon_div">
            <img src="../../assets/temp/img-01.jpg">
          </div>
          <div class="weui_grid_icon idx-grid-good-img grid_icon_text">
            苹果旗舰店店铺店铺
          </div>
        </a>
        <a href="javascript:;" class="weui_grid js_grid idx-gird idx-gird-good idx_grid_a" data-id="button">
          <div class="weui_grid_icon idx-grid-good-img grid_icon_div">
            <img src="../../assets/temp/img-01.jpg">
          </div>
          <div class="weui_grid_icon idx-grid-good-img grid_icon_text">
            三星旗舰店
          </div>
        </a>
        <a href="javascript:;" class="weui_grid js_grid idx-gird idx-gird-good idx_grid_a" data-id="button">
          <div class="weui_grid_icon idx-grid-good-img grid_icon_div">
            <img src="../../assets/temp/img-01.jpg">
          </div>
          <div class="weui_grid_icon idx-grid-good-img grid_icon_text">
            小米专场
          </div>
        </a>
        <a href="javascript:;" class="weui_grid js_grid idx-gird idx-gird-good idx_grid_a" data-id="button">
          <div class="weui_grid_icon idx-grid-good-img grid_icon_div">
            <img src="../../assets/temp/img-01.jpg">
          </div>
          <div class="weui_grid_icon idx-grid-good-img grid_icon_text">
            苹果旗舰店店铺店铺
          </div>
        </a>
        <a href="javascript:;" class="weui_grid js_grid idx-gird idx-gird-good idx_grid_a" data-id="button">
          <div class="weui_grid_icon idx-grid-good-img grid_icon_div">
            <img src="../../assets/temp/img-01.jpg">
          </div>
          <div class="weui_grid_icon idx-grid-good-img grid_icon_text">
            三星旗舰店
          </div>
        </a>
      </div>

      <!--end 推荐店铺-->

      <!--超值单品-->
      <div class="module-con module-con_div" id="">
        <div class="layout-type2-con big-layout j_Tmall_rushCardTitleForH5" data-spm="Tmall_rushCardTitleForH5">
          <div class="j_exposure"></div>
          <ul class="mui-flex">
            <li class="cell" style="">
              <div class="component type39">
                <span class="vline left"></span>
                <img src="../../assets/images/home_thumbup.png"/>
                <span class="title">超值单品</span>
                <span class="vline right"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="weui_grids idx-grids idx-grids-goods grids_div">
        <a href="javascript:;" class="weui_grid js_grid idx-gird idx-gird-good" data-id="button">
          <div class="weui_grid_icon idx-grid-good-img">
            <img src="../../assets/temp/img-01.jpg">
          </div>
          <p class="weui_grid_label">
            标题标题标题标题标题标题标题标题标题标题标题标题标题
          </p>
          <p class="weui_grid_label g-price">
            ￥399.00
          </p>
        </a>
        <a href="javascript:;" class="weui_grid js_grid idx-gird idx-gird-good" data-id="cell">
          <div class="weui_grid_icon idx-grid-good-img">
            <img src="../../assets/temp/img-01.jpg">
          </div>
          <p class="weui_grid_label">
            标题
          </p>
          <p class="weui_grid_label g-price">
            ￥399.00
          </p>
        </a>
        <a href="javascript:;" class="weui_grid js_grid idx-gird idx-gird-good" data-id="button">
          <div class="weui_grid_icon idx-grid-good-img">
            <img src="../../assets/temp/img-01.jpg">
          </div>
          <p class="weui_grid_label">
            标题
          </p>
          <p class="weui_grid_label g-price">
            ￥399.00
          </p>
        </a>
        <a href="javascript:;" class="weui_grid js_grid idx-gird idx-gird-good" data-id="cell">
          <div class="weui_grid_icon idx-grid-good-img">
            <img src="../../assets/temp/img-01.jpg">
          </div>
          <p class="weui_grid_label">
            标题
          </p>
          <p class="weui_grid_label g-price">
            ￥399.00
          </p>
        </a>
      </div>
      <!--end 超值单品-->

      <div class="weui-infinite-scroll scroll_div">
        查看更多<img src="../../assets/images/icon_down_hei.png"/>
      </div>

    </div>
    <cm-footer></cm-footer>
  </div>
</template>
<script type="text/babel">
  import cmFooter from '../../components/footer/index.vue'
  import cmSearch from '../../components/search/index.vue'
  export default {
    data () {
      return {
        isShowReturn: false,
        hdTitle: '首页'
      }
    },
    created () {
      // this.ajaxGetData()
      document.title = this.hdTitle
    },
    methods: {
      ajaxGetData () {
        const self = this
        const url = 'http://192.168.1.60:8082/p/login'
        const req = {
          'token': '',
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'loginName': 'changliying',
            'loginPassword': 'wk1234'
          }
        }
        // console.log(req)
        self.$http.post(url, req).then((res) => {
          // console.log(res)
        }, () => {
          // error callback
        })
      }
    },
    components: {
      cmFooter,
      cmSearch
    }
  }
</script>
