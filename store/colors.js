// TODO: Add action for updating max PX value for color stop, based on box size

import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  active: {},
  stops: [
    {
      id: 0, // ID of gradient
      pct: 0, // Gradient stop
      px: null,
      defaultUnit: true, // %/px
      color: {
        // Color from color picker
        hex: '#194d33',
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      }
    },
    {
      id: 1,
      pct: 100,
      px: null,
      defaultUnit: true,
      color: {
        hex: '#333',
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      }
    }
  ]
})

export const getters = {
  getField,
  stops(state) {
    // Stops for line showing stops
    return state.stops.map(stop => {
      return stop.defaultUnit ? `${stop.value}%` : `${stop.value}px`
    })
  },
  colors(state) {
    const colors = state.stops.map(stop => {
      return `${stop.color.hex} ${stop.pct}%`
    })
    return colors.join(', ')
  },
  activeGradient(state) {
    // Current gradient shown in the color bar
    const stops = state.stops.map(stop => {
      return stop.defaultUnit
        ? `${stop.color.hex} ${stop.pct}%`
        : `${stop.color.hex} ${stop.px}px`
    })
    return `linear-gradient(to right, ${stops.join(', ')})`
  }
}

export const mutations = {
  updateField,
  ADD_STOP(state) {
    // Add with push, copy last stop in stops
    const newStop = {
      id: JSON.parse(JSON.stringify(state.stops[state.stops.length - 1].id)),
      value: JSON.parse(
        JSON.stringify(state.stops[state.stops.length - 1].value)
      ),
      color: JSON.parse(
        JSON.stringify(state.stops[state.stops.length - 1].color)
      ),
      defaultUnit: JSON.parse(
        JSON.stringify(state.stops[state.stops.length - 1].defaultUnit)
      )
    }
    state.stops.push(newStop)
  },
  REMOVE_STOP(state, index) {
    // Remove stop if more than two stops
    state.stops.splice(index, 1)
  },
  MOVE_UP(state, index) {
    // Move stop up
    const stop = state.stops.splice(index, 1)[0]
    const up = index - 1
    state.stops.splice(up, 0, stop)
  },
  MOVE_DOWN(state, index) {
    // Move stop down
    const stop = state.stops.splice(index, 1)[0]
    const down = index + 1
    state.stops.splice(down, 0, stop)
  },
  CREATE_STOP(state, stop) {
    const id = state.stop.length + 1
    const newStop = {
      id: id,
      px: stop.px,
      pct: stop.pct,
      defaultUnit: false,
      color: stop.color
    }
    state.stops.push(newStop)
  },
  UPDATE_STOP(state, stop) {
    state.stops[stop.index].pct = stop.pct
    state.stops[stop.index].px = stop.px
    // eslint-disable-next-line
    // console.log('update with: ', newPos)
  }
}

export const actions = {
  addStop({ commit }) {
    commit('ADD_STOP')
  },
  removeStop({ commit, state }, index) {
    if (state.stops.length > 2) {
      commit('REMOVE_STOP', index)
    }
  },
  moveUp({ commit }, index) {
    if (index > 0) {
      commit('MOVE_UP', index)
    }
  },
  moveDown({ commit }, index) {
    commit('MOVE_DOWN', index)
  },
  createStop({ commit }, position) {
    commit('CREATE_STOP', position)
  },
  updateStop({ commit }, stop) {
    commit('UPDATE_STOP', stop)
  }
}
