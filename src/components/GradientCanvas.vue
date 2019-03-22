<template>
  <div class="gradient-wrapper">
    <div id="canvas-max" class="canvas">
      <div
        :style="{
          width: canvas.width,
          height: canvas.height,
          background: gradient
        }"
        class="gradient-canvas"
      >
        <div :style="{ background: preview }" class="preview-gradient" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  // ['gradientStrings', 'previewGradient', 'canvas/width']
  computed: {
    ...mapState({
      gradient: 'gradientStrings',
      preview: 'previewGradient'
    }),
    ...mapGetters({
      colorStops: 'colors/colorStops',
      gradientString: 'createString',
      canvas: 'canvas/size'
    })
  },
  watch: {
    gradientString() {
      this.$store.dispatch('previewGradient', this.gradientString)
    }
  },
  created() {
    this.$store.dispatch('previewGradient', this.gradientString)
    window.addEventListener('resize', this.updateMax)
  },
  destroyed() {
    window.removeEventListener('resize', this.updateMax)
  },
  mounted() {
    this.updateMax()
  },
  methods: {
    updateMax() {
      const width = document.getElementById('canvas-max').offsetWidth
      const height = document.getElementById('canvas-max').offsetHeight
      this.$store.dispatch('canvas/updateMax', { width, height })
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
