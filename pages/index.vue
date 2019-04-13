<template>
  <div class="page-editor">
    <Controls />
    <no-ssr>
      <Canvas />
    </no-ssr>
  </div>
</template>

<script>
import Canvas from '@/components/editor/Canvas'
import Controls from '@/components/editor/Controls'
export default {
  components: {
    Canvas,
    Controls
  }
}
</script>

<style lang="sass">
.page-editor
  padding: 0 1rem
</style>
