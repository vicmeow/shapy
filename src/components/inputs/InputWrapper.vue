<template>
  <div class="input-wrapper">
    <label :for="`${label}-input`" class="label">{{ label }}</label>
    <slot name="color" />
    <slot>
      <number-input
        v-if="field"
        v-model.number="input"
        :max="field.defaultUnit ? 100 : field.max"
        :min="min"
        :name="name"
        @input="emitValue"
        @change="toggleUnit"
      />
    </slot>
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
      gradientType: null
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
      this.field.defaultUnit
        ? (this.input = this.field.pct)
        : (this.input = this.field.px)
      this.checkMax()
    },
    checkMax() {
      if (this.field.defaultUnit) {
        if (this.input > 100) {
          this.input = 100
          this.$emit('input', { ...this.field, pct: 100, px: this.synced })
        } else {
          const input = this.input
          this.$emit('input', { ...this.field, pct: input, px: this.synced })
        }
      } else {
        if (this.input > this.field.max) {
          const max = this.field.max
          this.input = max
          this.$emit('input', { ...this.field, px: max, pct: this.synced })
        } else {
          const input = this.input
          this.$emit('input', { ...this.field, px: input, pct: this.synced })
        }
      }
    },
    emitValue(value) {
      const newValue = parseInt(value)

      if (this.field) {
        this.field.defaultUnit
          ? this.$emit('input', {
              ...this.field,
              pct: newValue,
              px: this.synced
            })
          : this.$emit('input', {
              ...this.field,
              px: newValue,
              pct: this.synced
            })
      }
    }
  }
}
</script>

<style lang="sass" scoped>

.input-wrapper
  display: flex
  flex-wrap: wrap
  border: 1px solid red
  margin-right: 1em

.label
  flex-basis: 100%
  &::first-letter
    text-transform: capitalize
</style>
