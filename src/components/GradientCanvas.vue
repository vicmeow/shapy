<template>
  <div class="gradient-wrapper">
    <div 
      class="canvas-wrapper">
      <div 
        class="sized-canvas" 
        :style="{width: canvas.x.size + canvas.x.unit, height: canvas.y.size + canvas.y.unit}">
        <div 
          class="preview-canvas"
          :style="{ background: preview }"/>
        <div 
          class="canvas" 
          :style="{ background: gradient }"/>
      </div>
    </div>
    <div class="size">
      {{ canvas.x.size + canvas.x.unit }} x {{ canvas.y.size + canvas.y.unit }}
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
          x: {
            size: 500,
            unit: 'px'
          },
          y: {
            size: 500,
            unit: 'px'
          }
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

  .size
    color: $white
    margin-top: 1rem

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
    outline-width: 1px

  .canvas
    position: relative
    height: 100%
    width: 100%

  .preview-canvas
    position: absolute
    height: 100%
    width: 100%
    z-index: 99
</style>
