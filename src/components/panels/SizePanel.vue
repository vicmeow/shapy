<template>
  <div class="panel" role="group">
    <slot />
    <!-- CANVAS WIDTH & HEIGHT -->
    <input-wrapper
      v-model="width"
      :label="'Width'"
      :name="'box-size-x'"
      :field="width"
    />
    <input-wrapper
      v-model="height"
      :label="'height'"
      :name="'box-size-y'"
      :field="height"
    />
  </div>
</template>

<script>
import InputWrapper from '@/components/inputs/InputWrapper'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'gradient/getField',
  mutationType: 'gradient/updateField'
})
export default {
  name: 'Size',
  components: {
    InputWrapper
  },
  data: () => ({
    desc: 'Edit the size of your gradient.'
  }),
  computed: {
    ...mapFields(['width', 'height'])
  },
  watch: {
    /* width() {
      // When the box width changes, the max size for the radial shape should update
      const width = this.width.px
      this.$store.dispatch('shape/updateWidth', width)
    },
    height() {
      // When the box height changes, the max size for the radial shape should update
      const height = this.height.px
      this.$store.dispatch('shape/updateHeight', height)
    } */
  }
}
</script>
