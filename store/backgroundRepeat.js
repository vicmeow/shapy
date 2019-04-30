import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  active: 'no-repeat',
  values: [
    {
      value: 'no-repeat',
      description: "Don't repeat the gradient."
    },
    {
      value: 'repeat',
      description:
        'Repeat the gradient to cover the canvas and clip it if necessary.'
    },
    {
      value: 'repeat-x',
      description: 'Repeat the gradient along the x axis.'
    },
    {
      value: 'repeat-y',
      description: 'Repeat the gradient along the y axis.'
    },
    {
      value: 'space',
      description:
        'Repeat the gradient as many times as possible without clipping it. Ignores background-position unless the gradient can be displayed without clipping.'
    },
    {
      value: 'round',
      description:
        'Stretch the gradient to fit as many repetitions as possible without clipping and leaving no caps.'
    }
  ]
})

export const getters = {
  getField
}

export const mutations = {
  updateField
}
