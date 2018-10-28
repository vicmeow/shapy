<template>
  <div class="input-wrapper checkbox-wrapper">
    <input
      class="radio-input"
      type="checkbox"
      :name="name"
      :value="label"
      @change="$emit('change', $event.target.checked)"
      :id="name">
    <label
      class="label radio-label"
      :for="name">{{ label }}</label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    label: {
      type: String,
      required: true,
      default: ''
    },
    name: {
      type: String,
      required: true,
      default: 'name'
    }
  }
}
</script>

<style scoped>
</style>
