<template>
  <div class="color-wrapper">
    <size-input
      :label="label"
      v-model.number="what.size"
      :name="name"
      :unit="what.unit">
      <div
        slot="color"
        @click="picker = !picker"
        class="color-preview"
        :style="{background: activeColor}"/>
      <unit-input
        slot="unit"
        v-model="what.unit"
        :unit="what.unit"
        :name="name + '-size-unit'"/>
    </size-input>
    <range-input
      v-model.number="what.size"
      :name="name + '-range'"
      :value="what.size"/>
    <transition name="appear">
      <chrome-picker
        id="chrome-picker"
        v-if="picker"
        v-model="what.color"
        @input="setType"/>
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
  data: () => ({
    picker: false,
    a: false
  }),
  methods: {
    setType(e) {
      if (e.a < 1) {
        this.a = true
        this.what.type = 'rgba'
      } else {
        this.a = false
        this.what.type = 'hex'
      }
    }
  },
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
  props: {
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
  }
}
</script>

<style lang="sass">

  input
    font-family: $font
    font-size: 18px
    color: $black
    border: 0
    padding: 0
    &:focus
      font-style: italic
      outline: 0

  .color-wrapper
    margin-top: .3em
    flex-basis: 50%

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

  .appear-enter-active, .appear-leave-active
    transition: all .5s

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
      font-size: .9em
      font-family: $font
      color: $black
  
  .color-wrapper:first-child #chrome-picker
    left: 0

  @media screen and (max-width: 768px)
    .color-wrapper
      flex-basis: 100%
      padding: 0

    .color-wrapper:nth-child(even), .color-wrapper:nth-child(odd)
      padding: 0

    .size-wrapper
      margin-top: .5em

</style>
