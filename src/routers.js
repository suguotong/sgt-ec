import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './store/login'
Vue.use(VueRouter)
// 路由配置
// 首页
const Index = resolve => require(['./views/index/index.vue'], resolve)
// 分类
const Category = resolve => require(['./views/category/index.vue'], resolve)
// 进货单
const Cart = resolve => require(['./views/cart/index.vue'], resolve)
// 我的
const Home = resolve => require(['./views/home/index.vue'], resolve)
// 搜索页
const Search = resolve => require(['./views/search/index.vue'], resolve)
// 搜索结果页
const SearchResult = resolve => require(['./views/searchResult/index.vue'], resolve)
// 商品列表页
const GoodsList = resolve => require(['./views/goodsList/index.vue'], resolve)
// 商品详情页
const GoodsDetail = resolve => require(['./views/goodsDetail/index.vue'], resolve)
// 店铺首页
const StoreHomePage = resolve => require(['./views/storeHomePage/index.vue'], resolve)
// 店铺供应商品
const StoreList = resolve => require(['./views/storeList/index.vue'], resolve)
// 店铺商家简介
const StoreGoodsCategory = resolve => require(['./views/storeGoodsCategory/index.vue'], resolve)
// 店铺商品分类
const StoreBusinessProfile = resolve => require(['./views/storeBusinessProfile/index.vue'], resolve)
// 404
const Err = resolve => require(['./views/err/index.vue'], resolve)
// 登录
const Login = resolve => require(['./views/login/index.vue'], resolve)
// 忘记密码
const ForgetPwd = resolve => require(['./views/forgetPwd/index.vue'], resolve)
// 注册
const Register = resolve => require(['./views/register/index.vue'], resolve)
// 确认订单页
const ConfirmOrder = resolve => require(['./views/confirmOrder/index.vue'], resolve)
// 收货地址
const AddressList = resolve => require(['./views/addressList/index.vue'], resolve)
// 添加编辑收货地址
const AddressEdit = resolve => require(['./views/addressEdit/index.vue'], resolve)
// 选择支付方式
const ChoosePayWay = resolve => require(['./views/choosePayWay/index.vue'], resolve)
// 选择线下支付
const DownPay = resolve => require(['./views/downPay/account.vue'], resolve)
// 选择线下支付
const PayVoucher = resolve => require(['./views/downPay/voucher.vue'], resolve)
// 查看支付凭证
const CheckDPay = resolve => require(['./views/downPay/checkDownPay.vue'], resolve)
// 支付成功失败页
const PayStatus = resolve => require(['./views/payStatus/index.vue'], resolve)
// 订单列表
const OrderList = resolve => require(['./views/orderList/index.vue'], resolve)
// 订单详情
const OrderDetail = resolve => require(['./views/orderDetail/index.vue'], resolve)
// 物流信息 Logistics information
const LogisticsInfo = resolve => require(['./views/logisticsInfo/index.vue'], resolve)
// 账户管理
const AccountManage = resolve => require(['./views/accountManage/index.vue'], resolve)
// 修改密码
const ModifyPwd = resolve => require(['./views/modifyPwd/index.vue'], resolve)
// 关于我们
const AboutUs = resolve => require(['./views/aboutUs/index.vue'], resolve)
// 促销活动
const Promotions = resolve => require(['./views/promotions/index.vue'], resolve)
// 意见反馈
const Feedback = resolve => require(['./views/feedback/index.vue'], resolve)
// 客服热线
const HotLine = resolve => require(['./views/hotLine/index.vue'], resolve)
// 注册协议
const XieYi = resolve => require(['./views/xieYi/index.vue'], resolve)
// 品牌商品列表
const BrandGoodsList = resolve => require(['./views/brandGoodsList/index.vue'], resolve)
// 商品收藏
const Collection = resolve => require(['./views/collection/index.vue'], resolve)
// 品牌列表
const BrandList = resolve => require(['./views/brandList/index.vue'], resolve)
// 品牌详情
const BrandDetail = resolve => require(['./views/brandDetail/index.vue'], resolve)
const router = new VueRouter({
  linkActiveClass: 'g-tabbar-item-active',
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', name: 'index', component: Index },
    { path: '/category', name: 'category', component: Category },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: { requiresAuth: true }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    { path: '/search', name: 'search', component: Search },
    { path: '/searchResult', name: 'searchResult', component: SearchResult },
    { path: '/goodsList', name: 'goodsList', component: GoodsList },
    { path: '/goodsDetail', name: 'goodsDetail', component: GoodsDetail },
    { path: '/storeHomePage', name: 'storeHomePage', component: StoreHomePage },
    { path: '/storeList', name: 'storeList', component: StoreList },
    { path: '/storeBusinessProfile', name: 'storeBusinessProfile', component: StoreBusinessProfile },
    { path: '/storeGoodsCategory', name: 'storeGoodsCategory', component: StoreGoodsCategory },
    { path: '/404', name: '404', component: Err },
    { path: '/login', name: 'login', component: Login },
    { path: '/forgetPwd', name: 'forgetPwd', component: ForgetPwd },
    { path: '/register', name: 'register', component: Register },
    {
      path: '/confirmOrder',
      name: 'confirmOrder',
      component: ConfirmOrder,
      meta: { requiresAuth: true }
    },
    {
      path: '/addressList',
      name: 'addressList',
      component: AddressList,
      meta: { requiresAuth: true }
    },
    {
      path: '/addressEdit',
      name: 'addressEdit',
      component: AddressEdit,
      meta: { requiresAuth: true }
    },
    {
      path: '/choosePayWay',
      name: 'choosePayWay',
      component: ChoosePayWay,
      meta: { requiresAuth: true }
    },
    {
      path: '/downPay',
      name: 'downPay',
      component: DownPay,
      meta: { requiresAuth: true }
    },
    {
      path: '/payVoucher',
      name: 'payVoucher',
      component: PayVoucher,
      meta: { requiresAuth: true }
    },
    {
      path: '/checkDPay',
      name: 'checkDPay',
      component: CheckDPay,
      meta: { requiresAuth: true }
    },
    {
      path: '/payStatus',
      name: 'payStatus',
      component: PayStatus,
      meta: { requiresAuth: true }
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: OrderList,
      meta: { requiresAuth: true }
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: OrderDetail,
      meta: { requiresAuth: true }
    },
    {
      path: '/logisticsInfo',
      name: 'logisticsInfo',
      component: LogisticsInfo,
      meta: { requiresAuth: true }
    },
    {
      path: '/accountManage',
      name: 'accountManage',
      component: AccountManage,
      meta: { requiresAuth: true }
    },
    {
      path: '/modifyPwd',
      name: 'modifyPwd',
      component: ModifyPwd,
      meta: { requiresAuth: true }
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUs
    },
    { path: '/promotions', name: 'promotions', component: Promotions },
    { path: '/feedback', name: 'feedback', component: Feedback },
    { path: '/hotLine', name: 'hotLine', component: HotLine },
    { path: '/xieYi', name: 'xieYi', component: XieYi },
    { path: '/brandGoodsList', name: 'brandGoodsList', component: BrandGoodsList },
    {
      path: '/collection',
      name: 'collection',
      component: Collection,
      meta: { requiresAuth: true }
    },
    { path: '/brandList', name: 'brandList', component: BrandList},
    { path: '/brandDetail', name: 'brandDetail', component: BrandDetail}
  ]
})
router.beforeEach((to, from, next) => {
  let toName = to.name
  let fromName = from.name
  // console.log('-----fromName-----')
  // console.log(fromName)
  // console.log('-----to-----')
  // console.log(to)
  let requiresAuth = to.meta.requiresAuth
  // console.log(requiresAuth)
  if (requiresAuth) {
    // console.log('login.state && login.state.token')
    // console.log(login.state && login.state.token)
    // console.log('login.state && login.state.token')
    if (login.state && login.state.token) {
      next()
    } else {
      // console.log('go login')
      next({
        name: 'login',
        query: {
          redirect: toName
        }
      })
    }
  } else {
    // console.log('-----end to-----')
    // console.log(toName)
    // console.log(fromName)
    next()
  }
})

router.afterEach(function (to) {
  // console.log(`---跳转至${to.path}--`)
})
module.exports = router
