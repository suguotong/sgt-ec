import Vue from 'vue'
export const SET_REQ_CONFIRM_ORDER_PARAMS = 'SET_REQ_CONFIRM_ORDER_PARAMS' // 设置确认订单请求参数
export const REMOVE_REQ_CONFIRM_ORDER_PARAMS = 'REMOVE_REQ_CONFIRM_ORDER_PARAMS' // 删除确认订单请求参数

export default {
  state: JSON.parse(window.localStorage.getItem('reqConfirmOrderParams')) || {},
  mutations: {
    [SET_REQ_CONFIRM_ORDER_PARAMS] (state, reqConfirmOrderParams) {
      window.localStorage.setItem('reqConfirmOrderParams', JSON.stringify(reqConfirmOrderParams))
      Object.assign(state, reqConfirmOrderParams)
    },
    [REMOVE_REQ_CONFIRM_ORDER_PARAMS] (state) {
      window.localStorage.removeItem('reqConfirmOrderParams')
      Object.keys(state).forEach(k => Vue.delete(state, k))
    }
  },
  actions: {
    [SET_REQ_CONFIRM_ORDER_PARAMS] ({commit}, reqConfirmOrderParams) {
      commit(SET_REQ_CONFIRM_ORDER_PARAMS, reqConfirmOrderParams)
    },
    [REMOVE_REQ_CONFIRM_ORDER_PARAMS] ({commit}) {
      commit(REMOVE_REQ_CONFIRM_ORDER_PARAMS)
    }
  }
}
