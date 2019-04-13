import { getField, updateField } from 'vuex-map-fields'

const state = {
  repeating: true
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
