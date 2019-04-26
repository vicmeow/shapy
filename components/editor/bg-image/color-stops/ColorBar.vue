<template>
  <div class="color-bar-wrapper">
    <!-- Color bar contain the bar with the gradient & drag area -->
    <div class="color-bar" @mousedown="createStop">
      <!-- Color bar showing the gradient -->
      <div
        ref="colorBar"
        class="color-gradient"
        :style="{ 'background-image': backgroundImage }"
      ></div>
      <!-- The drag area for stop points -->
      <div class="drag-area">
        <!-- Stop points for the gradient -->
        <stop-point
          v-for="stop in stops"
          :key="stop.id"
          :value="stop.pct"
          :stop="stop"
          :width="width"
          @mousedown.native="$emit('setActive', stop)"
          @dragStart="dragStart($event, stop.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StopPoint from '@/components/editor/bg-image/color-stops/StopPoint.vue'
export default {
  components: {
    StopPoint
  },
  props: {
    // Stops for the color bar
    stops: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      dragActive: false, // Whether dragging is active
      dragId: null, // ID of point being dragged
      width: null // Width to pass down to point to calculate px for CSS transform
    }
  },
  computed: {
    backgroundImage() {
      return `linear-gradient(to right, ${
        this.$store.getters['colorStops/colorString']
      })`
    }
  },
  mounted() {
    // Set the width of the color bar where the drag happens
    this.width = this.$refs.colorBar.getBoundingClientRect().width
  },
  methods: {
    // Calculate the point value
    calculatePoint(x) {
      // Get color bar info
      const colorBar = this.$refs.colorBar.getBoundingClientRect()
      // Get the position of where to add the new stop
      const px = x - colorBar.left
      // Calculate the % of the new stop point
      const pct = Math.round((px / colorBar.width) * 100)
      return pct
    },
    // Create a color stop point on the color bar
    createStop(e) {
      if (e.target.className === 'drag-area') {
        // Point of the click
        const point = this.calculatePoint(e.clientX)
        // Emit value to ColorControl
        this.$emit('createStop', point)
      }
    },
    // Start drag of a color stop point
    dragStart(e, id) {
      // Dragging is active
      this.dragActive = true
      // Set index of the point being dragged
      this.dragId = id
      // Add event listener for drag
      window.addEventListener('mousemove', this.drag, false)
      // Event listener for ending drag
      window.addEventListener('mouseup', this.dragEnd, false)
    },
    // Calculate position of point as it's being dragged
    drag(e) {
      // Drag only if dragging is active
      if (this.dragActive) {
        e.preventDefault()
        // Calculate the % of the drag point
        const point = this.calculatePoint(e.clientX)
        // Get index of the drag point
        const id = this.dragId
        // Only update stop point position if value is between 0 and 100
        if (point >= 0 && point <= 100) {
          // Update position of stop point being dragged
          this.$store.dispatch('colorStops/updateStop', { point, id })
        }
      }
    },
    // Handle the end of the drag
    dragEnd(e) {
      // Set dragging to false
      this.dragActive = false
      // Reset index
      this.dragId = null
      // Remove event listeners
      window.removeEventListener('mousemove', this.dragEnd)
      window.removeEventListener('mouseup', this.dragEnd)
    }
  }
}
</script>

<style lang="sass">

.color-bar-wrapper
  position: relative
  width: 100%
  padding: 1rem 0
  padding-bottom: 2.5rem

.color-bar
  width: 100%
  height: 2rem
  box-shadow: 0 0 10px rgba(0,0,0,.3)
  padding: 2px
  border-radius: 4px

.color-gradient
  height: 100%
  width: 100%
  border-radius: 2px

.drag-area
  position: absolute
  display: flex
  top: .5rem
  left: 0
  right: 0
  height: 3rem
  cursor: copy
</style>
