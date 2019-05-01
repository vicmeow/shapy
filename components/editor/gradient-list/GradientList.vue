<template>
  <div class="gradient-list">
    <button @click="shorthand = !shorthand">
      <span v-if="shorthand">X</span>
      <span v-if="!shorthand">Shorthand</span>
    </button>
    <list-item v-for="item in list" :key="item.id" :item="item" />
    <div v-if="!layers.length">
      You haven't added any gradients to the canvas yet.
    </div>
  </div>
</template>

<script>
// REQUIREMENTS
// - Open/close button
// - List of gradients as shorthand
// - List of gradients as full background properties
// - Toggle shorthand button
// - Syntax highlighting
// - Gradient preview
// - Click to edit gradient
// - Delete gradient
// - Move gradient up or down
// - Drag and drop gradient
// - Search gradients by name
import ListItem from '@/components/editor/gradient-list/ListItem'
export default {
  components: {
    ListItem
  },
  data() {
    return {
      shorthand: false
    }
  },
  computed: {
    list() {
      return this.$store.state.gradients.list.slice().reverse()
    }
  }
}
</script>

<style lang="sass">
.gradient-list
  width: 100%
  padding: 1rem
  color: $white

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
