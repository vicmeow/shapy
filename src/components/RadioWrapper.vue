<template>
  <div class="radio-wrapper">
    <input
      :name="name"
      :value="label"
      :id="label + '-id'"
      :checked="checked"
      class="radio"
      type="radio"
      @change="$emit('input', $event.target.value)"
    />
    <label :for="label + '-id'" class="label"
      >{{ label }}{{ description }}</label
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: ''
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
  },
  computed: {
    ...mapGetters({
      general: 'general/general'
    }),
    checked() {
      if (
        this.label === this.general.type ||
        this.label === this.general.repeat
      )
        return true
      else false
    }
  }
}
</script>

<style lang="sass">
.radio-wrapper
  position: relative
  display: flex
  flex-wrap: wrap
  flex-basis: 33.33%
  margin: .3rem 0
  align-items: center

@media screen and (max-width: 768px)
  .radio-wrapper
    flex-basis: 100%

label
  display: flex
  align-items: center

input[type="radio"].radio, input[type="checkbox"].radio
  position: absolute
  height: 100%
  width: 100%
  opacity: 0
  z-index: 2

input[type="radio"].radio + label::before, input[type="checkbox"].radio + label::before
  position: relative
  content: ''
  bottom: 0
  display: inline-block
  position relative
  height: 15px
  width: 15px
  border: 1.4px solid $black
  border-radius: 50%
  margin-right: .5rem

input[type="radio"].radio:checked + label::before, input[type="checkbox"].radio:checked + label::before
  background: radial-gradient(85% 85% at 50% 50%, $black 38%, $white 39%) no-repeat 50% 50% / 100% 100%
</style>
