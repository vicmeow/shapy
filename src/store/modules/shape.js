import { getField, updateField } from 'vuex-map-fields'

const state = {
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
  getField,
  shape() {
    return state.shape
  },
  shapeCombined() {
    const shapeWidth = state.shape.size.x.size + state.shape.size.x.unit
    const shapeHeight = state.shape.size.y.size + state.shape.size.y.unit
    const shapeX = state.shape.coord.x.size + state.shape.coord.x.unit
    const shapeY = state.shape.coord.y.size + state.shape.coord.y.unit
    const shapeSize = shapeWidth + ' ' + shapeHeight
    const shapeCoord = shapeX + ' ' + shapeY
    return `${shapeSize} at ${shapeCoord}`
  }
}

const mutations = {
  updateField
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
