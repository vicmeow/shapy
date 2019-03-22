<template>
  <div role="group" class="fieldset fieldset-shape">
    <!-- TITLE & DESCRIPTION -->
    <legend class="legend" @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle :hidden="hidden" @click.native="hidden = !hidden" />
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>

      <!-- WIDTH INPUT (%/px) -->
      <input-wrapper v-model="width" :field="width" label="Radial width" />

      <!-- HEIGHT INPUT (%/px) -->
      <input-wrapper v-model="height" :field="height" label="Radial height" />

      <!-- X AXIS (%/px) -->
      <input-wrapper
        v-model="x"
        :field="x"
        :min="x.defaultUnit ? 0 : -width.px"
        label="Radial on x axis"
      />

      <!-- Y AXIS (%) -->
      <input-wrapper
        v-model="y"
        :field="y"
        :min="y.defaultUnit ? 0 : -height.px"
        label="Radial on y axis"
      />
    </template>
  </div>
</template>

<script>
import GroupToggle from '@/components/GroupToggle'
import InputWrapper from '@/components/inputs/InputWrapper'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'shape/getField',
  mutationType: 'shape/updateField'
})
export default {
  name: 'Shape',
  components: {
    InputWrapper,
    GroupToggle
  },
  data: () => ({
    hidden: false,
    title: 'Shape in Box 📐',
    desc:
      'Edit the size and placement of the shape inside the box you edit above.'
  }),
  computed: {
    ...mapFields(['width', 'height', 'x', 'y']),
    boxMax() {
      // Max box size based on canvas (PX)
      const CANVAS = this.$store.state.canvas.canvas
      const X =
        CANVAS.x.unit === '%'
          ? Math.round((CANVAS.x.size * CANVAS.x.max) / 100)
          : CANVAS.x.size
      const Y =
        CANVAS.y.unit === '%'
          ? Math.round((CANVAS.y.size * CANVAS.y.max) / 100)
          : CANVAS.y.size
      return { x: X, y: Y }
    },
    boxPx() {
      // Box size in PX
      const BOX = this.$store.state.box.box
      const X =
        BOX.size.x.unit === '%'
          ? Math.round((BOX.size.x.size / 100) * this.boxMax.x)
          : this.boxMax.x
      const Y =
        BOX.size.y.unit === '%'
          ? Math.round((BOX.size.y.size / 100) * this.boxMax.y)
          : this.boxMax.y
      return { x: X, y: Y }
    },
    shapePx() {
      const X =
        this.shape.size.x.unit === '%'
          ? Math.round((this.boxPx.x / 100) * this.shape.size.x.size)
          : this.shape.size.x.size
      const Y =
        this.shape.size.y.unit === '%'
          ? Math.round((this.boxPx.y / 100) * this.shape.size.y.size)
          : this.shape.size.y.size
      return { x: X, y: Y }
    },
    axis() {
      // Axis min values
      const MIN_X =
        this.shape.size.x.unit === '%'
          ? -this.shapePx.x
          : -this.shape.size.x.size
      const MIN_Y =
        this.shape.size.y.unit === '%'
          ? -this.shapePx.y
          : -this.shape.size.y.size
      return { min: { x: MIN_X, y: MIN_Y } }
    }
  }
}
</script>
