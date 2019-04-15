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
  // CSS background-image property
  backgroundImage(state, rootGetters) {
    const comment = state.backgroundImage.comment
    const angle = state.backgroundImage.angle.active
    const shape = rootGetters['radialShape/radialString']
    // String for background-image if it's a radial gradient
    if (state.backgroundImage.type.active === 'radial') {
      return `${comment === '' ? '' : `${comment} `}${
        state.backgroundImage.repeating ? 'repeating-' : ''
      }${state.backgroundImage.type.active}-gradient(${shape}, ${
        angle > 0 ? `${angle}deg` : ''
      }${rootGetters['colorStops/colorString']})`
    }
    // String for background-image if it's a linear or conical gradient
    return `${comment === '' ? '' : `${comment} `}${
      state.backgroundImage.repeating ? 'repeating-' : ''
    }${state.backgroundImage.type.active}-gradient(${
      angle > 0 ? `${angle}deg` : ''
    }${rootGetters['colorStops/colorString']})`
  },
  // CSS background-position property
  backgroundPosition(state) {
    // Which X coordinate unit to return based on defaultUnit
    const x = state.backgroundPosition.x.defaultUnit
      ? `${state.backgroundPosition.x.pct}%`
      : `${state.backgroundPosition.x.px}px`
    // Which Y coordinate unit to return based on defaultUnit
    const y = state.backgroundPosition.y.defaultUnit
      ? `${state.backgroundPosition.y.pct}%`
      : `${state.backgroundPosition.y.px}px`
    // Finished string for the gradient's coordinates and size
    return `${x} ${y}`
  },
  // CSS background-size property
  backgroundSize(state) {
    // Which width unit to return based on defaultUnit
    const width = state.backgroundSize.width.defaultUnit
      ? `${state.backgroundSize.width.pct}%`
      : `${state.backgroundSize.width.px}px`
    // Which height unit to return based on defaultUnit
    const height = state.backgroundSize.height.defaultUnit
      ? `${state.backgroundSize.height.pct}%`
      : `${state.backgroundSize.height.px}px`
    // Finished string for the gradient's size
    return `${width} ${height}`
  },
  // CSS background-repeat property
  backgroundRepeat(state) {
    return state.backgroundRepeat.active
  },
  // CSS background shorthand property
  background(state, getters) {
    const shorthand = type => {
      // Shorthand for LINEAR gradients
      if (type === 'linear') {
        return `${getters.backgroundImage} ${getters.backgroundRepeat} ${
          getters.backgroundPosition
        } / ${getters.backgroundSize}`
      }
      // Shorthand for CONICAL gradients
      if (type === 'conical') {
        return `${getters.backgroundImage} ${getters.backgroundPosition} / ${
          getters.backgroundSize
        } ${getters.backgroundRepeat}`
      }
      // Shorthand for RADIAL gradients
      // TODO: add radial shape logic
      return `${getters.backgroundImage} ${getters.backgroundRepeat} ${
        getters.backgroundPosition
      } / ${getters.backgroundSize}`
    }
    return shorthand(state.backgroundImage.type.active)
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
