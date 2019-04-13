<template>
  <div class="controls" :style="{ 'max-height': max.height }">
    <no-ssr><color-control /></no-ssr>
    <!--  <canvas-control /> -->
    <div class="input">
      <h3>Type</h3>
      <span>?</span>
      <ul>
        <li>Repeating: true/false</li>
        <li>linear: radio</li>
        <li>radial: radio</li>
        <li>conical: radio</li>
      </ul>
    </div>
    <div class="input">
      <h3>Size & Position</h3>
      <span>?</span>
      <ul>
        <li>Height</li>
        <li>Width</li>
      </ul>
      <ul>
        <li>Height</li>
        <li>Width</li>
      </ul>
    </div>
    <div class="input">
      <h3>Style</h3>
      <span>?</span>
      <ul>
        <li>repeat</li>
        <li>no-repeat</li>
        <li>repeat-x</li>
        <li>repeat-y</li>
        <li>round</li>
        <li>space</li>
      </ul>
    </div>
    <div class="code">
      <span>CSS</span>
      <!-- Toggle background shorthand -->
      <button>Toggle shorthand</button>
      <!-- Only show snippet of colors (if more than X amount) -->
      <button>Show all colors</button>
      <!-- Only show snippet of gradients (if more than X amount) -->
      <button>Show layers</button>
      <!-- Copy the CSS -->
      <button>Copy</button>
      <!-- Export to CodePen -->
      <button>CodePen</button>
      <!-- Submit to Gallery -->
      <button>Submit</button>
    </div>
  </div>
</template>

<script>
import ColorControl from '@/components/editor/controls/ColorControl'
export default {
  components: {
    ColorControl
  },
  computed: {
    max() {
      const width = `${this.$store.state.canvas.width.max}px`
      const height = `${this.$store.state.canvas.height.max}px`
      return { width, height }
    }
  }
}
</script>

<style lang="sass">
.controls
  display: grid
  grid-template-columns: 1fr 1fr
  //overflow-y: auto

.code
  grid-column: 1 / -1
  background: $black
  color: $white
  min-height: 200px
</style>
