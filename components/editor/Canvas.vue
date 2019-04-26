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
          background: gradientString
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      canvas: 'gradientCanvas/size',
      gradientPreview: 'background',
      gradientString: 'gradients/string'
    }),
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
    setTimeout(() => {
      this.updateMax()
    }, 1)
  },
  methods: {
    updateSize() {},
    updateMax() {
      // Get the size of the div that is our canvas in max
      const width = document.getElementById('canvas-max').offsetWidth
      const height = document.getElementById('canvas-max').offsetHeight
      // Update canvas maxes
      this.$store.dispatch('gradientCanvas/updateMax', { width, height })
    }
  }
}
</script>

<style lang="sass">

.canvas-wrapper
  position: relative
  height: 100%
  width: 100%
  border-radius: 3px
  display: flex
  padding: 1rem
  background: $white

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
