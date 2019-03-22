<template>
  <div role="group" class="fieldset fieldset-canvas">
    <!-- TITLE & DESCRIPTION -->
    <legend class="legend" @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle :hidden="hidden" @click.native="hidden = !hidden" />
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>
      <input-wrapper
        :field="width"
        v-model="width"
        name="Canvas width"
        label="Width"
      />
      <input-wrapper
        :field="height"
        v-model="height"
        name="Canvas height"
        label="height"
      />
    </template>
  </div>
</template>

<script>
import InputWrapper from '@/components/inputs/InputWrapper'
import GroupToggle from '@/components/GroupToggle'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'canvas/getField',
  mutationType: 'canvas/updateField'
})
export default {
  name: 'Canvas',
  components: {
    InputWrapper,
    GroupToggle
  },
  data: () => ({
    hidden: false,
    title: 'Canvas Size 🖼',
    desc: "Edit the size of your canvas. Choose 'px' by clicking on the unit."
  }),
  computed: {
    ...mapFields(['width', 'height'])
  },
  watch: {
    width() {
      // When the canvas width changes, the max size for box should update
      const width = this.width.px
      this.$store.dispatch('box/updateMax', { type: 'width', value: width })
    },
    height() {
      // When the canvas height changes, the max size for box should update
      const height = this.height.px
      this.$store.dispatch('box/updateMax', { type: 'height', value: height })
    }
  }
}
</script>
