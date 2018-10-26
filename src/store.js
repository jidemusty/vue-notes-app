import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    note: {
      title: null,
      body: null,
      lastSaved: null
    },
    notes: [
      { title: 'One', body: 'Body One', lastSaved: 1},
      { title: 'Two', body: 'Body Two', lastSaved: 3 },
      { title: 'Three', body: 'Body Three', lastSaved: 2 }
    ]
  },
  getters: {
    note: state => state.note,
    notes: (state) => {
      return state.notes.sort((a, b) => {
        return a['lastSaved'] < b['lastSaved']
      })
    }
  },
  mutations: {

  },
  actions: {

  }
})
