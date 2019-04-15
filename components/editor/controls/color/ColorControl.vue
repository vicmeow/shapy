<template>
  <div class="control color-control">
    <!-- Color bar displaying the gradient and handling stop points -->
    <color-bar
      :stops="stops"
      :active-gradient="activeGradient"
      @createStop="createStop($event)"
      @setActive="setActive"
    />
    <!-- List of the gradient stop points that handles moving and deleting points -->
    <stop-list
      :stops="stops"
      :active-stop="activeStop"
      @setActive="setActive"
    />
    <!-- Color picker deciding the color of a stop point -->
    <no-ssr>
      <color-picker id="color-picker" v-model="activeStop.color" />
    </no-ssr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { createHelpers } from 'vuex-map-fields'
import { Chrome } from 'vue-color'
import ColorBar from '@/components/editor/controls/color/ColorBar'
import StopList from '@/components/editor/controls/color/StopList'
const { mapFields } = createHelpers({
  getterType: 'colorStops/getField',
  mutationType: 'colorStops/updateField'
})
export default {
  components: {
    ColorPicker: Chrome,
    ColorBar,
    StopList
  },
  data() {
    return {
      color: {}
    }
  },
  computed: {
    ...mapFields(['activeStop']),
    ...mapGetters({
      activeGradient: 'colorStops/activeGradient',
      stops: 'colorStops/sortedStops'
    })
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
    updateValue(color) {
      this.$emit('input', {
        ...this.activeStop,
        color: color
      })
    }
  }
}
</script>

<style lang="sass">

.color-control
  grid-column: 1 / -1
  outline: 1px solid red
  gap: 1rem
  padding-top: 1rem

#color-picker
  box-shadow: none
  grid-area: picker

.stop-preview
  height: 1rem
  width: 1rem

.color-list
  padding: 0
  grid-area: list

.color-stop, .stop-info
  display: flex

.color-stop
  margin-bottom: .5rem
  box-shadow: 0 0 10px rgba(0,0,0,.15)
  border-radius: 5px

.stop-info
  padding: .5rem
  flex-grow: 1

.stop-actions
  margin-left: auto

.active
  border: 1px solid rgba(0,0,0,.3)
</style>
