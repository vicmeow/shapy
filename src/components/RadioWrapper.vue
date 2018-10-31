<template>
  <div class="radio-wrapper">
    <input
      class="radio"
      type="radio"
      :name="name"
      :value="label"
      :id="label+ '-id'"
      :checked="checked"
      @input="$emit('input', $event.target.value)">
    <label
      :for="label + '-id'"
      class="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    label: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    max: {
      type: Number,
      required: false,
      default: 100
    }
  }
}
</script>

<style lang="sass">
  .radio-wrapper
    position: relative
    display: flex
    flex-basis: 50%
    margin: .3rem 0

    label
      display: flex
      align-items: center

  input[type="radio"].radio
    position: absolute
    height: 100%
    width: 100%
    opacity: 0
    z-index: 2

  input[type="radio"].radio + label::before
    position: relative
    content: ''
    bottom: 0
    display: inline-block
    position relative
    height: 17px
    width: 17px
    border: 1.4px solid $black
    border-radius: 50%
    margin-right: .5rem

  input[type="radio"].radio:hover ++ label
    border: 1px solid red

  input[type="radio"].radio:checked + label::before
    background: radial-gradient(85% 85% at 50% 50%, $green 38%, $white 39%) no-repeat 50% 50% / 100% 100%
</style>
