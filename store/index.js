import { getField, updateField } from 'vuex-map-fields'
export const strict = false

export const state = () => ({
  actions: []
})

export const getters = {
  getField,
  // CSS background-image property
  backgroundImage(state, rootGetters) {
    const shape =
      rootGetters['backgroundImage/type'] === 'radial-gradient'
        ? `${rootGetters['radialShape/radialString']}, `
        : false
    const angle = rootGetters['backgroundImage/angle']
      ? `${rootGetters['backgroundImage/angle']}, `
      : false
    return [
      rootGetters['backgroundImage/comment'],
      rootGetters['backgroundImage/repeating'],
      rootGetters['backgroundImage/type'],
      '(',
      angle,
      shape,
      rootGetters['colorStops/colorString'].join(', '),
      ') '
    ].filter(Boolean)
  },
  // CSS background-position property
  backgroundPosition(state) {
    // Which X coordinate unit to return based on defaultUnit
    const x = state.backgroundPosition.x.defaultUnit
      ? `${state.backgroundPosition.x.pct}% `
      : `${state.backgroundPosition.x.px}px `
    // Which Y coordinate unit to return based on defaultUnit
    const y = state.backgroundPosition.y.defaultUnit
      ? `${state.backgroundPosition.y.pct}% `
      : `${state.backgroundPosition.y.px}px `
    // Finished string for the gradient's coordinates and size
    return [x, y]
  },
  // CSS background-size property
  backgroundSize(state) {
    // Which width unit to return based on defaultUnit
    const width = state.backgroundSize.width.defaultUnit
      ? `${state.backgroundSize.width.pct}% `
      : `${state.backgroundSize.width.px}px `
    // Which height unit to return based on defaultUnit
    const height = state.backgroundSize.height.defaultUnit
      ? `${state.backgroundSize.height.pct}% `
      : `${state.backgroundSize.height.px}px `
    // Finished string for the gradient's size
    return [width, height]
  },
  // CSS background-repeat property
  backgroundRepeat(state) {
    return state.backgroundRepeat.active
  },
  // CSS background shorthand property
  background(state, getters) {
    const shorthand = type => {
      // Shorthand for CONICAL gradients
      if (type === 'conical') {
        return [
          getters.backgroundImage,
          getters.backgroundPosition,
          ' / ',
          getters.backgroundSize,
          getters.backgroundRepeat
        ].flat(3)
      }
      // Shorthand for LINEAR & RADIAL gradients
      return [
        getters.backgroundImage,
        `${getters.backgroundRepeat} `,
        getters.backgroundPosition,
        ' / ',
        getters.backgroundSize
      ].flat(3)
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
