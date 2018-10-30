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
        class="label">Width ({{ box.size.x.unit }})</label>
      <input
        v-model="box.size.x.size"
        type="range" 
        class="slider"
        name="box-width"
        id="box-width"
        max="100">
      <unit-input 
        v-model="box.size.x.unit" 
        name="box-size-x-unit"/>
    </div>

    <!-- HEIGHT INPUT (%/px) -->
    <div class="range-wrapper">
      <label 
        for="box-height" 
        class="label">Height ({{ box.size.y.unit }})</label>
      <input
        v-model="box.size.y.size"
        type="range" 
        class="slider"
        name="box-height"
        id="box-height"
        max="100">
      <unit-input 
        v-model="box.size.y.unit" 
        name="box-size-y-unit"/>
    </div>

    <!-- X AXIS (%) -->
    <div class="range-wrapper">
      <label 
        for="box-x-axis" 
        class="label">X-axis ({{ box.coord.x.unit }})</label>
      <input
        v-model="box.coord.x.size"
        type="range" 
        class="slider"
        name="box-x-axis"
        id="box-x-axis"
        min="-100"
        max="100">
      <unit-input 
        v-model="box.coord.x.unit" 
        name="box-coord-x-unit"/>
    </div>

    <!-- Y AXIS (%) -->
    <div class="range-wrapper">
      <label 
        for="box-y-axis" 
        class="label">Y-axis ({{ box.coord.y.unit }})</label>
      <input
        v-model="box.coord.y.size"
        type="range" 
        class="slider"
        name="box-y-axis"
        id="box-y-axis"
        min="-100"
        max="100">
      <unit-input 
        v-model="box.coord.y.unit" 
        name="box-coord-y-unit"/>
    </div>
  </fieldset>
</template>

<script>
import UnitInput from '@/components/UnitInput'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Box',
  components: {
    UnitInput
  },
  data: () => ({
    title: 'Box',
    desc:
      'This is the box on the canvas that your shape goes into. Think of it as a mini-canvas.'
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
