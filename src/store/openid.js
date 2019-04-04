import Vue from 'vue'
export const SET_OPEN_ID = 'SET_OPEN_ID' // 设置openid
export const REMOVE_OPEN_ID = 'REMOVE_OPEN_ID' // 删除openid

export default {
  state: JSON.parse(window.localStorage.getItem('openid')) || '',
  mutations: {
    [SET_OPEN_ID] (state, openId) {
      window.localStorage.setItem('openid', JSON.stringify(openId))
      Object.assign(state, openId)
    },
    [REMOVE_OPEN_ID] (state) {
      window.localStorage.removeItem('openid')
      Object.keys(state).forEach(k => Vue.delete(state, k))
    }
  },
  actions: {
    [SET_OPEN_ID] ({commit}, openId) {
      commit(SET_OPEN_ID, openId)
    },
    [REMOVE_OPEN_ID] ({commit}) {
      commit(REMOVE_OPEN_ID)
    }
  }
}
