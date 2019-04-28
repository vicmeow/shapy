<template>
  <div class="control position-control">
    <h3 class="heading">Position</h3>
    <!-- GRADIENT POSITION -->
    <number-input
      v-model="x"
      name="x-axis"
      :field="x"
      :min="x.defaultUnit ? 0 : -width"
    />
    <number-input
      v-model="y"
      name="y-axis"
      :field="y"
      :min="y.defaultUnit ? 0 : -height"
    />
  </div>
</template>

<script>
import NumberInput from '@/components/inputs/NumberInput'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Position',
  components: {
    NumberInput
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
