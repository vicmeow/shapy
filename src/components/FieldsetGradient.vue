<template>
  <fieldset class="fieldset fieldset-gradient">

    <!-- TITLE & DESCRIPTION -->
    <legend class="legend">{{ title }}</legend>
    <p class="desc">{{ desc }}</p>

    <!-- GRADIENT TYPES -->
    <div class="radio-wrapper">
      <input
        v-model="gradient.type"
        type="radio"
        name="gradient-type"
        value="linear-gradient"
        id="'gradient-linear">
      <label 
        for="gradient-linear" 
        class="label">linear-gradient</label>
    </div>
    <div class="radio-wrapper">
      <input
        v-model="gradient.type"
        type="radio"
        name="gradient-type"
        value="radial-gradient"
        id="'gradient-radial">
      <label 
        for="gradient-radial" 
        class="label">radial-gradient</label>
    </div>

    <!-- REPEAT VS NO-REPEAT GRADIENT -->
    <div class="radio-wrapper">
      <input
        v-model="gradient.repeat"
        type="radio"
        name="repeating-gradient"
        value="no-repeat"
        id="'gradient-no-repeat">
      <label 
        for="gradient-no-repeat" 
        class="label">no-repeat</label>
    </div>
    <div class="radio-wrapper">
      <input
        v-model="gradient.repeat"
        type="radio"
        name="repeating-gradient"
        value="repeat"
        id="'gradient-repeat">
      <label 
        for="gradient-repeat" 
        class="label">repeat</label>
    </div>

  </fieldset>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Gradient',
  data: () => ({
    title: 'Gradient type',
    desc:
      'Radial gradients create round shapes and linear gradients create rectangular shapes.'
  }),
  computed: {
    ...mapFields(['gradient'])
  }
}
</script>

<style lang="sass" scoped>

  .fieldset-gradient
    flex-direction: row

  input[type="radio"]
    position: absolute
    height: 100%
    width: 100%
    opacity: 0
    z-index: 2

  .radio-wrapper
    position: relative
    display: flex
    margin: .3rem 0
    flex-basis: 50%

  label
    display: flex
    align-items: center

  input[type="radio"] + label::before
    position: relative
    content: ''
    bottom: 0
    display: inline-block
    position relative
    height: 16px
    width: 16px
    border: 1.5px solid $green
    border-radius: 50%
    margin-right: .5rem

  input[type="radio"]:checked + label::before
    background: radial-gradient(85% 85% at 50% 50%, $green 40%, $white 41%) no-repeat 50% 50% / 100% 100%

</style>
