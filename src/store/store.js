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
  gradientStrings: '',
  id: 1,
  actions: []
}

const getters = {
  getField,
  createString(state, rootGetters) {
    const degree =
      state.general.general.degree.size + state.general.general.degree.unit
    let comment =
      state.general.general.comment === ''
        ? ''
        : `/* ${state.general.general.comment} */ `
    let repeating = !state.general.general.repeating ? '' : 'repeating-'

    const returnValue = type => {
      if (type === 'linear') {
        return state.general.general.degree.size > 0
          ? `${comment}${repeating}${
              state.general.general.type
            }-gradient(${degree}, ${rootGetters['colors/colorStops']}) ${
              state.general.general.repeat
            } ${rootGetters['box/box']}`
          : `${comment}${repeating}${state.general.general.type}-gradient(${
              rootGetters['colors/colorStops']
            }) ${state.general.general.repeat} ${rootGetters['box/box']}`
      }

      if (type.includes('conic')) {
        return `${comment}${repeating}${state.general.general.type}-gradient(${
          rootGetters['colors/colorStops']
        }) ${rootGetters['box/box']} ${state.general.general.repeat}`
      }

      return `${comment}${repeating}${state.general.general.type}-gradient(${
        rootGetters['shape/shape']
      }, ${rootGetters['colors/colorStops']}) ${state.general.general.repeat} ${
        rootGetters['box/box']
      }`
    }

    return returnValue(state.general.general.type)
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
      general: JSON.parse(JSON.stringify(state.general.general)),
      box: JSON.parse(JSON.stringify(state.box.box)),
      shape: JSON.parse(JSON.stringify(state.shape.shape)),
      colors: JSON.parse(JSON.stringify(state.colors.colors))
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
      general: JSON.parse(JSON.stringify(state.general.general)),
      box: JSON.parse(JSON.stringify(state.box.box)),
      shape: JSON.parse(JSON.stringify(state.shape.shape)),
      colors: JSON.parse(JSON.stringify(state.colors.colors))
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
        commit('box/updateBox', last.box, { root: true })
        commit('shape/updateShape', last.shape, { root: true })
        commit('colors/updateColors', last.colors, { root: true })
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
    commit('box/updateBox', gradient.box, { root: true })
    commit('shape/updateShape', gradient.shape, { root: true })
    commit('colors/updateColors', gradient.colors, { root: true })
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
    general,
    box,
    shape,
    colors
  }
})
