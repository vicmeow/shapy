<template>
  <div class="canvas">
    <div class="canvas-wrapper">
      <div ref="canvas" class="canvas-max">
        <div
          class="gradients"
          :style="{
            width: canvas.width,
            'max-width': max.width,
            height: canvas.height,
            'max-height': max.height,
            background: canvasString
          }"
        >
          <div
            ref="gradientPreview"
            :style="{ background: gradientPreview }"
            class="preview"
          />
        </div>
      </div>
    </div>
    <canvas-info />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CanvasInfo from '@/components/editor/canvas/CanvasInfo'
export default {
  components: {
    CanvasInfo
  },
  computed: {
    ...mapGetters({
      canvas: 'gradientCanvas/size',
      canvasString: 'gradients/canvasString'
    }),
    gradientPreview() {
      return this.$store.getters.background.join('')
    },
    max() {
      const width = `${this.$store.state.gradientCanvas.width.max}px`
      const height = `${this.$store.state.gradientCanvas.height.max}px`
      return { width, height }
    }
  },
  watch: {
    background() {
      this.$store.dispatch('generatePreview', this.background)
    }
  },
  created() {
    this.$store.dispatch('generatePreview', this.background)
    // Add event listener for calculating max canvas size
    // eslint-disable-next-line
    window.addEventListener('resize', this.updateMax)
    // this.$refs.gradientPreview('')
  },
  destroyed() {
    // Remove event listener for calculating max canvas size
    window.removeEventListener('resize', this.updateMax)
  },
  mounted() {
    // Update the max values (canvas => box => shape)
    // setTimeout(() => {
    this.updateMax()
    // }, 1)
  },
  methods: {
    updateMax() {
      // Get the size of the div that is our canvas in max
      const width = this.$refs.canvas.offsetWidth
      const height = this.$refs.canvas.offsetHeight
      // Update canvas maxes
      this.$store.dispatch('gradientCanvas/updateMax', { width, height })
    }
  }
}
</script>

<style lang="sass">

.canvas
  display: flex
  flex-direction: column
  background: $white
  height: 100%
  width: 100%
  padding: 1rem 1rem 0
  border-radius: 3px
  min-height: 0

.canvas-wrapper
  position: relative
  height: calc(100% - 2rem)
  width: 100%
  flex-grow: 1

.canvas-max
  display: flex
  align-items: center
  justify-content: center
  height: 100%
  width: 100%

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
