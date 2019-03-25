<template>
  <div class="number-wrapper">
    <div class="range-input">
      <input
        :name="`input`"
        :value="value"
        :min="min"
        :max="max"
        type="range"
        @input="$emit('input', parseInt($event.target.value))"
      />
    </div>
    <div class="number-input">
      <input
        :value="value"
        :min="min"
        :max="max"
        type="number"
        @input="$emit('input', parseInt($event.target.value))"
      />
    </div>
    <toggle-input
      :name="name"
      class="toggle-input"
      @change="$emit('change', $event)"
    />
  </div>
</template>

<script>
import ToggleInput from '@/components/inputs/ToggleInput'
export default {
  components: {
    ToggleInput
  },
  props: {
    name: {
      type: String,
      required: true
    },
    toggle: {
      type: Array,
      required: false,
      default: () => {}
    },
    value: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      required: false,
      default: 0
    }
  }
}
</script>

<style lang="sass">

input
  font-size: 1rem

input[type="range"],
input[type="number"]
  width: 100%

.range-input
  width: 100%

.number-input, .toggle-wrapper
  display: inline-block
  width: 50%
</style>
