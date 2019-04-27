<template>
  <div
    class="stop-point"
    :class="`stop-point-${stop.id}`"
    :style="{
      transform: `translateX(${px - 10}px)`
    }"
    @mousedown="$emit('dragStart', $event)"
  >
    <div
      class="stop-color"
      :style="{ 'background-color': backgroundColor }"
    ></div>
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
    stop: {
      type: Object,
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
    },
    backgroundColor() {
      const rgba = `rgba(${this.stop.color.rgba.r},${this.stop.color.rgba.g},${
        this.stop.color.rgba.b
      },${this.stop.color.rgba.a})`
      const hex = this.stop.color.hex
      return this.stop.color.a < 1 ? rgba : hex
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
  bottom: -1rem
</style>
