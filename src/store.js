import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

const state = {
  gradientList: [],
  previewGradient: '',
  comment: 'This is a comment',
  canvas: {
    x: {
      unit: 'px',
      size: 500
    },
    y: {
      unit: 'px',
      size: 500
    }
  },
  gradient: {
    type: 'linear-gradient',
    repeat: 'no-repeat'
  },
  box: {
    color: 'transparent',
    size: {
      x: {
        unit: 'px',
        size: 250
      },
      y: {
        unit: 'px',
        size: 250
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
    color: '#00978D',
    deg: 0,
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
