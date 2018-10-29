<template>
  <fieldset class="fieldset">
    <legend class="legend">{{ legend }}<slot name="select-unit"/></legend>
    <p 
      v-if="desc" 
      class="desc">{{ desc }}</p>
    <slot 
      :range="range" 
      :value="label"/>
  </fieldset>
</template>

<script>
export default {
  props: {
    legend: {
      type: String,
      required: true,
      default: 'Legend'
    },
    desc: {
      type: String | Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false,
      default: 'label'
    },
    range: {
      type: Object,
      required: false,
      default() {
        return {
          min: 0,
          max: 100
        }
      }
    }
  }
}
</script>

<style lang="sass">

  .fieldset
    display: flex
    flex-direction: column
    flex-wrap: wrap
    border: 0
    margin-bottom: 1rem

  .legend
    font-size: 1.5rem
    font-weight: 500

  .desc
    width: 100%
    flex-basis: 100%
    font-size: .95rem
    font-style: italic
    margin-top: .3rem
    margin-bottom: .5rem

  .x
    margin: auto 0

  // SYTLES INSIDE THE CANVAS FIELDSET
  .fieldset-canvas
    flex-direction: row
    flex-wrap: no-wrap
    justify-content: space-around

    .canvas-size
      max-width: 50%
      display: flex
      flex-direction: column-reverse

      label
        text-align: center
        margin-top: .2rem

      input
        border-radius: 2rem
        display: block
        font-size: 1.2rem
        max-width: 150px
        text-align: center
        border: 1px solid $black
        &:focus
          border: 1px solid $green

  .fieldset-gradient
    flex-direction: row
    .radio-wrapper
      flex-basis: 50%

  .fieldset-colors
    flex-direction: row
    justify-content: space-around

    .input-wrapper
      flex-direction: column-reverse

</style>
