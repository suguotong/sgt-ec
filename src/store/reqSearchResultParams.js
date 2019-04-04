import Vue from 'vue'
export const SET_REQ_SEARCH_PARAMS_PARAMS = 'SET_REQ_SEARCH_PARAMS_PARAMS' // 设置搜索请求参数
export const REMOVE_REQ_SEARCH_PARAMS_PARAMS = 'REMOVE_REQ_SEARCH_PARAMS_PARAMS' // 删除搜索请求参数

export default {
  state: JSON.parse(window.localStorage.getItem('reqSearchResultParams')) || {},
  mutations: {
    [SET_REQ_SEARCH_PARAMS_PARAMS] (state, reqSearchResultParams) {
      window.localStorage.setItem('reqSearchResultParams', JSON.stringify(reqSearchResultParams))
      Object.assign(state, reqSearchResultParams)
    },
    [REMOVE_REQ_SEARCH_PARAMS_PARAMS] (state) {
      window.localStorage.removeItem('reqSearchResultParams')
      Object.keys(state).forEach(k => Vue.delete(state, k))
    }
  },
  actions: {
    [SET_REQ_SEARCH_PARAMS_PARAMS] ({commit}, reqSearchResultParams) {
      commit(SET_REQ_SEARCH_PARAMS_PARAMS, reqSearchResultParams)
    },
    [REMOVE_REQ_SEARCH_PARAMS_PARAMS] ({commit}) {
      commit(REMOVE_REQ_SEARCH_PARAMS_PARAMS)
    }
  }
}
