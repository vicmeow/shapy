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
        <div class="stop-actions">
          <div class="move-buttons">
            <button class="btn btn-action btn-move" @click="moveUp(stop.id)">
              p
            </button>
            <button class="btn btn-action btn-move" @click="moveDown(stop.id)">
              d
            </button>
          </div>
          <button
            class="btn btn-action btn-remove"
            @click="removeStop(stop.id)"
          >
            x
          </button>
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
  max-height: 225px
  overflow-y: auto
  padding: 0 1rem
  flex-grow: 1

.stop-list
  list-style-type: none
  padding: 0
  margin: 0

.stop-actions
  display: flex

.move-buttons
  display: flex
  flex-direction: column

.btn-action
  padding: 0 .2rem

.btn-move:hover
  color: green
  cursor: pointer

.btn-remove
  color: red
  &:hover
    cursor: pointer
    outline: 1px solid red
</style>
