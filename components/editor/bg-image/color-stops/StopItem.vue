<template>
  <div class="stop-item">
    <div class="stop-info" :class="`stop-${stop.id}`">
      <div
        class="stop-item-color"
        :style="{ 'background-color': backgroundColor }"
      ></div>
      <div class="stop-value">{{ stop.pct }}%</div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    stop: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    backgroundColor() {
      const rgba = `rgba(${this.stop.color.rgba.r},${this.stop.color.rgba.g},${
        this.stop.color.rgba.b
      },${this.stop.color.rgba.a})`
      const hex = this.stop.color.hex
      return this.stop.active === 'hex' ? hex : rgba
    }
  }
}
</script>

<style lang="sass">
.stop-item
  display: flex
  margin-bottom: .5rem
  padding: .5rem
  //box-shadow: 0 0 10px rgba(0,0,0,0.1)
  transition: all .3s linear
  border: 1px solid rgba(0,0,0,.1)
  border-radius: 10px

  &.active
    border: 1px solid rgba(0,0,0,.2)
    // transform: translateX(5px)
    //box-shadow: 0 0 10px rgba(0,0,0,0.2)

.stop-info
  flex-grow: 1
  display: flex

.stop-item-color
  height: 100%
  width: 1.5rem
  height: 1.5rem
  border-radius: 50%
  margin-right: 1rem
  border: 1px solid rgba(0,0,0,.1)
  // box-shadow: 0 0 1px rgba(0,0,0,0.2)

.stop-value
  margin-left: auto

.stop-actions
  margin-left: auto
</style>
