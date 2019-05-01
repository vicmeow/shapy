<template>
  <div class="page-editor">
    <sidebar />
    <div class="fixed">
      <no-ssr>
        <Canvas />
      </no-ssr>
      <div class="code">
        Code
      </div>
    </div>
  </div>
</template>

<script>
// TODO:
//  - Show current gradient code snippet
//  - Copy CSS code
//  - Export to CodePen
//  - Toggle shorthand view
//  - Syntax highlighting
import Sidebar from '@/components/editor/Sidebar'
import Canvas from '@/components/editor/Canvas'
export default {
  components: {
    Sidebar,
    Canvas
  }
}
</script>

<style lang="sass">

.page-editor
  position: relative
  display: flex

.fixed
  position: sticky
  top: 2.5rem
  right: 0
  height: calc(100vh - 5rem)
  width: 100%
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: 1fr 5rem
  padding: 0 1rem
</style>
