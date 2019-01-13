<template>
  <div role="group" class="fieldset fieldset-box">
    <!-- TITLE & DESCRIPTION -->
    <legend class="legend" @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle :hidden="hidden" @click.native="hidden = !hidden" />
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>

      <!-- WIDTH INPUT (%/px) -->
      <input-wrapper
        v-model="box.size.x"
        :label="'Width'"
        :name="'box-size-x'"
        :what="box.size.x"
        :max="box.size.x.unit === '%' ? 100 : boxMax.x"
      />

      <!-- HEIGHT INPUT (%/px) -->
      <input-wrapper
        v-model="box.size.y"
        :label="'Height'"
        :name="'box-size-y'"
        :what="box.size.y"
        :max="box.size.y.unit === '%' ? 100 : boxMax.y"
      />

      <!-- X AXIS (%) -->
      <input-wrapper
        v-model="box.coord.x"
        :label="'X-axis'"
        :name="'box-x'"
        :what="box.coord.x"
        :min="box.coord.x.unit === '%' ? 0 : axis.min.x"
        :max="box.coord.x.unit === '%' ? 100 : boxMax.x"
      />

      <!-- Y AXIS (%) -->
      <input-wrapper
        v-model="box.coord.y"
        :label="'Y-axis'"
        :name="'box-y'"
        :what="box.coord.y"
        :min="box.coord.y.unit === '%' ? 0 : axis.min.y"
        :max="box.coord.y.unit === '%' ? 100 : boxMax.y"
      />
    </template>
  </div>
</template>

<script>
import GroupToggle from '@/components/GroupToggle'
import InputWrapper from '@/components/InputWrapper'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'box/getField',
  mutationType: 'box/updateField'
})
export default {
  name: 'Box',
  components: {
    InputWrapper,
    GroupToggle
  },
  data: () => ({
    hidden: false,
    title: 'Box Details 📦',
    desc: 'The box your shape goes into.'
  }),
  computed: {
    ...mapFields(['box']),
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
      const X =
        this.box.size.x.unit === '%'
          ? Math.round((this.box.size.x.size / 100) * this.boxMax.x)
          : this.boxMax.x
      const Y =
        this.box.size.y.unit === '%'
          ? Math.round((this.box.size.y.size / 100) * this.boxMax.y)
          : this.boxMax.y
      return { x: X, y: Y }
    },
    axis() {
      // Axis min values
      const MIN_X =
        this.box.size.x.unit === '%' ? -this.boxPx.x : -this.box.size.x.size
      const MIN_Y =
        this.box.size.y.unit === '%' ? -this.boxPx.y : -this.box.size.y.size
      return { min: { x: MIN_X, y: MIN_Y } }
    }
  }
}
</script>

<style lang="sass">
.degree-wrapper
  flex-basis: 100%
</style>
