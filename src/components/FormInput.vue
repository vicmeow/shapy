<template>
  <div 
    class="input-wrapper">
    <label 
      :for="name" 
      class="label">{{ label }} <template v-if="type === 'range'">({{ value }}</template><template v-if="type !== 'text'">{{ unit }})</template></label>
    <input
      :type="type"
      :name="name"
      :value="value"
      :id="name"
      :max="range.max"
      @input="$emit('input', $event.target.value)">
      <!-- <input
      v-else
      :type="type"
      :name="name"
      :value="value"
      :id="name"
      @input="$emit('input', $event.target.value)"> -->
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
    range: {
      type: Object,
      required: false,
      default() {
        return {
          min: 0,
          max: 100
        }
      }
    },
    unit: {
      type: String,
      required: false,
      default: 'px'
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
    display: flex
    flex-direction: column-reverse

    label
      text-align: center
      margin-top: .2rem

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
