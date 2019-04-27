<template>
  <div ref="colorPicker" class="color-picker">
    <chrome-picker
      id="chrome-picker"
      ref="picker"
      v-model="colorInput"
      tabindex="0"
      @input="updateColor"
      @change="updateColor"
    />
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
      colorInput: null
    }
  },
  mounted() {
    this.colorInput = this.color
  },
  methods: {
    updateColor(color) {
      this.$emit('input', color)
    }
  }
}
</script>

<style lang="sass" scoped>

.color-preview
  color: white
  height: 1rem
  width: 1rem
  border: 1px solid $black
  border-radius: 3px
  margin-right: .5em
  cursor: pointer
  flex-shrink: 0

.appear-enter-active, .appear-leave-active
  transition: opacity .3s linear

.appear-enter, .appear-leave-to
  opacity: 0

#color-picker.vc-chrome
  width: 100%
  max-width: 200px

@media screen and (max-width: 768px)
  .size-wrapper
    margin-top: .5em
</style>
