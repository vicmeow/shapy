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
    gradientString() {
      /* TODO: Move string creation to the store */
      // GRADIENT INFO
      const type = this.gradient.type
      const repeat = this.gradient.repeat
      const comment = this.comment

      // BOX INFO
      // box size
      const boxWidth = this.box.size.x.size + this.box.size.x.unit
      const boxHeight = this.box.size.y.size + this.box.size.y.unit
      // box coord
      const boxX = this.box.coord.x.size + this.box.coord.x.unit
      const boxY = this.box.coord.y.size + this.box.coord.y.unit

      // BOX COMBINED
      const boxSize = boxWidth + ' ' + boxHeight
      const boxCoord = boxX + ' ' + boxY
      const box = boxCoord + ' / ' + boxSize

      // color stops
      const stop1 = this.colors.stop1.color + ' ' + this.colors.stop1.size + '%'
      const stop2 = this.colors.stop2.color + ' ' + this.colors.stop2.size + '%'

      // degree info
      const degree = this.shape.degree.size + this.shape.degree.unit
      // color stop
      const shapeWidth = this.shape.size.x.size + this.shape.size.x.unit
      const shapeHeight = this.shape.size.y.size + this.shape.size.y.unit
      // shape coord
      const shapeX = this.shape.coord.x.size + this.shape.coord.x.unit
      const shapeY = this.shape.coord.y.size + this.shape.coord.y.unit

      // SHAPE COMBINED
      const shapeSize = shapeWidth + ' ' + shapeHeight
      const shapeCoord = shapeX + ' ' + shapeY
      const shape = shapeSize + ' at ' + shapeCoord

      if (type === 'radial-gradient') {
        return `/* ${comment} */ ${type}(${shape}, ${stop1}, ${stop2}) ${repeat} ${box}`
      } else if (type === 'linear-gradient' && this.shape.degree.size > 0) {
        return `/* ${comment} */ ${type}(${degree}, ${stop1}, ${stop2}) ${repeat} ${box}`
      } else if (type === 'linear-gradient') {
        return `/* ${comment} */ ${type}(${stop1}, ${stop2}) ${repeat} ${box}`
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
