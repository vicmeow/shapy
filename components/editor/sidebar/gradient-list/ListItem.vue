<template>
  <div class="gradient-item">
    <button @click="editGradient(item.id)">
      e
    </button>
    <div
      class="gradient-preview"
      :style="{
        'background-image': item.processed.image.join('')
      }"
    ></div>
    <div class="gradient-string">
      <span
        v-for="value in item.background"
        :key="value.index"
        class="item-number"
      >
        {{ value }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  methods: {
    editGradient(id) {
      this.$store.dispatch('gradients/editGradient', id)
    }
  }
}
</script>

<style lang="sass">
.gradient-item
  display: flex
  background: $white
  color: $black
  align-items: center
  padding: .5rem

.gradient-preview
  width: 2rem
  height: 2rem
  flex-shrink: 0
  border-radius: 50%
  margin: .5rem
</style>
