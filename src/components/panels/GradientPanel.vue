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
        v-model="shapeWidth"
        :field="shapeWidth"
        label="Radial width"
      />
      <input-wrapper
        v-model="shapeHeight"
        :field="shapeHeight"
        label="Radial height"
      />
      <input-wrapper
        v-model="shapeX"
        :field="shapeX"
        :min="shapeX.defaultUnit ? 0 : -shapeWidth.px"
        label="Radial on x axis"
      />
      <input-wrapper
        v-model="shapeY"
        :field="shapeY"
        :min="shapeY.defaultUnit ? 0 : -shapeHeight.px"
        label="Radial on y axis"
      />
    </template>
    <div
      v-for="(color, index) in stops"
      :key="color.id"
      class="color-stop-wrapper"
      role="group"
    >
      <input-wrapper
        :name="`Color stop no. ${index + 1}, start position`"
        :field="color.start"
        v-model="color.start"
        label="Start"
      >
        <color-picker
          slot="color"
          :color="color.start.color"
          v-model="color.start.color"
        />
      </input-wrapper>
      <input-wrapper
        :name="`Color stop no. ${index + 1}, stop position`"
        :field="color.stop"
        v-model="color.stop"
        label="Stop"
      >
        <color-picker
          slot="color"
          :color="color.stop.color"
          v-model="color.stop.color"
        />
      </input-wrapper>
      <button @click="addStop(index + 1)">Add</button>
      <button @click="removeStop(color.id)">Remove</button>
    </div>
  </div>
</template>

<script>
import InputWrapper from '@/components/inputs/InputWrapper'
import RadioInput from '@/components/inputs/RadioInput'
import ColorPicker from '@/components/inputs/ColorPicker'
import ToggleInput from '@/components/inputs/ToggleInput'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Type',
  components: {
    InputWrapper,
    RadioInput,
    ToggleInput,
    ColorPicker
  },
  data: () => ({
    desc: 'Edit the type of your gradient.'
  }),
  computed: {
    ...mapFields({
      gradient: 'type',
      angle: 'angle',
      isRepeating: 'repeating',
      shapeWidth: 'shape.width',
      shapeHeight: 'shape.height',
      shapeX: 'shape.x',
      shapeY: 'shape.y',
      stops: 'color.stops'
    })
  }
}
</script>
