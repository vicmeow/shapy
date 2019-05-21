<template>
  <div class="editor-controls">
    <no-ssr>
      <background-image />
      <background-repeat />
      <background-size />
      <background-position />
      <background-name />
    </no-ssr>
  </div>
</template>

<script>
import BackgroundImage from '@/components/editor/sidebar/BackgroundImage'
import BackgroundRepeat from '@/components/editor/sidebar/BackgroundRepeat'
import BackgroundSize from '@/components/editor/sidebar/BackgroundSize'
import BackgroundPosition from '@/components/editor/sidebar/BackgroundPosition'
import BackgroundName from '@/components/editor/sidebar/BackgroundName'
export default {
  components: {
    BackgroundImage,
    BackgroundRepeat,
    BackgroundSize,
    BackgroundPosition,
    BackgroundName
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
  width: 100%
  display: grid
  grid-template-areas: 'image image' 'repeat repeat' 'size position'
  grid-template-columns: 1fr 1fr
  gap: 1rem
  align-content: flex-start
  @media screen and (max-width: 768px)
    grid-template-areas: 'image' 'repeat' 'size' 'position'
    grid-template-columns: 1fr

.control
  position: relative
  background: $white
  padding: 1rem
  border-radius: $borderRadius
  min-width: 0

.image-control
  grid-area: image

.repeat-control
  grid-area: repeat

.size-control
  grid-area: size

.position-control
  grid-area: position
</style>
