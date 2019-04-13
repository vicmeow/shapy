<template>
  <div class="control color-control">
    <div ref="colorBar" class="color-bar-wrapper" @mouseup="dragEnd">
      <!-- Add event listener to color-bar -->
      <div class="color-bar" :style="{ background: activeGradient }"></div>
      <div
        v-for="(stop, index) in stops"
        :key="index"
        class="stop-point"
        :style="{
          transform: `translateX(${stop.px}px)`
        }"
        @mousedown="dragStart($event, index)"
      >
        <div
          class="stop-point-inner"
          :style="{ 'background-color': stop.color.hex }"
        ></div>
      </div>
    </div>
    <ul class="color-list">
      <li
        v-for="(stop, index) in stops"
        :key="index"
        class="color-stop"
        :class="{ active: stop.id === active.id }"
      >
        <div class="stop-info" @mousedown="setActive(stop)">
          <div
            class="stop-preview"
            :style="{ background: stop.color.hex }"
          ></div>
          <span class="stop-string" @mousedown="setActive(stop)">
            {{ stop.color.hex }}
          </span>
          <span class="stop-value" @mousedown="setActive(stop)">
            {{ stop.defaultUnit ? `${stop.pct}%` : `${stop.px}px` }}
          </span>
        </div>
        <div class="stop-actions">
          <button @click="moveUp(index)">^</button>
          <button @click="moveDown(index)">></button>
          <button @click="removeStop(index)">x</button>
        </div>
      </li>
    </ul>
    <no-ssr>
      <color-picker id="color-picker" v-model="active.color" />
    </no-ssr>
  </div>
</template>

<script>
// import ColorPicker from '@/components/inputs/ColorPicker'
import { mapGetters, mapActions } from 'vuex'
import { createHelpers } from 'vuex-map-fields'
import { Chrome } from 'vue-color'
const { mapFields } = createHelpers({
  getterType: 'colors/getField',
  mutationType: 'colors/updateField'
})
export default {
  components: {
    ColorPicker: Chrome
  },
  data() {
    return {
      color: {},
      dragActive: false,
      dragIndex: null
    }
  },
  computed: {
    ...mapFields(['stops', 'active']),
    ...mapGetters({
      barStops: 'colors/stops',
      activeGradient: 'colors/activeGradient'
    })
  },
  mounted() {
    this.active = this.stops[0]
    // Dragable color stops
    const bar = this.$refs.colorBar
    // Touch events
    bar.addEventListener('mousemove', this.drag, false)
    bar.addEventListener('mouseleave', this.dragEnd, false)
    const width = this.$refs.colorBar.offsetWidth - 11
    // Set intital stop in px
    this.$store.dispatch('colors/updateStop', { px: width, pct: 100, index: 1 })
  },
  methods: {
    ...mapActions({
      addStop: 'colors/addStop',
      removeStop: 'colors/removeStop',
      moveUp: 'colors/moveUp',
      moveDown: 'colors/moveDown',
      createStop: 'colors/createStop'
    }),
    createStop(e) {
      // const bar = e.target.getBoundingClientRect()
      // const width = e.target.offsetWidth
      // const px = Math.floor(
      //   ((e.clientX - bar.left) / (bar.right - bar.left)) * width
      // )
      // const pct = Math.floor((px / width) * 100)
      // const color = this.active.color
      // this.createStop({ pct, px, color })
    },
    setActive(stop) {
      this.active = stop
    },
    updateValue(e) {
      this.$emit('input', {
        ...this.active,
        color: e
      })
    },
    dragStart(e, index) {
      // Dragging is active
      this.dragActive = true
      this.dragIndex = index
    },
    dragEnd(e) {
      this.dragActive = false
      this.dragIndex = null
    },
    drag(e) {
      if (this.dragActive) {
        e.preventDefault()
        const index = this.dragIndex
        const bar = this.$refs.colorBar.getBoundingClientRect()
        const width = this.$refs.colorBar.offsetWidth
        const px = Math.floor(
          ((e.clientX - bar.left) / (bar.right - bar.left)) * width
        )
        const pct = Math.floor((px / width) * 100)
        // eslint-disable-next-line
        // console.log(newPx)
        // Update position of stop being dragged
        this.$store.dispatch('colors/updateStop', { pct, px, index })
      }
    }
  }
}
</script>

<style lang="sass">

.color-control
  grid-column: 1 / -1
  outline: 1px solid red
  display: grid
  grid-template-areas: 'bar bar' 'picker list'
  gap: 1rem
  padding-top: 1rem

#color-picker
  box-shadow: none
  grid-area: picker

.color-bar-wrapper
  position: relative
  width: 100%
  height: 2rem
  grid-area: bar

.color-bar
  position: absolute
  top: 0
  left: 0
  height: 100%
  width: 100%
  z-index: 0
  cursor: copy

.stop-point
  position: absolute
  top: -10%
  height: 120%
  width: .8rem
  border-radius: 1rem
  background: white
  border: 1px solid rgba(0,0,0,.8)
  z-index: 100
  touch-action: none
  user-select: none
  &:hover
    cursor: move

.stop-point-inner
  position: absolute
  left: calc(.2rem - 1px)
  top: 10%
  height: 80%
  width: .4rem
  background: red
  border-radius: 1rem

.stop-preview
  height: 1rem
  width: 1rem

.color-list
  padding: 0
  grid-area: list

.color-stop, .stop-info
  display: flex

.color-stop
  margin-bottom: .5rem
  box-shadow: 0 0 10px rgba(0,0,0,.15)
  border-radius: 5px

.stop-info
  padding: .5rem
  flex-grow: 1

.stop-actions
  margin-left: auto

.active
  border: 1px solid rgba(0,0,0,.3)
</style>
