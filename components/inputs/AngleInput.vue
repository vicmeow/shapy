<template>
  <div class="angle-input-wrapper">
    <number-input v-model="angle" :field="angle" name="angle" />
    <div class="presets">
      <radio-input
        v-for="radio in angles"
        :key="radio.index"
        v-model.number="angleActive"
        :active="angleActive"
        :radio="radio"
        group="gradient-angle"
      />
    </div>
  </div>
</template>

<script>
import RadioInput from '@/components/inputs/RadioInput'
import NumberInput from '@/components/inputs/NumberInput'
import { mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    RadioInput,
    NumberInput
  },
  computed: {
    ...mapFields({
      angle: 'backgroundImage.angle',
      angleActive: 'backgroundImage.angle.active'
    }),
    ...mapGetters({
      active: 'backgroundImage/angle'
    }),
    angles() {
      return this.$store.state.backgroundImage.angle.types
    },
    angleLabels() {
      switch (this.angle.active) {
        case 'to bottom':
          return '⬇️'
        case 'to right':
          return '➡️'
        case 'to top':
          return '⬆️'
        case 'to left':
          return '⬅️'
        default:
          return this.angle.active
      }
    }
  }
}
</script>

<style lang="sass">
.presets
  display: flex
  flex-wrap: wrap
  justify-content: space-between
</style>
