<template>
  <div 
    role="group" 
    class="fieldset fieldset-gradient">

    <!-- TITLE & DESCRIPTION -->
    <legend class="legend">{{ title }}</legend>
    <p class="desc">{{ desc }}</p>

    <div class="type-wrapper">
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
    </div>

    <!-- REPEAT VS NO-REPEAT GRADIENT -->
    <div class="repeating-wrapper">
      <radio-wrapper
        class="repeat"
        :label="'no-repeat'"
        v-model="gradient.repeat"
        :name="'repeating-gradient'"
        :checked="true"/>
      <radio-wrapper
        class="repeat"
        :label="'repeat'"
        v-model="gradient.repeat"
        :name="'repeating-gradient'"/>
    </div>
  </div>
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

  .type-wrapper
    border-right: 1.4px solid $black

</style>
