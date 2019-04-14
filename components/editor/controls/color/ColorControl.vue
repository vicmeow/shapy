<template>
  <div class="control color-control">
    <color-bar :active-gradient="activeGradient" />
    <stop-list :stops="stops" :active="active" />
    <no-ssr>
      <color-picker id="color-picker" v-model="active.color" />
    </no-ssr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { createHelpers } from 'vuex-map-fields'
import { Chrome } from 'vue-color'
import ColorBar from '@/components/editor/controls/color/ColorBar'
import StopList from '@/components/editor/controls/color/StopList'
const { mapFields } = createHelpers({
  getterType: 'colors/getField',
  mutationType: 'colors/updateField'
})
export default {
  components: {
    ColorPicker: Chrome,
    ColorBar,
    StopList
  },
  data() {
    return {
      color: {}
    }
  },
  computed: {
    ...mapFields(['stops', 'active']),
    ...mapGetters({
      activeGradient: 'colors/activeGradient'
    })
  },
  mounted() {
    this.active = this.stops[0]
  },
  methods: {
    setActive(stop) {
      this.active = stop
    },
    updateValue(color) {
      this.$emit('input', {
        ...this.active,
        color: color
      })
    }
  }
}
</script>

<style lang="sass">

.color-control
  grid-column: 1 / -1
  outline: 1px solid red
  gap: 1rem
  padding-top: 1rem

#color-picker
  box-shadow: none
  grid-area: picker

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
