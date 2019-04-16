<template>
  <div class="stop-list-wrapper">
    <h3 class="list-title">Color stops</h3>
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
  </div>
</template>

<script>
import StopItem from '@/components/editor/bg-image/color-stops/StopItem'
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
.stop-list-wrapper
  position: relative
  max-height: 300px
  overflow-y: auto
  padding: 0 1rem
  flex-grow: 1

.list-title
  position: sticky
  top: 0
  margin: 0
  padding-bottom: .5rem
  background: $white
  font-size: 1.2rem

.stop-list
  list-style-type: none
  padding: 0
  margin: 0
</style>
