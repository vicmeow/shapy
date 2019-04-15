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
  getField
}

export const mutations = {
  updateField
}
