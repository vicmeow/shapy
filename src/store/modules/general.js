import { getField, updateField } from 'vuex-map-fields'

const state = {
  general: {
    comment: '',
    type: 'linear',
    repeating: false,
    repeat: 'no-repeat',
    degree: {
      unit: 'deg',
      size: 0
    }
  }
}

const getters = {
  getField,
  general() {
    return state.general
  }
}

const mutations = {
  updateField,
  updateGeneral(state, general) {
    state.general = general
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
