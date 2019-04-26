import { getField, updateField } from 'vuex-map-fields'

/* 

All information needed to create gradient function
for background-image.

*/

export const state = () => ({
  comment: '',
  type: {
    active: 'linear',
    types: ['linear', 'radial', 'conic']
  },
  repeating: false,
  angle: {
    active: 0,
    types: [0, 45, 90, 180, 270]
  }
})

export const getters = {
  getField,
  comment(state) {
    return state.comment === '' ? false : state.comment
  },
  repeating(state) {
    return state.repeating ? 'repeating-' : false
  },
  type(state) {
    return `${state.type.active}-gradient`
  },
  angle(state) {
    return state.type.active === 'linear' && state.angle.active > 0
      ? `${state.angle.active}deg`
      : false
  }
}

export const mutations = {
  updateField
}
