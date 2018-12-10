import { getField, updateField } from 'vuex-map-fields'

const state = {
  colors: [
    {
      id: 1,
      start: {
        size: 0,
        type: 'hex',
        color: {
          hex: '#00978d',
          rgba: { a: 1, b: 141, g: 151, r: 0 },
          a: 1
        },
        unit: '%'
      },
      stop: {
        size: 100,
        type: 'hex',
        color: {
          hex: '#f3b6c9',
          rgba: { a: 1, b: 201, g: 182, r: 243 },
          a: 1
        },
        unit: '%'
      }
    }
  ]
}

const getters = {
  getField,
  colorStops() {
    const stops = state.colors.map(color => {
      let startColor
      let stopColor
      const startSize = color.start.size + color.start.unit
      const stopSize = color.stop.size + color.stop.unit
      // START VALUES

      if (color.start.type === 'rgb') {
        const rgba = color.start.color.rgba
        startColor = `rgba(${rgba.r},${rgba.g},${rgba.b},${
          rgba.a
        }) ${startSize}`
      } else {
        startColor = `${color.start.color.hex} ${startSize}`
      }
      // STOP VALUES
      if (color.stop.type === 'rgb') {
        const rgba = color.stop.color.rgba
        stopColor = `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a}) ${stopSize}`
      } else {
        stopColor = `${color.stop.color.hex} ${stopSize}`
      }
      return `${startColor}, ${stopColor}`
    })
    return stops.join(', ')
  }
}

const mutations = {
  updateField,
  addStop(state, { index, newStop }) {
    state.colors.splice(index, 0, newStop)
  },
  removeStop(state, id) {
    const result = state.colors.filter(pair => pair.id !== id)
    state.colors = result
  },
  updateType(state, { id, where, type }) {
    const colorMatch = state.colors.filter(colorStop => colorStop.id === id)
    if (where === 'start') {
      colorMatch[0].start.type = type
    } else {
      colorMatch[0].stop.type = type
    }
  },
  updateColors(state, colors) {
    state.colors = colors
  }
}

const actions = {
  addStop({ commit }, { index, newStop }) {
    commit('addStop', { index, newStop })
  },
  removeStop({ commit }, id) {
    commit('removeStop', id)
  },
  updateType({ commit }, { id, where, type }) {
    commit('updateType', { id, where, type })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
