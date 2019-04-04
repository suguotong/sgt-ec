<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";
  .weui_tabbar {
    height: 100%;
  }
</style>
<template>
  <footer class="g-footer">
    <slot name="ft"></slot>
    <div class="weui_tab">
      <div class="weui_tabbar">
        <router-link :to="{ name: 'index' }"  class="weui_tabbar_item ">
          <div class="weui_tabbar_icon">
            <i class="g-icon2 icon-index"></i>
          </div>
          <p class="weui_tabbar_label">首页</p>
        </router-link>
        <router-link :to="{ name: 'category' }"  class="weui_tabbar_item ">
          <div class="weui_tabbar_icon">
            <i class="g-icon2 icon-category"></i>
          </div>
          <p class="weui_tabbar_label">分类</p>
        </router-link>
        <router-link :to="{ name: 'cart' }"  class="weui_tabbar_item ">
          <div class="weui_tabbar_icon">
            <i class="g-icon2 icon-cart"></i>
          </div>
          <p class="weui_tabbar_label">进货单</p>
        </router-link>
        <router-link :to="{ name: 'home' }"  class="weui_tabbar_item">
          <div class="weui_tabbar_icon">
            <i class="g-icon2 icon-user2"></i>
          </div>
          <p class="weui_tabbar_label">我的</p>
        </router-link>
        <!--<a href="javascript:;" class="weui_tabbar_item g-tabbar-item-active">
          <div class="weui_tabbar_icon">
            <i class="g-icon2 icon-index-active"></i>
          </div>
          <p class="weui_tabbar_label">首页</p>
        </a>
        <a href="javascript:;" class="weui_tabbar_item">
          <div class="weui_tabbar_icon">
            <i class="g-icon2 icon-category"></i>
          </div>
          <p class="weui_tabbar_label">分类</p>
        </a>
        <a href="javascript:;" class="weui_tabbar_item">
          <div class="weui_tabbar_icon">
            <i class="g-icon2 icon-cart"></i>
          </div>
          <p class="weui_tabbar_label">进货单</p>
        </a>
        <a href="javascript:;" class="weui_tabbar_item">
          <div class="weui_tabbar_icon">
            <i class="g-icon2 icon-user2"></i>
          </div>
          <p class="weui_tabbar_label">我的</p>
        </a>-->
      </div>
    </div>
  </footer>
</template>
<script type="text/babel"></script>
