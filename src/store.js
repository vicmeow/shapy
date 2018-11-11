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
    {
      id: 1,
      start: {
        size: 0,
        type: 'hex',
        color: {
          hex: '#00978d',
          rgba: { a: 1, b: 141, g: 151, r: 0 },
          a: 1
        },
        unit: '%'
      },
      stop: {
        size: 100,
        type: 'hex',
        color: {
          hex: '#f3b6c9',
          rgba: { a: 1, b: 201, g: 182, r: 243 },
          a: 1
        },
        unit: '%'
      }
    }
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
  boxCombined() {
    const boxWidth = state.box.size.x.size + state.box.size.x.unit
    const boxHeight = state.box.size.y.size + state.box.size.y.unit
    const boxX = state.box.coord.x.size + state.box.coord.x.unit
    const boxY = state.box.coord.y.size + state.box.coord.y.unit
    const boxSize = boxWidth + ' ' + boxHeight
    const boxCoord = boxX + ' ' + boxY
    return `${boxCoord} / ${boxSize}`
  },
  shapeCombined() {
    const shapeWidth = state.shape.size.x.size + state.shape.size.x.unit
    const shapeHeight = state.shape.size.y.size + state.shape.size.y.unit
    const shapeX = state.shape.coord.x.size + state.shape.coord.x.unit
    const shapeY = state.shape.coord.y.size + state.shape.coord.y.unit
    const shapeSize = shapeWidth + ' ' + shapeHeight
    const shapeCoord = shapeX + ' ' + shapeY
    return `${shapeSize} at ${shapeCoord}`
  },
  colorStops() {
    const stops = state.colors.map(color => {
      let startColor
      let stopColor
      const startSize = color.start.size + color.start.unit
      const stopSize = color.stop.size + color.stop.unit
      // START VALUES
      if (color.start.color.type === 'rgba') {
        const rgba = color.start.color.rgba
        startColor = `rgba(${rgba.r},${rgba.g},${rgba.b},${
          rgba.a
        }) ${startSize}`
      } else {
        startColor = `${color.start.color.hex} ${startSize}`
      }
      // STOP VALUES
      if (color.stop.color.type === 'rgba') {
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
  addStop(state, { index, newStop }) {
    state.colors.splice(index, 0, newStop)
  },
  removeStop(state, id) {
    const result = state.colors.filter(pair => pair.id !== id)
    state.colors = result
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
