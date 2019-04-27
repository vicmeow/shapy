<template>
  <div class="control image-control">
    <h2 class="heading">Gradient</h2>
    <!-- Type of gradient (linear, radial, conical) -->
    <gradient-type />
    <!-- Color picker -->
    <no-ssr>
      <color-picker id="color-picker" v-model="activeStop.color" />
    </no-ssr>
    <!-- Color bar displaying the gradient and handling stop points -->
    <color-bar
      :stops="stops"
      @createStop="createStop($event)"
      @setActive="setActive"
    />
    <!-- List of the gradient stop points that handles moving and deleting points -->
    <stop-list
      :stops="stops"
      :active-stop="activeStop"
      @setActive="setActive"
    />
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapGetters } from 'vuex'
import { Chrome } from 'vue-color'
import ColorBar from './image-controls/color-bar/ColorBar'
import GradientType from './image-controls/GradientType'
import StopList from './image-controls/color-list/StopList'
export default {
  components: {
    ColorPicker: Chrome,
    GradientType,
    ColorBar,
    StopList
  },
  data() {
    return {
      color: {}
    }
  },
  computed: {
    ...mapFields({
      activeStop: 'colorStops.activeStop',
      repeating: 'backgroundImage.repeating',
      activeType: 'backgroundImage.type.active',
      activeAngle: 'backgroundImage.angle.active',
      comment: 'backgroundImage.comment'
    }),
    ...mapGetters({
      stops: 'colorStops/sortedStops'
    }),
    types() {
      return this.$store.state.backgroundImage.type.types
    },
    angles() {
      return this.$store.state.backgroundImage.angle.types
    }
  },
  mounted() {
    this.activeStop = this.stops[0]
  },
  methods: {
    setActive(stop) {
      this.$store.dispatch('colorStops/setActive', stop)
    },
    createStop(point) {
      const color = this.activeStop.color
      this.$store.dispatch('colorStops/createStop', { point, color })
    },
    updateColor(color) {
      // eslint-disable-next-line
      console.log(color)
      this.$store.dispatch('colorStops/updateColor', this.color)
    }
  }
}
</script>

<style lang="sass" scoped>

.heading
  grid-column: 1/-1

.image-control
  display: grid
  grid-template-columns: 1fr .8fr

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
