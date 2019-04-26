<template>
  <div class="page-editor">
    <component :is="component" @showList="showList = !showList" />
    <div class="fixed">
      <no-ssr>
        <Canvas />
      </no-ssr>
    </div>
  </div>
</template>

<script>
import Canvas from '@/components/editor/Canvas'
import EditorControls from '@/components/editor/EditorControls'
import GradientList from '@/components/editor/gradient-list/GradientList'
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    Canvas,
    EditorControls,
    GradientList
  },
  data() {
    return {
      shorthand: false,
      showList: false
    }
  },
  computed: {
    component() {
      return this.showList ? 'gradient-list' : 'editor-controls'
    },
    ...mapState({
      bgSize: 'backgroundSize'
    }),
    ...mapGetters({
      background: 'background',
      bgImage: 'backgroundImage',
      bgSize: 'backgroundSize',
      bgPosition: 'backgroundPosition',
      bgRepeat: 'backgroundRepeat'
    })
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
  height: calc(100vh - 4.2rem)
  display: flex
  flex-direction: column
  flex-grow: 1
  padding: 0 1rem
</style>
