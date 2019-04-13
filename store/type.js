import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  active: 'linear',
  types: ['linear', 'radial', 'conic']
})

export const getters = {
  getField
}

export const mutations = {
  updateField
}
