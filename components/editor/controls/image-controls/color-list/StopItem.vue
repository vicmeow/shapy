<template>
  <div class="stop-item" :class="`stop-${stop.id}`">
    <div class="stop-info">
      <div
        class="stop-item-color"
        :style="{ 'background-color': backgroundColor }"
      ></div>
      <div class="stop-color">{{ backgroundColor }}</div>
      <div class="stop-value">{{ stop.pct }}%</div>
    </div>
    <div class="stop-actions">
      <div class="move-buttons">
        <button class="btn btn-move" @click="moveUp(stop.id)">
          🔼
        </button>
        <button class="btn btn-move" @click="moveDown(stop.id)">
          🔽
        </button>
      </div>
      <button class="btn btn-action btn-remove" @click="removeStop(stop.id)">
        ❌
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
      return this.stop.color.a < 1 ? rgba : hex
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
.stop-item
  display: flex
  transition: transform .3s linear
  padding: .2rem .5rem
  margin-right: .5rem
  margin-bottom: .5rem
  font-family: $monospace
  align-items: center
  box-shadow: $boxShadow
  border-radius: $borderRadius

  &.active
    transform: scale(1.01)
    border: .5px solid $mediumgrey

  &:first-child
    margin-top: .3rem

.stop-info
  flex-grow: 1
  display: flex
  align-items: center

.stop-item-color
  height: 100%
  width: 1rem
  height: 1rem
  border-radius: 50%
  margin-right: .5rem
  border: 1px solid $mediumgrey

.stop-color
  flex-grow: 1

.stop-value
  margin-left: auto
  margin-right: .5rem

.stop-actions
  margin-left: auto

.stop-actions
  position: relative
  display: flex

.move-buttons
  display: flex
  flex-direction: column

.btn-move
  background: $white
  padding: 0
  color: $black
  font-size: .5rem

.btn-move:hover
  cursor: pointer

.btn-remove
  font-size: .5rem
  background: $white
  padding: 0
  padding-left: .5rem
  &:hover
    cursor: pointer
</style>
