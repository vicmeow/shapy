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
      <!-- WIDTH INPUT (%/px) -->
      <input-wrapper
        v-model="shape.size.x"
        :label="'Width'"
        :name="'shape-size-x'"
        :what="shape.size.x"/>

      <!-- HEIGHT INPUT (%/px) -->
      <input-wrapper
        v-model="shape.size.y"
        :label="'Height'"
        :name="'shape-size-y'"
        :what="shape.size.y"/>

      <!-- X AXIS (%) -->
      <input-wrapper
        v-model="shape.coord.x"
        :label="'X-axis'"
        :name="'shape-x'"
        :what="shape.coord.x"/>

      <!-- Y AXIS (%) -->
      <input-wrapper
        v-model="shape.coord.y"
        :label="'Y-axis'"
        :name="'shape-y'"
        :what="shape.coord.y"/>
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
import InputWrapper from '@/components/InputWrapper'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Shape',
  components: {
    InputWrapper
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
