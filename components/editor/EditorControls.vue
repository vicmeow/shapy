<template>
  <div class="editor-controls">
    <no-ssr>
      <background-image />
      <background-repeat />
      <background-size />
      <background-position />
    </no-ssr>
    <button class="btn btn-action btn-add" @click="addGradient">
      Add to canvas
    </button>
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
  },
  methods: {
    addGradient() {
      this.$store.dispatch('gradients/addGradient')
    }
  }
}
</script>

<style lang="sass">
.editor-controls
  width: 100%
  display: grid
  grid-template-areas: 'image image' 'repeat repeat' 'size position'
  gap: 1rem
  align-content: flex-start
  padding: .5rem
  @media screen and (max-width: 768px)
    grid-template-areas: 'image' 'repeat' 'size' 'position'

.control
  background: $white
  padding: 1rem
  border-radius: $borderRadius

.image-control
  grid-area: image

.repeat-control
  grid-area: repeat

.size-control
  grid-area: size

.position-control
  grid-area: position

.overflow
  height: 1000px
</style>
