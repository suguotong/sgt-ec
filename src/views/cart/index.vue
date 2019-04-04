<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  input {
    -webkit-appearance: none;
  }

  .cart-box {
    height: 100%;
    .isShowLoading {
      padding-top: 44px;
    }
    .cart-flex {
      height: 100%;
    }

    .weui_icon_success:before {
      color: map_get($colors, primary);
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
    .cart {
      padding-top: 44px;
      height: 100%;
      box-sizing: border-box;
      overflow: auto;
      padding-bottom: 110px;
      .car {
        .g-checbox {
          padding-right: 10px;
        }
        .car-pannel-access {
          margin-top: 10px;
          h2 {
            padding: 10px 15px;
            font-size: 16px;
            line-height: 1.5;
            font-weight: 500;
            border-bottom: 1px solid map_get($colors, six);
            a {
              color: map_get($colors, four);
            }
          }
          .car-panel-bd {
            position: relative;
            &:after {
              content: " ";
              position: absolute;
              bottom: -15px;
              left: 0;
              width: calc(100% - 30px);
              height: 1px;
              margin: 15px;
              border-top: 1px solid map_get($colors, six);
            }
            &:last-child {
              &:after {
                border: none;
              }
            }
            .car-media-box {
              -webkit-align-items: flex-start;
              align-items: flex-start;
              position: relative;
              .g-checbox {
                padding-right: 0;
              }
              .car-media-hd-checbox {
                width: auto;
                height: 90px;
                line-height: 90px;
              }
              .car-media-hd-single-checbox {
                width: auto;
                height: 50px;
                line-height: 50px;
              }
              .car-media-hd {
                width: 90px;
                height: 90px;
                background-color: map_get($colors, second);
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .car-batch {
                position: absolute;
                bottom: 15px;
              }
            }
            .car-single-box {
              padding: 0;
              &:before {
                border: 0;
              }
              &.price-way-num {
                padding: 0 15px;
              }
            }
          }
          .car-panel-ft {
            &.car-spec-num {
              box-sizing: border-box;
            }
            .operate {
              position: relative;
              width: 100px;
              margin-top: 10px;
              background-color: map_get($colors, seven);
              color: map_get($colors, eight);
              p {
                text-align: right;
              }
              span {
                position: absolute;
                width: 26px;
                height: 26px;
                line-height: 26px;
                text-align: center;
                background-color: map_get($colors, seven);
                font-size: 18px;
                border: 1px solid map_get($colors, six);
                box-sizing: border-box;
                margin-top: 1px;
                &.minus {
                  left: 0;
                  top: -1px;
                  border-top-left-radius: 5px;
                  border-bottom-left-radius: 5px;
                }
                &.plus {
                  right: 0;
                  top: -1px;
                  border-top-right-radius: 5px;
                  border-bottom-right-radius: 5px;
                }
                &.disabled {
                  color: map_get($colors, six);
                }
              }

              .number {
                height: 26px;
                width: 100%;
                text-align: center;
                box-sizing: border-box;
                border-radius: 5px;
                color: map_get($colors, four);
                border: 1px solid map_get($colors, six);
                font-size: map_get($fontSize, second);
              }
            }
          }
        }
        &.car-failure {
          .car-media-box {
            padding-left: 49px;
          }
          .car-pannel-access {
            .car-panel-bd {
              &:after {
                border-top: 0;
              }
            }
          }
          .clear-goods {
            float: right;
            color: map_get($colors, primary);
            &:after {
              border-color: map_get($colors, primary);
            }
          }
        }
      }
    }
    .car-footer {
      height: 105px;
      .car-tabbar {
        height: 100%;
      }
      .car-total {
        height: 50px;
        background-color: map_get($colors, third);
        border-top: 1px solid map_get($colors, six);
        li {
          height: 50px;
          list-style: none;
          position: relative;
          .car-all-box {
            position: absolute;
            left: 0;
            top: 0;
          }
          .car-all {
            padding: 10px 15px;
            font-size: map_get($fontSize, third)
          }
          a.car-btn {
            width: 80px;
            height: 100%;
            background-color: map_get($colors, primary);
            border-radius: 0;
            line-height: 50px;
            font-size: map_get($fontSize, primary);
            &:after {
              border-radius: 0;
              border: 0;
            }
            &.disabled {
              background-color: map_get($colors, six);
            }
          }
          p {
            padding-right: 15px;
            text-align: right;
            color: map_get($colors, five);
            span {
            }
          }
          p.car-small {
            font-size: map_get($fontSize, primary);
            color: map_get($colors, eight);
          }
        }
        .fl {
          float: left;
        }
        .fr {
          float: right;
        }
      }
    }
    .hdOperate {
      color: map_get($colors, third);
      float: right;
      padding-right: 15px;
    }
    .car-media-bd {
      &.car-spec-val {
        padding: 10px 0;
        box-sizing: border-box;
        h4 {
          font-size: map_get($fontSize, second);
        }
        .weui_media_desc {
          font-size: map_get($fontSize, second);
        }
      }
      h4 {
        color: map_get($colors, five);
        font-size: map_get($fontSize, primary);
      }

    }
    .car-no-spec {
      .car-media-hd-single-checbox {
        height: 30px;
        line-height: 30px;
      }
      .operate {
        margin-top: 0 !important;
      }

    }
    .weui_media_title {
      color: map_get($colors, five);
      font-size: 14px;
      display: block;
    }
    .weui_media_desc {
      line-height: 1.5;
    }
  }
</style>
<template>
  <div class="cart-box">
    <cm-header :hd-title="hdTitle" :isTitleCenter="true" :isShowReturn="isShowReturn">
      <a href="javascript:;" v-if="cartList.length > 0" class="hdOperate" @click="handleEditOperate">{{ hdOperate }}</a>
    </cm-header>
    <div v-show="isShowLoading" class="isShowLoading">
      <load-more :tip="loadingTxt"></load-more>
    </div>
    <div class="cart-flex" v-show="!isShowLoading">
      <scroller>
        <div class="cart" v-if="cartList.length > 0 || validList.length > 0">
          <div class="car">
            <!--店铺-->
            <template v-for="(shopItem, i) in cartList">
              <template v-for="(goodItem, j) in shopItem.goodsList">
                <!--按规格报价-->
                <template v-if="handlePriceType(goodItem.priceType)">
                  <div v-if="!hasSkuList(goodItem.skuList)" class="weui_panel weui_panel_access car-pannel-access">
                    <!--商品-->
                    <div class="weui_panel_bd car-panel-bd">
                      <div class="weui_media_box weui_media_appmsg car-media-box">

                        <div class="weui_media_hd car-media-hd-checbox">
                          <i class="g-checbox car-goods-icon"
                             :class="[hasCurrSelectedId(goodItem.id, goodIdList) ? 'weui_icon_success' : 'weui_icon_circle']">
                            <input type="checkbox" :value="goodItem.id" v-model="goodIdList" name="goodId">
                          </i>
                        </div>
                        <router-link class="weui_media_hd car-media-hd"
                                     :to="{name:'goodsDetail', query:{goodsId:goodItem.id}}">
                          <img class="weui_media_appmsg_thumb" :src="handleSrc(goodItem.url)" :alt="goodItem.goodsName"
                               :title="goodItem.goodsName">
                        </router-link>
                        <router-link class="weui_media_bd car-media-bd"
                                     :to="{name:'goodsDetail', query:{goodsId:goodItem.id}}">
                          <h4 class="weui_media_title">{{ goodItem.goodsName }}</h4>
                          <!--<p class="weui_media_desc car-batch">起批量:>={{ goodItem.batch }}{{ goodItem.unitName }}</p>-->

                          <div class="weui_media_box weui_media_appmsg car-media-box car-single-box car-no-spec">
                            <div class="weui_media_bd car-media-bd car-spec-val">
                              <p class="weui_media_desc "><span class="g-price">{{ goodItem.currentGoodsPrice | currency('￥') }}</span>/{{
                                goodItem.unitName }}</p>
                            </div>
                            <div class="weui_media_ft car-panel-ft car-spec-num">
                              <div class="operate">
                                <input type="number" class="number" v-model="goodItem.noSkuGoodsNum"
                                       @keyup="handleNoSku('number', goodItem.startedWholesaleNum, goodItem.availableSaleNum, i, j)">
                                <span :class="handleClsMinus(goodItem.noSkuGoodsNum, goodItem.batch)"
                                      @click="handleNoSku('minus', goodItem.startedWholesaleNum, goodItem.availableSaleNum, i, j)">－</span>
                                <span :class="handleClsPlus(goodItem.noSkuGoodsNum, goodItem.availableSaleNum)"
                                      @click="handleNoSku('plus', goodItem.startedWholesaleNum, goodItem.availableSaleNum, i, j)">＋</span>
                              </div>
                            </div>
                          </div>
                        </router-link>
                      </div>
                    </div>
                    <!--end 商品-->
                  </div>
                  <div v-for="(skuItem, k) in goodItem.skuList" v-if="hasSkuList(goodItem.skuList)"
                       class="weui_panel weui_panel_access car-pannel-access">
                    <div class="weui_panel_bd car-panel-bd">
                      <div class="weui_media_box weui_media_appmsg car-media-box">
                        <div class="weui_media_hd car-media-hd-checbox">
                          <i class="g-checbox car-single-icon"
                             :class="[hasCurrSelectedId(skuItem.id, skuIdList) ? 'weui_icon_success' : 'weui_icon_circle']">
                            <input type="checkbox" :value="skuItem.id" v-model="skuIdList" name="skuId">
                          </i>
                        </div>
                        <router-link class="weui_media_hd car-media-hd"
                                     :to="{name:'goodsDetail', query:{goodsId:goodItem.id, skuId:skuItem.id}}">
                          <img class="weui_media_appmsg_thumb" :src="handleSrc(goodItem.url)" :alt="goodItem.goodsName"
                               :title="goodItem.goodsName">
                        </router-link>
                        <div class="weui_media_bd car-media-bd">
                          <router-link :to="{name:'goodsDetail', query:{goodsId:goodItem.id, skuId:skuItem.id}}" class="weui_media_title">
                            {{ skuItem.displayName }}
                          </router-link>
                          <p class="weui_media_desc">型号：{{skuItem.goodsCode}}</p>
                          <p v-if="index<2" v-for="(specItem, index) in skuItem.specMsgList" class="weui_media_desc ">
                            {{specItem.specName }}:{{ specItem.specValue }}</p>
                          <div class="weui_media_box weui_media_appmsg car-media-box car-single-box">
                            <div class="weui_media_bd car-media-bd  car-spec-val">
                              <p v-if="handlePriceType(goodItem.priceType)" class="weui_media_desc "><span class="g-price">
                                <template v-if="skuItem.promotionPrice">
                                {{ skuItem.promotionPrice | currency('￥') }}
                                </template>
                                <template v-if="!skuItem.promotionPrice">
                                {{ skuItem.skuPrice | currency('￥') }}
                                </template>
                              </span>/{{ goodItem.unitName }}
                              </p>
                              <p v-else class="weui_media_desc "><span class="g-price">
                                {{ goodItem.currentGoodsPrice | currency('￥') }}
                              </span>/{{ goodItem.unitName }}</p>
                            </div>
                            <div class="weui_media_ft car-panel-ft car-spec-num">
                              <div class="operate">
                                <input type="number" class="number" v-model="skuItem.amount"
                                       @blur="handleNumChange('number', skuIdList, goodItem.priceType, goodItem.startedWholesaleNum, skuItem.inventoryCount, i, j, k)">
                                <span
                                  :class="handleHasSkuClsMinus(skuItem.amount, goodItem.startedWholesaleNum, goodItem.priceType, skuIdList, goodItem.skuList)"
                                  @click="handleSku('minus', skuIdList, goodItem.priceType, goodItem.startedWholesaleNum, skuItem.inventoryCount, i, j, k)">－</span>
                                <span :class="handleClsPlus(skuItem.amount, skuItem.inventoryCount)"
                                      @click="handleSku('plus', skuIdList, goodItem.priceType, goodItem.startedWholesaleNum, skuItem.inventoryCount, i, j, k)">＋</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end 商品-->
                  </div>
                </template>
                <!--end 按规格报价-->
                <!--按数量报价-->
                <template v-else>
                  <!--商品-->
                  <div class="weui_panel weui_panel_access car-pannel-access">
                    <div class="weui_panel_bd car-panel-bd">
                      <div class="weui_media_box weui_media_appmsg car-media-box">

                        <div class="weui_media_hd car-media-hd-checbox">
                          <i class="g-checbox car-goods-icon"
                             :class="[hasCurrSelectedId(goodItem.id, goodIdList) ? 'weui_icon_success' : 'weui_icon_circle']">
                            <input type="checkbox" :value="goodItem.id" v-model="goodIdList" name="goodId">
                          </i>
                        </div>
                        <router-link class="weui_media_hd car-media-hd"
                                     :to="{name:'goodsDetail', query:{goodsId:goodItem.id}}">
                          <img class="weui_media_appmsg_thumb" :src="handleSrc(goodItem.url)" :alt="goodItem.goodsName"
                               :title="goodItem.goodsName">
                        </router-link>
                        <router-link class="weui_media_bd car-media-bd"
                                     :to="{name:'goodsDetail', query:{goodsId:goodItem.id}}">
                          <h4 class="weui_media_title">{{ goodItem.goodsName }}</h4>
                          <p class="weui_media_desc car-batch">起批量:>={{ goodItem.batch }}{{ goodItem.unitName }}</p>
                        </router-link>
                      </div>
                      <!--规格-->
                      <template v-if="!hasSkuList(goodItem.skuList)">
                        <div
                          class="weui_media_box weui_media_appmsg car-media-box car-single-box price-way-num car-no-spec">
                          <div class="weui_media_hd car-media-hd-single-checbox ">
                          </div>
                          <div class="weui_media_bd car-media-bd car-spec-val">
                            <p class="weui_media_desc "><span class="g-price">{{ goodItem.currentGoodsPrice | currency('￥') }}</span>/{{
                              goodItem.unitName }}</p>
                          </div>
                          <div class="weui_media_ft car-panel-ft car-spec-num">
                            <div class="operate">
                              <input type="number" class="number" v-model="goodItem.noSkuGoodsNum"
                                     @keyup="handleNoSku('number', goodItem.batch, goodItem.availableSaleNum, i, j)">
                              <span :class="handleClsMinus(goodItem.noSkuGoodsNum, goodItem.batch)"
                                    @click="handleNoSku('minus', goodItem.batch, goodItem.availableSaleNum, i, j)">－</span>
                              <span :class="handleClsPlus(goodItem.noSkuGoodsNum, goodItem.availableSaleNum)"
                                    @click="handleNoSku('plus', goodItem.batch, goodItem.availableSaleNum, i, j)">＋</span>
                            </div>
                          </div>
                        </div>
                      </template>
                      <div v-for="(skuItem, k) in goodItem.skuList" v-if="hasSkuList(goodItem.skuList)"
                           class="weui_media_box weui_media_appmsg car-media-box car-single-box price-way-num">
                        <div class="weui_media_hd car-media-hd-single-checbox">
                          <i class="g-checbox car-single-icon"
                             :class="[hasCurrSelectedId(skuItem.id, skuIdList) ? 'weui_icon_success' : 'weui_icon_circle']">
                            <input type="checkbox" :value="skuItem.id" v-model="skuIdList" name="skuId">
                          </i>
                        </div>
                        <div class="weui_media_bd car-media-bd  car-spec-val">
                          <h4 class="weui_media_title">
                            <template v-if="index<2" v-for="(specItem, index) in skuItem.specMsgList">
                              {{ specItem.specName }}:{{ specItem.specValue }}
                            </template>
                          </h4>
                          <p class="weui_media_desc "><span class="g-price">{{ goodItem.currentGoodsPrice | currency('￥') }}</span>/{{
                            goodItem.unitName }}</p>
                        </div>
                        <div class="weui_media_ft car-panel-ft car-spec-num">
                          <div class="operate">
                            <input type="number" class="number" v-model="skuItem.amount"
                                   @blur="handleNumChange('number', skuIdList, goodItem.priceType, goodItem.batch, skuItem.inventoryCount, i, j, k)">
                            <span
                              :class="handleHasSkuClsMinus(skuItem.amount, goodItem.batch,goodItem.priceType, skuIdList, goodItem.skuList)"
                              @click="handleSku('minus', skuIdList, goodItem.priceType, goodItem.batch, skuItem.inventoryCount, i, j, k)">－</span>
                            <span :class="handleClsPlus(skuItem.amount, skuItem.inventoryCount)"
                                  @click="handleSku('plus', skuIdList, goodItem.priceType, goodItem.batch, skuItem.inventoryCount, i, j, k)">＋</span>
                          </div>
                        </div>
                      </div>
                      <!--end 规格-->
                    </div>
                  </div>
                  <!--end 商品-->
                </template>
                <!--end 按数量报价-->
              </template>
            </template>
            <!--end 店铺-->
          </div>
          <div class="car car-failure">
            <!--店铺-->
            <div class="weui_panel weui_panel_access car-pannel-access">
              <h2 v-if="validList.length > 0">失效商品 <a href="javascript:;"
                                                      class="weui_btn weui_btn_mini weui_btn_default clear-goods"
                                                      @click="handleClearValidList">清空失效商品</a></h2>
              <template v-for="(shopItem, i) in validList">
                <!--商品-->
                <template v-for="(goodItem, j) in shopItem.unValidGoodsList">
                  <template v-if="handlePriceType(goodItem.priceType)">
                    <div v-if="!hasSkuList(goodItem.skuList)" class="weui_panel weui_panel_access car-pannel-access">
                      <!--商品-->
                      <div class="weui_panel_bd car-panel-bd">
                        <div class="weui_media_box weui_media_appmsg car-media-box">
                          <!--未冻结-->
                          <router-link v-if="shopItem.shopStatus !== '2'" class="weui_media_hd car-media-hd"
                                       :to="{name:'goodsDetail', query:{goodsId:goodItem.id}}">
                            <img class="weui_media_appmsg_thumb" :src="handleSrc(goodItem.url)"
                                 :alt="goodItem.goodsName"
                                 :title="goodItem.goodsName">
                          </router-link>
                          <router-link v-if="shopItem.shopStatus !== '2'" class="weui_media_bd car-media-bd"
                                       :to="{name:'goodsDetail', query:{goodsId:goodItem.id}}">
                            <h4 class="weui_media_title">{{ goodItem.goodsName }}</h4>
                            <!--<p class="weui_media_desc car-batch">起批量:>={{ goodItem.batch }}{{ goodItem.unitName }}</p>-->

                            <div class="weui_media_box weui_media_appmsg car-media-box car-single-box car-no-spec">
                              <div class="weui_media_bd car-media-bd car-spec-val">
                                <p class="weui_media_desc "><span class="g-price">{{ goodItem.currentGoodsPrice | currency('￥') }}</span>/{{
                                  goodItem.unitName }}</p>
                              </div>
                              <div class="weui_media_ft car-panel-ft car-spec-num">
                                <div class="operate">
                                  <input type="number" class="number" v-model="goodItem.noSkuGoodsNum"
                                         @keyup="handleNoSku('number', goodItem.batch, goodItem.availableSaleNum, i, j)">
                                  <span :class="handleClsMinus(goodItem.noSkuGoodsNum, goodItem.batch)"
                                        @click="handleNoSku('minus', goodItem.batch, goodItem.availableSaleNum, i, j)">－</span>
                                  <span :class="handleClsPlus(goodItem.noSkuGoodsNum, goodItem.availableSaleNum)"
                                        @click="handleNoSku('plus', goodItem.batch, goodItem.availableSaleNum, i, j)">＋</span>
                                </div>
                              </div>
                            </div>
                          </router-link>
                          <!--已冻结-->
                          <a href="javascript:;" v-if="shopItem.shopStatus !== '2'"
                             @click="handleFailure('goods', shopItem.shopStatus)" class="weui_media_hd car-media-hd"
                             :to="{name:'goodsDetail', query:{goodsId:goodItem.id}}">
                            <img class="weui_media_appmsg_thumb" :src="handleSrc(goodItem.url)"
                                 :alt="goodItem.goodsName"
                                 :title="goodItem.goodsName">
                          </a>
                          <a href="javascript:;" v-if="shopItem.shopStatus !== '2'"
                             @click="handleFailure('goods', shopItem.shopStatus)" class="weui_media_bd car-media-bd"
                             :to="{name:'goodsDetail', query:{goodsId:goodItem.id}}">
                            <h4 class="weui_media_title">{{ goodItem.goodsName }}</h4>
                            <!--<p class="weui_media_desc car-batch">起批量:>={{ goodItem.batch }}{{ goodItem.unitName }}</p>-->

                            <div class="weui_media_box weui_media_appmsg car-media-box car-single-box car-no-spec">
                              <div class="weui_media_bd car-media-bd car-spec-val">
                                <p class="weui_media_desc "><span class="g-price">{{ goodItem.currentGoodsPrice | currency('￥') }}</span>/{{
                                  goodItem.unitName }}</p>
                              </div>
                              <div class="weui_media_ft car-panel-ft car-spec-num">
                                <div class="operate">
                                  <input type="number" class="number" v-model="goodItem.noSkuGoodsNum"
                                         @keyup="handleNoSku('number', goodItem.batch, goodItem.availableSaleNum, i, j)">
                                  <span :class="handleClsMinus(goodItem.noSkuGoodsNum, goodItem.batch)"
                                        @click="handleNoSku('minus', goodItem.batch, goodItem.availableSaleNum, i, j)">－</span>
                                  <span :class="handleClsPlus(goodItem.noSkuGoodsNum, goodItem.availableSaleNum)"
                                        @click="handleNoSku('plus', goodItem.batch, goodItem.availableSaleNum, i, j)">＋</span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <!--end 商品-->
                    </div>
                    <div v-for="(skuItem, k) in goodItem.skuList" v-if="hasSkuList(goodItem.skuList)"
                         class="weui_panel weui_panel_access car-pannel-access">
                      <div class="weui_panel_bd car-panel-bd">
                        <div class="weui_media_box weui_media_appmsg car-media-box">
                          <router-link v-if="shopItem.shopStatus !== '2'" class="weui_media_hd car-media-hd"
                                       :to="{name:'goodsDetail', query:{goodsId:goodItem.id, skuId:skuItem.id}}">
                            <img class="weui_media_appmsg_thumb" :src="handleSrc(goodItem.url)"
                                 :alt="goodItem.goodsName"
                                 :title="goodItem.goodsName">
                          </router-link>
                          <a href="javascript:;" v-if="shopItem.shopStatus === '2'"
                             @click="handleFailure('goods', shopItem.shopStatus)" class="weui_media_hd car-media-hd"
                             :to="{name:'goodsDetail', query:{goodsId:goodItem.id}}">
                            <img class="weui_media_appmsg_thumb" :src="handleSrc(goodItem.url)"
                                 :alt="goodItem.goodsName"
                                 :title="goodItem.goodsName">
                          </a>
                          <div class="weui_media_bd car-media-bd">
                            <router-link :to="{name:'goodsDetail', query:{goodsId:goodItem.id, skuId:skuItem.id}}"
                                         class="weui_media_title">
                              {{ skuItem.displayName }}
                            </router-link>
                            <p class="weui_media_desc">型号：{{skuItem.goodsCode}}</p>
                            <p v-if="index<2" v-for="(specItem, index) in skuItem.specMsgList" class="weui_media_desc ">
                              {{ specItem.specName }}:{{ specItem.specValue }}</p>
                            <div class="weui_media_box weui_media_appmsg car-media-box car-single-box">
                              <div class="weui_media_bd car-media-bd  car-spec-val">
                                <p v-if="handlePriceType(goodItem.priceType)" class="weui_media_desc "><span
                                  class="g-price">
                                <template v-if="skuItem.promotionPrice">
                                {{ skuItem.promotionPrice | currency('￥') }}
                                </template>
                                <template v-if="!skuItem.promotionPrice">
                                {{ skuItem.skuPrice | currency('￥') }}
                                </template>
                                </span>/{{ goodItem.unitName }}
                                </p>
                                <p v-else class="weui_media_desc "><span class="g-price">{{ goodItem.currentGoodsPrice | currency('￥') }}</span>/{{
                                  goodItem.unitName }}</p>
                              </div>
                              <div class="weui_media_ft car-panel-ft car-spec-num">
                                <div class="operate ">
                                  <p>×{{skuItem.amount}}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--end 商品-->
                    </div>
                  </template>
                  <template v-else>
                    <div class="weui_panel weui_panel_access car-pannel-access">
                      <div class="weui_panel_bd car-panel-bd">
                        <h2>
                          <!--<router-link  :to="{name:'storeHomePage', query:{shopId:shopItem.shopId}}" >{{ shopItem.shopName }}</router-link>-->
                          <!--<a href="javascript:;" @click="handleFailure('shop', shopItem.shopStatus)">{{ shopItem.shopName
                            }}</a>-->
                        </h2>
                        <router-link v-if="shopItem.shopStatus !== '2'"
                                     class="weui_media_box weui_media_appmsg car-media-box"
                                     :to="{name:'goodsDetail', query:{goodsId:goodItem.id}}">

                          <div class="weui_media_hd car-media-hd-checbox">
                          </div>
                          <div class="weui_media_hd car-media-hd">
                            <img class="weui_media_appmsg_thumb" :src="handleSrc(goodItem.url)"
                                 :alt="goodItem.goodsName"
                                 :title="goodItem.goodsName">
                          </div>
                          <div class="weui_media_bd car-media-bd">
                            <h4 class="weui_media_title">{{ goodItem.goodsName }}</h4>
                            <p class="weui_media_desc car-batch">起批量:>={{ goodItem.batch }}{{ goodItem.unitName }}</p>
                          </div>
                        </router-link>
                        <a href="javascript:;" v-if="shopItem.shopStatus === '2'"
                           class="weui_media_box weui_media_appmsg car-media-box"
                           @click="handleFailure('goods', shopItem.shopStatus)">
                          <div class="weui_media_hd car-media-hd-checbox">
                          </div>
                          <div class="weui_media_hd car-media-hd">
                            <img class="weui_media_appmsg_thumb" :src="handleSrc(goodItem.url)"
                                 :alt="goodItem.goodsName"
                                 :title="goodItem.goodsName">
                          </div>
                          <div class="weui_media_bd car-media-bd">
                            <h4 class="weui_media_title">{{ goodItem.goodsName }}</h4>
                            <p class="weui_media_desc car-batch">起批量:>={{ goodItem.batch }}{{ goodItem.unitName }}</p>
                          </div>
                        </a>
                        <!--规格-->
                        <template v-if="!hasSkuList(goodItem.skuList)">
                          <div
                            class="weui_media_box weui_media_appmsg car-media-box car-single-box car-no-spec  price-way-num">
                            <div class="weui_media_hd car-media-hd-single-checbox">
                            </div>
                            <div class="weui_media_bd car-media-bd car-spec-val">
                              <p class="weui_media_desc "><span class="g-price">{{ goodItem.currentGoodsPrice | currency('￥') }}</span>/{{
                                goodItem.unitName }}</p>
                            </div>
                            <div class="weui_media_ft car-panel-ft car-spec-num">
                              <p class="">×{{ goodItem.noSkuGoodsNum }}</p>
                            </div>
                          </div>
                        </template>
                        <div v-for="(skuItem, k) in goodItem.skuList" v-if="hasSkuList(goodItem.skuList)"
                             class="weui_media_box weui_media_appmsg car-media-box car-single-box  price-way-num">
                          <div class="weui_media_hd car-media-hd-single-checbox  ">
                          </div>
                          <div class="weui_media_bd car-media-bd car-spec-val">
                            <h4 class="weui_media_title">
                              <template v-if="index<2" v-for="(specItem, index) in skuItem.specMsgList">
                                {{ specItem.specName }}:{{ specItem.specValue }}
                              </template>
                            </h4>
                            <p class="weui_media_desc "><span class="g-price">{{ goodItem.currentGoodsPrice | currency('￥') }}</span>/{{
                              goodItem.unitName }}</p>
                          </div>
                          <div class="weui_media_ft car-panel-ft car-spec-num">
                            <p class="">×{{ skuItem.amount }}</p>
                          </div>
                        </div>
                        <!--end 规格-->
                      </div>
                    </div>
                  </template>
                </template>
                <!--end 商品-->
              </template>
            </div>
            <!--end 店铺-->
          </div>
        </div>
      </scroller>
      <no-cart v-if="cartList.length <= 0 && validList.length <= 0"></no-cart>
    </div>
    <cm-footer :class="[cartList.length > 0 ? 'car-footer' : '']">
      <div v-if="cartList.length > 0" slot="ft" class="car-total">
        <ul>
          <li class="fl car-all-box">
            <div class="car-all"><i class="g-checbox car-all-icon"
                                    :class="[allSelected ? 'weui_icon_success' : 'weui_icon_circle']">
              <input type="checkbox" value="1" v-model="allSelected" name="allSelected">
            </i>全选
            </div>
          </li>
          <li class="fr"><a href="javascript:;" class="weui_btn weui_btn_primary car-btn "
                            :class="[isBtnDisabled ? 'disabled' : '']" @click="handleBtn">{{ btnTxt }}</a></li>
          <li class="fr">
            <p>合计：<span class="car-total-price g-price">{{ totalPrice | currency('￥') }}</span></p>
            <p class="car-small"><span class="car-species">{{ speciesNum }}</span>种<span class="car-total-num">{{ totalNum }}</span>件，不含运费
            </p>
          </li>
        </ul>
      </div>
    </cm-footer>
  </div>
</template>
<script type="text/babel">
  import cmHeader from '../../components/header/index.vue'
  import cmFooter from '../../components/footer/index.vue'
  import noCart from './noCart.vue'
  import {LoadMore} from 'vux'
  import {apiServer, imgServer} from '../../config'
  import {mapState, mapActions} from 'vuex'
  import {SET_REQ_CONFIRM_ORDER_PARAMS} from '../../store/reqConfirmOrderParams'
  export default {
    data () {
      return {
        hdTitle: '进货单',
        hdOperate: '编辑',
        isShowReturn: false,
        cartList: [], // 正常商品
        validList: [], // 已失效商品
        shopIdList: [], // 选中的店铺id列表
        skuIdList: [], // 选中的sku的id列表
        goodIdList: [], // 选中的商品id列表
        allSelected: false, // 全选
        isShowLoading: true, // 是否显示正在加载
        loadingTxt: '正在加载', // 显示正在加载字样
        isBtnDisabled: true, // 结算或删除按钮默认为不可点击
        btnTxt: '结算',
        isSettingBtn: true, // 是否为结算按钮， true 为结算按钮 false 为删除按钮
        dataList: [], // 选中的商品数据
        totalNum: 0, // 总数量
        totalPrice: '0.00', // 总价格
        cartId: '',
        speciesNum: 0// 种类
      }
    },
    created () {
      const self = this
      // 获取进货单列表
      let url = `${apiServer}/p/cart/cartList`
      let query = {
        'token': self.login.token,
        'versionCode': '1',
        'deviceId': '355848069264888',
        'deviceType': 'wx'
      }
      document.title = this.hdTitle
      self.ajaxGetCartList(url, query)
      // 如果为空提示进货单为空
      // 否则显示进货单数据
    },
    computed: mapState({login: state => state.login}),
    methods: {
      ...mapActions([SET_REQ_CONFIRM_ORDER_PARAMS]),
      handlePriceType (priceType) {
        // console.log('priceType')
        // console.log(priceType)
        return priceType === '1' ? true : false
      },
      getGoodsSpecs () {
        const self = this
        let num = 0
        let cartList = self.cartList
        for (let i = 0; i < cartList.length; i++) {
          let goodsList = cartList[i].goodsList
          for (let j = 0; j < goodsList.length; j++) {
            if (goodsList[j].skuList && goodsList[j].skuList.length > 0) {
              for(let m = 0; m < goodsList[j].skuList.length; m++){
                num = num + goodsList[j].skuList[m].amount
              }
            } else {
              num = num + goodsList[j].noSkuGoodsNum
            }
          }
        }
        let num2 = 0
        let validList = self.validList
        for (let i = 0; i < validList.length; i++) {
          let goodsList = validList[i].unValidGoodsList
          for (let j = 0; j < goodsList.length; j++) {
            if (goodsList[j].skuList && goodsList[j].skuList.length > 0) {
              num2 = num2 + goodsList[j].skuList.length
            } else {
              num2 = num2 + 1
            }
          }
        }
        let totalNum = num + num2
        return totalNum
      },
      /**
       * @param type ‘goods’ 点击商品 ‘shop’ 点击店铺
       * @param status 店铺状态 1未冻结  2 已冻结
       */
      handleFailure (type, status) {
        let err = ''
        if (type === 'shop') {
          err = '该店铺涉嫌违规，已被平台冻结，暂无法访问'
        }
        if (type === 'goods') {
          err = '该商品所在店铺涉嫌违规，已被平台冻结，暂无法访问'
        }
        if (status === '2') {
          this.handleGoErr(err)
        }
      },
      handleSkuNumMin (num, batch, skuIdList, list) {
        // console.log('-------skuIdList---------')
        // console.log(skuIdList)
        // console.log(list)
        // console.log('-------list---------')
        if (list.length > 0) {
          let count = 0
          let isSelected = false
          for (let i = 0; i < list.length; i++) {
            if (skuIdList.findIndex((n) => n === list[i].id) >= 0) {
              isSelected = true
              if (list[i].amount > 0) {
                count = count + list[i].amount
              }
            }
          }
          if (!isSelected) {
            for (let i = 0; i < list.length; i++) {
              if (list[i].amount > 0) {
                count = count + list[i].amount
              }
            }
          }
          // console.log('--------count-batch------')
          // console.log(count - batch)
          if (count - batch >= 0) {
            return 1
          } else {
            return batch - count + num
          }
        } else {
          return batch
        }
      },
      /***
       * @param status eg number, minus, plus
       * @param skuIdList
       * @param max 可售数量
       * @param i
       * @param j
       * @param k
       */
      handleNumChange (status, skuIdList, priceType, batch, max, i, j, k) {
        const self = this
        let num, min
        if (k || k === 0) {
          num = self.cartList[i].goodsList[j].skuList[k].amount ? parseInt(self.cartList[i].goodsList[j].skuList[k].amount) : 0
          // 多个规格起批量处理
          if (self.handlePriceType(priceType)) {
            min = batch
          } else {
            min = self.handleSkuNumMin(num, batch, skuIdList, self.cartList[i].goodsList[j].skuList)
          }
        } else {
          num = self.cartList[i].goodsList[j].noSkuGoodsNum
        }
        // console.log('--------num-----------')
        // console.log(num)
        // console.log('--------num-----------')
        if (status === 'number') {
          if (num <= min) {
            num = min
            // this.handleClsMinus(num, min)
          }
          if (num >= max) {
            num = max
          }
        }
        if (k || k === 0) {
          self.cartList[i].goodsList[j].skuList[k].amount = num
        } else {
          self.cartList[i].goodsList[j].noSkuGoodsNum = num
        }
        // let singlePrice = self.handleCurrPrice(num, self.cartList[i].goodsList[j].priceRangeList)
        // // console.log('------------------------singlePrice')
        // // console.log(singlePrice)
        // // console.log('------------------------singlePrice')
        // self.cartList[i].goodsList[j].currentGoodsPrice = singlePrice
        self.$set(self.cartList, i, self.cartList[i])
        self.handleSelectedDataList()
      },
      /**
       * 当前sku是否选中
       */
      hasCurrSelectedId (id, list) {
        // console.log('-----------------------hasCurrSelectedId-----------------------------------------')
        // console.log(list)
        // console.log(id)
        // console.log('-----------------------hasCurrSelectedId-----------------------------------------')
        for (let i = 0; i < list.length; i++) {
          if (list[i] === id) {
            return true
          }
        }
        // 1、 处理skuId
        // 2、 处理goodId
        // 3、 处理shopId
        // 4、 处理全选
        return false
      },
      /***
       * 当存在sku时，处理sku的最小值
       * @param num
       * @param min
       * @param list
       * @return {*}
       */
      handleSkuMin (num, min, list) {
        let count = 0
        for (let i = 0; i < list.length; i++) {
          if (list[i].amount > 0) {
            count = count + list[i].amount
          }
        }
        if ((min - count) >= 0) {
          return num
        } else {
          return 0
        }
      },
      /***
       * 处理存在sku商品的‘减号’的样式
       * @param num
       * @param min
       * @param list
       * @return {*}
       */
      handleHasSkuClsMinus (num, min, priceType, skuIdList, list) {
        // console.log('--handleHasSkuClsMinus--')
        // console.log(min)
        // console.log(priceType)
        // min = this.handleSkuMin(num, min, list)
        if (!this.handlePriceType(priceType)) {
          min = this.handleSkuNumMin(num, min, skuIdList, list)
        }
        if (num === min) {
          return 'minus disabled'
        } else {
          return 'minus'
        }
      },
      /***
       * 处理没有规格的商品
       * @param status  'number'  input 键入  'minus' 减少 'plus' 增加
       * @param min
       * @param max
       * @param i cartList索引值
       * @param j goodsList 索引值
       */
      handleNoSku (status, min, max, i, j) {
        const self = this
        let num = self.cartList[i].goodsList[j].noSkuGoodsNum
        if (status === 'minus') {
          num--
        }
        if (status === 'plus') {
          num++
        }
        if (num <= min) {
          num = min
        }
        if (num >= max) {
          num = max
        }
        // let singlePrice = self.handleCurrPrice(num, self.cartList[i].goodsList[j].priceRangeList)
        // // console.log('------------------------singlePrice')
        // // console.log(singlePrice)
        // // console.log('------------------------singlePrice')
        // self.cartList[i].goodsList[j].currentGoodsPrice = singlePrice
        self.cartList[i].goodsList[j].noSkuGoodsNum = num
        self.$set(self.cartList, i, self.cartList[i])
        self.handleSelectedDataList()
      },
      /***
       *
       * @param status
       * @param min
       * @param max
       * @param i
       * @param j
       * @param k
       */
      handleSku (status, skuIdList, priceType, batch, max, i, j, k) {
        const self = this
        let num, min
        if (k || k === 0) {
          num = self.cartList[i].goodsList[j].skuList[k].amount
          // 多个规格起批量处理
          // min = self.handleSkuMin(num, min, self.cartList[i].goodsList[j].skuList)
          // console.log('--------handleSku-------')
          // console.log(batch)
          if (self.handlePriceType(priceType)) {
            min = batch
          } else {
            min = self.handleSkuNumMin(num, batch, skuIdList, self.cartList[i].goodsList[j].skuList)
          }
        } else {
          num = self.cartList[i].goodsList[j].noSkuGoodsNum
        }
        // console.log(min)
        if (status === 'minus') {
          // console.log('-----减------')
          num--
          if (num <= min) {
            // console.log('1111111')
            num = min
            // this.handleClsMinus(num, min)
          }
        }
        if (status === 'plus') {
          num++
          // console.log('-----加------')
          if (num >= max) {
            num = max
          }
        }
        if (k || k === 0) {
          self.cartList[i].goodsList[j].skuList[k].amount = num
        } else {
          self.cartList[i].goodsList[j].noSkuGoodsNum = num
        }
        self.$set(self.cartList, i, self.cartList[i])
        self.handleSelectedDataList()
      },
      /***
       * 处理‘减号’的样式
       * @param num
       * @param min
       * @return {*}
       */
      handleClsMinus (num, min) {
        // console.log('num:min')
        // console.log(num)
        // console.log(min)
        // console.log('num:min')
        if (num === min) {
          return 'minus disabled'
        } else {
          return 'minus'
        }
      },
      /***
       * 处理‘加号’样式
       * @param num
       * @param max
       * @return {*}
       */
      handleClsPlus (num, max) {
        if (num < max) {
          return 'plus'
        } else {
          return 'plus disabled'
        }
      },
      hasSkuList (list) {
        // console.log(list)
        if (list && list.length > 0) {
          return true
        } else {
          return false
        }
      },
      handleSrc (url) {
        return `${imgServer}${url}`
      },
      handleCartList (list) {
        let arr = []
        for (let i = 0; i < list.length; i++) {
          if (list[i].goodsList) {
            let json = {}
            json.contacts = list[i].contacts
            json.goodsList = list[i].goodsList
            json.memberId = list[i].memberId
            json.phone = list[i].phone
            json.shopId = list[i].shopId
            json.shopName = list[i].shopName
            json.shopStatus = list[i].shopStatus
            arr.push(json)
          }
        }
        return arr
      },
      handleUnValidGoodsList (list) {
        let arr = []
        for (let i = 0; i < list.length; i++) {
          if (list[i].unValidGoodsList) {
            let json = {}
            json.contacts = list[i].contacts
            json.unValidGoodsList = list[i].unValidGoodsList
            json.memberId = list[i].memberId
            json.phone = list[i].phone
            json.shopId = list[i].shopId
            json.shopName = list[i].shopName
            json.shopStatus = list[i].shopStatus
            arr.push(json)
          }
        }
        return arr
      },
      handleGoErr (errMsg) {
        const self = this
        self.$vux.toast.show({
          text: errMsg,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
      },
      ajaxGetCartList (url, query) {
        const self = this
        // 每次加载默认显示正在加载中
        self.isShowLoading = true
        // 成功回调
        let successCallback = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            self.cartList = self.handleCartList(res.data.data.shopList)
            self.validList = self.handleUnValidGoodsList(res.data.data.shopList)
            self.isShowLoading = false
            self.cartId = res.data.data.cartId
            let goodsSpecs = self.getGoodsSpecs()
            self.hdTitle = `进货单(${goodsSpecs})`
          } else {
            self.handleGoErr(res.data.msg ? res.data.msg : res.data.message)
            if (String(res.data.code) === '4131' || String(res.data.code) === '400') {
              setTimeout(function () {
                self.$router.push({name: 'login'})
              }, 2000)
            }
            self.isShowLoading = false
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleGoErr('获取进货单列表失败')
          self.isShowLoading = false
        }
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      /***
       * 删除数组中指定元素
       */
      removeArg (val, list) {
        let arr = []
        for (let i = 0; i < list.length; i++) {
          if (list[i] !== val) {
            arr.push(list[i])
          }
        }
        return arr
      },
      handleTotalNum () {
        const self = this
        let totalNum = 0
        for (let i = 0; i < self.dataList.length; i++) {
          if (parseInt(self.dataList[i].number) > 0) {
            totalNum = totalNum + parseInt(self.dataList[i].number)
          }
        }
        return totalNum
      },
      handleTotalPrice () {
        const self = this
        let totalPrice = 0
        for (let i = 0; i < self.dataList.length; i++) {
          let num = parseInt(self.dataList[i].number)
          if (num > 0) {
            totalPrice = totalPrice + Math.floor(parseFloat(self.dataList[i].realPrice) * 100) * num
          }
        }
        // console.log('-----------totalPrice------------')
        // console.log(totalPrice)
        // console.log('-----------totalPrice------------')
        totalPrice = totalPrice / 100
        return totalPrice
      },
      handleEditOperate () {
        const self = this
        // console.log('----------self.isSettingBtn----')
        // console.log(!self.isSettingBtn)
        // console.log('----------self.isSettingBtn----')
        self.isSettingBtn = !self.isSettingBtn

        if (self.isSettingBtn) {
          self.btnTxt = '结算'
          self.hdOperate = '编辑'
        } else {
          self.btnTxt = '删除'
          self.hdOperate = '完成'
        }
      },
      isExitIdByList (id, list) {
        if (list.findIndex((n) => n === id) >= 0) {
          return true
        }
        return false
      },
      handleSpeciesNum () {
        const self = this
        let num = 0
        let cartList = self.cartList
        for (let i = 0; i < cartList.length; i++) {
          let goodsList = cartList[i].goodsList
          for (let j = 0; j < goodsList.length; j++) {
            if (self.goodIdList.findIndex((n) => n === goodsList[j].id) >= 0 && !goodsList[j].skuList) {
              num++
            }
          }
        }
        num = num + self.skuIdList.length
        return num
      },
      /**
       * 获取当前选中商品的数量如果有sku的情况
       */
      getCurrSelectedSkuNum (list) {
        let selectedNum = 0
        for (let i = 0; i < list.length; i++) {
          if (this.skuIdList.findIndex((n) => n === list[i].id) >= 0) {
            selectedNum = selectedNum + list[i].amount
          }
        }
        return selectedNum
      },
      /**
       * 获取当前商品选中的数量，如果没有sku的情况
       */
      getCurrSelectedNum (list) {
        let selectedNum = 0
        // console.log('---------getCurrSelectedSkuNum---------')
        // console.log(list)
        for (let i = 0; i < list.length; i++) {
          if (this.goodIdList.findIndex((n) => n === list[i].id) >=
            0) {
            selectedNum = selectedNum + list[i].noSkuGoodsNum
          }
        }
        return selectedNum
      },
      handleCurrPrice (num, priceRangeList) {
        // console.log(priceRangeList)
        let price = priceRangeList[0].price
        for (let i = 0; i < priceRangeList.length; i++) {
          // console.log('--------priceRangeList[i].minNum-------')
          // console.log(priceRangeList[i].minNum)
          // console.log(num)
          // console.log(parseInt(num * 100) >= parseInt(priceRangeList[i].minNum * 100))
          // console.log('---------priceRangeList[i].minNum------')
          if (parseInt(num * 100) >= parseInt(priceRangeList[i].minNum * 100)) {
            price = priceRangeList[i].price
          }
        }
        // console.log(price)
        return price
      },
      handleSelectedDataList () {
        const self = this
        let arr = []
        let shopList = self.cartList
        for (let i = 0; i < shopList.length; i++) {
          let goodList = shopList[i].goodsList
          for (let j = 0; j < goodList.length; j++) {
            let skuList = goodList[j].skuList
            if (skuList && skuList.length > 0) {
              for (let k = 0; k < skuList.length; k++) {
                if (self.skuIdList.findIndex((n) => n === skuList[k].id) >= 0) {
                  let currGoodsPrice = 0;
                  let json = {}
                  if (goodList[j].priceType === '2') {
                    // 调整选中商品价格 有sku
                    // 1、获取选中商品的数量
                    let selectedNum = self.getCurrSelectedSkuNum(skuList)
                    // 2、修改选中商品的价格
                    let currGoodsPrice = self.handleCurrPrice(selectedNum, goodList[j].priceRangeList)
                    self.cartList[i].goodsList[j].currentGoodsPrice = currGoodsPrice
                    // 处理选中商品数据
                    json.realPrice = String(goodList[j].currentGoodsPrice)
                  } else {
                    json.realPrice = String(skuList[k].promotionPrice ? skuList[k].promotionPrice : skuList[k].skuPrice)
                  }
                  // 处理选中商品数据
                  json.spuId = String(goodList[j].id)
                  json.skuId = String(skuList[k].id)
                  json.number = String(skuList[k].amount)
                  arr.push(json)
                }
              }
            } else {
              if (self.goodIdList.findIndex((n) => n === goodList[j].id) >= 0) {
                let json = {}
                json.spuId = String(goodList[j].id)
                json.skuId = ''
                json.number = String(goodList[j].noSkuGoodsNum)
                json.realPrice = String(goodList[j].currentGoodsPrice)
                arr.push(json)
              }
            }
          }
        }
        self.dataList = arr
        if (arr.length > 0) {
          // 设置按钮是否可点击
          self.isBtnDisabled = false
        } else {
          self.isBtnDisabled = true
        }
        self.totalNum = self.handleTotalNum()
        self.totalPrice = self.handleTotalPrice()
        self.speciesNum = self.handleSpeciesNum()
        if (self.isSettingBtn) {
          self.btnTxt = '结算'
          self.hdOperate = '编辑'
        } else {
          self.btnTxt = '删除'
          self.hdOperate = '完成'
        }
      },
      /**
       * 清空失效商品
       */
      clearValidList () {
        const self = this
        let arr = []
        let shopList = self.validList
        for (let i = 0; i < shopList.length; i++) {
          let goodList = shopList[i].unValidGoodsList
          for (let j = 0; j < goodList.length; j++) {
            let skuList = goodList[j].skuList
            if (skuList && skuList.length > 0) {
              for (let k = 0; k < skuList.length; k++) {
                let json = {}
                json.spuId = String(goodList[j].id)
                json.skuId = String(skuList[k].id)
                arr.push(json)
              }
            } else {
              let json = {}
              json.spuId = String(goodList[j].id)
              json.skuId = ''
              arr.push(json)
            }
          }
        }
        return arr
      },
      handleClearValidList () {
        this.ajaxDel(this.clearValidList())
      },
      /***
       * ajax结算
       */
      ajaxGoPay () {
        const self = this
        let params = {
          'token': self.login.token,
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'dataList': self.dataList,
            'cartId': self.cartId
          }
        }
        self.ajaxGetConfirmOrderData(params)
        // self.$router.push({ name: 'confirmOrder', params: params })
      },
      ajaxGetConfirmOrderData (params) {
        const self = this
        const url = `${apiServer}/p/cart/check`
        self.isBtnDisabled = true
        self.btnTxt = '结算中...'
        // 成功回调
        let successCallback = (res) => {
          if (res.status === 200 && res.data && res.data.code === 0) {
            self.isBtnDisabled = false
            self.SET_REQ_CONFIRM_ORDER_PARAMS(params)
            self.$router.push({name: 'confirmOrder'})
            self.btnTxt = '结算'
          } else {
            self.isBtnDisabled = false
            self.handleErr(res.data.message ? res.data.message : res.data.msg)
            self.btnTxt = '结算'
            setTimeout(() => {
              // location.reload()
            }, 2500)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.isBtnDisabled = false
          self.handleErr('数据加载失败，请稍后再试')
          self.btnTxt = '结算'
        }
        // 加定时器为了测试正在加载样式
        self.$http.post(url, params).then(successCallback, errCallback)
      },
      handleErr (errMsg) {
        const self = this
        self.$vux.toast.show({
          text: errMsg,
          isShowMask: true,
          width: '80%',
          type: 'text'
        })
      },
      /***
       * ajax删除
       */
      ajaxDel (list) {
        const self = this
        let url = `${apiServer}/p/cart/delete`
        let query = {
          'token': self.login.token,
          'versionCode': '1',
          'deviceId': '355848069264888',
          'deviceType': 'wx',
          'data': {
            'deletList': list
          }
        }
        // 成功回调
        let successCallback = (res) => {
          if (res.status === 200 && res.data.code === 0) {
            self.handleErr('删除成功')
            // 获取进货单列表
            self.totalNum = 0 // 总数量
            self.totalPrice = '0.00' // 总价格
            self.speciesNum = 0 // 种类
            setTimeout(() => {
              location.reload()
            }, 2500)
          } else {
            self.handleErr(res.data.message ? res.data.message : res.data.msg)
          }
        }
        // 失败回调
        let errCallback = () => {
          self.handleErr('删除失败')
        }
        self.$http.post(url, query).then(successCallback, errCallback)
      },
      /**
       * 处理结算删除
       */
      handleBtn () {
        const self = this
        if (!self.isBtnDisabled) {
          if (self.isSettingBtn) {
            self.ajaxGoPay()
          } else {
            self.ajaxDel(self.dataList)
          }
        }
      }
    },
    components: {
      cmHeader,
      cmHeader,
      cmFooter,
      noCart,
      LoadMore
    },
    watch: {
      cartList () {
        const self = this
        let GoodsSpecs = self.getGoodsSpecs()
        let str = `进货单(${GoodsSpecs})`
        self.hdTitle = str
        document.title = str
      },
      skuIdList (currVal, oldVal) {
        const self = this
        // console.log('---------------------------watch--------------------------')
        // console.log(currVal)
        // console.log(oldVal)
        // console.log('---------------------------end watch--------------------------')
        let speciesNum = 0
        let shopList = self.cartList
        for (let i = 0; i < shopList.length; i++) {
          let goodsList = shopList[i].goodsList
          for (let j = 0; j < goodsList.length; j++) {
            let skuList = goodsList[j].skuList
            if (skuList && skuList.length) {
              let count = 0
              for (let k = 0; k < skuList.length; k++) {
                if (currVal.findIndex((n) => n === skuList[k].id) >= 0) {
                  count++
                }
              }
              let isSelectedAllSku = count === skuList.length
              if (isSelectedAllSku) {
                if (self.goodIdList.findIndex((n) => n === goodsList[j].id) < 0) {
                  self.goodIdList.push(goodsList[j].id)
                }
              } else {
                if (self.goodIdList.findIndex((n) => n === goodsList[j].id) >= 0) {
                  self.goodIdList = self.removeArg(goodsList[j].id, self.goodIdList)
                }
              }
            }
          }
        }
        self.speciesNum = speciesNum
        self.handleSelectedDataList()
      },
      goodIdList (currVal, oldVal) {
        // console.log('---------------------goodIdList--------watch-----------')
        // console.log(currVal)
        // console.log('-------------------------end gooId list-----watch-----------------')
        const self = this
        let shopList = self.cartList
        for (let i = 0; i < shopList.length; i++) {
          // 1、 若所有商品选中，则对应的店铺选中
          let goodsList = shopList[i].goodsList
          let count = 0
          for (let j = 0; j < goodsList.length; j++) {
            let skuList = goodsList[j].skuList
            if (currVal.findIndex((n) => n === goodsList[j].id) >= 0) {
              count++
              // 2、 若商品选择， 则商品下的所有sku也选中
              if (skuList && skuList.length > 0) {
                for (let k = 0; k < skuList.length; k++) {
                  if (self.skuIdList.findIndex((n) => n === skuList[k].id) < 0) {
                    self.skuIdList.push(skuList[k].id)
                  }
                }
              }
            } else {
              if (skuList && skuList.length > 0) {
                let skuCount = 0
                for (let k = 0; k < skuList.length; k++) {
                  if (self.skuIdList.findIndex((n) => n === skuList[k].id) >= 0) {
                    skuCount++
                  }
                }
                if (skuCount === skuList.length) {
                  for (let k = 0; k < skuList.length; k++) {
                    if (self.skuIdList.findIndex((n) => n === skuList[k].id) >= 0) {
                      self.skuIdList = self.removeArg(skuList[k].id, self.skuIdList)
                    }
                  }
                }
              }
            }
          }
          let isSelectedAllGood = count === goodsList.length
          if (isSelectedAllGood) {
            // console.log('--------self.shopIdList.findIndex((n) => n === shopList[i].id)--------')
            // console.log(self.shopIdList.findIndex((n) => n === shopList[i].shopId))
            // console.log('--------self.shopIdList.findIndex((n) => n === shopList[i].id)--------')
            if (self.shopIdList.findIndex((n) => n === shopList[i].shopId) < 0) {
              self.shopIdList.push(shopList[i].shopId)
            }
          } else {
            self.shopIdList = self.removeArg(shopList[i].shopId, self.shopIdList)
          }
        }
        self.handleSelectedDataList()
      },
      shopIdList (currVal, oldVal) {
        const self = this
        let shopList = self.cartList
        let shopCount = 0
        for (let i = 0; i < shopList.length; i++) {
          let goodsList = shopList[i].goodsList
          if (currVal.findIndex((n) => n === shopList[i].shopId) >= 0) {
            shopCount++
            for (let j = 0; j < goodsList.length; j++) {
              if (self.goodIdList.findIndex((n) => n === goodsList[j].id) < 0) {
                self.goodIdList.push(goodsList[j].id)
              }
            }
          } else {
            let goodCount = 0
            for (let j = 0; j < goodsList.length; j++) {
              if (self.goodIdList.findIndex((n) => n === goodsList[j].id) >= 0) {
                goodCount++
              }
            }
            if (goodCount === goodsList.length) {
              for (let j = 0; j < goodsList.length; j++) {
                if (self.goodIdList.findIndex((n) => n === goodsList[j].id) >= 0) {
                  self.goodIdList = self.removeArg(goodsList[j].id, self.goodIdList)
                }
              }
            }
          }
          let isSelectedAllShop = shopCount === shopList.length
          if (isSelectedAllShop) {
            self.allSelected = true
          } else {
            self.allSelected = false
          }
        }
        self.handleSelectedDataList()
      },
      allSelected (currVal, oldVal) {
        const self = this
        let shopList = self.cartList
        if (currVal) {
          for (let i = 0; i < shopList.length; i++) {
            if (self.shopIdList.findIndex((n) => n === shopList[i].shopId) < 0) {
              self.shopIdList.push(shopList[i].shopId)
            }
          }
        } else {
          let shopCount = 0
          for (let i = 0; i < shopList.length; i++) {
            if (self.shopIdList.findIndex((n) => n === shopList[i].shopId) >= 0) {
              shopCount++
            }
          }
          if (shopCount === shopList.length) {
            for (let i = 0; i < shopList.length; i++) {
              if (self.shopIdList.findIndex((n) => n === shopList[i].shopId) >= 0) {
                self.shopIdList = self.removeArg(shopList[i].shopId, self.shopIdList)
              }
            }
          }
        }
      }
    }
  }
</script>
