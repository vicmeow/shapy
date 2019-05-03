<template>
  <div class="control" role="group">
    <slot />
    <!-- CANVAS WIDTH & HEIGHT -->
    <number-input v-model="width" name="width" :field="width" />
    <number-input v-model="height" name="height" :field="height" />
    <!-- TODO: Add custom canvas background color input -->
  </div>
</template>

<script>
import NumberInput from '@/components/editor/inputs/NumberInput'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'gradientCanvas/getField',
  mutationType: 'gradientCanvas/updateField'
})
export default {
  name: 'Canvas',
  components: {
    NumberInput
  },
  data: () => ({
    desc: 'Edit the size of your canvas.'
  }),
  computed: {
    ...mapFields(['width', 'height'])
  },
  watch: {
    width() {
      // When the canvas width changes, the max size for the gradient should update
      const width = this.width.px
      this.$store.dispatch('backgroundSize/updateWidth', width)
    },
    height() {
      // When the canvas height changes, the max size for the gradient should update
      const height = this.height.px
      this.$store.dispatch('backgroundSize/updateHeight', height)
    }
  }
}
</script>
