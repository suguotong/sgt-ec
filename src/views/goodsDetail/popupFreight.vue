<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .gd-freight {
    max-height: 166px;
    overflow-y: auto;
    padding: 30px;
    box-sizing: border-box;
  }
</style>
<template>
  <div class="gd-freight">
    {{ feeRemark }}
  </div>
</template>
<script type="text/babel">
  export default {
    props: {
      feeRemark: {
        type: String,
        default () {
          return ''
        }
      }
    },
    methods: {
    }
  }
</script>
