<template>
  <div class="bg-image">
    <h2 class="heading">Background-image</h2>
    <div class="general-settings">
      <input-wrapper class="gradient-repeating">
        <label>Repeating</label>
        <toggle-input
          v-model="repeating"
          :default-value="repeating"
          name="repeating-gradient"
        ></toggle-input>
      </input-wrapper>
      <input-wrapper class="gradient-type">
        <radio-input
          v-for="radio in type.types"
          :key="radio.index"
          v-model="type.active"
          :active="type.active"
          :radio="radio"
          group="gradient-type"
        />
      </input-wrapper>
    </div>
    <color-stops />
  </div>
</template>

<script>
import InputWrapper from '@/components/inputs/InputWrapper'
import ToggleInput from '@/components/inputs/ToggleInput'
import RadioInput from '@/components/inputs/RadioInput'
import ColorStops from '@/components/editor/bg-image/color-stops/ColorStops'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    InputWrapper,
    ToggleInput,
    RadioInput,
    ColorStops
  },
  computed: {
    ...mapFields({
      repeating: 'backgroundImage.repeating',
      type: 'backgroundImage.type'
    })
  }
}
</script>

<style lang="sass" scoped>
.bg-image
  outline: 1px solid red

.general-settings
  display: flex
  // justify-content: space-between
</style>
