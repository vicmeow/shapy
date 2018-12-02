<template>
  <div class="size-wrapper">
    <slot name="color"/>
    <label
      :for="name + '-id'"
      class="label">{{ label }}:</label>
    <div class="size-edit">
      <input
        @input="$emit('input', $event.target.value)"
        class="size-input"
        :value="percentCheck(value)"
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
  methods: {
    percentCheck(value) {
      if (this.unit === '%' && value > 100) {
        return 100
      } else {
        return value
      }
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
      max-width: 2.9em
      text-align: right
      padding: 0 .2em
      border: 0
      margin: 0

  .size-edit
    display: flex
    justify-content: flex-end
    margin-left: auto
</style>
