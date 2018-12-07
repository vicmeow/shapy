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
        v-model="general.type"
        :name="'gradient-type'"/>
      <radio-wrapper
        :label="'radial-gradient'"
        v-model="general.type"
        :name="'gradient-type'"/>
      <radio-wrapper
        :label="'conic-gradient'"
        v-model="general.type"
        :name="'gradient-type'"/>
      <radio-wrapper
        :label="'repeating-conic-gradient'"
        v-model="general.type"
        :name="'gradient-type'"/>

      <!-- REPEAT VS NO-REPEAT GRADIENT -->
      <radio-wrapper
        class="repeat"
        :label="'no-repeat'"
        v-model="general.repeat"
        :name="'repeating-gradient'"/>
      <radio-wrapper
        class="repeat"
        :label="'repeat'"
        v-model="general.repeat"
        :name="'repeating-gradient'"/>
      <!-- COMMENT -->
      <div class="input-wrapper comment-wrapper">
        <label
          class="input-text-label comment-label"
          for="input-comment">Comment:</label>
        <input
          class="comment-input"
          v-model="general.comment"
          type="text"
          placeholder="Name of your shape/gradient etc."
          id="input-comment">
      </div>
    </template>
  </div>
</template>

<script>
import GroupToggle from '@/components/GroupToggle'
import InputWrapper from '@/components/InputWrapper'
import RadioWrapper from '@/components/RadioWrapper'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'general/getField',
  mutationType: 'general/updateField'
})
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
    ...mapFields(['general'])
  }
}
</script>

<style lang="sass">
  .input-wrapper.comment-wrapper
    flex-basis: 100%
    width: 100%
    margin-top: .5em
    padding-right: 0

  .comment-label
    margin-bottom: .5em 0

  .comment-input
    padding: .3em 0
    width: 100%
    border-bottom: 1px solid $black
</style>
