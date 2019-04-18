<template>
  <div class="number-wrapper">
    <!-- Number input as a simple number input -->
    <div class="number-input">
      <input
        :value="value"
        :min="min"
        :max="max"
        type="number"
        @input="$emit('input', parseInt($event.target.value))"
      />
    </div>
    <!--Toggle for number unit, % or px -->
    <toggle-input
      :name="name"
      class="toggle-input"
      @input="$emit('input', $event)"
    />
    <!-- Number input as a range slider -->
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
    },
    defaultValue: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    handleToggle(toggle) {
      this.$emit('toggle', toggle)
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

.number-wrapper
  display: flex
  flex-wrap: wrap

.range-input
  flex-basis: 100%

.number-input, .toggle-wrapper
  flex-basis: 50%
</style>
