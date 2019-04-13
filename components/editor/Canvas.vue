<template>
  <div class="canvas-wrapper">
    <div id="canvas-max" class="canvas">
      <div
        class="gradients"
        :style="{
          width: canvas.width,
          'max-width': max.width,
          height: canvas.height,
          'max-height': max.height,
          background: gradients
        }"
      >
        <div :style="{ background: preview }" class="preview" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      gradients: 'gradientStrings',
      preview: 'preview'
    }),
    ...mapGetters({
      canvas: 'canvas/size',
      string: 'string'
    }),
    max() {
      const width = `${this.$store.state.canvas.width.max}px`
      const height = `${this.$store.state.canvas.height.max}px`
      return { width, height }
    }
  },
  watch: {
    string() {
      this.$store.dispatch('generatePreview', this.string)
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
    this.$store.dispatch('generatePreview', this.string)
    // Add event listener for calculating max canvas size
    // eslint-disable-next-line
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
  display: flex
  padding: 1rem 0
  min-height: 300px

.canvas
  display: flex
  align-items: center
  justify-content: center
  min-height: 100%
  min-width: 100%

.gradients
  outline-color: $black
  outline-style: dashed
  outline-width: 1.5px
  outline-offset: 1.5px
  max-height: 100%
  max-width: 100%

.preview
  height: 100%
  width: 100%
</style>
