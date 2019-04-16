<template>
  <div class="controls">
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
.heading
  flex-basis: 100%
</style>
