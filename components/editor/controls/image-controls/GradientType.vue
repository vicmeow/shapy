<template>
  <div class="gradient-type">
    <!-- Gradient type -->
    <input-wrapper>
      <radio-input
        v-for="radio in types"
        :key="radio.index"
        v-model="activeType"
        :active="activeType"
        :radio="radio"
        group="gradient-type"
      />
    </input-wrapper>
    <!-- Repeating gradient -->
    <input-wrapper>
      <label>Repeating</label>
      <toggle-input
        v-model="repeating"
        :default-value="repeating"
        name="repeating-gradient"
      ></toggle-input>
    </input-wrapper>
  </div>
</template>

<script>
import InputWrapper from '@/components/inputs/InputWrapper'
import ToggleInput from '@/components/inputs/ToggleInput'
import RadioInput from '@/components/inputs/RadioInput'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    InputWrapper,
    ToggleInput,
    RadioInput
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

.input-wrapper
  display: unset
</style>
