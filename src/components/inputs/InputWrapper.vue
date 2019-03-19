<template>
  <div class="input-wrapper">
    <transition v-if="field.color" name="appear" tag="div">
      <color-picker
        :aria-label="`color of ${name}`"
        :color="field.color"
        v-model="colorInput"
        @input="emitInput"
      />
    </transition>
    <label :for="`${label}-input`" class="label">{{ label }}</label>
    <!-- Each input has: text, number and range -->
    <input
      :max="field.defaultUnit ? 100 : field.max"
      :aria-label="`${name} in ${field.defaultUnit ? 'percentage' : 'pixels'}`"
      :name="`${label}-input`"
      v-model.number="input"
      :class="`${label}-number-input`"
      class="number"
      type="number"
      @input="emitInput"
    />
    <input
      :aria-label="`${name} in ${field.defaultUnit ? 'percentage' : 'pixels'}`"
      :name="`${label}-unit`"
      :value="field.defaultUnit ? 'percentage' : 'pixels'"
      :class="`${label}-checkbox-input`"
      class="checkbox"
      type="checkbox"
      @change="toggleUnit"
    />
    <span id="unit" class="unit" v-text="field.defaultUnit ? '%' : 'px'"></span>
    <input
      :max="field.defaultUnit ? 100 : field.max"
      :aria-label="`${name} in ${field.defaultUnit ? 'percentage' : 'pixels'}`"
      :name="`${label}-input`"
      v-model.number="input"
      :class="`${label}-range-input`"
      class="range"
      type="range"
      @input="emitInput"
    />
  </div>
</template>

<script>
import ColorPicker from '@/components/inputs/ColorPicker'
export default {
  name: 'InputWrapper',
  components: {
    ColorPicker
  },
  props: {
    label: {
      type: String,
      required: true,
      default: 'Label'
    },
    name: {
      type: String,
      required: true,
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
      input: null,
      colorInput: null
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
    this.input = this.field.defaultUnit ? this.field.pct : this.field.px
    if (this.field.color) this.colorInput = this.field.color
  },
  methods: {
    toggleUnit(e) {
      // Toggle unit (%/px)
      this.field.defaultUnit = e.target.checked
      // Check the max value
      this.checkMax()
    },
    checkMax() {
      return this.field.defaultUnit && this.input > 100
        ? (this.input = 100)
        : !this.field.defaultUnit && this.input > this.field.max
        ? (this.input = this.field.max)
        : this.input
    },
    parseInput(input) {
      return parseInt(input)
    },
    emitInput(value) {
      // Make sure the input is a number
      // Make sure the value isn't over the max value
      const newValue = this.checkMax(this.parseInput(value))
      // Emit the value based on what the default unit is
      if (this.colorInput) {
        const color = this.colorInput
        const type = this.colorInput.source === 'rgba' ? 'rgba' : 'hex'
        //console.log(type)
        this.field.defaultUnit
          ? this.$emit('input', {
              ...this.field,
              pct: newValue,
              type: type,
              color: color
            })
          : this.$emit('input', {
              ...this.field,
              px: newValue,
              type: type,
              color: color
            })
      } else {
        this.field.defaultUnit
          ? this.$emit('input', { ...this.field, pct: newValue })
          : this.$emit('input', { ...this.field, px: newValue })
      }
    }
  }
}
</script>
