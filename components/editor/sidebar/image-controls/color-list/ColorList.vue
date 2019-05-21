<template>
  <div class="color-list-wrapper">
    <div class="color-list">
      <color-item
        v-for="(stop, index) in stops"
        :key="stop.id"
        :stop="stop"
        :class="{ active: stop.id === activeStop.id }"
        @click.native="$emit('setActive', stop)"
      >
        <span>{{ index + 1 }}</span>
      </color-item>
    </div>
  </div>
</template>

<script>
import ColorItem from './ColorItem'
export default {
  components: {
    ColorItem
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
.color-list-wrapper
  position: relative
  max-height: 10rem
  overflow-y: auto
  margin: 0 -1rem
  padding: 0 1rem
</style>
