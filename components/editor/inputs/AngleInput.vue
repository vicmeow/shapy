<template>
  <div class="angle-input-wrapper">
    <number-input v-model="angle" :field="angle" name="angle" :min="-360" />
    <div class="angle-presets">
      <radio-input
        v-for="(value, index) in angle.values"
        :key="index"
        v-model.number="angleActive"
        :radio-value="value"
        :active="angle.active"
        :label="labels[index]"
        :class="`angle-${labels[index]} angle-radio`"
        group="gradient-angle"
      />
    </div>
  </div>
</template>

<script>
import RadioInput from '@/components/editor/inputs/RadioInput'
import NumberInput from '@/components/editor/inputs/NumberInput'
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
    values() {
      return this.$store.state.backgroundImage.angle.values
    },
    labels() {
      return ['↖️', '⬆️', '↗️', '⬅️', '⏺', '➡️', '↙️', '⬇️', '↘️']
    }
  }
}
</script>

<style lang="sass">

.angle-input-wrapper
  display: flex

.presets
  display: flex
  flex-wrap: wrap
  justify-content: space-between

.angle-presets
  display: grid
  width: 3rem
  height: 3rem
  flex-wrap: wrap
  outline: 1px solid red
  grid-template-columns: repeat(3, 1fr)

.angle-radio .radio-input
  display: none
</style>
