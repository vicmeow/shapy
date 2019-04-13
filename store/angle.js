import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  active: 0,
  types: [0, 45, 90, 180, 270]
})

export const getters = {
  getField
}

export const mutations = {
  updateField
}
