import Vue from 'vue'
import Vuex from 'vuex'

import main from './modules/main'
import home from './modules/home'
import video from './modules/video'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main,
    home,
    video
  }
})
