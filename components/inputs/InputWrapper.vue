<template>
  <div class="input-wrapper">
    <slot name="label" />
    <!-- Slot for only a toggle input -->
    <slot>
      <!-- Default content when no slot -->
      <number-input
        v-if="field"
        v-model.number="input"
        :max="field.defaultUnit ? 100 : field.max"
        :min="min"
        :name="name"
        :default-value="field.defaultUnit"
        @input="emitValue"
        @toggle="handleToggle"
      />
    </slot>
  </div>
</template>

<script>
import NumberInput from '@/components/inputs/NumberInput'
export default {
  name: 'InputWrapper',
  components: {
    NumberInput
  },
  props: {
    label: {
      type: String,
      required: false,
      default: 'Label'
    },
    name: {
      type: String,
      required: true
    },
    field: {
      type: Object,
      required: false,
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
      colorInput: null,
      gradientType: null,
      toggle: true
    }
  },
  computed: {
    synced() {
      // Sync the % and px values to match each other
      const value = parseInt(this.input)
      if (this.field) {
        return this.field.defaultUnit
          ? Math.round((value * this.field.max) / 100)
          : Math.round((value / this.field.max) * 100)
      }
      return false
    }
  },
  watch: {
    input() {
      // Make sure the input value isn't over its max value
      this.checkMax()
    }
  },
  mounted() {
    if (this.field) {
      // Set the input as the default value from the store,
      // based on default unit
      this.input = this.field.defaultUnit ? this.field.pct : this.field.px
      if (this.field.color) this.colorInput = this.field.color
    }
  },
  methods: {
    handleToggle(value) {
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
    emitValue(value) {
      if (typeof value === 'boolean') {
        this.toggle = value
        value ? (this.input = this.field.pct) : (this.input = this.field.px)
        this.$emit('input', {
          ...this.field,
          defaultUnit: value
        })
      }
      if (this.field && typeof value !== 'boolean') {
        this.field.defaultUnit
          ? this.$emit('input', {
              ...this.field,
              pct: value,
              px: this.synced
            })
          : this.$emit('input', {
              ...this.field,
              pct: this.synced,
              px: value
            })
      }
    }
  }
}
</script>

<style lang="sass">

.input-wrapper
  display: flex

label
  font-family: 'Rubik', sans-serif
  color: $black
  font-size: 1em

.label
  flex-basis: 100%
  &::first-letter
    text-transform: capitalize
</style>
