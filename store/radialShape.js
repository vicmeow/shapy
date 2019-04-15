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
  radialString(state) {
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

export const mutations = {
  updateField,
  updateShape(state, shape) {
    state.shape = shape
  }
}
