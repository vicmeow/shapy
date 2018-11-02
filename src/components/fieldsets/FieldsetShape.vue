<template>
  <div
    role="group"
    class="fieldset fieldset-shape">

    <!-- TITLE & DESCRIPTION -->
    <legend 
      class="legend" 
      @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle 
      @click.native="hidden = !hidden" 
      :hidden="hidden"/>
    <template v-show="!hidden">
      <p class="desc">{{ desc }}</p>
      <div class="width-height-wrapper">
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
      </div>

      <div class="coord-wrapper">
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
      </div>
    </template>
  </div>
</template>

<script>
import GroupToggle from '@/components/GroupToggle'
import InputWrapper from '@/components/InputWrapper'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Shape',
  components: {
    InputWrapper,
    GroupToggle
  },
  data: () => ({
    hidden: true,
    title: 'Shape Details 📐',
    desc: 'Edit the size and the placement of the shape that goes into the box.'
  }),
  computed: {
    ...mapFields(['shape'])
  }
}
</script>
