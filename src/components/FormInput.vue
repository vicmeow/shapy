<template>
  <div 
    class="input-wrapper" 
    :class="{'canvas-input': name === 'canvas-width'}">
    <label 
      :for="name" 
      class="label">{{ label }} <template v-if="type !== 'text'">({{ value }}{{ unit }})</template></label>
    <input
      v-if="type === 'range'"
      :class="{'range-input': type === 'range'}"
      :type="type"
      :name="name"
      :value="value"
      :id="name"
      :min="rangeMin"
      :max="rangeMax"
      @input="$emit('input', $event.target.value)">
    <input
      v-else
      :type="type"
      :name="name"
      :value="value"
      :id="name"
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
      default: 100
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

  .input
    display: flex
    flex-direction: column
    flex-basis: 50%
    padding: 0 1rem

    input
      text-align: right
      width: 100px
  
  .label
    min-width: 100px

  .range-input
    width: 100%
</style>
