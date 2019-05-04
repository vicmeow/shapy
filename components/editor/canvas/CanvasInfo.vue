<template>
  <div class="canvas-info">
    <div class="code-wrapper">
      <code>
        <code-snippet
          v-for="value in image"
          :key="value.index"
          :value="value"
        />
        <code-snippet
          v-for="value in repeat"
          :key="value.index"
          :value="value"
        />
        <code-snippet v-for="value in size" :key="value.index" :value="value" />
        <span>/</span>
        <code-snippet
          v-for="value in position"
          :key="value.index"
          :value="value"
        />
      </code>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CodeSnippet from '@/components/editor/canvas/CodeSnippet'
export default {
  components: {
    CodeSnippet
  },
  computed: {
    ...mapGetters({
      image: 'backgroundImage',
      repeat: 'backgroundRepeat',
      size: 'backgroundSize',
      position: 'backgroundPosition'
    })
  }
}
</script>

<style lang="sass">
.canvas-info
  position: relative
  display: flex
  align-items: center
  height: 3rem

.code-snippet
  // padding: .5rem 0
</style>
