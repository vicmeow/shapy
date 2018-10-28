<template>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">{{ legend }}<slot name="select-unit"/></legend>
    <p class="fieldset-desc">{{ desc }}</p>
    <slot/>
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
      type: String,
      required: false,
      default: 'Description'
    }
  }
}
</script>

<style lang="sass">

  .fieldset
    border: 0
    display: flex
    flex-wrap: wrap
    margin-bottom: 1rem

  .fieldset-colors .input-wrapper
    justify-content: space-between
    flex-direction: row
    flex-basis: 100%
    padding: 0

  .fieldset-gradient .input
    justify-content: space-between

  .fieldset-legend
    font-size: 1.2rem
    font-weight: 500

  .fieldset-desc
    flex-basis: 100%
    font-size: .95rem
    font-style: italic
    margin: .5rem 0
  
  .fieldset-canvas .input-wrapper


</style>
