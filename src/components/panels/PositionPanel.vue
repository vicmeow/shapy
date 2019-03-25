<template>
  <div role="group" class="panel">
    <slot />

    <!-- GRADIENT POSITION -->
    <input-wrapper
      v-model="x"
      :label="'x'"
      :name="'box-size-y'"
      :field="x"
      :min="x.defaultUnit ? 0 : -width.px"
    />

    <input-wrapper
      v-model="y"
      :label="'y'"
      :name="'box-size-y'"
      :field="y"
      :min="y.defaultUnit ? 0 : -height.px"
    />
  </div>
</template>

<script>
import InputWrapper from '@/components/inputs/InputWrapper'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'box/getField',
  mutationType: 'box/updateField'
})
export default {
  name: 'Position',
  components: {
    InputWrapper
  },
  data: () => ({
    desc: 'The position of your gradient on the canvas.'
  }),
  computed: {
    ...mapFields(['x', 'y'])
  }
}
</script>
