import { getField, updateField } from 'vuex-map-fields'

const state = {
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
  }
}

const getters = {
  getField,
  box() {
    const boxWidth = state.box.size.x.size + state.box.size.x.unit
    const boxHeight = state.box.size.y.size + state.box.size.y.unit
    const boxX = state.box.coord.x.size + state.box.coord.x.unit
    const boxY = state.box.coord.y.size + state.box.coord.y.unit
    const boxSize = boxWidth + ' ' + boxHeight
    const boxCoord = boxX + ' ' + boxY
    return `${boxCoord} / ${boxSize}`
  }
}

const mutations = {
  updateField,
  updateBox(state, box) {
    state.box = box
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
