<template>
  <div class="gradient-type">
    <div class="gradient-type-input">
      <!-- Gradient type -->
      <radio-input
        v-for="radio in types"
        :key="radio.index"
        v-model="activeType"
        :active="activeType"
        :radio="radio"
        group="gradient-type"
      />
      <!-- Repeating gradient -->
      <toggle-input
        id="repeating-toggle"
        v-model="repeating"
        :default-value="repeating"
        name="repeating"
      ></toggle-input>
    </div>
    <!-- Gradient direction -->
    <radio-input
      v-for="radio in angles"
      :key="radio.index"
      v-model.number="activeAngle"
      :active="activeAngle"
      :radio="radio"
      group="gradient-angle"
    />
  </div>
</template>

<script>
import ToggleInput from '@/components/inputs/ToggleInput'
import RadioInput from '@/components/inputs/RadioInput'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    ToggleInput,
    RadioInput
  },
  computed: {
    ...mapFields({
      repeating: 'backgroundImage.repeating',
      activeType: 'backgroundImage.type.active',
      activeAngle: 'backgroundImage.angle.active'
    }),
    types() {
      return this.$store.state.backgroundImage.type.types
    },
    angles() {
      return this.$store.state.backgroundImage.angle.types
    }
  }
}
</script>

<style lang="sass" scoped>
.gradient-type-input
  display: grid
  grid-template-columns: 1fr 1fr
  outline: 1px solid red
</style>
