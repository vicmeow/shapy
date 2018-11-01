<template>
  <input
    @input="$emit('input', $event.target.value)"
    :value="value"
    type="range"
    class="slider"
    :name="name"
    :id="name"
    :min="min"
    :max="max">
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
      default: 0
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
  ::-moz-focus-inner, ::-moz-focus-outer
    border: 0
    background: $green

  input[type=range]
    -webkit-appearance: none
    width: 100%

  input[type=range]:focus
    outline: none

  input[type=range]::-webkit-slider-runnable-track
    width: 100%
    height: 2px
    cursor: pointer
    box-shadow: 0
    background: $black
    &:focus
      background: $green

  input[type=range]::-webkit-slider-thumb
    box-shadow: 0
    border: 1.4px solid $black
    height: .9em
    width: .9em
    border-radius: 100%
    background: radial-gradient(85% 85% at 50% 50%, $black 38%, $white 39%) no-repeat 50% 50% / 100% 100%
    cursor: pointer
    -webkit-appearance: none
    margin-top: -7px

  input[type=range]:focus::-webkit-slider-runnable-track
    background: $green

  input[type=range]::-moz-range-track
    width: 100%
    height: 2px
    cursor: pointer
    box-shadow: 0
    background: $black
    border: 0

  input[type=range]::-moz-range-track:focus
    background: $green

  ::-moz-range-progress
    height: 2px

  input[type=range]::-moz-range-thumb
    box-shadow: 0
    border: 1.4px solid $black
    height: .9em
    width: .9em
    border-radius: 100%
    background: radial-gradient(85% 85% at 50% 50%, $black 38%, $white 39%) no-repeat 50% 50% / 100% 100%
    cursor: pointer

  input[type=range]::-ms-track
    width: 100%
    height: 2px
    cursor: pointer
    background: transparent
    border-color: transparent
    color: transparent
    &:focus
      background: $green

  input[type=range]::-ms-fill-lower
    background: $black
    border: 0
    box-shadow: 0
    &:focus
      background: $green

  input[type=range]::-ms-thumb
    box-shadow: 0
    border: 0
    height: .9em
    width: .9em
    border-radius: 100%
    background: $black
    cursor: pointer
    height: 2px

  input[type=range]:focus::-ms-fill-lower
    background: $green

  input[type=range]:focus::-ms-fill-upper
    background: $green

</style>
