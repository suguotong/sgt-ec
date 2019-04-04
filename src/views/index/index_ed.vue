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
</style>
<template>
    <div>
        <div class="idx-index">
            <!--搜索-->
            <cm-search></cm-search>
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
            <div class="weui_grids idx-grids">
                <a href="javascript:;" class="weui_grid js_grid idx-gird" data-id="button">
                    <div class="weui_grid_icon idx-grid-icon">
                        <i class="g-icon1 icon-allGoods"></i>
                    </div>
                    <p class="weui_grid_label">
                        全部商品
                    </p>
                </a>
                <a href="javascript:;" class="weui_grid js_grid idx-gird" data-id="cell">
                    <div class="weui_grid_icon idx-grid-icon">
                        <i class="g-icon1 icon-categories"></i>
                    </div>
                    <p class="weui_grid_label">
                        商品分类
                    </p>
                </a>
                <a href="javascript:;" class="weui_grid js_grid idx-gird" data-id="cell">
                    <div class="weui_grid_icon idx-grid-icon">
                        <i class="g-icon1 icon-newest"></i>
                    </div>
                    <p class="weui_grid_label">
                        今日上新
                    </p>
                </a>
                <a href="javascript:;" class="weui_grid js_grid idx-gird" data-id="toast">
                    <div class="weui_grid_icon idx-grid-icon">
                        <i class="g-icon1 icon-popShop"></i>
                    </div>
                    <p class="weui_grid_label">
                        热门店铺
                    </p>
                </a>
            </div>
            <!--end 导航-->
            <!--超值单品-->
            <h2 class="g-title idx-title-single-product">超值单品</h2>
            <div class="weui_grids idx-grids idx-grids-goods">
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
            <!--热门商品-->
            <div class="weui_panel weui_panel_access idx-pannel-access">
                <h2 class="g-title">热门商品</h2>
                <div class="weui_panel_bd">
                    <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg idx-media-appmsg">
                        <div class="weui_media_hd idx-media-hd">
                            <img class="weui_media_appmsg_thumb" src="../../assets/temp/img-02.jpg" alt="">
                        </div>
                        <div class="weui_media_bd">
                            <h4 class="weui_media_title">店铺名称</h4>
                            <p class="weui_media_desc">商品名称商品名称商品名称商品名称商品名称商</p>
                            <p class="g-price">¥ 280.00</p>
                        </div>
                    </a>
                    <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg idx-media-appmsg">
                        <div class="weui_media_hd idx-media-hd">
                            <img class="weui_media_appmsg_thumb" src="../../assets/temp/img-02.jpg" alt="">
                        </div>
                        <div class="weui_media_bd">
                            <h4 class="weui_media_title">店铺名称</h4>
                            <p class="weui_media_desc">商品名称商品名称商品名称商品名称商品名称商</p>
                            <p class="g-price">¥ 280.00</p>
                        </div>
                    </a>
                    <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg idx-media-appmsg">
                        <div class="weui_media_hd idx-media-hd">
                            <img class="weui_media_appmsg_thumb" src="../../assets/temp/img-02.jpg" alt="">
                        </div>
                        <div class="weui_media_bd">
                            <h4 class="weui_media_title">店铺名称</h4>
                            <p class="weui_media_desc">商品名称商品名称商品名称商品名称商品名称商</p>
                            <p class="g-price">¥ 280.00</p>
                        </div>
                    </a>
                    <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg idx-media-appmsg">
                        <div class="weui_media_hd idx-media-hd">
                            <img class="weui_media_appmsg_thumb" src="../../assets/temp/img-02.jpg" alt="">
                        </div>
                        <div class="weui_media_bd">
                            <h4 class="weui_media_title">店铺名称</h4>
                            <p class="weui_media_desc">商品名称商品名称商品名称商品名称商品名称商</p>
                            <p class="g-price">¥ 280.00</p>
                        </div>
                    </a>
                </div>
            </div>
            <a href="javascript:;" class="g-more"><i class="g-icon4 icon-more"></i>查看更多</a>
            <!--end 热门商品-->
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
