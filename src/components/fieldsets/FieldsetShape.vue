<template>
  <div role="group" class="fieldset fieldset-shape">
    <!-- TITLE & DESCRIPTION -->
    <legend class="legend" @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle :hidden="hidden" @click.native="hidden = !hidden" />
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>

      <!-- WIDTH INPUT (%/px) -->
      <input-wrapper
        v-model="shape.size.x"
        :label="'Width'"
        :name="'shape-size-x'"
        :what="shape.size.x"
        :max="shape.size.x.unit === '%' ? 100 : boxPx.x"
      />

      <!-- HEIGHT INPUT (%/px) -->
      <input-wrapper
        v-model="shape.size.y"
        :label="'Height'"
        :name="'shape-size-y'"
        :what="shape.size.y"
        :max="shape.size.y.unit === '%' ? 100 : boxPx.y"
      />

      <!-- X AXIS (%) -->
      <input-wrapper
        v-model="shape.coord.x"
        :label="'X-axis'"
        :name="'shape-x'"
        :what="shape.coord.x"
        :min="shape.coord.x.unit === '%' ? 0 : axis.min.x"
        :max="shape.coord.x.unit === '%' ? 100 : boxPx.x + shapePx.x"
      />

      <!-- Y AXIS (%) -->
      <input-wrapper
        v-model="shape.coord.y"
        :label="'Y-axis'"
        :name="'shape-y'"
        :what="shape.coord.y"
        :min="shape.coord.y.unit === '%' ? 0 : axis.min.y"
        :max="shape.coord.y.unit === '%' ? 100 : boxPx.y + shapePx.y"
      />
    </template>
  </div>
</template>

<script>
import GroupToggle from '@/components/GroupToggle'
import InputWrapper from '@/components/InputWrapper'
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
    ...mapFields(['shape']),
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
