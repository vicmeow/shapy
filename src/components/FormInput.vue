<template>
  <div 
    class="input-wrapper">
    <label 
      :for="name" 
      class="label">{{ label }}
    <template v-if="type === 'number' || type === 'range'">({{ value + unit }})</template></label>
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
      default: ''
    }
  }
}
</script>

<style lang="sass">

  .input-wrapper
    position: relative
    display: flex

  input
    font-family: $font
    font-size: 1rem
    color: $black
    border: 0
    padding: .5rem 1rem

</style>
