<template>
  <div class="wrapper">
    <div class="canvas-wrapper">
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
          x: 500,
          y: 500
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
  .canvas-size
    margin-top: 1rem
  
  .canvas-wrapper
    position: relative
    height: 500px
    width: 500px
    outline-color: $black
    outline-style: dashed
    outline-width: 2px
  
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
