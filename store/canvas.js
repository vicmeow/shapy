import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
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
})

export const getters = {
  getField,
  size(state) {
    const width = state.width.defaultUnit
      ? `${state.width.pct}%`
      : `${state.width.px}px`
    const height = state.height.defaultUnit
      ? `${state.height.pct}%`
      : `${state.height.px}px`
    return { width, height }
  },
  backgroundColor(state) {
    // state.backgroundColor.type === 'hex' ?
    return state.backgroundColor.color.hex
  }
}

export const mutations = {
  updateField,
  UPDATE_WIDTH(state, max) {
    // Set max if pixel values are null
    if (!state.width.px) state.width.px = max
    // Update max when window width changes
    state.width.max = max
  },
  UPDATE_HEIGHT(state, max) {
    // Set max if pixel values are null
    if (!state.height.px) state.height.px = max
    // Update max when window height changes
    state.height.max = max
  }
}

export const actions = {
  // TODO: Split into updateWidth and updateHeight actions?
  updateMax({ commit }, max) {
    // Update max width
    commit('UPDATE_WIDTH', max.width)
    // Update max height
    commit('UPDATE_HEIGHT', max.height)
  }
}
