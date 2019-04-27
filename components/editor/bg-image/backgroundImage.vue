<template>
  <div class="control image-control">
    <h2 class="heading">Background-image</h2>
    <h3>Type</h3>
    <div class="gradient-type">
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
      <input-wrapper>
        <label>Repeating</label>
        <toggle-input
          v-model="repeating"
          :default-value="repeating"
          name="repeating-gradient"
        ></toggle-input>
      </input-wrapper>
    </div>
    <div v-if="activeType === 'linear'" class="gradient-angle">
      <div class="angle-control">
        <div
          class="angle-point-wrapper"
          :style="{
            transform: `rotate(${activeAngle}deg)`
          }"
        >
          <div class="angle-point"></div>
        </div>
      </div>
      <span>{{ activeAngle }}deg</span>
      <input-wrapper>
        <radio-input
          v-for="radio in angles"
          :key="radio.index"
          v-model.number="activeAngle"
          :active="activeAngle"
          :radio="radio"
          group="gradient-angle"
        />
      </input-wrapper>
    </div>
    <h3>Colors</h3>
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
      activeType: 'backgroundImage.type.active',
      activeAngle: 'backgroundImage.angle.active',
      comment: 'backgroundImage.comment'
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

.gradient-type
  display: flex
  flex-wrap: wrap

.angle-control
  height: 1.5rem
  width: 1.5rem
  border-radius: 50%
  border: 2px solid $black
  display: flex
  align-items: center
  justify-content: center

.angle-point-wrapper
  position: relative
  height: 100%
  width: 5px
  pointer-events: none

.angle-point
  position: absolute
  top: 2.5px
  height: 5px
  width: 5px
  border-radius: 50%
  background: black
</style>
