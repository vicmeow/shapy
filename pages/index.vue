<template>
  <div class="page-editor">
    <sidebar />
    <div class="fixed">
      <no-ssr>
        <Canvas />
      </no-ssr>
      <canvas-info />
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
import Sidebar from '@/components/editor/sidebar/Sidebar'
import Canvas from '@/components/editor/canvas/Canvas'
import CanvasInfo from '@/components/editor/canvas/CanvasInfo'
export default {
  components: {
    Sidebar,
    Canvas,
    CanvasInfo
  }
}
</script>

<style lang="sass">

.page-editor
  position: relative
  display: grid
  grid-template-columns: minmax(200px, max-content) minmax(450px, 1fr)
  @media screen and (max-width: 768px)
    grid-template-columns: 1fr

.fixed
  position: fixed
  top: $navHeight
  right: 0
  left: $sidebarWidth
  display: flex
  flex-direction: column
  height: 100vh
  padding: 1rem
  @media screen and (max-width: 768px)
    position: static

.code
  flex-grow: 1
  width: 100%
  background: red
</style>
