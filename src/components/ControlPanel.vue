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
      controls: ['canvas', 'type', 'size', 'position', 'color', 'repeat']
    }
  }
}
</script>

<style lang="sass">

.controls
  grid-column: 1 / -1
  grid-row: 4
  display: flex
  justify-content: space-between
  padding: 0 1em

.panel
  width: 100%
  display: flex
  align-items: center
</style>
