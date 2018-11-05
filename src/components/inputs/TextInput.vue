<template>
  <div :class="{'color-input-wrapper': colorInput, 'text-wrapper': !colorInput}">
    <div
      v-if="colorInput"
      class="color-preview"
      :style="{background: color}"/>
    <input
      :value="color"
      :class="{'color-input': colorInput, 'text-input': !colorInput}"
      @input="$emit('input', $event.target.value)"
      type="text"
      :name="name"
      :id="name + '-id'">
  </div>
</template>

<script>
export default {
  props: {
    colorInput: {
      type: Boolean,
      required: false,
      default: true
    },
    color: {
      type: String,
      required: false,
      default: ''
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
    margin-top: .5em

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
