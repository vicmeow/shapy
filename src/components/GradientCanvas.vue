<template>
  <div class="gradient-wrapper">
    <div
      class="canvas-wrapper">
      <div id="canvas-max"/>
      <div
        class="canvas-outline"
        :style="{width: canvasCurrent.x, height: canvasCurrent.y}">
        <div
          class="canvas-preview"
          :style="{background: previewGradient}"/>
        <div
          class="canvas-gradients"
          :style="{background: gradientShapes}"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  watch: {
    gradientString() {
      // Watch the gradient string for updates to update the CSS string for the preview canvas
      // Commit the changes to the store
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
      'comment',
      'box',
      'shape',
      'gradient',
      'canvas'
    ]),
    gradientShapes() {
      // make the gradient list into a css string
      return this.gradientList.join(', ')
    },
    gradientString() {
      /* TODO: Move string creation to the store */
      // GRADIENT INFO
      const type = this.gradient.type
      const repeat = this.gradient.repeat
      const comment = this.comment

      // BOX INFO
      const boxColor = this.box.color.color
      // box width + unit
      const boxWidth = this.box.size.x.size
      const boxWidthUnit = this.box.size.x.unit
      // box height + unit
      const boxHeight = this.box.size.y.size
      const boxHeightUnit = this.box.size.y.unit
      // box coord x + unit
      const boxX = this.box.coord.x.size
      const boxXUnit = this.box.coord.x.unit
      // box coord y + unit
      const boxY = this.box.coord.y.size
      const boxYUnit = this.box.coord.y.unit

      // SHAPE INFO
      const shapeColor = this.shape.color.color
      // degree info
      const degreeSize = this.shape.degree.size
      const degreeUnit = this.shape.degree.unit
      // shape width + unit
      const shapeWidth = this.shape.size.x.size
      const shapeWidthUnit = this.shape.size.x.unit
      // shape height + unit
      const shapeHeight = this.shape.size.y.size
      const shapeHeightUnit = this.shape.size.y.unit
      // shape coord x + unit
      const shapeX = this.shape.coord.x.size
      const shapeXUnit = this.shape.coord.x.unit
      // shape coord y + unit
      const shapeY = this.shape.coord.y.size
      const shapeYUnit = this.shape.coord.y.unit

      if (type === 'radial-gradient') {
        return `/* ${comment} */ ${type}(${shapeWidth}${shapeWidthUnit} ${shapeHeight}${shapeHeightUnit} at ${shapeX}${shapeXUnit} ${shapeY}${shapeYUnit}, ${shapeColor} 49.8%, ${boxColor} 50%) ${repeat} ${boxX}${boxXUnit} ${boxY}${boxYUnit} / ${boxWidth}${boxWidthUnit} ${boxHeight}${boxHeightUnit}`
      } else if (type === 'linear-gradient' && degreeSize > 0) {
        return `/* ${comment} */ ${type}(${degreeSize}${degreeUnit}, ${shapeColor} 49%, ${boxColor} 50%) ${repeat} ${boxX}${boxXUnit} ${boxY}${boxYUnit} / ${boxWidth}${boxWidthUnit} ${boxHeight}${boxHeightUnit}`
      } else if (type === 'linear-gradient') {
        return `/* ${comment} */ ${type}(${shapeColor} 99.99%, ${boxColor} 100%) ${repeat} ${boxX}${boxXUnit} ${boxY}${boxYUnit} / ${boxWidth}${boxWidthUnit} ${boxHeight}${boxHeightUnit}`
      }
    }
  }
}
</script>

<style lang="sass">

  .gradient-wrapper
    grid-column: 2 / -1

  .canvas-wrapper
    display: flex
    justify-content: center
    align-items: center
    position: relative
    background: white
    height: 100%
    width: 100%
    border-radius: 5px
    padding: 16px

  #canvas-max
    position: absolute
    min-height: 100%
    min-width: 100%

  .canvas-outline
    position: relative
    outline-color: $black
    outline-style: dashed
    outline-width: 1.5px
    outline-offset: 1.5px
    max-width: 100%
    max-height: 100%

  .canvas-preview
    position: absolute
    height: 100%
    width: 100%
    z-index: 2

  .canvas-gradients
    position: absolute
    height: 100%
    width: 100%

</style>
