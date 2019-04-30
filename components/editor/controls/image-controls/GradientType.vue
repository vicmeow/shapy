<template>
  <div class="gradient-type">
    <!-- Gradient type -->
    <radio-input
      v-for="value in types"
      :key="value.index"
      :disabled="activeType === 'conic'"
      v-model="activeType"
      :active="activeType"
      :label="value"
      :radio-value="value"
      group="gradient-type"
    >
      <component
        :is="`icon-${value}`"
        :active="activeType === value"
        aria-hidden="true"
      />
    </radio-input>
    <!-- Repeating gradient -->
    <toggle-input
      id="repeating-toggle"
      v-model="repeating"
      :default-value="repeating"
      name="repeating"
    ></toggle-input>
    <!-- Gradient direction -->
    <!-- <angle-input v-if="activeType === 'linear'" class="angle-input" /> -->
  </div>
</template>

<script>
import IconLinear from '@/components/icons/IconLinear'
import IconRadial from '@/components/icons/IconRadial'
import IconConic from '@/components/icons/IconConic'
import ToggleInput from '@/components/inputs/ToggleInput'
import RadioInput from '@/components/inputs/RadioInput'
import AngleInput from '@/components/inputs/AngleInput'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    ToggleInput,
    RadioInput,
    AngleInput,
    IconLinear,
    IconRadial,
    IconConic
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
