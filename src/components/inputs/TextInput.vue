<template>
  <div :class="{'color-input-wrapper': color, 'text-wrapper': !color}">
    <div
      v-if="color"
      class="color-preview"
      :style="{background: color}"/>
    <input
      :value="colorValue"
      :class="{'color-input': color, 'text-input': !color}"
      @input="$emit('input', $event.target.value)"
      type="text"
      :name="name"
      :id="name + '-id'">
  </div>
</template>

<script>
export default {
  props: {
    colorValue: {
      type: String,
      required: false,
      default: ''
    },
    color: {
      type: Boolean | String,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">

  input[type="text"]
    width: 100%
    margin-bottom: .5rem
    padding: .3rem 0
    border-bottom: 1px solid $black
    &:focus
      border-color: $green

  .input-text-label
    flex-basis: fit-content

  .color-input-wrapper
    display: flex
    align-items: center
    width: 100%
    justify-content: center

    .color-input
      flex: fill
      padding: 0
      min-width: 0
      border: 0
      margin: 0
      margin-left: .5em

  .color-preview
    color: white
    min-height: 1em
    min-width: 1em
    border: 1px solid $black
    border-radius: 50%
</style>
