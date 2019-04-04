<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .logistics-info {
    height: 100%;
    padding: 0 15px;
    background-color: map_get($colors, third);
    li {
      display: flex;
      position: relative;
      padding-top: 25px;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      span {
        &.name {
          width: 94px;
          display: block;
        }
        &.info {
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          flex: 1;
          word-break:break-all;
        }
      }
      button {
        width: 45px;
        height: 20px;
        line-height: 20px;
        box-sizing: border-box;
        text-align: center;
        border-radius: 5px;
        color: map_get($colors, five);
        border:1px solid map_get($colors, five);
        background-color: map_get($colors, third);

      }
    }
  }
</style>
<template>
<div class="logistics-info">
  <ul>
    <li>
      <span class="name">物流公司</span>
      <span class="info">
        {{$route.params.orderLogistics.company}}
      </span>
    </li>
    <li>
      <span class="name">物流单号</span>
      <span class="info">{{$route.params.orderLogistics.logisticsCode}}</span>
      <button class="copyBtn" :data-clipboard-text="$route.params.orderLogistics.logisticsCode">复制</button>
    </li>
    <li>
      <span class="name">备注</span>
      <span class="info">{{$route.params.orderLogistics.logisticsRemark}}</span>
    </li>
  </ul>
</div>
</template>
<script type="text/babel">
  import Clipboard from 'clipboard'
  export default {
    data () {
      return {
        hdTitle: '物流信息'
      }
    },
    created () {
      // this.ajaxGetData()
      document.title = this.hdTitle
      let clipboard = new Clipboard('.copyBtn')
      clipboard.on('success', (e) => {
//        console.info('Action:', e.action);
//        console.info('Text:', e.text);
//        console.info('Trigger:', e.trigger);
        this.$vux.toast.show({
          type: 'text',
          text: '复制成功',
          position: 'bottom'
        })
      })
      clipboard.on('error', () => {
        this.$vux.toast.show({
          type: 'text',
          text: '复制失败',
          position: 'bottom'
        })
      })
    },
    methods: {
    },
    components: {
    }
  }
</script>
