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
        id="gradient-linear">
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
        id="gradient-radial">
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
        id="gradient-no-repeat">
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
        id="gradient-repeat">
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
  
  .radio-wrapper
    flex-basis: 50%

</style>
