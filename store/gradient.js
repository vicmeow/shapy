import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  width: {
    pct: 100,
    px: null,
    max: null,
    defaultUnit: true
  },
  height: {
    pct: 100,
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
})

export const getters = {
  getField,
  gradient(state) {
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

export const mutations = {
  updateField,
  updateGradient(state, gradient) {
    // TODO: fix this
    state.gradient = gradient
  },
  updateWidth(state, value) {
    // If px values for gradient size are null, set them to the max
    if (!state.width.px) state.width.px = value

    // If px values for the axis are null, set them to the max
    if (!state.x.px) state.x.px = value

    // gradient max values should be the the canvas px max
    state.width.max = value

    // If px values exist for the axis, set them as the payload
    state.x.max = value
  },
  updateHeight(state, value) {
    // If px values for gradient size are null, set them to the max
    if (!state.height.px) state.height.px = value

    // If px values for the axis are null, set them to the max
    if (!state.y.px) state.y.px = value

    // gradient max values should be the the canvas px max
    state.height.max = value

    // If px values exist for the axis, set them as the payload
    state.y.max = value
  }
}

export const actions = {
  updateWidth({ commit, dispatch }, value) {
    commit('updateWidth', value)
    // Update shape max
    // dispatch(
    //   'shape/updateWidth',
    //   value,
    //   { root: true }
    // )
  },
  updateHeight({ commit, dispatch }, value) {
    commit('updateHeight', value)
  }
}
