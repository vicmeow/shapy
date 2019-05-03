<template>
  <div class="number-wrapper">
    <label
      id="`${name}-label`"
      :class="`label number-label ${name}-label`"
      :for="`${name}-label`"
    >
      {{ name }}
    </label>
    <!-- Number input as a simple number input -->
    <div class="number-input-wrapper">
      <input
        :id="`${name}-input-number`"
        v-model.number="input"
        class="number-input"
        aria-labelledby=""
        :min="field.defaultUnit ? 0 : min / 2"
        :max="field.defaultUnit ? 100 : field.max"
        type="number"
        @input="handleInput($event.target.value)"
      />
      <!-- <span class="unit">{{ field.defaultUnit ? '%' : 'px' }}</span> -->
    </div>
    <!-- Number input as a range slider -->
    <input
      :id="`${name}-input-range`"
      v-model.number="input"
      class="range-input"
      :aria-labelledby="`${name}-label`"
      :min="min"
      :max="field.defaultUnit ? 100 : field.max"
      type="range"
      @input="handleInput($event.target.value)"
    />
    <!--Toggle for number unit, % or px -->
    <toggle-input
      v-if="typeof field.defaultUnit === 'boolean'"
      :name="name"
      @input="handleToggle"
    />
  </div>
</template>

<script>
import ToggleInput from './ToggleInput'
export default {
  components: {
    ToggleInput
  },
  props: {
    name: {
      type: String,
      required: false
    },
    field: {
      type: Object,
      required: true,
      default: () => {}
    },
    min: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      input: 0,
      toggle: true
    }
  },
  computed: {
    synced() {
      // Sync the % and px values to match each other
      return this.field.defaultUnit
        ? Math.round((this.input * this.field.max) / 100)
        : Math.round((this.input / this.field.max) * 100)
    },
    active() {
      if (this.field.active) return this.field.active
      return false
    }
  },
  watch: {
    input() {
      // Make sure the input value isn't over its max value
      this.checkMax()
    },
    active() {
      if (this.field.active) {
        this.input = this.field.active
      }
    }
  },
  mounted() {
    if (this.field.pct || this.field.px) {
      // Set the input as the default value from the store
      // based on default unit
      this.input = this.field.defaultUnit ? this.field.pct : this.field.px
    } else {
      this.input = this.field.active
    }
  },
  methods: {
    handleToggle() {
      this.toggle = !this.toggle
      if (this.field.pct || this.field.px) {
        this.toggle
          ? (this.input = this.field.pct)
          : (this.input = this.field.px)
        this.$emit('input', {
          ...this.field,
          defaultUnit: this.toggle
        })
      }
    },
    checkMax() {
      if (this.field.defaultUnit && this.input > 100) {
        this.input = 100
      } else if (!this.field.defaultUnit && this.input > this.field.max) {
        this.input = this.field.max
      }
    },
    handleInput(value) {
      if (this.field.pct || this.field.px) {
        this.field.defaultUnit
          ? this.$emit('input', {
              ...this.field,
              pct: this.input,
              px: this.synced
            })
          : this.$emit('input', {
              ...this.field,
              pct: this.synced,
              px: this.input
            })
      } else {
        this.$emit('input', {
          ...this.field,
          active: this.input
        })
      }
    }
  }
}
</script>

<style lang="sass">

.number-wrapper
  display: flex
  flex-wrap: wrap

.number-label
  text-transform: capitalize
  margin-right: 1rem

.number-input-wrapper
  display: flex
  min-width: 0
  flex-grow: 1
  justify-content: flex-end

.number-input
  max-width: 50px
  text-align: right

.unit
  margin-left: .2rem

.toggle-wrapper
  flex-shrink: 0
  margin: auto
  padding-bottom: .5rem

.range-input
  width: 100%

input[type=number]
  -moz-appearance: textfield
  appearance: textfield
  margin: 0
  &:focus
    border-bottom: 1px solid $darkpink

input[type=number]:invalid
  box-shadow: none

/* Slider style resets */
input[type=range]
  -webkit-appearance: none
  width: 100%
  background: transparent

input[type=range]::-webkit-slider-thumb
  -webkit-appearance: none

input[type=range]:focus
  outline: none

input[type=range]::-ms-track
  width: 100%
  cursor: pointer
  background: transparent
  border-color: transparent
  color: transparent

/* THUMB STYLES */
// Firefox styles
input[type=range]::-moz-range-thumb
  border: 1.5px solid $black
  height: 20px
  width: 5px
  border-radius: 1rem
  background: #ffffff
  cursor: pointer

// Webkit/blink styles
input[type=range]::-webkit-slider-thumb
  -webkit-appearance: none
  border: 1px solid $black
  height: 23px
  width: 8px
  border-radius: 1rem
  background: #ffffff
  cursor: pointer
  margin-top: -12px
  box-shadow: none

// IE 🤢
input[type=range]::-ms-thumb
  border: 1.5px solid $black
  height: 23px
  width: 8px
  border-radius: 1rem
  background: #ffffff
  cursor: pointer
  box-shadow: none

/* Track styles */
// Webkit styles
input[type=range]::-webkit-slider-runnable-track
  width: 100%
  height: 2px
  cursor: pointer
  background: $black
  border-radius: 1rem
  border: 1px solid $black
  margin: 12px 0

input[type=range]::-moz-range-track
  width: 100%
  height: 2px
  cursor: pointer
  background: $black
  border-radius: 1rem

input[type=range]::-moz-focus-outer
  border: 0

// Focus styles
input[type=range]:focus::-webkit-slider-thumb
  background: $darkpink

input[type=range]:focus::-moz-range-thumb
  background: $darkpink
</style>
