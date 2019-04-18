<template>
  <div
    class="stop-point"
    :style="{
      transform: `translateX(${px - 10}px)`
    }"
    @mousedown="$emit('dragStart', $event)"
  >
    <div class="stop-color" :style="{ 'background-color': color }"></div>
    <label class="point-label">{{ value }}%</label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true,
      default: () => {}
    },
    width: {
      type: Number,
      required: false,
      default: 0
    }
  },
  computed: {
    px() {
      return (this.width / 100) * this.value
    }
  }
}
</script>

<style lang="sass" scoped>
.stop-point
  position: absolute
  height: 100%
  width: 20px
  user-select: none
  &:hover
    cursor: move

.stop-color
  position: absolute
  top: 10%
  right: 25%
  height: 80%
  width: 10px
  border: 2px solid $white
  box-shadow: 0 0 5px rgba(0,0,0,.3)
  border-radius: 2rem

.point-label
  position: absolute
  bottom: -1.5rem
</style>
