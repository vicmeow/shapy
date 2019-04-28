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
        class="number-input"
        :id="`${name}-input-number`"
        v-model.number="input"
        aria-labelledby=""
        :min="field.defaultUnit ? 0 : min / 2"
        :max="field.defaultUnit ? 100 : field.max"
        type="number"
        @input="handleInput($event.target.value)"
      />
      <!--Toggle for number unit, % or px -->
      <toggle-input
        :name="field.defaultUnit ? '%' : 'px'"
        class="toggle-input"
        @input="handleToggle"
      />
    </div>
    <!-- Number input as a range slider -->
    <input
      class="range-input"
      :id="`${name}-input-range`"
      v-model.number="input"
      :aria-labelledby="`${name}-label`"
      :min="min"
      :max="field.defaultUnit ? 100 : field.max"
      type="range"
      @input="handleInput($event.target.value)"
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
    }
  },
  watch: {
    input() {
      // Make sure the input value isn't over its max value
      this.checkMax()
    }
  },
  mounted() {
    // Set the input as the default value from the store
    // based on default unit
    this.input = this.field.defaultUnit ? this.field.pct : this.field.px
  },
  methods: {
    handleToggle() {
      this.toggle = !this.toggle
      this.toggle ? (this.input = this.field.pct) : (this.input = this.field.px)
      this.$emit('input', {
        ...this.field,
        defaultUnit: this.toggle
      })
    },
    checkMax() {
      if (this.field.defaultUnit && this.input > 100) {
        this.input = 100
      } else if (!this.field.defaultUnit && this.input > this.field.max) {
        this.input = this.field.max
      }
    },
    handleInput(value) {
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
  max-width: 80px
  text-align: right

.toggle-wrapper
  flex-shrink: 0

.range-input
  width: 100%
</style>
