<template>
  <div class="panel" role="group">
    <slot />
    <!-- GRADIENT TYPE -->
    <input-wrapper label="Repeating gradient" name="repeating">
      <toggle-input
        :default-value="isRepeating"
        :values="['normal', 'repeating']"
        name="repeating-gradient"
        @change="isRepeating = $event"
      ></toggle-input>
    </input-wrapper>
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
    <template v-if="gradient.active === 'radial'">
      <input-wrapper
        v-model="radialWidth"
        :field="radialWidth"
        label="Radial width"
      />
      <input-wrapper
        v-model="radialHeight"
        :field="radialHeight"
        label="Radial height"
      />
      <input-wrapper
        v-model="radialX"
        :field="radialX"
        :min="radialX.defaultUnit ? 0 : -radialWidth.px"
        label="Radial on x axis"
      />
      <input-wrapper
        v-model="radialY"
        :field="radialY"
        :min="radialY.defaultUnit ? 0 : -radialHeight.px"
        label="Radial on y axis"
      />
    </template>
  </div>
</template>

<script>
import InputWrapper from '@/components/inputs/InputWrapper'
import RadioInput from '@/components/inputs/RadioInput'
import ToggleInput from '@/components/inputs/ToggleInput'
import { mapFields } from 'vuex-map-fields'
// const { mapFields } = createHelpers({
//   getterType: 'general/getField',
//   mutationType: 'general/updateField'
// })
export default {
  name: 'Type',
  components: {
    InputWrapper,
    RadioInput,
    ToggleInput
  },
  data: () => ({
    desc: 'Edit the type of your gradient.'
  }),
  computed: {
    //...mapFields(['gradient', 'angle', 'isRepeating']),
    //...mapFields(['gradient', 'angle', 'isRepeating'])
    ...mapFields({
      gradient: 'general.gradient',
      angle: 'general.angle',
      isRepeating: 'general.isRepeating',
      radialWidth: 'shape.width',
      radialHeight: 'shape.height',
      radialX: 'shape.x',
      radialY: 'shape.y'
    })
  }
}
</script>
