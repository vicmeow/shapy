import { getField, updateField } from 'vuex-map-fields'

const state = {
  active: 'linear',
  types: ['linear', 'radial', 'conic']
}

const getters = {
  getField
}

const mutations = {
  updateField
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
