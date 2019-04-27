<template>
  <div class="gradient-list">
    <button @click="$emit('showList')">
      <span>Close</span>
    </button>
    <button @click="shorthand = !shorthand">
      <span v-if="shorthand">X</span>
      <span v-if="!shorthand">Shorthand</span>
    </button>
    <component
      :is="cssType"
      v-for="item in layers"
      :key="item.id"
      :item="item"
    />
    <div v-if="!layers.length">
      You haven't added any gradients to the canvas yet.
  </div>
</template>

<script>
// REQUIREMENTS
// - Open/close button
// - List of gradients as shorthand
// - List of gradients in properties
// - Toggle shorthand button
// - Syntax highlighting
// - Gradient preview
// - Click to edit gradient
// - Delete gradient
// - Move gradient up or down
// - Drag and drop gradient
import ShorthandItem from '@/components/editor/gradient-list/ShorthandItem'
import GradientItem from '@/components/editor/gradient-list/GradientItem'
import { mapGetters } from 'vuex'
export default {
  components: {
    ShorthandItem,
    GradientItem
  },
  data() {
    return {
      shorthand: false
    }
  },
  computed: {
    cssType() {
      return this.shorthand ? 'gradient-item' : 'shorthand-item'
    },
    ...mapGetters({
      list: 'gradients/gradients'
    }),
    layers() {
      return this.list.slice(0).reverse()
    }
  }
}
</script>

<style lang="sass">
.gradient-list
  flex-grow: 1
  max-width: 600px
  width: 100%

code
  display: block

.properties
  padding-top: .5rem
  padding-left: 2rem

.css-property
  line-height: 1.5

.gradient-list-preview
  display: inline-block
  height: 1.5rem
  width: 1.5rem
  border-radius: 50%
  border: 1px solid grey

.property-value:last-child::after
  content: ', '
</style>
