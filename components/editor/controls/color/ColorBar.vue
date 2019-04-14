<template>
  <div class="color-bar-wrapper">
    <div class="color-bar">
      <!-- Add event listener to color-bar -->
      <div
        ref="colorBar"
        class="color-gradient"
        :style="{ 'background-image': activeGradient }"
      ></div>
      <div ref="dragArea" class="drag-area">
        <stop-point
          v-for="(stop, index) in sortedStops"
          :key="index"
          :value="stop.pct"
          :color="stop.color.hex"
          :width="width"
          @dragStart="dragStart($event, stop.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StopPoint from '@/components/editor/controls/color/StopPoint.vue'
export default {
  components: {
    StopPoint
  },
  props: {
    activeGradient: {
      type: String,
      required: true
    },
    stops: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      dragActive: false,
      dragId: null,
      width: null
    }
  },
  computed: {
    sortedStops() {
      return this.stops.slice(0).sort((a, b) => a.pct - b.pct)
    }
  },
  mounted() {
    // Set the width of the color bar where the drag happens
    this.width = this.$refs.colorBar.getBoundingClientRect().width
  },
  methods: {
    dragStart(e, id) {
      // Dragging is active
      this.dragActive = true
      // Set index of the point being dragged
      this.dragId = id
      // Add event listener for drag
      window.addEventListener('mousemove', this.drag)
      // Event listener for ending drag
      window.addEventListener('mouseup', this.dragEnd)
    },
    dragEnd(e) {
      // Set dragging to false
      this.dragActive = false
      // Reset index
      this.dragId = null
      // Remove event listeners
      window.removeEventListener('mousemove', this.dragEnd)
      window.removeEventListener('mouseup', this.dragEnd)
    },
    drag(e) {
      // Drag only if dragging is active
      if (this.dragActive) {
        e.preventDefault()
        // Get color bar info
        const colorBar = this.$refs.colorBar.getBoundingClientRect()
        // Get the position of the stop point being dragged
        const px = e.clientX - colorBar.left
        // Calculate the % of the drag point
        const value = Math.round((px / colorBar.width) * 100)
        // Get index of the drag point
        const id = this.dragId
        // Only update stop point position if value is between 0 and 100
        if (value >= 0 && value <= 100) {
          // Update position of stop point being dragged
          this.$store.dispatch('colors/updateStop', { value, id })
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.color-bar-wrapper
  position: relative
  width: 100%
  padding: 1rem
  padding-bottom: 2.5rem

.color-bar
  width: 100%
  height: 2.5rem
  box-shadow: 0 0 10px rgba(0,0,0,.3)
  padding: 3px
  border-radius: 4px

.color-gradient
  height: 100%
  width: 100%
  border-radius: 2px

.drag-area
  position: absolute
  display: flex
  top: .5rem
  left: 10px
  right: 10px
  height: 3.5rem
  cursor: copy
</style>
