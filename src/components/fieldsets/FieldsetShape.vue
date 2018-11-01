<template>
  <div
    role="group"
    class="fieldset fieldset-shape">

    <!-- TITLE & DESCRIPTION -->
    <legend class="legend">{{ title }}</legend>
    <p class="desc">{{ desc }}</p>

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
  </div>
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
    title: 'Shape details',
    desc: 'Edit the size and the placement of the shape that goes into the box.'
  }),
  computed: {
    ...mapFields(['shape'])
  }
}
</script>
