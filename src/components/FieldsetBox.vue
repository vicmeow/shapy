<template>
  <fieldset class="fieldset fieldset-box">

    <!-- TITLE & DESCRIPTION -->
    <legend class="legend">{{ title }}</legend>
    <p class="desc">{{ desc }}</p>

    <!-- BOX COLOR -->
    <div class="input-wrapper input-text">
      <label for="box-color">Box color</label>
      <input 
        v-model="box.color"
        type="text" 
        name="box-color" 
        id="box-color">
    </div>

    <!-- WIDTH INPUT (%/px) -->
    <div class="range-wrapper">
      <label 
        for="box-width" 
        class="label">Width (px)</label>
      <input
        v-model="box.size.x.size"
        type="range" 
        class="slider"
        name="box-width"
        id="box-width"
        max="500">
    </div>

    <!-- HEIGHT INPUT (%/px) -->
    <div class="range-wrapper">
      <label 
        for="box-height" 
        class="label">Height (px)</label>
      <input
        v-model="box.size.y.size"
        type="range" 
        class="slider"
        name="box-height"
        id="box-height"
        max="500">
    </div>

    <!-- X AXIS (%) -->
    <div class="range-wrapper">
      <label 
        for="box-x-axis" 
        class="label">X-axis (%)</label>
      <input
        v-model="box.coord.x.size"
        type="range" 
        class="slider"
        name="box-x-axis"
        id="box-x-axis"
        max="100">
    </div>

    <!-- Y AXIS (%) -->
    <div class="range-wrapper">
      <label 
        for="box-y-axis" 
        class="label">Y-axis (%)</label>
      <input
        v-model="box.coord.y.size"
        type="range" 
        class="slider"
        name="box-y-axis"
        id="box-y-axis"
        max="100">
    </div>
  </fieldset>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Box',
  data: () => ({
    title: 'Box',
    desc:
      'This is the box on the canvas that your shapes goes into. Think of it as a mini-canvas.'
  }),
  computed: {
    ...mapFields(['box'])
  }
}
</script>

<style lang="sass" scoped>
  .fieldset-box
    flex-direction: row
    flex-wrap: no-wrap
</style>
