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
      size: 50,
      max: false
    },
    y: {
      unit: '%',
      size: 50,
      max: false
    }
  },
  gradient: {
    type: 'linear-gradient',
    repeat: 'no-repeat'
  },
  colors: {
    stop1: {
      size: 50,
      color: '#00978D',
      unit: '%'
    },
    stop2: {
      size: 50,
      color: 'transparent',
      unit: '%'
    }
  },
  box: {
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
  },
  shape: {
    degree: {
      unit: 'deg',
      size: 0
    },
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
  getField
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
      newList.unshift(item.string)
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
  },
  previewGradient(state, gradient) {
    state.previewGradient = gradient
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
