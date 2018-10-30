<template>
  <div class="gradient-wrapper">
    <div 
      class="canvas-wrapper">
      <div 
        class="sized-canvas" 
        :style="{width: canvas.x.size + 'px', height: canvas.y.size + 'px'}">
        <div 
          class="preview-canvas" 
          :style="{background: previewGradient}"/>
        <div 
          class="canvas" 
          :style="{background: gradientShapes}"/>
      </div>
    </div>
    <button 
      class="btn" 
      @click="addGradient">Add shape</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    gradientPreview: ''
  }),
  watch: {
    gradientString() {
      this.$store.commit('previewGradient', this.gradientString)
    }
  },
  methods: {
    addGradient() {
      this.$store.commit('addGradient', this.gradientString)
    }
  },
  created() {
    this.$store.commit('previewGradient', this.gradientString)
  },
  computed: {
    ...mapState({
      previewGradient: 'previewGradient',
      gradientList: 'gradientList',
      comment: 'comment',
      canvas: 'canvas',
      box: 'box',
      shape: 'shape',
      gradient: 'gradient'
    }),
    gradientShapes() {
      return this.gradientList.join(', ')
    },
    gradientString() {
      // GRADIENT INFO
      const type = this.gradient.type
      const repeat = this.gradient.repeat
      const comment = this.comment

      // BOX INFO
      const boxColor = this.box.color
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
      const shapeColor = this.shape.color
      const shapeDeg = this.shape.deg
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
      } else if (type === 'linear-gradient' && shapeDeg > 0) {
        return `/* ${comment} */ ${type}(${shapeDeg}deg, ${shapeColor} 49%, ${boxColor} 50%) ${repeat} ${boxX}${boxXUnit} ${boxY}${boxYUnit} / ${boxWidth}${boxWidthUnit} ${boxHeight}${boxHeightUnit}`
      } else if (type === 'linear-gradient') {
        return `/* ${comment} */ ${type}(${shapeColor} 99.99%, ${boxColor} 100%) ${repeat} ${boxX}${boxXUnit} ${boxY}${boxYUnit} / ${boxWidth}${boxWidthUnit} ${boxHeight}${boxHeightUnit}`
      }
    }
  }
}
</script>

<style lang="sass">

  .heading
    font-size: 1.2rem

  .gradient-wrapper
    display: flex
    flex-direction: column
    align-items: center
    margin: auto
    max-height: 100vh

  .gradient-preview
    color: $white
    margin-bottom: 1rem
    width: 100%

  .canvas-wrapper
    position: relative
    background: white
    height: 520px
    width: 520px
    display: flex
    justify-content: center
    align-items: center

  .sized-canvas
    display: flex
    margin: auto
    position: absolute
    outline-color: $black
    outline-style: dashed
    outline-width: 1.5px

  .canvas
    position: relative
    height: 100%
    width: 100%

  .preview-canvas
    position: absolute
    height: 100%
    width: 100%
    z-index: 99
  
  .btn
    cursor: pointer
    border: 0
    background: #00c6b8
    color: $white
    font-weight: 500
    text-transform: uppercase
    padding: .8rem 1.5rem
    font-size: 1.2rem
    font-family: $font
    border-radius: 2rem
    margin-top: 1rem
    &:active
      transform: translate3d(0,2px,0)
</style>
