<template>
  <div class="gradient-wrapper">
    <div
      class="canvas"
      id="canvas-max">
      <div
        class="gradient-canvas"
        :style="{width: canvasCurrent.x, height: canvasCurrent.y, background: gradientStrings}">
        <div
          class="preview-gradient"
          :style="{background: previewGradient}"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  watch: {
    gradientString() {
      this.$store.dispatch('previewGradient', this.gradientString)
    }
  },
  methods: {
    updateMax() {
      // Update the max canvas size (px) based on the browser size
      const width = document.getElementById('canvas-max').offsetWidth
      const height = document.getElementById('canvas-max').offsetHeight
      // Dispatch the new max values to the stire
      this.$store.dispatch('canvas/updateMax', { x: width, y: height })
    }
  },
  created() {
    // Show a shape on initial load
    this.$store.dispatch('previewGradient', this.gradientString)
    // Add an event listener for calculating canvas max size (px)
    window.addEventListener('resize', this.updateMax)
  },
  destroyed() {
    window.removeEventListener('resize', this.updateMax)
  },
  mounted() {
    // update the max canvas size based on canvas wrapper
    this.updateMax()
  },
  computed: {
    canvasCurrent() {
      // TODO: move to store
      // Add size and unit together for canvas size on load
      const width = this.canvas.x.size + this.canvas.x.unit
      const height = this.canvas.y.size + this.canvas.y.unit
      return { x: width, y: height }
    },
    ...mapGetters({
      previewGradient: 'previewGradient',
      gradientList: 'gradientList',
      gradientStrings: 'gradientStrings',
      colorStops: 'colors/colorStops',
      canvas: 'canvas/canvas',
      general: 'general/general',
      box: 'box/box',
      shape: 'shape/shape'
    }),
    gradientString() {
      const degree = this.general.degree.size + this.general.degree.unit
      let comment =
        this.general.comment === '' ? '' : `/* ${this.general.comment} */`

      const returnValue = type => {
        if (type === 'linear-gradient') {
          return this.general.degree.size > 0
            ? `${comment}${this.general.type}(${degree}, ${this.colorStops}) ${
                this.general.repeat
              } ${this.box}`
            : `${comment} ${this.general.type}(${this.colorStops}) ${
                this.general.repeat
              } ${this.box}`
        }
        if (type === 'conic-gradient') {
          return `${comment} ${this.general.type}(${this.colorStops})${
            this.box
          }`
        }

        return `${comment} ${this.general.type}(${this.shape}, ${
          this.colorStops
        }) ${this.general.repeat} ${this.box}`
      }

      return returnValue(this.general.type)
    }
  }
}
</script>

<style lang="sass">

  .gradient-wrapper
    position: relative
    margin-top: 1em
    margin-right: 1em
    margin-left: 1em
    grid-column: 2 / -1
    grid-row: 1
    background: white
    border-radius: 3px
    padding: 1em
    display: flex
    @media screen and (max-width: 768px)
      min-height: 60vw

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
