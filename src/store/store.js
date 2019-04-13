// TODO: Add actions into its own module?
import Vue from 'vue'
import Vuex from 'vuex'

import canvas from './modules/canvas'
import color from './modules/color'
import gradient from './modules/gradient'
import shape from './modules/shape'
import type from './modules/type'
import repeating from './modules/repeating'
import general from './modules/general'
import bgRepeat from './modules/bgRepeat'
import angle from './modules/angle'
import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

const state = {
  gradientList: [],
  previewGradient: '',
  gradientStrings: '',
  id: 1,
  actions: []
}

const getters = {
  getField,
  createString(state, rootGetters) {
    const degree = `${state.angle.active}deg`
    const comment =
      state.general.comment === '' ? '' : `/* ${state.general.comment} */ `
    const repeating = state.repeating ? '' : 'repeating-'
    const repeat = state.bgRepeat.active

    const returnValue = type => {
      if (type === 'linear') {
        return state.angle.active > 0
          ? `${comment}${repeating}${state.type.active}-gradient(${degree}, ${
              rootGetters['color/colorStops']
            }) ${repeat} ${rootGetters['gradient/gradient']}`
          : `${comment}${repeating}${state.type.active}-gradient(${
              rootGetters['color/colorStops']
            }) ${repeat} ${rootGetters['gradient/gradient']}`
      }

      if (type.includes('conic')) {
        return `${comment}${repeating}${state.type.active}-gradient(${
          rootGetters['color/colorStops']
        }) ${rootGetters['gradient/gradient']} ${repeat}`
      }

      return `${comment}${repeating}${state.type.active}-gradient(${
        rootGetters['shape/shape']
      }, ${rootGetters['color/colorStops']}) ${repeat} ${
        rootGetters['gradient/gradient']
      }`
    }

    return returnValue(state.type.active)
  }
}

const mutations = {
  updateField,
  previewGradient(state, gradient) {
    state.previewGradient = gradient
  },
  addGradient(state, gradient) {
    let newList = []
    state.gradientList.unshift(gradient)
    state.gradientList.forEach(gradient => {
      newList.push(gradient.string)
    })
    state.gradientStrings = newList.join(', ')
    state.id++
    state.actions.push({ type: 'addGradient', data: gradient })
  },
  returnGradient(state) {
    const index = state.actions[state.actions.length - 1].data.position
    let editedGradient = {
      string: state.previewGradient,
      id: state.id,
      general: JSON.parse(JSON.stringify(state.general)),
      gradient: JSON.parse(JSON.stringify(state.gradient.gradient)),
      shape: JSON.parse(JSON.stringify(state.shape.shape)),
      color: JSON.parse(JSON.stringify(state.color.colorStops))
    }
    state.gradientList.splice(index, 1, editedGradient)
    let newList = []
    state.gradientList.forEach(gradient => {
      newList.push(gradient.string)
    })
    state.gradientStrings = newList.join(', ')
    state.actions.push({ type: 'returnGradient', data: editedGradient })
  },
  editGradient(state, gradient) {
    state.actions.push({ type: 'editGradient', data: gradient })
  },
  deleteSingle(state, { index, id }) {
    let deleted = state.gradientList.find(gradient => gradient.id === id)
    deleted.position = index
    state.actions.push({ type: 'deleteSingle', data: deleted })
    const result = state.gradientList.filter(gradient => gradient.id !== id)
    state.gradientList = result
    let newList = []
    state.gradientList.forEach(item => {
      newList.push(item.string)
    })
    state.gradientStrings = newList.join(', ')
  },
  deleteAll(state) {
    state.actions.push({ type: 'deleteAll', data: state.gradientList })
    state.gradientList = []
    state.gradientStrings = ''
    state.previewGradient = ''
  },
  undoAdded(state) {
    state.actions.push({ type: 'undoAdded', data: state.gradientList[0] })
    state.gradientList.shift()
    let newList = []
    state.gradientList.forEach(item => {
      newList.unshift(item.string)
    })
    state.gradientStrings = newList.join(', ')
  },
  undoDeleteAll(state, gradient) {
    state.gradientList = gradient
    let newList = []
    state.gradientList.forEach(item => {
      newList.unshift(item.string)
    })
    state.gradientStrings = newList.join(', ')
  },
  undoDeleteSingle(state, gradient) {
    state.gradientList.splice(gradient.position, 0, gradient)
  },
  undoEditGradient(state, gradient) {
    state.gradientList.splice(gradient.position, 1, gradient)
  }
}

const actions = {
  addGradient({ commit, state }, gradient) {
    let savedGradient = {
      string: gradient,
      id: state.id,
      general: JSON.parse(JSON.stringify(state.general)),
      gradient: JSON.parse(JSON.stringify(state.gradient)),
      shape: JSON.parse(JSON.stringify(state.shape)),
      color: JSON.parse(JSON.stringify(state.color))
    }
    commit('addGradient', savedGradient)
  },
  undoAction({ commit, state }) {
    const lastAction = state.actions[state.actions.length - 1]
    const type = lastAction.type
    const gradient = lastAction.data

    if (state.actions.length > 0) {
      if (type === 'addGradient') {
        commit('undoAdded')
      }
      if (type === 'deleteAll') {
        const last = gradient[gradient.length - 1]
        commit('undoDeleteAll', gradient)
        commit('general/updateGeneral', last.general, { root: true })
        commit('gradient/updateGradient', last.gradient, { root: true })
        commit('shape/updateShape', last.shape, { root: true })
        commit('color/updateColors', last.colorStops, { root: true })
      }
      if (type === 'deleteSingle') {
        commit('undoDeleteSingle', gradient)
      }
      if (type === 'editGradient') {
        commit('undoEditGradient', gradient)
      }
    }
  },
  deleteSingle({ commit }, { index, id }) {
    commit('deleteSingle', { index, id })
  },
  deleteAll({ commit }) {
    commit('deleteAll')
  },
  editGradient({ commit, state }, { index, id }) {
    let gradient = state.gradientList.find(gradient => gradient.id === id)
    gradient.position = index
    commit('editGradient', gradient)
    commit('previewGradient', gradient.string)
    commit('general/updateGeneral', gradient.general, { root: true })
    commit('gradient/updateGradient', gradient.gradient, { root: true })
    commit('shape/updateShape', gradient.shape, { root: true })
    commit('color/updateColors', gradient.colorStops, { root: true })
  },
  returnGradient({ commit }) {
    commit('returnGradient')
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
    type,
    angle,
    repeating,
    general,
    bgRepeat,
    gradient,
    shape,
    color
  }
})
