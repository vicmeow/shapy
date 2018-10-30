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
  </fieldset>
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
</style>
