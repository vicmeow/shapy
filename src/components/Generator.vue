<template>
  <div class="editor">
    <div class="nav">nav</div>
    <gradient-canvas />
    <div class="string">
      {{ preview }}
    </div>
    <div class="controls">
      <component :is="panel" @updatePanel="layout = $event">
        <control-button :control="layout" class="btn-close" />
      </component>
    </div>
    <!-- <gradient-form />
    
    <gradient-list /> -->
  </div>
</template>

<script>
import ControlPanel from '@/components/ControlPanel'
import CanvasPanel from '@/components/panels/CanvasPanel'
import ColorPanel from '@/components/panels/ColorPanel'
import SizePanel from '@/components/panels/SizePanel'
import PositionPanel from '@/components/panels/PositionPanel'
import RepeatPanel from '@/components/panels/RepeatPanel'
import TypePanel from '@/components/panels/TypePanel'

// GENERAL
import ControlButton from '@/components/ControlButton'

import GradientForm from '@/components/GradientForm'
import GradientCanvas from '@/components/GradientCanvas'
import GradientList from '@/components/GradientList'
import { mapState } from 'vuex'
export default {
  name: 'Generator',
  components: {
    GradientForm,
    GradientCanvas,
    GradientList,
    ControlPanel,
    CanvasPanel,
    SizePanel,
    PositionPanel,
    RepeatPanel,
    ColorPanel,
    TypePanel,
    ControlButton
  },
  data() {
    return {
      layout: 'control'
    }
  },
  computed: {
    ...mapState({
      preview: 'previewGradient'
    }),
    panel() {
      return `${this.layout}-panel`
    }
  }
}
</script>

<style lang="sass">

button
  font-size: 1rem
  border: 0
  background: 0

.editor
  display: grid
  grid-template-columns: 100px 1fr 100px
  grid-template-rows: 50px 1fr 2em max-content
  gap: .5em
  min-height: 100vh

.nav
  border: 1px solid red
  grid-column: 1 / -1

.canvas-wrapper
  grid-row: 2/3
  grid-column: 2 / 3

.string
  grid-column: 2 / -2
  grid-row: 3
</style>
