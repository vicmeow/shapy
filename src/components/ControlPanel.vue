<template>
  <div class="controls">
    <control-button
      v-for="control in controls"
      :key="control.index"
      :control="control"
      @updatePanel="$emit('updatePanel', control)"
    />
  </div>
</template>

<script>
import ControlButton from '@/components/ControlButton'
export default {
  components: {
    ControlButton
  },
  data() {
    return {
      controls: ['canvas', 'gradient', 'repeat', 'size', 'position']
    }
  }
}
</script>

<style lang="sass">

.controls
  //grid-column: 1 / -1
  //grid-row: 4
  //display: flex
  justify-content: space-between
  padding: 0 1em

.panel
  width: 100%
  display: flex
  //flex-wrap: wrap
  box-shadow: 0 0 10px rgba(0,0,0,.2)
  padding: 0 1em
  margin: 1em 0
  //align-items: center
</style>
