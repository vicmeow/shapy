import { getField, updateField } from 'vuex-map-fields'

/* 

All information needed for the size of the gradient
using background-size.

*/

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
  }
})

export const getters = {
  getField
}

export const mutations = {
  updateField,
  UPDATE_WIDTH(state, value) {
    // If px values for gradient size are null, set them to the max
    if (!state.width.px) state.width.px = value
    // gradient max values should be the the canvas px max
    state.width.max = value
  },
  UPDATE_HEIGHT(state, value) {
    // If px values for gradient size are null, set them to the max
    if (!state.height.px) state.height.px = value
    // gradient max values should be the the canvas px max
    state.height.max = value
  }
}

export const actions = {
  updateWidth({ commit, dispatch }, value) {
    commit('UPDATE_WIDTH', value)
    // Update max for background-position values
    dispatch('backgroundPosition/updateX', value, { root: true })
  },
  updateHeight({ commit, dispatch }, value) {
    commit('UPDATE_HEIGHT', value)
    // Update max for background-position values
    dispatch('backgroundPosition/updateY', value, { root: true })
  }
}
