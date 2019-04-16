<template>
  <ul class="stop-list">
    <stop-item
      v-for="stop in stops"
      :key="stop.id"
      :stop="stop"
      :class="{ active: stop.id === activeStop.id }"
      @click="$emit('setActive', stop)"
    >
      <div class="stop-actions">
        <button @click="moveUp(stop.id)">^</button>
        <button @click="moveDown(stop.id)">></button>
        <button @click="removeStop(stop.id)">x</button>
      </div>
    </stop-item>
  </ul>
</template>

<script>
import StopItem from '@/components/editor/controls/color/StopItem'
import { mapActions } from 'vuex'
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
  },
  methods: {
    ...mapActions({
      removeStop: 'colorStops/removeStop',
      moveUp: 'colorStops/moveUp',
      moveDown: 'colorStops/moveDown'
    })
  }
}
</script>

<style lang="sass">
.stop-list
  list-style-type: none
  padding: 0
  margin: 0
  flex-grow: 1
</style>
