<template>
  <div class="canvas-info">
    <div class="code-snippet">
      <code>
        <property-item
          v-for="value in image"
          :key="value.index"
          :value="value"
        />
      </code>
    </div>
    <div class="canvas-control">
      Canvas
    </div>
  </div>
</template>

<script>
import PropertyItem from '@/components/editor/canvas/PropertyItem'
export default {
  components: {
    PropertyItem
  },
  computed: {
    image() {
      return this.$store.getters.backgroundImage
    }
  }
}
</script>

<style lang="sass">
.canvas-info
  position: relative
  display: flex

.code-snippet
  padding: .5rem 0
</style>
