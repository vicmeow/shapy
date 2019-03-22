import { getField, updateField } from 'vuex-map-fields'

const state = {
  width: {
    pct: 17,
    px: null,
    defaultUnit: true
  },
  height: {
    pct: 17,
    px: null,
    defaultUnit: true
  },
  x: {
    pct: 0,
    px: null,
    defaultUnit: true
  },
  y: {
    pct: 0,
    px: null,
    defaultUnit: true
  }
}

const getters = {
  getField,
  box() {
    // Which width unit to return based on defaultUnit
    const width = state.width.defaultUnit
      ? `${state.width.pct}%`
      : `${state.width.px}px`
    // Which height unit to return based on defaultUnit
    const height = state.height.defaultUnit
      ? `${state.height.pct}%`
      : `${state.height.px}px`
    // Which X coordinate unit to return based on defaultUnit
    const x = state.x.defaultUnit ? `${state.x.pct}%` : `${state.x.px}px`
    // Which Y coordinate unit to return based on defaultUnit
    const y = state.y.defaultUnit ? `${state.y.pct}%` : `${state.y.px}px`
    // Finished string for the gradient's coordinates and size
    return `${x} ${y} / ${width} ${height}`
  }
}

const mutations = {
  updateField,
  updateBox(state, box) {
    state.box = box
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
