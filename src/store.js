import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  gradientString: '',
  gradientList: [],
  gradientPreview: '',
  canvas: {
    x: {
      unit: 'px',
      x: 500
    },
    y: {
      unit: 'px',
      y: 500
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
        x: 500
      },
      y: {
        unit: 'px',
        y: 500
      }
    },
    coord: {
      x: {
        unit: '%',
        x: 100
      },
      y: {
        unit: '%',
        y: 100
      }
    }
  },
  shape: {
    color: 'transparent',
    size: {
      x: {
        unit: '%',
        x: 100
      },
      y: {
        unit: '%',
        y: 100
      }
    },
    coord: {
      x: {
        unit: '%',
        x: 100
      },
      y: {
        unit: '%',
        y: 100
      }
    }
  }
}

const getters = {
  gradientString() {
    return state.gradientString
  },
  gradientList() {
    return state.gradientList
  },
  gradientPreview() {
    return state.gradientPreview
  },
  canvas() {
    return state.canvas
  },
  gradient() {
    return state.gradient
  },
  box() {
    return state.box
  },
  shape() {
    return state.shape
  }
}

const mutations = {}

const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
