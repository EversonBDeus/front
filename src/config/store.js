import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuVisible: true,
    user:{
        name:'Usuario Mock',
        email:'mock@cod3r.com.br'
    }
  },
  mutations: {
    toggleMenu (state, isVisible) {
      if (isVisible === undefined) {
        state.isMenuVisible = !state.isMenuVisible
      } else {
        state.isMenuVisible = isVisible
      }
      // eslint-disable-next-line
      console.log('toggleMenu = ' + state.isMenuVisible)
    }
  }
})