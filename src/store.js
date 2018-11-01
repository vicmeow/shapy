import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

const state = {
  gradientList: [],
  previewGradient: '',
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
      size: 100,
      color: '#00978D',
      unit: '%'
    },
    stop2: {
      size: 100,
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
  getField
}

const mutations = {
  updateField,
  updateMax(state, max) {
    state.canvas.x.max = max.x
    state.canvas.y.max = max.y
  },
  addGradient(state, gradient) {
    state.gradientList.unshift(gradient)
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
