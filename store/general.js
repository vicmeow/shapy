import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  comment: '',
  repeating: true
})

export const getters = {
  getField
}

export const mutations = {
  updateField
}
