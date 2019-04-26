export const state = () => ({
  list: [],
  editing: false
})

export const getters = {
  gradients(state) {
    return state.list.map(gradient => gradient.processed)
  },
  string(state) {
    return state.list
      .map(gradient => gradient.processed.background)
      .reverse()
      .join(', ')
  }
}

export const mutations = {
  ADD_GRADIENT(state, gradient) {
    state.list.push(gradient)
  },
  EDIT_GRADIENT(state, id) {
    state.list.filter(gradient => gradient.id !== id)
  },
  INSERT_GRADIENT(state, { gradient, index }) {
    // Insert gradient
  },
  UPDATE_STATUS(state, status) {
    state.editing = status
  }
}

export const actions = {
  addGradient({ commit, rootState, rootGetters }) {
    // Copy all values currently in the state
    const gradient = {
      id: Math.random() // ID for our gradient
        .toString(36)
        .substr(2, 9),
      raw: {
        position: rootState.backgroundPosition,
        size: rootState.backgroundSize,
        repeat: rootState.backgroundRepeat,
        image: {
          type: rootState.backgroundImage.type.active,
          repeating: rootState.backgroundImage.repeating,
          angle: rootState.backgroundImage.angle.active,
          comment: rootState.backgroundImage.comment
        },
        colorStops: rootGetters['colorStops/sortedStops']
      },
      processed: {
        background: rootGetters.background,
        image: rootGetters.backgroundImage,
        size: rootGetters.backgroundSize,
        position: rootGetters.backgroundPosition,
        repeat: rootGetters.backgroundRepeat
      }
    }
    const copiedGradient = JSON.parse(JSON.stringify(gradient))
    commit('ADD_GRADIENT', copiedGradient)
  },
  editGradient({ commit, dispatch, state }, id) {
    // Click to edit gradient
    // Find gradient in list with ID
    //    - Remove it and reinsert?
    //    - make it active and save in same spot?
    //        - Save index in list
    //        - reinsert at same index
    // Change add to canvas button text to save changes
    // Dispatch action to set raw gradient data as the active gradient
    // const index = state.list.findIndex(gradient => gradient.id === id)
    // const gradient = state.list.find(gradient => gradient.id === id)
    // eslint-disable-next-line
    console.log(id)
    // commit('EDIT_GRADIENT', id)
    // commit('UPDATE_STATUS', index)
    // dispatch('backgroundImage/editGradient', gradient.raw.image, { root: true })
    // dispatch('backgroundPosition/editGradient', gradient.raw.position, { root: true })
    // dispatch('backgroundSize/editGradient', gradient.raw.size, { root: true })
    // dispatch('backgroundRepeat/editGradient', gradient.raw.repeat, { root: true })
    // dispatch('colorStops/editGradient', gradient.colorStops, { root: true })
  },
  insertGradient({ commit }, { gradient, index }) {
    commit('INSERT_GRADIENT', { gradient, index })
    commit('updateStatus', false)
  }
}
