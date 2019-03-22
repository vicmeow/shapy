<template>
  <div role="group" class="fieldset fieldset-gradient">
    <!-- TITLE & DESCRIPTION -->
    <legend class="legend" @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle :hidden="hidden" @click.native="hidden = !hidden" />
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>

      <input-wrapper label="gradient type" name="gradient type">
        <radio-input
          v-for="radio in gradient.types"
          :active="gradient.active"
          v-model="gradient.active"
          :radio="radio"
          :key="radio.index"
          group="gradient-type"
        />
      </input-wrapper>

      <input-wrapper label="Repeating gradient" name="repeating">
        <toggle-input
          :default-value="isRepeating"
          :values="['normal', 'repeating']"
          @change="isRepeating = $event"
        ></toggle-input>
      </input-wrapper>

      <input-wrapper label="background repeat" name="background repeat">
        <radio-input
          v-for="radio in backgroundRepeat.types"
          :active="backgroundRepeat.active"
          v-model="backgroundRepeat.active"
          :radio="radio"
          :key="radio.index"
          group="background-repeat"
        />
      </input-wrapper>
      <input-wrapper
        v-if="gradient.active === 'linear'"
        label="Gradient angle"
        name="gradient angle"
      >
        <radio-input
          v-for="radio in angle.types"
          :active="angle.active"
          v-model="angle.active"
          :radio="radio"
          :key="radio.index"
          group="angle"
        />
      </input-wrapper>
    </template>
  </div>
</template>

<script>
import GroupToggle from '@/components/GroupToggle'
import InputWrapper from '@/components/inputs/InputWrapper'
import RadioInput from '@/components/inputs/RadioInput'
import ToggleInput from '@/components/inputs/ToggleInput'
// import { mapState } from 'vuex'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'general/getField',
  mutationType: 'general/updateField'
})
export default {
  name: 'General',
  components: {
    InputWrapper,
    GroupToggle,
    RadioInput,
    ToggleInput
  },
  data: () => ({
    hidden: false,
    title: 'Gradient Type 💈',
    desc:
      'Radial gradients create round shapes and linear gradients create rectangular shapes.'
  }),
  computed: {
    ...mapFields([
      'gradient',
      'backgroundRepeat',
      'isRepeating',
      'angle',
      'comment'
    ])
  }
}
</script>

<style lang="sass">
.input-wrapper.comment-wrapper
  flex-basis: 100%
  width: 100%
  margin-top: .5em
  padding-right: 0
  padding-left: 0

.comment-label
  margin-bottom: .5em 0

.comment-input
  padding: .3em 0
  width: 100%
  border-bottom: 1px solid $black

.fieldset.fieldset-inline
  flex-basis: 100%
  box-shadow: none
  padding: 0
  margin: 0
  margin-bottom: .5em

.checkbox-wrapper
  flex-basis: 100%
  display: flex
  margin-bottom: .5em

.note
  font-size: .85em
</style>
