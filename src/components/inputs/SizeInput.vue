<template>
  <div class="size-wrapper">
    <slot name="color" />
    <label :for="name + '-id'" class="label">{{ label }}:</label>
    <div class="size-edit">
      <input
        :value="checkValue"
        :name="name"
        :id="name + '-id'"
        :min="min"
        :max="max"
        class="size-input"
        type="number"
        @input="emitValue"
      />
      <slot name="unit" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number | String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    unit: {
      type: String,
      required: true
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
    checkValue() {
      return this.unit === '%' && this.value > 100
        ? 100
        : this.unit === 'px' && this.value > this.max
        ? this.max
        : this.value
    }
  },
  methods: {
    emitValue(event) {
      event.target.value >= this.max
        ? this.$emit('input', this.max)
        : this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="sass">
.size-wrapper
  display: flex
  align-items: center
  width: 100%
  margin-bottom: .2em

  .size-input
    display: flex
    padding: 0
    min-width: 0
    width: 99%
    flex: 1
    text-align: right
    padding: 0 .2em
    border: 0
    margin: 0

.size-edit
  display: flex
  justify-content: flex-end
  margin-left: auto
  flex-basis: 1
</style>
