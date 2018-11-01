<template>
  <div 
    role="group" 
    class="fieldset fieldset-shape">

    <!-- TITLE & DESCRIPTION -->
    <legend class="legend">{{ title }}</legend>
    <p class="desc">{{ desc }}</p>

    <input-wrapper
      v-model="colors.stop1"
      :label="'Color 1'"
      :what="colors.stop1"
      :color="true"
      :max="100"
      :name="'color-stop'"
      :toggle-unit="false"/>
    <input-wrapper
      v-model="colors.stop2"
      :label="'Color 2'"
      :what="colors.stop2"
      :color="true"
      :max="100"
      :name="'color-stop'"
      :toggle-unit="false"/>
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
    title: 'Color stops',
    desc: 'The colors for your gradient shape.'
  }),
  computed: {
    ...mapFields(['colors'])
  }
}
</script>
