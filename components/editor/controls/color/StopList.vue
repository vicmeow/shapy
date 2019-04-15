<template>
  <ul class="stop-list">
    <li
      v-for="stop in stops"
      :key="stop.id"
      class="stop-item"
      :class="{ active: stop.id === activeStop.id }"
    >
      <div
        class="stop-info"
        :class="`stop-${stop.id}`"
        @mousedown="$emit('setActive', stop)"
      >
        <div class="stop-color" :style="{ background: stop.color.hex }"></div>
        <div class="stop-value">{{ stop.pct }}%</div>
      </div>
      <div class="stop-actions">
        <button @click="moveUp(stop.id)">^</button>
        <button @click="moveDown(stop.id)">></button>
        <button @click="removeStop(stop.id)">x</button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
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

<style lang="sass" scoped>
.stop-list
  list-style-type: none
  padding: 0
  margin: 0
  flex-grow: 1

.stop-item
  display: flex
  margin-bottom: .5rem
  padding: .5rem
  box-shadow: 0 0 10px rgba(0,0,0,0.1)
  transition: all .3s linear

  &.active
    transform: scale(1.05)
    box-shadow: 0 0 10px rgba(0,0,0,0.2)

.stop-info
  flex-grow: 1
  display: flex

.stop-color
  height: 100%
  width: 3rem
  margin-right: 1rem

.stop-value
  margin-left: auto

.stop-actions
  margin-left: auto
</style>
