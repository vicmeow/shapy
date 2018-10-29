<template>
  <fieldset class="fieldset">
    <legend class="legend">{{ legend }}<slot name="select-unit"/></legend>
    <p class="desc">{{ desc }}</p>
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
    display: flex
    flex-direction: column
    flex-wrap: wrap
    border: 0
    margin-bottom: 1rem

  .legend
    font-size: 1.2rem
    font-weight: 500

  .desc
    flex-basis: 100%
    font-size: .95rem
    font-style: italic
    margin-top: .3rem
    margin-bottom: 1rem
  
  .x
    margin: auto 0


</style>
