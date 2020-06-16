import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /**
     * 当前路由；用于 header active状态
     */
    currentRoute: '/',

    /**
     * 判断header组件的 nav 部分显示
     * router => showHeaderNav
     */
    headerNavShow: true,


  },

  mutations: {
    changeCurrentRoute(state, payload) {
      state.currentRoute = payload;
    },
    changeHeaderNavShow(state, payload) {
      state.headerNavShow = payload;
    },
  },

  actions: {

  },

  modules: {
  }

})
