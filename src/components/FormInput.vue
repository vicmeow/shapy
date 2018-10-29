<template>
  <div 
    class="input-wrapper">
    <label 
      :for="name" 
      class="label">{{ label }} <template v-if="type !== 'text'">({{ value }}{{ unit }})</template></label>
    <input
      :type="type"
      :name="name"
      :value="value"
      :id="name"
      :min="rangeMin"
      :max="rangeMax"
      @input="$emit('input', $event.target.value)">
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
      default: 'Label'
    },
    type: {
      type: String,
      required: false,
      default: ''
    },
    name: {
      type: String,
      required: true,
      default: 'name'
    },
    value: {
      type: String | Number,
      required: false,
      default: ''
    },
    rangeMin: {
      type: Number,
      required: false,
      default: 0
    },
    rangeMax: {
      type: Number,
      required: false,
      default: 500
    },
    unit: {
      type: String,
      required: false,
      default: '%'
    }
  }
}
</script>

<style lang="sass">

  input
    font-family: $font
    font-size: 1rem
    color: $black
    border: 0
    padding: .5rem 1rem
    width: 100%
  
  .fieldset-canvas 
    flex-direction: row
    flex-wrap: no-wrap
    justify-content: space-around

  .canvas-size
    max-width: 50%

    label
      display: none

    input
      border-radius: 2rem
      display: block
      font-size: 1.2rem
      max-width: 150px
      text-align: center
      border: 1px solid $black
      &:focus
        border: 1px solid $green

</style>
