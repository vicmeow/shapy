import { getField, updateField } from 'vuex-map-fields'

const state = {
  width: {
    // in percentage
    pct: 100,
    // in pixels
    px: null,
    // max possible in px
    max: null,
    // default unit is always percentage
    defaultUnit: true
  },
  height: {
    // in percentage
    pct: 100,
    // in pixels
    px: null,
    // max possible in px
    max: null,
    // default unit is always percentage
    defaultUnit: true
  },
  backgroundColor: {
    type: 'hex',
    color: {
      hex: '#f3b6c9',
      rgba: { a: 1, b: 201, g: 182, r: 243 },
      a: 1
    }
  }
}

const getters = {
  getField,
  size() {
    const width = state.width.defaultUnit
      ? `${state.width.pct}%`
      : `${state.width.px}px`
    const height = state.height.defaultUnit
      ? `${state.height.pct}%`
      : `${state.height.px}px`
    return { width, height }
  },
  backgroundColor() {
    // state.backgroundColor.type === 'hex' ?
    return state.backgroundColor.color.hex
  }
}

const mutations = {
  updateField,
  updateMax(state, max) {
    // Set max when window updates
    state.width.max = max.width
    state.height.max = max.height
    // Set max if pixel values are null
    if (!state.width.px) state.width.px = max.width
    if (!state.height.px) state.height.px = max.height
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
