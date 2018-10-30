<template>
  <fieldset class="fieldset fieldset-shape">

    <!-- TITLE & DESCRIPTION -->
    <legend class="legend">{{ title }}</legend>
    <p class="desc">{{ desc }}</p>

    <!-- SHAPE COLOR -->
    <div class="input-wrapper input-text">
      <label for="shape-color">Shape color</label>
      <input 
        v-model="shape.color"
        type="text" 
        name="shape-color" 
        id="shape-color">
    </div>

    <!-- WIDTH INPUT (%) -->
    <div class="range-wrapper">
      <label 
        for="shape-width" 
        class="label">width</label>
      <input
        v-model="shape.size.x.size"
        type="range" 
        class="slider"
        name="shape-width"
        id="shape-width"
        max="100">
    </div>

    <!-- HEIGHT INPUT (%) -->
    <div class="range-wrapper">
      <label 
        for="shape-height" 
        class="label">height</label>
      <input
        v-model="shape.size.y.size"
        type="range" 
        class="slider"
        name="shape-height"
        id="shape-height"
        max="100">
    </div>

    <!-- X AXIS (%) -->
    <div class="range-wrapper">
      <label 
        for="shape-x-axis" 
        class="label">x axis</label>
      <input
        v-model="shape.coord.x.size"
        type="range" 
        class="slider"
        name="shape-x-axis"
        id="shape-x-axis"
        max="100">
    </div>

    <!-- Y AXIS (%) -->
    <div class="range-wrapper">
      <label 
        for="shape-y-axis" 
        class="label">y axis</label>
      <input
        v-model="shape.coord.y.size"
        type="range" 
        class="slider"
        name="shape-y-axis"
        id="shape-y-axis"
        max="100">
    </div>

    <!-- DEG INPUT (%/px) IF LINEAR  -->
    <div class="range-wrapper">
      <label 
        for="shape-degree" 
        class="label">degree</label>
      <input
        v-model="shape.deg"
        type="range" 
        class="slider"
        name="shape-degree"
        id="shape-degree"
        max="360">
    </div>
  </fieldset>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Shape',
  data: () => ({
    title: 'Shape',
    desc:
      'This adjusts the actual shape of your gradient and it will be placed inside the box/mini-canvas.'
  }),
  computed: {
    ...mapFields(['shape'])
  }
}
</script>

<style lang="sass" scoped>
  .fieldset-shape
    flex-direction: row
    flex-wrap: no-wrap
</style>
