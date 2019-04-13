<template>
  <div class="editor">
    <div class="nav">
      nav
    </div>
    <gradient-canvas />
    <div class="string">
      {{ preview }}
    </div>
    <div class="controls">
      <component
        v-for="panel in panels"
        :key="panel.index"
        :is="`${panel.component}-panel`"
        :title="panel.name"
        @updatePanel="layout = $event"
      >
        <!-- <control-button :control="layout" class="btn-close" /> -->
      </component>
    </div>
    <!-- <gradient-form />
    
    <gradient-list /> -->
  </div>
</template>

<script>
import ControlPanel from '@/components/ControlPanel'
import CanvasPanel from '@/components/panels/CanvasPanel'
import SizePanel from '@/components/panels/SizePanel'
import PositionPanel from '@/components/panels/PositionPanel'
import RepeatPanel from '@/components/panels/RepeatPanel'
import GradientPanel from '@/components/panels/GradientPanel'

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
    GradientPanel,
    ControlButton
  },
  data() {
    return {
      layout: 'control',
      //'canvas', 'gradient', 'size', 'position', 'repeat'
      panels: [
        {
          name: 'Canvas',
          component: 'canvas'
        },
        {
          name: 'Background-repeat',
          component: 'repeat'
        },
        {
          name: 'Gradient',
          component: 'gradient'
        },
        {
          name: 'Background-size',
          component: 'size'
        },
        {
          name: 'Background-position',
          component: 'position'
        }
      ]
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
  grid-template-columns: minmax(300px, .8fr) 1fr
  grid-template-rows: 50px 1fr 2em max-content
  grid-template-areas: 'nav nav' 'controls canvas'
  gap: .5em
  padding: 0 1em
  min-height: 100vh

.nav
  //border: 1px solid red
  //grid-column: 1 / -1
  grid-area: nav

.canvas-wrapper
  //grid-row: 2/3
  //grid-column: 2 / 3
  grid-area: canvas

.controls
  grid-area: controls

.string
  grid-column: 2 / -2
  grid-row: 3
</style>
