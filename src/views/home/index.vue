<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/themes/variables";

  .content {
    background: white;
  }

  .content .orderStage {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }

  .content .orderStage .box {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    color: #333;
  }

  .topBox {
    width: 100%;
    height: 155px;
    background: #cb1e1e;
    margin: auto;
  }

  .topBox .account {
    display: block;
    padding-top: 10px;
  }

  .topBox .account .box1 {
    height: 20px;
    line-height: 20px;
    text-align: right;
    padding-right: 10px;
    color: #fff;
  }

  .topBox .account .span1 {
    display: block;
    width: 70px;
    height: 70px;
    margin: 10px auto 5px;
    border-radius: 35px;
    overflow: hidden;
  }

  .topBox .account .span1 img {
    width: 100%;
    height: 100%;
  }

  .topBox .account .span2 {
    display: block;
    width: 220px;
    height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 20px;
    text-align: center;
    color: #fff;
    margin: auto;
  }

  .content .p1 {
    padding: 13px 15px;
    border-bottom: 1px solid #d9d9d9;
  }

  .content .orderStage {
    height: 70px;
    width: 100%;
  }

  .content .orderStage .box .imgbox {
    margin: auto;
    width: 20px;
    height: 20px;
    padding-top: 12px;
  }

  .content .orderStage .box .imgbox img {
    width: 100%;
    height: 100%;
  }

  .content .orderStage .box p {
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    padding-top: 5px;
  }

  .content .leftList {
    color: #333;
  }

  .content .leftList .listPoint:after {
    content: " ";
    display: inline-block;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #c8c8cd;
    border-style: solid;
    position: relative;
    top: -2px;
    top: -1px;
    margin-left: .3em;
  }
  .home {
    .hd-pannel {
      &:before,&:after {
        height: 0;
        -webkit-transform: inherit;
        transform: inherit;
        border:0;
      }
    }
  }
</style>
<template>
  <div class="category home">
    <scroller>
    <div class="weui_panel weui_panel_access hd-pannel">
      <div class="topBox">
        <router-link class="account"
                     :to="{name:'accountManage'}">
          <div class="box1">账户管理></div>
          <span class="span1"><img src="../../assets/images/home_pic.png" alt=""></span>
          <span class="span2">{{ login.loginName }}</span>
        </router-link>
      </div>
      <div class="content">
        <div class="p1">我的订单</div>
        <div class="orderStage">
          <router-link :to="{ name: 'orderList', query: { orderStatus: 1 }}" class="box">
            <div class="imgbox"><i class="g-icon3 icon-waitPayment"></i></div>
            <p>待付款</p>
          </router-link>
          <!--<router-link :to="{ name: 'orderList', query: { orderStatus: 2 }}" class="box">
            <div class="imgbox"><i class="g-icon3 icon-waitShip"></i></div>
            <p>待发货</p>
          </router-link>-->
          <router-link :to="{ name: 'orderList', query: { orderStatus: 3 }}" class="box">
            <div class="imgbox"><img src="../../assets/images/icon_dsh.png" alt=""></div>
            <p>待收货</p>
          </router-link>
          <router-link :to="{ name: 'orderList', query: { orderStatus: 4 }}" class="box">
            <div class="imgbox"><img src="../../assets/images/icon-jycg.png" alt=""></div>
            <p>交易成功</p>
          </router-link>
          <router-link :to="{ name: 'orderList' }" class="box">
            <div class="imgbox"><i class="g-icon3 icon-allOrders"></i></div>
            <p>全部订单</p>
          </router-link>
        </div>
        <router-link class="weui_cell leftList"
                     :to="{name:'collection'}">
          <div class="weui_cell_bd weui_cell_primary">
            <p>我的收藏</p>
          </div>
          <div class="weui_cell_ft listPoint"></div>
        </router-link>
        <router-link class="weui_cell leftList"
                     :to="{name:'addressList'}">
          <div class="weui_cell_bd weui_cell_primary">
            <p>收货地址</p>
          </div>
          <div class="weui_cell_ft listPoint"></div>
        </router-link>
        <router-link class="weui_cell leftList"
        :to="{name:'feedback'}">
          <div class="weui_cell_bd weui_cell_primary">
            <p>意见反馈</p>
          </div>
          <div class="weui_cell_ft listPoint"></div>
        </router-link>
      </div>
    </div>
    </scroller>
    <cm-footer></cm-footer>
    </div>
</template>
<script type="text/babel">
  import cmFooter from '../../components/footer/index.vue'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        hdTitle: '我的'
      }
    },
    created () {
      document.title = this.hdTitle
    },
    computed: mapState({ login: state => state.login }),
    methods: {},
    components: {
      cmFooter
    }
  }
</script>
