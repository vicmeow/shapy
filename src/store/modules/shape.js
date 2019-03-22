import { getField, updateField } from 'vuex-map-fields'

const state = {
  width: {
    pct: 17,
    px: null,
    max: null,
    defaultUnit: true
  },
  height: {
    pct: 17,
    px: null,
    max: null,
    defaultUnit: true
  },
  x: {
    pct: 50,
    px: null,
    max: null,
    defaultUnit: true
  },
  y: {
    pct: 50,
    px: null,
    max: null,
    defaultUnit: true
  }
}

const getters = {
  getField,
  shape() {
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
    return `${width} ${height} at ${x} ${y}`
  }
}

const mutations = {
  updateField,
  updateShape(state, shape) {
    state.shape = shape
  },
  updateWidth(state, max) {
    // If px values for box size are null, set them to the max
    if (!state.width.px) state.width.px = max

    // If px values for the axis are null, set them to the max
    if (!state.x.px) state.x.px = max

    // Box max values should be the the canvas px max
    state.width.max = max

    // If px values exist for the axis, set them as the payload
    state.x.max = max
  },
  updateHeight(state, max) {
    // If px values for box size are null, set them to the max
    if (!state.height.px) state.height.px = max

    // If px values for the axis are null, set them to the max
    if (!state.y.px) state.y.px = max

    // Box max values should be the the canvas px max
    state.height.max = max

    // If px values exist for the axis, set them as the payload
    state.y.max = max
  }
}
const actions = {
  updateMax({ commit }, max) {
    // Update max width if the width is changing
    if (max.type === 'width') commit('updateWidth', max.value)
    // Update max height if the height is changing
    if (max.type === 'height') commit('updateHeight', max.value)
  }
}
// TODO: Fix max values for the radial shape, calculated based on box size

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
