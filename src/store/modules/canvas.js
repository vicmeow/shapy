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
  updateWidth(state, max) {
    // Set max if pixel values are null
    if (!state.width.px) state.width.px = max
    // Update max when window width changes
    state.width.max = max
  },
  updateHeight(state, max) {
    // Set max if pixel values are null
    if (!state.height.px) state.height.px = max
    // Update max when window height changes
    state.height.max = max
  }
}

const actions = {
  updateMax({ commit }, max) {
    // Update max width
    commit('updateWidth', max.width)
    // Update max height
    commit('updateHeight', max.height)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
