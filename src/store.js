import Vue from 'vue';
import Vuex from 'vuex'
import flags from './modules/flags'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    flags
  }
})

export default store;