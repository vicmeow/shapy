<template>
  <div class="number-wrapper">
    <!-- Number input as a simple number input -->
    <div class="number-input">
      <input
        :id="`${name}-input-number`"
        v-model.number="input"
        :min="field.defaultUnit ? 0 : min / 2"
        :max="field.defaultUnit ? 100 : field.max"
        type="number"
        @input="handleInput($event.target.value)"
      />
    </div>
    <!--Toggle for number unit, % or px -->
    <toggle-input :name="name" class="toggle-input" @input="handleToggle" />
    <!-- Number input as a range slider -->
    <div class="range-input">
      <input
        :id="`${name}-input-range`"
        v-model.number="input"
        :min="min"
        :max="field.defaultUnit ? 100 : field.max"
        type="range"
        @input="handleInput($event.target.value)"
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
