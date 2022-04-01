import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isPlay: true
    },
    mutations: {
        closeMusic(state) {
            state.isPlay = false
        },
        playMusic(state) {
            state.isPlay = true
        }
    },
    actions: {},
    modules: {}
})