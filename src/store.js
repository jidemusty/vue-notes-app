import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    note: {
      id: null,
      title: null,
      body: null,
      lastSaved: null
    },
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    saveTimeOut: null
  },
  getters: {
    note: state => state.note,
    notes: (state) => {
      return state.notes.sort((a, b) => {
        return a['lastSaved'] < b['lastSaved']
      })
    },
    lastSaved: (state) => {
      if (!state.note.lastSaved) {
        return 'Never'
      }

      return moment(state.note.lastSaved).calendar()
    },
    wordCount: (state) => {
      if (!state.note.body || state.note.body.trim() === '') {
        return 0
      }

      return state.note.body.trim().split(' ').length
    }
  },
  mutations: {
    setCurrentNoteId (state, id) {
      state.note.id = id
    },
    prependToNotes(state, note) {
      state.notes.unshift(note)
    },
    touchLastSaved (state) {
      state.note.lastSaved = Date.now()
    },
    setSaveTimeOut (state, { callback, delay }) {
      state.saveTimeOut = setTimeout(callback, delay)
    },
    clearSaveTimeOut (state) {
      state.saveTimeOut = null
    }
  },
  actions: {
    saveNote: ({ commit, dispatch, state}) => {
      commit('touchLastSaved')

      if (state.note.id === null) {
        commit('setCurrentNoteId', Date.now())
        commit('prependToNotes', state.note)
      }
      
      dispatch('storeNotes')
    },
    storeNotes: ({ state }) => {
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    startSaveTimeOut: ({ commit, dispatch, state}) => {
      if (state.saveTimeOut !== null) {
        return
      }

      commit('setSaveTimeOut', {
        callback () {
          dispatch('saveNote')
          dispatch('stopSaveTimeout')
        },
        delay: 1000
      })
    },
    stopSaveTimeout: ({ commit }) => {
      commit('clearSaveTimeOut')
    }
  }
})
