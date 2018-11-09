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
          :style="{background: previewGradient}" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  watch: {
    gradientString() {
      // Watch the gradient string for updates to preview on canvas
      // and commit changes to store
      this.$store.commit('previewGradient', this.gradientString)
    }
  },
  methods: {
    updateMax() {
      // Update the max canvas size (px) based on the browser size
      const width = document.getElementById('canvas-max').offsetWidth
      const height = document.getElementById('canvas-max').offsetHeight
      // Commit the new max values to the stire
      this.$store.commit('updateMax', { x: width, y: height })
    }
  },
  created() {
    // Show a shape on initial load
    this.$store.commit('previewGradient', this.gradientString)
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
      // Add size and unit together for canvas size on load
      const width = this.canvas.x.size + this.canvas.x.unit
      const height = this.canvas.y.size + this.canvas.y.unit
      return { x: width, y: height }
    },
    // Things we need from the store
    ...mapState([
      'previewGradient',
      'gradientList',
      'gradientStrings',
      'comment',
      'box',
      'shape',
      'gradient',
      'canvas',
      'colors'
    ]),
    boxCombined() {
      const boxWidth = this.box.size.x.size + this.box.size.x.unit
      const boxHeight = this.box.size.y.size + this.box.size.y.unit
      const boxX = this.box.coord.x.size + this.box.coord.x.unit
      const boxY = this.box.coord.y.size + this.box.coord.y.unit
      const boxSize = boxWidth + ' ' + boxHeight
      const boxCoord = boxX + ' ' + boxY

      return boxCoord + ' / ' + boxSize
    },
    shapeCombined() {
      const shapeWidth = this.shape.size.x.size + this.shape.size.x.unit
      const shapeHeight = this.shape.size.y.size + this.shape.size.y.unit
      const shapeX = this.shape.coord.x.size + this.shape.coord.x.unit
      const shapeY = this.shape.coord.y.size + this.shape.coord.y.unit
      const shapeSize = shapeWidth + ' ' + shapeHeight
      const shapeCoord = shapeX + ' ' + shapeY

      return shapeSize + ' at ' + shapeCoord
    },
    colorStops() {
      const colorStops = this.colors.map(color => {
        let startColor
        let stopColor

        const start = color.start
        const stop = color.stop
        const startSize = start.size + start.unit
        const stopSize = stop.size + stop.unit

        // START VALUES
        if (start.color.type === 'rgba') {
          const rgba = start.color.rgba
          startColor = `rgba(${rgba.r},${rgba.g},${rgba.b},${
            rgba.a
          }) ${startSize}`
        } else {
          startColor = `${start.color.hex} ${startSize}`
        }

        // STOP VALUES
        if (stop.color.type === 'rgba') {
          const rgba = stop.color.rgba
          stopColor = `rgba(${rgba.r},${rgba.g},${rgba.b},${
            rgba.a
          }) ${stopSize}`
        } else {
          stopColor = `${stop.color.hex} ${stopSize}`
        }
        return `${startColor}, ${stopColor}`
      })
      return colorStops.join(', ')
    },
    gradientString() {
      // TYPE
      const type = this.gradient.type
      // REPEATING
      const repeat = this.gradient.repeat
      // COLORS
      const colors = this.colorStops
      // COMMENT
      const comment = this.comment
      // DEGREE
      const degree = this.gradient.degree.size + this.gradient.degree.unit
      // BOX
      const box = this.boxCombined
      // SHAPE
      const shape = this.shapeCombined

      if (type === 'radial-gradient') {
        return `/* ${comment} */ ${type}(${shape}, ${colors}) ${repeat} ${box}`
      } else if (type === 'linear-gradient' && this.gradient.degree.size > 0) {
        return `/* ${comment} */ ${type}(${degree}, ${colors}) ${repeat} ${box}`
      } else if (type === 'linear-gradient') {
        return `/* ${comment} */ ${type}(${colors}) ${repeat} ${box}`
      }
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
