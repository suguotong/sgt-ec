import Vue from 'vue'
import Vuex from 'vuex'
import goodsDetail from './goodsDetail'
import login from './login'
import regionList from './regionList'
import reqConfirmOrderParams from './reqConfirmOrderParams'
import reqSearchResultParams from './reqSearchResultParams'
import openid from './openid'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    goodsDetail,
    login,
    regionList,
    reqConfirmOrderParams,
    reqSearchResultParams,
    openid
  }
})
