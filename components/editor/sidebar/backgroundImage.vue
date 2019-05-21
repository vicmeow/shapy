<template>
  <div class="control image-control">
    <h2 class="control-heading">Gradient</h2>
    <control-info />
    <!-- Type of gradient (linear, radial, conical) and angle -->
    <gradient-type />
    <!-- Color bar displaying the gradient and handling stop points -->
    <color-bar
      :stops="stops"
      @createStop="createStop($event)"
      @setActive="setActive"
    />
    <!-- Color picker -->
    <no-ssr>
      <color-picker id="color-picker" v-model="activeStop.color" />
    </no-ssr>
    <!-- List of the gradient stop points that handles moving and deleting points -->
    <color-list
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
import ControlInfo from './ControlInfo'
import ColorBar from './image-controls/color-bar/ColorBar'
import GradientType from './image-controls/GradientType'
import ColorList from './image-controls/color-list/ColorList'
export default {
  components: {
    ColorPicker: Chrome,
    GradientType,
    ColorBar,
    ColorList,
    ControlInfo
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

<style lang="sass">

#color-picker
  box-shadow: none
  width: 100%
  max-width: 100%
  font-family: $monospace
  grid-column: 1/-1
  display: grid
  grid-template-columns: 1fr 1fr
  gap: 1rem
  @media screen and (max-width: 320px)
    grid-template-columns: 1fr

  .vc-chrome-saturation-wrap
    height: 100%
    max-height: 100px

  .vc-chrome-body
    padding: 0
    padding: .5rem 0 1rem

    .vc-chrome-color-wrap
      display: none

  .vc-chrome-fields-wrap
    padding-top: .5rem

  .vc-input__input
    font-size: .9rem
    color: $black
    box-shadow: none
    border-bottom: 1px solid $mediumgrey
    border-radius: 0
    &:focus
      border-color: $darkpink

  .vc-input__label
    font-family: $font
    font-size: .8rem
    color: $darkgrey
</style>
