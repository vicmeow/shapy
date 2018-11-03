<template>
  <div
    role="group"
    class="fieldset fieldset-colors">

    <!-- TITLE & DESCRIPTION -->
    <legend
      class="legend"
      @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle
      @click.native="hidden = !hidden"
      :hidden="hidden"/>
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>
      <!-- CUSTOM COLOR STOPS -->
      <input-wrapper
        v-model="colors.stop1"
        :label="'Color 1'"
        :what="colors.stop1"
        :color-input="true"
        :name="'color-stop'"
        :toggle-unit="false"/>
      <input-wrapper
        v-model="colors.stop2"
        :label="'Color 2'"
        :what="colors.stop2"
        :color-input="true"
        :name="'color-stop'"
        :toggle-unit="false"/>
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
    title: 'Color Stops 🌈',
    desc: 'The colors for your gradient shape.'
  }),
  computed: {
    ...mapFields(['colors'])
  }
}
</script>

<style lang="sass">
  .fieldset-colors .input-wrapper
</style>
