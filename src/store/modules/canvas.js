import { getField, updateField } from 'vuex-map-fields'

const state = {
  canvas: {
    x: {
      unit: '%',
      size: 100,
      max: false,
      asString: function() {
        return `${this.size}${this.unit}`
      }
    },
    y: {
      unit: '%',
      size: 100,
      max: false,
      asString: function() {
        return `${this.size}${this.unit}`
      }
    }
  }
}

const getters = {
  canvas() {
    return state.canvas
  },
  getField
}

const mutations = {
  updateField,
  updateMax(state, max) {
    state.canvas.x.max = max.x
    state.canvas.y.max = max.y
  }
}

const actions = {
  updateMax({ commit }, max) {
    commit('updateMax', max)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
