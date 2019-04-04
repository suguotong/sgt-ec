<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .gd-params-list {
    max-height: 166px;
    padding-bottom: 44px;
    overflow-y:auto;
    dl {
      display: flex;
      font-size: map_get($fontSize, primary);
      border-bottom: 1px solid map_get($colors, six);
      padding: 10px 0;
      dt {
        width: 86px;
        padding:0 20px 0 15px;
        color: map_get($colors, eight);
      }
      dd {
        @extend %childFlex;
        color: map_get($colors, four);
      }
    }
  }
</style>
<template>
  <div class="gd-params-list">
    <dl v-for="item in params">
      <dt>{{ item.attrName }}</dt>
      <dd>{{ item.attrValues | spaceSeparated(' ') }}</dd>
    </dl>
  </div>
</template>
<script type="text/babel">
  export default {
    props: {
      params: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
    }
  }
</script>
