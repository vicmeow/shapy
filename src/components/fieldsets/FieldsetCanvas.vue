<template>
  <fieldset class="fieldset fieldset-canvas">

    <!-- TITLE & DESCRIPTION -->
    <legend class="legend">{{ title }}</legend>
    <p class="desc">{{ desc }}</p>

    <!-- WIDTH INPUT -->
    <div class="canvas-size">
      <label 
        for="canvas-width" 
        class="label canvas-label">width</label>
      <input
        v-model="canvas.x.size"
        type="number"
        name="canvas-width"
        id="canvas-width"
        max="500">
    </div>

    <!-- HEIGHT INPUT -->
    <div class="canvas-size">
      <label 
        for="canvas-height" 
        class="label">height</label>
      <input
        v-model="canvas.y.size"
        type="number"
        name="canvas-height"
        id="canvas-height"
        max="500">
    </div>
  </fieldset>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Canvas',
  data: () => ({
    title: 'Canvas',
    desc: 'The size of your canvas (px). Current max value is 500.'
  }),
  computed: {
    ...mapFields(['canvas'])
  }
}
</script>

<style lang="sass" scoped>

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
</style>
