import { getField, updateField } from 'vuex-map-fields'

const state = {
  gradient: {
    active: 'linear',
    types: ['linear', 'radial', 'conic']
  },
  isRepeating: true,
  backgroundRepeat: {
    active: 'no-repeat',
    types: ['no-repeat', 'repeat', 'space', 'round', 'repeat-x', 'repeat-y']
  },
  comment: '',
  angle: {
    active: 0,
    types: [0, 45, 90, 180, 270]
  }
}

const getters = {
  getField
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
