import Vue from 'vue'
import Vuex from 'vuex'

import canvas from './modules/canvas'
import general from './modules/general'
import colors from './modules/colors'
import box from './modules/box'
import shape from './modules/shape'
import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

const state = {
  gradientList: [],
  previewGradient: '',
  gradientStrings: ''
}

const getters = {
  gradientList() {
    return state.gradientList
  },
  previewGradient() {
    return state.previewGradient
  },
  gradientStrings() {
    return state.gradientStrings
  },
  getField
}

const mutations = {
  updateField,
  addGradient(state, gradient) {
    state.gradientList.unshift(gradient)
    let newList = []
    state.gradientList.forEach(item => {
      newList.push(item.string)
    })
    state.gradientStrings = newList.join(', ')
  },
  undoGradient(state) {
    state.gradientList.shift()
    let newList = []
    state.gradientList.forEach(item => {
      newList.unshift(item.string)
    })
    state.gradientStrings = newList.join(', ')
  },
  deleteAllGradients(state) {
    state.gradientList = []
    state.gradientStrings = ''
    state.previewGradient = ''
  },
  previewGradient(state, gradient) {
    state.previewGradient = gradient
  },
  deleteGradient(state, id) {
    // Return array without the object with the ID match
    const result = state.gradientList.filter(gradient => gradient.id !== id)
    // New gradient list of objects
    state.gradientList = result
    let newList = []
    // Join the strings of the new list together for the canvas
    state.gradientList.forEach(item => {
      newList.unshift(item.string)
    })
    state.gradientStrings = newList.join(', ')
  }
}

const actions = {
  addGradient({ commit }, gradient) {
    commit('addGradient', gradient)
  },
  undoGradient({ commit }) {
    commit('undoGradient')
  },
  deleteGradient({ commit }, id) {
    commit('deleteGradient', id)
  },
  deleteAllGradients({ commit }) {
    commit('deleteAllGradients')
  },
  previewGradient({ commit }, gradient) {
    commit('previewGradient', gradient)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    canvas,
    general,
    box,
    shape,
    colors
  }
})
