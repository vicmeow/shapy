import { getField, updateField } from 'vuex-map-fields'
export const strict = false
export const state = () => ({
  gradientList: [],
  preview: '',
  gradientStrings: '',
  id: 1,
  actions: []
})

export const getters = {
  getField,
  string(state, rootGetters) {
    const degree = `${state.angle.active}deg`
    const comment =
      state.general.comment === '' ? '' : `/* ${state.general.comment} */ `
    const repeating = state.general.repeating ? '' : 'repeating-'
    const repeat = state.bgRepeat.active

    const returnValue = type => {
      if (type === 'linear') {
        return state.angle.active > 0
          ? `${comment}${repeating}${state.type.active}-gradient(${degree}, ${
              rootGetters['colors/colors']
            }) ${repeat} ${rootGetters['gradient/gradient']}`
          : `${comment}${repeating}${state.type.active}-gradient(${
              rootGetters['colors/colors']
            }) ${repeat} ${rootGetters['gradient/gradient']}`
      }

      if (type.includes('conic')) {
        return `${comment}${repeating}${state.type.active}-gradient(${
          rootGetters['colors/colors']
        }) ${rootGetters['gradient/gradient']} ${repeat}`
      }

      return `${comment}${repeating}${state.type.active}-gradient(${
        rootGetters['shape/shape']
      }, ${rootGetters['colors/colors']}) ${repeat} ${
        rootGetters['gradient/gradient']
      }`
    }

    return returnValue(state.type.active)
  }
}

export const mutations = {
  updateField,
  GENERATE_PREVIEW(state, gradient) {
    state.preview = gradient
  }
}

export const actions = {
  generatePreview({ commit }, gradient) {
    commit('GENERATE_PREVIEW', gradient)
  }
}
