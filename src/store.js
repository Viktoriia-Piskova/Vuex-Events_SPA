import Vue from 'vue'
import Vuex from 'vuex'
import EvenService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'John Doe' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EvenService.postEvent(event).then(() => commit('ADD_EVENT', event))
    }
  },
  getters: {
    catLength: state => state.categories.length
  }
})
