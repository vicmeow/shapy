<template>
  <div class="gradient-list" :class="{ 'empty-list': !list.length }">
    <list-item v-for="item in list" :key="item.id" :item="item" />
    <div v-if="!list.length" class="empty-message">
      No layers available. You haven't added any gradients to the canvas yet!
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
import ListItem from '@/components/editor/sidebar/gradient-list/ListItem'
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
  min-width: 100%
  color: $white

.empty-list
  margin: 2rem 0

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

.empty-message
  text-align: center
  color: $black
</style>
