<template>
  <div class="input-wrapper">
    <label :for="`${label}-input`" class="label">{{ label }}</label>
    <slot>
      <number-input
        v-if="field"
        v-model.number="input"
        :max="field.defaultUnit ? 100 : field.max"
        @input="emitValue"
        @change="toggleUnit"
      />
    </slot>
    <slot name="color" />
  </div>
</template>

<script>
import ColorPicker from '@/components/inputs/ColorPicker'
import NumberInput from '@/components/inputs/NumberInput'
import ToggleInput from '@/components/inputs/ToggleInput'
export default {
  name: 'InputWrapper',
  components: {
    ColorPicker,
    ToggleInput,
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
      required: false,
      default: 'Name'
    },
    field: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      input: 0,
      colorInput: null,
      gradientType: null
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
    toggleUnit(value) {
      this.field.defaultUnit = value
      this.checkMax()
    },
    checkMax() {
      if (this.field.defaultUnit) {
        if (this.input > 100) {
          this.input = 100
          this.$emit('input', { ...this.field, pct: 100 })
        } else {
          const input = this.input
          this.$emit('input', { ...this.field, pct: input })
        }
      } else {
        if (this.input > this.field.max) {
          const max = this.field.max
          this.input = max
          this.$emit('input', { ...this.field, px: max })
        } else {
          const input = this.input
          this.$emit('input', { ...this.field, px: input })
        }
      }
    },
    emitValue(value) {
      const newValue = parseInt(value)
      if (this.field) {
        this.field.defaultUnit
          ? this.$emit('input', { ...this.field, pct: newValue })
          : this.$emit('input', { ...this.field, px: newValue })
      }
    }
  }
}
</script>

<style lang="sass" scoped>

.input-wrapper
  display: flex
  flex-wrap: wrap
  margin-bottom: 1em

  > .label
    flex-basis: 100%
    &::first-letter
      text-transform: capitalize

  .range
    flex-basis: 100%
</style>
