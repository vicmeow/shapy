<template>
  <fieldset class="fieldset fieldset-gradient">

    <!-- TITLE & DESCRIPTION -->
    <legend class="legend">{{ title }}</legend>
    <p class="desc">{{ desc }}</p>

    <!-- GRADIENT TYPES -->
    <radio-wrapper
      :label="'linear-gradient'"
      v-model="gradient.type"
      :name="'gradient-type'"
      :checked="true"/>
    <radio-wrapper
      :label="'radial-gradient'"
      v-model="gradient.type"
      :name="'gradient-type'"/>

    <!-- REPEAT VS NO-REPEAT GRADIENT -->
    <radio-wrapper
      :label="'no-repeat'"
      v-model="gradient.repeat"
      :name="'repeating-gradient'"
      :checked="true"/>
    <radio-wrapper
      :label="'repeat'"
      v-model="gradient.repeat"
      :name="'repeating-gradient'"/>
  </fieldset>
</template>

<script>
import InputWrapper from '@/components/InputWrapper'
import RadioWrapper from '@/components/RadioWrapper'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Gradient',
  components: {
    RadioWrapper,
    InputWrapper
  },
  data: () => ({
    title: 'Gradient type',
    desc:
      'Radial gradients create round shapes and linear gradients create rectangular shapes.'
  }),
  computed: {
    ...mapFields(['gradient'])
  }
}
</script>

<style lang="sass" scoped>

  .fieldset-gradient
    flex-direction: row
  
  .degree-range
    margin-top: .5rem

</style>
