// TODO: Add action for updating max PX value for color stop, based on box size

import { getField, updateField } from 'vuex-map-fields'

const state = {
  stops: [
    {
      id: 1,
      start: {
        pct: 0,
        px: 0,
        max: 100,
        type: 'hex',
        color: {
          hex: '#00978d',
          rgba: { a: 1, b: 141, g: 151, r: 0 },
          a: 1
        },
        defaultUnit: true
      },
      stop: {
        pct: 100,
        px: 100,
        max: 100,
        type: 'hex',
        color: {
          hex: '#f3b6c9',
          rgba: { a: 1, b: 201, g: 182, r: 243 },
          a: 1
        },
        defaultUnit: true
      }
    }
  ]
}

const getters = {
  getField,
  colorStops() {
    const stops = state.stops.map(color => {
      let startColor
      let stopColor
      const startSize = color.start.defaultUnit
        ? `${color.start.pct}%`
        : `${color.start.px}px`
      const stopSize = color.stop.defaultUnit
        ? `${color.stop.pct}%`
        : `${color.stop.px}px`

      // START VALUES
      if (color.start.color.a !== 1) {
        const rgba = color.start.color.rgba
        startColor = `rgba(${rgba.r},${rgba.g},${rgba.b},${
          rgba.a
        }) ${startSize}`
      } else {
        startColor = `${color.start.color.hex} ${startSize}`
      }
      // STOP VALUES
      if (color.stop.color.a !== 1) {
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
    state.stops.splice(index, 0, newStop)
  },
  removeStop(state, id) {
    const result = state.stops.filter(pair => pair.id !== id)
    state.stops = result
  },
  updateType(state, { id, where, type }) {
    const colorMatch = state.stops.filter(colorStop => colorStop.id === id)
    if (where === 'start') {
      colorMatch[0].start.type = type
    } else {
      colorMatch[0].stop.type = type
    }
  },
  updateColors(state, stops) {
    state.stops = stops
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