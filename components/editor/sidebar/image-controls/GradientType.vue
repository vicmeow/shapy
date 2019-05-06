<template>
  <div class="gradient-type">
    <!-- Gradient type -->
    <!-- TODO: Add info about conic only in chrome -->
    <radio-input
      v-for="value in types"
      :key="value.index"
      v-model="activeType"
      :active="activeType"
      :label="value"
      :radio-value="value"
      group="gradient-type"
    />
    <!-- Repeating gradient -->
    <toggle-input
      id="repeating-toggle"
      v-model="repeating"
      :default-value="repeating"
      :custom-toggle="['on', 'off']"
      name="repeating"
    ></toggle-input>
    <!-- Gradient direction -->
    <!-- <angle-input v-if="activeType === 'linear'" class="angle-input" /> -->
  </div>
</template>

<script>
import ToggleInput from '@/components/editor/inputs/ToggleInput'
import RadioInput from '@/components/editor/inputs/RadioInput'
// import AngleInput from '@/components/inputs/AngleInput'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    ToggleInput,
    RadioInput
    // AngleInput
  },
  computed: {
    ...mapFields({
      repeating: 'backgroundImage.repeating',
      activeType: 'backgroundImage.type.active'
    }),
    types() {
      return this.$store.state.backgroundImage.type.values
    }
  }
}
</script>

<style lang="sass" scoped>
.gradient-type
  grid-column: 1/-1
  display: flex
  flex-wrap: wrap
</style>
