<template>
  <div class="gradient-wrapper">
    <div 
      class="canvas-wrapper" 
      :style="{width: canvas.x + canvas.unit, height: canvas.y+ canvas.unit}">
      <div 
        class="preview-canvas"
        :style="{ background: preview }"/>
      <div 
        class="canvas" 
        :style="{ background: gradient }"/>
    </div>
    <div class="canvas-size">
      {{ canvas.x }}{{ canvas.unit }} x {{ canvas.y }}{{ canvas.unit }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    preview: {
      type: String,
      default: '',
      required: true
    },
    canvas: {
      type: Object,
      required: false,
      default() {
        return {
          unit: 'px',
          x: 250,
          y: 250
        }
      }
    },
    gradient: {
      type: String,
      default: 'gradient',
      required: false
    }
  }
}
</script>

<style lang="sass">
  .gradient-wrapper
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

  .canvas-size
    margin-top: 1rem

  .canvas-wrapper
    position: relative
    outline-color: white
    outline-offset: 2px
    outline-style: dashed
    outline-width: 2px
    background: white

  .canvas
    position: absolute
    height: 100%
    width: 100%

  .preview-canvas
    position: absolute
    height: 100%
    width: 100%
    z-index: 99
</style>
