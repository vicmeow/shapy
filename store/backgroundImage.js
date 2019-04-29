import { getField, updateField } from 'vuex-map-fields'

/* 

All information needed to create gradient function
for background-image.

*/

export const state = () => ({
  comment: '',
  type: {
    active: 'linear',
    values: ['linear', 'radial', 'conic']
  },
  repeating: false,
  angle: {
    active: 0,
    defaultUnit: null,
    max: 360,
    values: [-45, 0, 45, 270, '', 90, 225, 180, 135]
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
    if (state.type.active === 'linear') {
      switch (state.angle.active) {
        case 0:
          return 'to top'
        case 90:
          return 'to right'
        case 180:
          return 'to bottom'
        case 270:
          return 'to left'
        default:
          return typeof state.angle.active === 'number'
            ? `${state.angle.active}deg`
            : state.angle.active
      }
    }
    return false
  }
}

export const mutations = {
  updateField
}
