import { getField, updateField } from 'vuex-map-fields'

const state = {
  active: 0,
  types: [0, 45, 90, 180, 270]
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
