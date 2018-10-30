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

    <template v-if="gradient.type === 'radial-gradient'">
      <!-- WIDTH INPUT (%) -->
      <div class="range-wrapper">
        <label 
          for="shape-width" 
          class="label">Width ({{ shape.size.x.unit }})</label>
        <input
          v-model="shape.size.x.size"
          type="range" 
          class="slider"
          name="shape-width"
          id="shape-width"
          max="100">
        <unit-input 
          v-model="shape.size.x.unit" 
          name="shape-size-x-unit"/>
      </div>

      <!-- HEIGHT INPUT (%) -->
      <div class="range-wrapper">
        <label 
          for="shape-height" 
          class="label">Height ({{ shape.size.y.unit }})</label>
        <input
          v-model="shape.size.y.size"
          type="range" 
          class="slider"
          name="shape-height"
          id="shape-height"
          max="100">
        <unit-input 
          v-model="shape.size.y.unit" 
          name="shape-size-y-unit"/>
      </div>

      <!-- X AXIS (%) -->
      <div class="range-wrapper">
        <label 
          for="shape-x-axis" 
          class="label">X-axis ({{ shape.coord.x.unit }})</label>
        <input
          v-model="shape.coord.x.size"
          type="range" 
          class="slider"
          name="shape-x-axis"
          id="shape-x-axis"
          max="100">
        <unit-input 
          v-model="shape.coord.x.unit" 
          name="shape-coord-x-unit"/>
      </div>

      <!-- Y AXIS (%) -->
      <div class="range-wrapper">
        <label 
          for="shape-y-axis" 
          class="label">Y-axis ({{ shape.coord.x.unit }})</label>
        <input
          v-model="shape.coord.y.size"
          type="range" 
          class="slider"
          name="shape-y-axis"
          id="shape-y-axis"
          max="100">
        <unit-input 
          v-model="shape.coord.y.unit" 
          name="shape-coord-y-unit"/>
      </div>
    </template>

    <!-- DEG INPUT (%/px) IF LINEAR  -->
    <div 
      class="range-wrapper" 
      v-if="gradient.type === 'linear-gradient'">
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
import UnitInput from '@/components/UnitInput'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Shape',
  components: {
    UnitInput
  },
  data: () => ({
    title: 'Shape',
    desc:
      'This adjusts the actual shape of your gradient and it will be placed inside the box/mini-canvas.'
  }),
  computed: {
    ...mapFields(['shape', 'gradient'])
  }
}
</script>

<style lang="sass" scoped>
  .fieldset-shape
    flex-direction: row
    flex-wrap: no-wrap
</style>
