<template>
  <div class="bg-position">
    <h3 class="heading">Background-position</h3>
    <!-- GRADIENT POSITION -->
    <input-wrapper
      v-model="x"
      :label="'x'"
      :name="'bg-position-x'"
      :field="x"
      :min="x.defaultUnit ? 0 : -width"
    />

    <input-wrapper
      v-model="y"
      :label="'y'"
      :name="'bg-position-y'"
      :field="y"
      :min="y.defaultUnit ? 0 : -height"
    />
  </div>
</template>

<script>
import InputWrapper from '@/components/inputs/InputWrapper'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Position',
  components: {
    InputWrapper
  },
  data: () => ({
    desc: 'The position of your gradient on the canvas.'
  }),
  computed: {
    ...mapFields({
      x: 'backgroundPosition.x',
      y: 'backgroundPosition.y'
    }),
    width() {
      return this.$store.state.backgroundSize.width.px
    },
    height() {
      return this.$store.state.backgroundSize.height.px
    }
  }
}
</script>
