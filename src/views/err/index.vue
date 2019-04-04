<template>
  <div class="error">
    <img src="../../assets/images/error_404@3x.png" alt="404页" class="errIcon">
    <div class="text">
      <p>抱歉，您要访问的页面不存在，有可能我们的网页正在维护</p>
      <p>或者您输入的网址不正确，您也可以尝试以下操作：</p>
    </div>

    <div class="btn">
      <router-link :to="{ name: 'index' }" class="home">返回首页</router-link>
      <a href="javascript:;" @click="$router.go(-1)" class="pre">上一页</a>
    </div>

  </div>

</template>

<script type="text/babel">
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  @import "../../assets/themes/variables";
  .error {
    /*@extend %fatherFlex;
    align-items: center;*/
    text-align: center;
    .errIcon {
      margin-top: 150px;
      width: 280px;
      height: 153px;
    }
    .text {
      display: inline-block;
      margin-top: 20px;
      margin-bottom: 25px;
      p {
        text-align: left;
        color: #999;
        font-size: 11px;
      }
    }
    .btn {
      a {
        display: inline-block;
        width: 78px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        border: 1px solid #dcdcdc;
        border-radius: 6px;
        background-color: #fff;
        color: #666;
      }
      .home {
        margin-right: 15px;
        background-color: #e60014;
        color: #fff;
      }
    }
  }
</style>