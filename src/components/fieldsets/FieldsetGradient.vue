<template>
  <div
    role="group"
    class="fieldset fieldset-gradient">

    <!-- TITLE & DESCRIPTION -->
    <legend 
      class="legend" 
      @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle 
      @click.native="hidden = !hidden" 
      :hidden="hidden"/>
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>

      <!-- GRADIENT TYPES -->
      <radio-wrapper
        :label="'linear-gradient'"
        v-model="gradient.type"
        :name="'gradient-type'"/>
      <radio-wrapper
        :label="'radial-gradient'"
        v-model="gradient.type"
        :name="'gradient-type'"/>

      <!-- REPEAT VS NO-REPEAT GRADIENT -->
      <radio-wrapper
        class="repeat"
        :label="'no-repeat'"
        v-model="gradient.repeat"
        :name="'repeating-gradient'"/>
      <radio-wrapper
        class="repeat"
        :label="'repeat'"
        v-model="gradient.repeat"
        :name="'repeating-gradient'"/>
    </template>
  </div>
</template>

<script>
import GroupToggle from '@/components/GroupToggle'
import InputWrapper from '@/components/InputWrapper'
import RadioWrapper from '@/components/RadioWrapper'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Gradient',
  components: {
    RadioWrapper,
    InputWrapper,
    GroupToggle
  },
  data: () => ({
    hidden: false,
    title: 'Gradient Type 💈',
    desc:
      'Radial gradients create round shapes and linear gradients create rectangular shapes.'
  }),
  computed: {
    ...mapFields(['gradient'])
  }
}
</script>
