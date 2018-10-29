<template>
  <div class="input-wrapper radio-wrapper">
    <input
      class="radio-input"
      type="radio"
      :name="name"
      :value="label"
      @change="$emit('change', $event.target.value)"
      :id="name"
      :checked="value === label">
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
      default: 'linear'
    },
    name: {
      type: String,
      required: true,
      default: 'name'
    },
    value: {
      type: String,
      required: false,
      default: 'linear'
    }
  }
}
</script>

<style lang="sass">


</style>
