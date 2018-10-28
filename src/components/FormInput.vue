<template>
  <div class="input">
    <input 
      :class="{'range-input': type === 'range'}"
      :type="type" 
      :name="name"
      :value="value"
      :id="name"
      :min="rangeMin"
      :max="rangeMax"
      @input="$emit('input', $event.target.value)">
    <label 
      :for="name" 
      class="label">{{ label }} <template v-if="type !== 'text'">({{ value }}{{ unit }})</template></label>
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
    text-align: center

    .label
      padding-top: .2rem
  
  .range-input
    width: 100%
</style>
