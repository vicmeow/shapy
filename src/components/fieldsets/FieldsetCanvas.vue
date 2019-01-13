<template>
  <div role="group" class="fieldset fieldset-canvas">
    <!-- TITLE & DESCRIPTION -->
    <legend class="legend" @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle :hidden="hidden" @click.native="hidden = !hidden" />
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>

      <!-- WIDTH INPUT -->
      <input-wrapper
        v-model="canvas.x"
        :label="'Width'"
        :name="'canvas-width'"
        :what="canvas.x"
        :max="canvas.x.unit === 'px' ? canvas.x.max : 100"
      />

      <!-- HEIGHT INPUT -->
      <input-wrapper
        v-model="canvas.y"
        :label="'Height'"
        :name="'canvas-height'"
        :what="canvas.y"
        :max="canvas.y.unit === 'px' ? canvas.y.max : 100"
      />
    </template>
  </div>
</template>

<script>
import InputWrapper from '@/components/InputWrapper'
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
    hidden: true,
    title: 'Canvas Size 🖼',
    desc: "Edit the size of your canvas. Choose 'px' by clicking on the unit."
  }),
  computed: {
    ...mapFields(['canvas'])
  }
}
</script>
