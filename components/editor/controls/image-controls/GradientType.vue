<template>
  <div class="gradient-type">
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
    <!-- Gradient direction -->
    <angle-input v-if="activeType === 'linear'" class="angle-input" />
  </div>
</template>

<script>
import ToggleInput from '@/components/inputs/ToggleInput'
import RadioInput from '@/components/inputs/RadioInput'
import AngleInput from '@/components/inputs/AngleInput'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    ToggleInput,
    RadioInput,
    AngleInput
  },
  computed: {
    ...mapFields({
      repeating: 'backgroundImage.repeating',
      activeType: 'backgroundImage.type.active'
    }),
    types() {
      return this.$store.state.backgroundImage.type.types
    }
  }
}
</script>

<style lang="sass" scoped>
.gradient-type
  grid-column: 1/-1
  display: flex
  flex-wrap: wrap

.angle-input
  flex-basis: 100%
</style>
