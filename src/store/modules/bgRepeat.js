import { getField, updateField } from 'vuex-map-fields'

const state = {
  active: 'no-repeat',
  types: ['no-repeat', 'repeat', 'space', 'round', 'repeat-x', 'repeat-y']
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
