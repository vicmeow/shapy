<template>
  <div class="stop-list-wrapper">
    <ul class="stop-list">
      <stop-item
        v-for="stop in stops"
        :key="stop.id"
        :stop="stop"
        :class="{ active: stop.id === activeStop.id }"
        @click.native="$emit('setActive', stop)"
      >
      </stop-item>
    </ul>
  </div>
</template>

<script>
import StopItem from './StopItem'
export default {
  components: {
    StopItem
  },
  props: {
    stops: {
      type: Array,
      required: true,
      default: () => []
    },
    activeStop: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>

<style lang="sass">
.stop-list-wrapper
  position: relative
  max-height: 100px
  overflow-y: auto
  grid-column: 1 / -1

.stop-list
  list-style-type: none
  padding: 0
  margin: 0
</style>
