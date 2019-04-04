export const OPEN_POPUP_DIALOG = 'OPEN_POPUP_DIALOG'
export default {
  state: {
    isOpenPopup: false,
    popUpStatus: 1, // 是否显示 1 显示产品参数 2 显示 规格 3 显示运费
    height: ''
  },
  mutations: {
    [OPEN_POPUP_DIALOG] (state, status) {
      state.isOpenPopup = status.isOpenPopup
      state.popUpStatus = status.popUpStatus
    }
  },
  actions: {
    [OPEN_POPUP_DIALOG] ({commit}, status) {
      commit(OPEN_POPUP_DIALOG, status)
    }
  }
}
