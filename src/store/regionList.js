import Vue from 'vue'
export const SET_REGION_LIST = 'SET_REGION_LIST' // 设置省市县级联列表
export const REMOVE_REGION_LIST = 'REMOVE_REGION_LIST' // 删除省市县列表

export default {
  state: JSON.parse(window.localStorage.getItem('regionList')) || [],
  mutations: {
    [SET_REGION_LIST] (state, regionList) {
      window.localStorage.setItem('regionList', JSON.stringify(regionList))
      Object.assign(state, regionList)
    },
    [REMOVE_REGION_LIST] (state) {
      window.localStorage.removeItem('regionList')
      Object.keys(state).forEach(k => Vue.delete(state, k))
    }
  },
  actions: {
    [SET_REGION_LIST] ({commit}, regionList) {
      commit(SET_REGION_LIST, regionList)
    },
    [REMOVE_REGION_LIST] ({commit}) {
      commit(REMOVE_REGION_LIST)
    }
  }
}
