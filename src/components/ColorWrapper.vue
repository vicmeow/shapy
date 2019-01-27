<template>
  <div ref="colorwrapper" class="color-wrapper">
    <size-input
      :label="label"
      v-model.number="what.size"
      :name="name"
      :unit="what.unit"
    >
      <div
        slot="color"
        :style="{ background: activeColor }"
        class="color-preview"
        @click="togglePicker()"
      />
      <unit-input
        slot="unit"
        v-model="what.unit"
        :unit="what.unit"
        :name="name + '-size-unit'"
      />
    </size-input>
    <range-input
      v-model.number="what.size"
      :name="name + '-range'"
      :value="what.size"
    />
    <transition name="appear">
      <chrome-picker
        v-if="picker"
        id="chrome-picker"
        v-model="what.color"
        @input="updateType"
      />
    </transition>
  </div>
</template>

<script>
import RangeInput from '@/components/inputs/RangeInput'
import SizeInput from '@/components/inputs/SizeInput'
import UnitInput from '@/components/inputs/UnitInput'
import { Chrome } from 'vue-color'
export default {
  components: {
    SizeInput,
    RangeInput,
    UnitInput,
    ChromePicker: Chrome
  },
  props: {
    id: {
      type: Number,
      required: true,
      default: 0
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    what: {
      type: Object,
      required: false,
      default() {
        return {
          size: 100,
          color: {
            hex: '#00978d',
            rgba: { a: 1, b: 141, g: 151, r: 0 },
            a: 1
          },
          type: 'hex',
          unit: '%'
        }
      }
    }
  },
  data: () => ({
    picker: false,
    a: false
  }),
  computed: {
    activeColor() {
      const c = this.what.color
      if (this.a) {
        const rgba = c.rgba
        return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`
      } else {
        return c.hex
      }
    }
  },
  methods: {
    updateType(event) {
      if (event.a === 1) {
        this.$emit('updateType', 'hex')
      } else {
        this.$emit('updateType', 'rgb')
      }
    },
    togglePicker() {
      if (this.picker) {
        this.hidePicker()
      } else {
        this.showPicker()
      }
    },
    hidePicker() {
      document.removeEventListener('click', this.documentClick)
      this.picker = false
    },
    showPicker() {
      document.addEventListener('click', this.documentClick)
      this.picker = true
    },
    documentClick(e) {
      const element = this.$refs.colorwrapper
      const target = e.target
      if (element !== target && !element.contains(target)) {
        this.hidePicker()
      }
    }
  }
}
</script>

<style lang="sass">

.color-wrapper
  margin-top: .3em
  flex-basis: 50%
  display: inline-block
  width: 50%

.color-wrapper:nth-child(even)
  padding-left: .75em

.color-wrapper:nth-child(odd)
  padding-right: .75em

.input-wrapper.degree-wrapper
  padding-right: 0
  padding-left: 0

.color-preview
  color: white
  height: 1em
  width: 1em
  border: 1px solid $black
  border-radius: 3px
  margin-right: .5em
  cursor: pointer
  border-radius: 50%
  flex-shrink: 0

.appear-enter-active, .appear-leave-active
  transition: all .3s

.appear-enter, .appear-leave-to
  opacity: 0
  transform: translateY(-20px)

#chrome-picker
  position: absolute
  z-index: 10
  border-radius: 5px
  right: 0
  font-family: $font

  div:not(:first-child)
    border-radius: 0 0 5px 5px

  .vc-chrome-fields .vc-input__input
    font-size: .95rem
    color: $black
    padding: .3em 0
    height: auto

  .vc-chrome-fields .vc-input__label
    font-size: .8em
    font-family: $font
    color: $black
    letter-spacing: 1px

.color-wrapper:first-child #chrome-picker
  left: 0

@media screen and (max-width: 768px)
  .size-wrapper
    margin-top: .5em
</style>
