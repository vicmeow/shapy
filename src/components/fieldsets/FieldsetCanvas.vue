<template>
  <div
    role="group"
    class="fieldset fieldset-canvas">

    <!-- TITLE & DESCRIPTION -->
    <legend
      class="legend"
      @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle
      @click.native="hidden = !hidden"
      :hidden="hidden"/>
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>

      <!-- WIDTH INPUT -->
      <input-wrapper
        v-model="canvas.x"
        :label="'Width'"
        :name="'canvas-width'"
        :what="canvas.x"
        :max="maxX"/>

      <!-- HEIGHT INPUT -->
      <input-wrapper
        v-model="canvas.y"
        :label="'Height'"
        :name="'canvas-height'"
        :what="canvas.y"
        :max="maxY"/>
    </template>
  </div>
</template>

<script>
import InputWrapper from '@/components/InputWrapper'
import GroupToggle from '@/components/GroupToggle'
import { mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Canvas',
  components: {
    InputWrapper,
    GroupToggle
  },
  data: () => ({
    hidden: false,
    title: 'Canvas Size 🖼',
    desc: "Edit the size of your canvas. Choose 'px' by clicking on the unit."
  }),
  computed: {
    ...mapFields(['canvas']),
    ...mapState(['canvas']),
    maxX() {
      if (this.canvas.x.unit === 'px') return this.canvas.x.max
      else return 100
    },
    maxY() {
      if (this.canvas.y.unit === 'px') return this.canvas.y.max
      else return 100
    }
  }
}
</script>

<style lang="sass" scoped>

  .canvas-size
    max-width: 50%
    display: flex
    flex-direction: column-reverse

  label
    text-align: center
    margin-top: .2rem

  input
    border-radius: 2rem
    display: block
    font-size: 1.2rem
    max-width: 150px
    text-align: center
    border: 1px solid $black
    &:focus
      border: 1px solid $green
</style>
