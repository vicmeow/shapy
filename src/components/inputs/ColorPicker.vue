<template>
  <div ref="colorPicker" class="color-picker">
    <button
      :style="{ background: activeColor }"
      tabindex="0"
      aria-label="Open color picker"
      class="color-preview"
      @click="togglePicker()"
    />
    <transition name="appear">
      <chrome-picker
        v-if="picker"
        id="chrome-picker"
        ref="picker"
        v-model="colorInput"
        tabindex="0"
        @input="updateColor"
        @change="updateColor"
      />
    </transition>
  </div>
</template>

<script>
import { Chrome } from 'vue-color'
export default {
  components: {
    ChromePicker: Chrome
  },
  props: {
    color: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      colorInput: null,
      picker: false,
      // Whether to use rgba or hex
      a: false
    }
  },
  computed: {
    activeColor() {
      // Determine the color to show in the color bubble
      const c = this.color
      return this.a === 1
        ? c.hex
        : `rgba(${c.rgba.r},${c.rgba.g},${c.rgba.b},${c.rgba.a})`
    }
  },
  mounted() {
    this.colorInput = this.color
  },
  methods: {
    updateColor(color) {
      this.$emit('input', color)
    },
    togglePicker() {
      // Show/hide the color picker
      this.picker ? this.hidePicker() : this.showPicker()
      //this.picker ? this.$refs.picker.focus() : this.$refs.colorPicker.focus()
    },
    hidePicker() {
      // Remove event listener for click outside the color picker when color picker is hidden
      document.removeEventListener('click', this.documentClick)
      this.picker = false
    },
    showPicker() {
      // Add event listener for click outside the color picker when color picker is showing
      document.addEventListener('click', this.documentClick)
      this.picker = true
    },
    documentClick(e) {
      // Detect if click if outside the color picker
      const element = this.$refs.colorPicker
      const target = e.target
      if (element !== target && !element.contains(target)) {
        this.hidePicker()
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.color-picker
  margin-top: .3em
  flex-basis: 50%
  display: inline-block
  width: 50%

.color-picker:nth-child(even)
  padding-left: .75em

.color-picker:nth-child(odd)
  padding-right: .75em

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
