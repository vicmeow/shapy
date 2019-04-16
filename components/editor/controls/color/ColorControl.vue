<template>
  <div class="control color-control">
    <!-- Color bar displaying the gradient and handling stop points -->
    <color-bar
      :stops="stops"
      @createStop="createStop($event)"
      @setActive="setActive"
    />
    <!-- Color picker deciding the color of a stop point -->
    <no-ssr>
      <color-picker id="color-picker" v-model="activeStop.color" />
    </no-ssr>
    <!-- List of the gradient stop points that handles moving and deleting points -->
    <stop-list
      :stops="stops"
      :active-stop="activeStop"
      @setActive="setActive"
    />
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
    updateColor(color) {
      // eslint-disable-next-line
      console.log(color)
      this.$store.dispatch('colorStops/updateColor', this.color)
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
  display: flex
  flex-wrap: wrap

#color-picker
  box-shadow: none
</style>
