import { getField, updateField } from 'vuex-map-fields'

/* 

All information needed for the position of the gradient
using background-position.

*/

export const state = () => ({
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
  getField
}

export const mutations = {
  updateField,
  UPDATE_X(state, value) {
    // If px values for the axis are null, set them to the max
    if (!state.x.px) state.x.px = value
    // If px values exist for the axis, set them as the payload
    state.x.max = value
  },
  UPDATE_Y(state, value) {
    // If px values for the axis are null, set them to the max
    if (!state.y.px) state.y.px = value
    // If px values exist for the axis, set them as the payload
    state.y.max = value
  }
}

export const actions = {
  updateX({ commit, dispatch }, value) {
    commit('UPDATE_X', value)
  },
  updateY({ commit, dispatch }, value) {
    commit('UPDATE_Y', value)
  }
}
