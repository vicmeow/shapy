<template>
  <div class="number-wrapper">
    <label
      :for="name + '-id'"
      class="label">{{ label }}:</label>
    <div class="number-edit">
      <input
        @input="$emit('input', $event.target.value)"
        class="label-number"
        :value="value"
        type="text"
        :name="name"
        :id="name + '-id'"
        :min="min"
        :max="max">
      <slot name="unit"/>
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
      type: Number,
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
  }
}
</script>

<style lang="sass">
  .number-wrapper
    display: flex
    align-items: center
    justify-content: space-between

    .label-number
      display: flex
      padding: 0
      min-width: 0
      max-width: 2.9rem
      text-align: right
      padding: 0 .2rem
      border: 0
      margin: 0

  .number-edit
    display: flex
    justify-content: flex-end
</style>
