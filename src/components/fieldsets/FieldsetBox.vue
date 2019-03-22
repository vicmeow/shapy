<template>
  <div role="group" class="fieldset fieldset-box">
    <!-- TITLE & DESCRIPTION -->
    <legend class="legend" @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle :hidden="hidden" @click.native="hidden = !hidden" />
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>

      <!-- WIDTH INPUT (%/px) -->
      <input-wrapper
        v-model="width"
        :label="'Width'"
        :name="'box-size-x'"
        :field="width"
      />

      <!-- HEIGHT INPUT (%/px) -->
      <input-wrapper
        v-model="height"
        :label="'height'"
        :name="'box-size-y'"
        :field="height"
      />

      <!-- X AXIS (%) -->
      <input-wrapper
        v-model="x"
        :label="'x'"
        :name="'box-size-y'"
        :field="x"
        :min="x.defaultUnit ? 0 : -width.px"
      />

      <!-- Y AXIS (%) -->
      <input-wrapper
        v-model="y"
        :label="'y'"
        :name="'box-size-y'"
        :field="y"
        :min="y.defaultUnit ? 0 : -height.px"
      />
    </template>
  </div>
</template>

<script>
import GroupToggle from '@/components/GroupToggle'
import InputWrapper from '@/components/inputs/InputWrapper'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'box/getField',
  mutationType: 'box/updateField'
})
export default {
  name: 'Box',
  components: {
    InputWrapper,
    GroupToggle
  },
  data: () => ({
    hidden: false,
    title: 'Box Details 📦',
    desc: 'The box your shape goes into.'
  }),
  computed: {
    ...mapFields(['width', 'height', 'x', 'y'])
  },
  watch: {
    width() {
      // When the box width changes, the max size for the radial shape should update
      const width = this.width.px
      this.$store.dispatch('shape/updateMax', { type: 'width', value: width })
    },
    height() {
      // When the box height changes, the max size for the radial shape should update
      const height = this.height.px
      this.$store.dispatch('shape/updateMax', { type: 'height', value: height })
    }
  }
}
</script>

<style lang="sass">
.degree-wrapper
  flex-basis: 100%
</style>
