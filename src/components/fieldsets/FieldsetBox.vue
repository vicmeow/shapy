<template>
  <div
    role="group"
    class="fieldset fieldset-box">

    <!-- TITLE & DESCRIPTION -->
    <legend
      class="legend"
      @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle
      @click.native="hidden = !hidden"
      :hidden="hidden"/>
    <template v-if="!hidden">
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
        :what="box.coord.x"
        :min="-100"
        :max="200"/>

      <!-- Y AXIS (%) -->
      <input-wrapper
        v-model="box.coord.y"
        :label="'Y-axis'"
        :name="'box-y'"
        :what="box.coord.y"
        :min="-100"
        :max="200"/>

      <!-- DEGREE IF LINEAR GRADIENT -->
      <input-wrapper
        v-if="gradient.type === 'linear-gradient'"
        class="degree-wrapper"
        v-model="shape.degree"
        :label="'Degree'"
        :name="'gradient-degree'"
        :what="shape.degree"
        :min="0"
        :max="360"/>
    </template>
  </div>
</template>

<script>
import GroupToggle from '@/components/GroupToggle'
import InputWrapper from '@/components/InputWrapper'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Box',
  components: {
    InputWrapper,
    GroupToggle
  },
  data: () => ({
    hidden: true,
    title: 'Box Details 📦',
    desc: 'The box your shape goes into.'
  }),
  computed: {
    ...mapFields(['box', 'shape', 'gradient'])
  }
}
</script>

<style lang="sass">
  .degree-wrapper
    flex-basis: 100%
</style>
