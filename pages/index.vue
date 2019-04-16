<template>
  <div class="page-editor">
    <editor-controls />
    <no-ssr>
      <Canvas />
    </no-ssr>
  </div>
</template>

<script>
import Canvas from '@/components/editor/Canvas'
import EditorControls from '@/components/editor/EditorControls'
export default {
  components: {
    Canvas,
    EditorControls
  }
}
</script>

<style lang="sass">
.page-editor
  padding: 0 1rem
</style>
