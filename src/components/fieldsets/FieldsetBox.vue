<template>
  <div 
    role="group" 
    class="fieldset fieldset-box">

    <!-- TITLE & DESCRIPTION -->
    <legend class="legend">{{ title }}</legend>
    <p class="desc">{{ desc }}</p>

    <!-- WIDTH INPUT (%/px) -->
    <input-wrapper
      v-model="box.size.x"
      :label="'Width'"
      :name="'box-size-x'"
      :what="box.size.x"/>

    <!-- HEIGHT INPUT (%/px) -->
    <input-wrapper
      v-model="box.size.y"
      :label="'Height'"
      :name="'box-size-y'"
      :what="box.size.y"/>

    <!-- X AXIS (%) -->
    <input-wrapper
      v-model="box.coord.x"
      :label="'X-axis'"
      :name="'box-x'"
      :what="box.coord.x"/>

    <!-- Y AXIS (%) -->
    <input-wrapper
      v-model="box.coord.y"
      :label="'Y-axis'"
      :name="'box-y'"
      :what="box.coord.y"/>

    <!-- DEGREE IF LINEAR GRADIENT -->
    <input-wrapper
      v-if="gradient.type === 'linear-gradient'"
      class="degree-range"
      v-model="shape.degree"
      :label="'Degree'"
      :name="'gradient-degree'"
      :what="shape.degree"
      :min="0"
      :max="360"/>
  </div>
</template>

<script>
import InputWrapper from '@/components/InputWrapper'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Box',
  components: {
    InputWrapper
  },
  data: () => ({
    title: 'Box',
    desc: 'The box your shape goes into.'
  }),
  computed: {
    ...mapFields(['box', 'shape', 'gradient'])
  }
}
</script>

<style lang="sass" scoped>
  .fieldset-box
    flex-direction: row
</style>
