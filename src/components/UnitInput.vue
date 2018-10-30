<template>
  <div class="unit-wrapper">
    <div class="radio-wrapper">
      <input
        value="px"
        type="radio"
        :name="name"
        @input="$emit('input', $event.target.value)">
      <label :for="name + '-px'">px</label>
    </div>
    <div class="radio-wrapper">
      <input
        value="%"
        type="radio"
        :name="name"
        @input="$emit('input', $event.target.value)">
      <label :for="name + '-per'">%</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>

  .unit-wrapper
    display: flex
    justify-content: center
    margin-bottom: 1rem

    .radio-wrapper
      margin: 0 .5rem

  input[type="radio"] + label::before
    font-size: 1rem
    height: 10px
    width: 10px
    margin-right: .2rem

</style>
