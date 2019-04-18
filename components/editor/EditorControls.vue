<template>
  <div class="editor-controls">
    <no-ssr>
      <background-image />
      <background-repeat />
      <background-size />
      <background-position />
    </no-ssr>
  </div>
</template>

<script>
import BackgroundImage from '@/components/editor/bg-image/BackgroundImage'
import BackgroundRepeat from '@/components/editor/BackgroundRepeat'
import BackgroundSize from '@/components/editor/BackgroundSize'
import BackgroundPosition from '@/components/editor/BackgroundPosition'
export default {
  components: {
    BackgroundImage,
    BackgroundRepeat,
    BackgroundSize,
    BackgroundPosition
  },
  computed: {
    max() {
      const width = `${this.$store.state.gradientCanvas.width.max}px`
      const height = `${this.$store.state.gradientCanvas.height.max}px`
      return { width, height }
    }
  }
}
</script>

<style lang="sass">
.editor-controls
  max-width: 600px
  display: grid
  grid-template-areas: 'bgImage bgImage' 'bgRepeat bgRepeat' 'bgSize bgPosition'
  gap: 1rem
  align-content: flex-start
  padding: 1rem
  @media screen and (max-width: 768px)
    grid-template-areas: 'bgImage' 'bgRepeat' 'bgRepeat' 'bgSize' 'bgPosition'

.bg-image
  grid-area: bgImage

.bg-repeat
  grid-area: bgRepeat

.bg-size
  grid-area: bgSize

.bg-position
  grid-area: bgPosition

.overflow
  height: 1000px
</style>
