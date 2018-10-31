<template>
  <fieldset class="fieldset fieldset-shape">

    <!-- TITLE & DESCRIPTION -->
    <legend class="legend">{{ title }}</legend>
    <p class="desc">{{ desc }}</p>

    <!-- DEGREE IF LINEAR GRADIENT -->
    <input-wrapper
      v-if="gradient.type === 'linear-gradient'"
      class="degree-range"
      v-model="gradient.degree"
      :label="'Degree'"
      :name="'gradient-degree'"
      :what="gradient.degree"
      :min="0"
      :max="360"/>

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
    <!-- SHAPE COLOR -->
    <input-wrapper
      v-model="shape.color"
      :color="shape.color"
      :label="'Color'"
      :what="{color: shape.color}"
      :name="'shape-color'"/>
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
    desc: 'Edit the shape of your radial gradient inside its box.'
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
