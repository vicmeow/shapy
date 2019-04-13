<template>
  <div class="canvas-wrapper">
    <div id="canvas-max" class="canvas">
      <div
        :style="{
          width: canvas.width,
          height: canvas.height,
          background: gradient
        }"
        class="gradient-canvas"
      >
        <div :style="{ background: preview }" class="preview-gradient" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    box() {
      return this.$store.state.gradient
    },
    shape() {
      return this.$store.state.shape
    },
    width() {
      return this.$store.state.canvas.width.max
    },
    height() {
      return this.$store.state.canvas.height.max
    },
    ...mapState({
      gradient: 'gradientStrings',
      preview: 'previewGradient'
    }),
    ...mapGetters({
      color: 'color/colorStops',
      gradientString: 'createString',
      canvas: 'canvas/size'
    })
  },
  watch: {
    gradientString() {
      this.$store.dispatch('previewGradient', this.gradientString)
    },
    width() {
      // When the canvas width changes, the max for gradient width should update
      const width = this.width
      this.$store.dispatch('gradient/updateWidth', width)
    },
    height() {
      // When the canvas height changes, the max for gradient height should update
      const height = this.height
      this.$store.dispatch('gradient/updateHeight', height)
    }
  },
  created() {
    this.$store.dispatch('previewGradient', this.gradientString)
    // Add event listener for calculating max canvas size
    window.addEventListener('resize', this.updateMax)
  },
  destroyed() {
    // Remove event listener for calculating max canvas size
    window.removeEventListener('resize', this.updateMax)
  },
  mounted() {
    // Update the max values (canvas => box => shape)
    this.updateMax()
  },
  methods: {
    updateMax() {
      // Get the size of the div that is our canvas in max
      const width = document.getElementById('canvas-max').offsetWidth
      const height = document.getElementById('canvas-max').offsetHeight
      // Update canvas maxes
      this.$store.dispatch('canvas/updateMax', { width, height })
    }
  }
}
</script>

<style lang="sass">

.canvas-wrapper
  position: relative
  background: white
  border-radius: 3px
  //padding: 1em
  display: flex

.canvas
  display: flex
  align-items: center
  justify-content: center
  min-height: 100%
  min-width: 100%

.gradient-canvas
  outline-color: $black
  outline-style: dashed
  outline-width: 1.5px
  outline-offset: 1.5px
  max-height: 100%
  max-width: 100%

.preview-gradient
  height: 100%
  width: 100%
</style>
