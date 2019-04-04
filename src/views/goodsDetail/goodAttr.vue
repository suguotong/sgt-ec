<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .goods-attr {
    background-color: transparent;
    .gd-cells-access {
      background-color: transparent;
    }
    .gd-goods-attr {
      background-color: map_get($colors, third);
      &.gd-goods-freight {
        margin-top: 10px;
      }
    }
    .gd-popup {
      height: 100%;
      position: relative;
      background-color: map_get($colors, third);
      h2 {
        font-size: map_get($fontSize, third);
        text-align: center;
        padding: 14px 0 12px 0;
        border-top: 1px solid map_get($colors, six);
      }
      .gd-popup-close {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 45px;
        line-height: 45px;
        border:0;
        font-size: map_get($fontSize, third);
        text-align: center;
        color: map_get($colors, third);
        background-color: map_get($colors, primary);
      }
    }
    .hide-arrow {
      &:after {
        height: 0;
        width: 0;
        border-width: 0;
      }
    }
  }
</style>
<template>
  <div class="weui_panel goods-attr">
    <div class="weui_panel_bd">
      <div class="weui_media_box weui_media_small_appmsg">
        <div class="weui_cells weui_cells_access gd-cells-access">
          <a class="weui_cell gd-goods-attr" v-if="params.length > 0" href="javascript:;" @click="handleParamsPopup">
            <div class="weui_cell_bd weui_cell_primary">
              <p>产品参数</p>
            </div>
            <span class="weui_cell_ft"></span>
          </a>
          <a class="weui_cell gd-goods-attr" href="javascript:;" @click="handleSkuPopup">
            <div class="weui_cell_bd weui_cell_primary">
              <p>规格选择</p>
            </div>
            <span class="weui_cell_ft">
              <template v-if="sku.length > 0">
                {{ sku[0].specName }}
              </template>
            </span>
          </a>
          <a class="weui_cell gd-goods-attr gd-goods-freight" href="javascript:;" @click="handleFreightPopup">
            <div class="weui_cell_bd weui_cell_primary">
              <p>运费说明</p>
            </div>
            <span class="weui_cell_ft" :class="[feeRemark !='' ? '' : 'hide-arrow']">
              {{ feeType }}
            </span>
          </a>
        </div>
      </div>
    </div>
    <!--产品参数-->
    <popup v-model="goodsDetail.isOpenPopup" :height="popUpHeight" :hide-on-blur="hideOnBlur">
      <section class="gd-popup">
        <template v-if="goodsDetail.popUpStatus !== 2">
          <h2>{{ popUpTitle }}</h2>
          <popup-params v-show="goodsDetail.popUpStatus === 1" :params="params"></popup-params>
          <popup-freight v-show="goodsDetail.popUpStatus === 3"  :feeRemark="feeRemark"></popup-freight>
          <button class="gd-popup-close" @click="handleClosePopup(goodsDetail.popUpStatus)">确定</button>
        </template>
        <template v-if="goodsDetail.popUpStatus === 2">
          <popup-sku :sku="sku" :goodsImgList="goodsImgList" :priceRangeList="priceRangeList" :goodsTitle="goodsTitle" :availableSaleNum="availableSaleNum" :status="status" @sendNumToParent2="getFromChild3"></popup-sku>
        </template>
      </section>
    </popup>
    <!--end 产品参数-->
  </div>
</template>
<script type="text/babel">
  import { Popup } from 'vux'
  import { mapState, mapActions } from 'vuex'
  import { OPEN_POPUP_DIALOG } from '../../store/goodsDetail'
  import PopupParams from './popupParams.vue'
  import PopupSku from './popupSku.vue'
  import PopupFreight from './popupFreight.vue'
  export default {
    components: {
      Popup,
      PopupParams,
      PopupSku,
      PopupFreight
    },
    props: {
      availableSaleNum: {
        type: Number,
        default () {
          return 0
        }
      },
      status: {
        type: Number,
        default () {
          return 3
        }
      },
      goodsTitle: {
        type: String,
        default () {
          return ''
        }
      },
      params: {
        type: Array,
        default () {
          return []
        }
      },
      sku: {
        type: Array,
        default () {
          return []
        }
      },
      feeType: {
        type: String,
        default () {
          return ''
        }
      },
      feeRemark: {
        type: String,
        default () {
          return ''
        }
      },
      goodsImgList: {
        type: Array,
        default () {
          return []
        }
      },
      priceRangeList: {
        type: Array,
        default () {
          return []
        }
      },
      faceToPrice: {
        type: Number,
        default () {
          return 0
        }
      }
    },
    created () {
    },
    data () {
      return {
        // isOpenPopup: false, // 是否打开弹窗
        // popUpStatus: 1, // 是否显示 1 显示产品参数 2 显示 规格 3 显示运费
        popUpTitle: '', // 标题
        hideOnBlur: false,
        popUpHeight: '340px', // 弹窗高度
        cartNum: 0
      }
    },
    computed: mapState({ goodsDetail: state => state.goodsDetail }),
    methods: {
      ...mapActions([OPEN_POPUP_DIALOG]),
      /**
       * 配置popup弹窗基础属性
       * @param String title 标题
       * @param Number popUpStatus 显示主体内容  1 显示产品参数 2 显示 规格 3 显示运费
       * @param Boolean isOpenPopup  // 是否打开弹窗 true 打开 false 关闭
       * @return
       */
      popupConfig (isOpenPopup, popUpStatus, height, title) {
        this.OPEN_POPUP_DIALOG({isOpenPopup: isOpenPopup, popUpStatus: popUpStatus})
        if (title) {
          this.popUpTitle = title
        }
        if (height) {
          this.popUpHeight = height
        }
      },
      /**
       * 开发sku弹窗
       */
      handleSkuPopup () {
        if(this.faceToPrice===0){
          this.popupConfig(true, 2, '340px')
        }
      },
      /**
       * 打开显示运费说明
       * @return
       */
      handleFreightPopup () {
        if (this.feeRemark) {
          this.popupConfig(true, 3, '270px', '运费说明')
        }
      },
      /**
       * 打开显示产品参数
       * @return
       */
      handleParamsPopup () {
        this.popupConfig(true, 1, '270px', '产品参数')
      },
      /**
       * popup关闭
       * @return
       */
      handleClosePopup (status) {
        this.popupConfig(false, status)
      },
      /**
       * 通过popupSku子组件传过来的数值
       * */
      getFromChild3 (num) {
        this.cartNum=num
        this.$emit('sendNumToParent1',this.cartNum)
      }
    },
    watch: {
      isOpenPopup: function (val, old) {
      }
    }
  }
</script>
