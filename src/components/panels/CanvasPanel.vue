<template>
  <div class="panel" role="group">
    <slot />
    <!-- CANVAS WIDTH & HEIGHT -->
    <input-wrapper
      :field="width"
      v-model="width"
      label="Width"
      name="canvas-width"
    />
    <input-wrapper
      :field="height"
      v-model="height"
      label="height"
      name="canvas-height"
    />
    <!-- TODO: Add custom canvas background color input -->
    <button @click="$emit('updatePanel', 'control')">
      <div class="icon"></div>
      <div class="label">Close</div>
    </button>
  </div>
</template>

<script>
import InputWrapper from '@/components/inputs/InputWrapper'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'canvas/getField',
  mutationType: 'canvas/updateField'
})
export default {
  name: 'Canvas',
  components: {
    InputWrapper
  },
  data: () => ({
    desc: 'Edit the size of your canvas.'
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
