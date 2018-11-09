import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

const state = {
  gradientList: [],
  previewGradient: '',
  gradientStrings: '',
  comment: 'Comment',
  canvas: {
    x: {
      unit: '%',
      size: 100,
      max: false
    },
    y: {
      unit: '%',
      size: 100,
      max: false
    }
  },
  gradient: {
    type: 'linear-gradient',
    repeat: 'no-repeat',
    degree: {
      unit: 'deg',
      size: 0
    }
  },
  colors: [
    [
      {
        size: 0,
        type: 'hex',
        color: {
          hex: '#00978d',
          rgba: { a: 1, b: 141, g: 151, r: 0 },
          a: 1
        },
        unit: '%'
      },
      {
        size: 100,
        type: 'hex',
        color: {
          hex: '#194d33',
          rgba: { a: 1, b: 201, g: 182, r: 243 },
          a: 1
        },
        unit: '%'
      }
    ]
  ],
  box: {
    size: {
      x: {
        unit: '%',
        size: 100
      },
      y: {
        unit: '%',
        size: 100
      }
    },
    coord: {
      x: {
        unit: '%',
        size: 50
      },
      y: {
        unit: '%',
        size: 50
      }
    }
  },
  shape: {
    size: {
      x: {
        unit: '%',
        size: 50
      },
      y: {
        unit: '%',
        size: 50
      }
    },
    coord: {
      x: {
        unit: '%',
        size: 50
      },
      y: {
        unit: '%',
        size: 50
      }
    }
  }
}

const getters = {
  gradientList() {
    return state.gradientList
  },
  previewGradient() {
    return state.previewGradient
  },
  gradientStrings() {
    return state.gradientStrings
  },
  getField,
  colors() {
    return state.colors
  }
}

const mutations = {
  updateField,
  updateMax(state, max) {
    state.canvas.x.max = max.x
    state.canvas.y.max = max.y
  },
  addShape(state, gradient) {
    state.gradientList.unshift(gradient)
    let newList = []
    state.gradientList.forEach(item => {
      newList.push(item.string)
    })
    state.gradientStrings = newList.join(', ')
  },
  undoShape(state) {
    state.gradientList.shift()
    let newList = []
    state.gradientList.forEach(item => {
      newList.unshift(item.string)
    })
    state.gradientStrings = newList.join(', ')
  },
  deleteShapes(state) {
    state.gradientList = []
    state.gradientStrings = ''
    state.previewGradient = ''
  },
  previewGradient(state, gradient) {
    state.previewGradient = gradient
  },
  removeShape(state, id) {
    // Return array without the object with the ID match
    const result = state.gradientList.filter(gradient => gradient.id !== id)
    // New gradient list of objects
    state.gradientList = result
    let newList = []
    // Join the strings of the new list together for the canvas
    state.gradientList.forEach(item => {
      newList.unshift(item.string)
    })
    state.gradientStrings = newList.join(', ')
  },
  addStop(state) {
    const newStop = [
      {
        size: 0,
        type: 'hex',
        color: {
          hex: '#00978d',
          rgba: { a: 1, b: 141, g: 151, r: 0 },
          a: 1
        },
        unit: '%'
      },
      {
        size: 100,
        type: 'hex',
        color: {
          hex: '#00978d',
          rgba: { a: 1, b: 141, g: 151, r: 0 },
          a: 1
        },
        unit: '%'
      }
    ]
    state.colors.push(newStop)
  },
  removeStop(state, remove) {
    if (state.colors.length > 1) state.colors.splice(remove, 1)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
