<template>
  <div class="radio-wrapper">
    <input
      class="radio"
      type="radio"
      :name="name"
      :value="label"
      @change="$emit('change', $event.target.value)"
      :id="'id-'+label"
      :checked="label === value">
    <label
      class="label radio-label"
      :for="label">{{ label }}</label>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    label: {
      type: String,
      required: true,
      default: 'linear'
    },
    name: {
      type: String,
      required: true,
      default: 'name'
    },
    value: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="sass">

  .radio-wrapper
    position: relative

  input[type="radio"]
    position: absolute
    height: 100%
    width: 100%
    opacity: 0
    z-index: 2

  .radio-wrapper
    display: flex
    margin: .5rem 0
  
  .radio-label
    display: flex
    align-items: center

  input[type="radio"] + .radio-label::before
    position: relative
    content: ''
    bottom: 0
    display: inline-block
    position relative
    height: 16px
    width: 16px
    border: 1.5px solid $black
    border-radius: 50%
    margin-right: .5rem
  
  input[type="radio"]:checked + .radio-label::before
    background: radial-gradient(85% 85% at 50% 50%, $black 40%, $white 41%) no-repeat 50% 50% / 100% 100%

</style>
