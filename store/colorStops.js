// TODO: Add action for updating max PX value for color stop, based on box size
// TODO: Refactor

import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  activeStop: {},
  stops: [
    {
      id: 'ap6y8f70k', // ID of gradient
      pct: 0, // Gradient stop
      defaultUnit: true, // %/px
      active: 'hex',
      color: {
        // Color from color picker
        a: 1,
        hex: '#080808',
        hex8: '#080808FF',
        hsl: { a: 1, h: 0, l: 0.031556, s: 0.020408163265306138 },
        hsv: { a: 1, h: 0, s: 0.04000000000000003, v: 0.0322 },
        oldHue: 0,
        rgba: { a: 1, b: 8, g: 8, r: 8 },
        source: 'hsva'
      }
    },
    {
      id: 'h1qlz9p91',
      pct: 100,
      defaultUnit: true,
      active: 'hex',
      color: {
        // Color from color picker
        a: 1,
        hex: '#812525',
        hex8: '#812525FF',
        hsl: { a: 1, h: 0, l: 0.3248028, s: 0.5517107611141283 },
        hsv: { a: 1, h: 0, s: 0.7111, v: 0.504 },
        oldHue: 0,
        rgba: { a: 1, b: 37, g: 37, r: 129 },
        source: 'hsva'
      }
    }
  ]
})

export const getters = {
  getField,
  // Color stops sorted according to position
  sortedStops(state) {
    return state.stops.slice(0).sort((a, b) => a.pct - b.pct)
  },
  // All color stops for the gradient
  colorString(state) {
    const colors = state.stops
      .sort((a, b) => a.pct - b.pct)
      .map(stop => {
        const rgba = `rgba(${stop.color.rgba.r},${stop.color.rgba.g},${
          stop.color.rgba.b
        },${stop.color.rgba.a})`
        const hex = stop.color.hex
        const color = stop.active === 'hex' ? hex : rgba
        return `${color} ${stop.pct}%`
      })
    return colors.join(', ')
  }
}

export const mutations = {
  updateField,
  UPDATE_COLOR(state, color) {
    state.activeStop.color = color
  },
  REMOVE_STOP(state, id) {
    // Return all stops except the one with an ID match
    state.stops = state.stops.filter(stop => stop.id !== id)
  },
  MOVE_UP(state, { clicked, above }) {
    // Make sure all values but pct changes
    state.stops[above.index].pct = clicked.pct
    state.stops[clicked.index].pct = above.pct
  },
  MOVE_DOWN(state, { clicked, below }) {
    state.stops[below.index].pct = clicked.pct
    state.stops[clicked.index].pct = below.pct
  },
  CREATE_STOP(state, stop) {
    state.stops.push(stop)
  },
  UPDATE_STOP(state, { point, id }) {
    state.stops.find(stop => stop.id === id).pct = point
  },
  SET_ACTIVE(state, stop) {
    state.activeStop = stop
  }
}

export const actions = {
  removeStop({ commit, state }, id) {
    if (state.stops.length > 2) {
      commit('REMOVE_STOP', id)
    }
  },
  moveUp({ commit, state }, id) {
    // Index of stop being moved
    const clickedIndex = state.stops.findIndex(stop => stop.id === id)
    // Stop object being moved
    const clickedStop = state.stops.find(stop => stop.id === id)
    // Index of stop above the stop being moved
    const aboveIndex = clickedIndex === 0 ? 0 : clickedIndex - 1
    // Stop object above stop being moved
    const aboveStop = state.stops[aboveIndex]

    // Info from clicked stop
    const clicked = {
      index: clickedIndex,
      pct: JSON.parse(JSON.stringify(clickedStop.pct))
    }
    // Info from stop above the clicked stop
    const above = {
      index: aboveIndex,
      pct: JSON.parse(JSON.stringify(aboveStop.pct))
    }
    if (clickedIndex !== 0) {
      commit('MOVE_UP', { clicked, above })
    }
  },
  moveDown({ commit, state }, id) {
    // Index of stop being moved
    const clickedIndex = state.stops.findIndex(stop => stop.id === id)
    // Stop object being moved
    const clickedStop = state.stops.find(stop => stop.id === id)
    // Index of stop below the stop being moved
    const belowIndex = clickedIndex + 1
    // Stop object below stop being moved
    const belowStop = state.stops[belowIndex]

    if (belowIndex < state.stops.length) {
      // Info from clicked stop
      const clicked = {
        index: clickedIndex,
        pct: JSON.parse(JSON.stringify(clickedStop.pct))
      }
      // Info from stop below the clicked stop
      const below = {
        index: belowIndex,
        pct: JSON.parse(JSON.stringify(belowStop.pct))
      }

      commit('MOVE_DOWN', { clicked, below })
    }
  },
  createStop({ commit, dispatch }, { point, color }) {
    const stop = {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      pct: point,
      defaultUnit: true,
      color: color
    }
    commit('CREATE_STOP', stop)
    dispatch('setActive', stop)
  },
  updateStop({ commit }, { point, id }) {
    commit('UPDATE_STOP', { point, id })
  },
  setActive({ commit }, stop) {
    commit('SET_ACTIVE', stop)
  },
  updateColor({ commit }, color) {
    commit('UPDATE_COLOR')
  }
}
