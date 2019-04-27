<template>
  <div class="gradient-item">
    <button @click="editGradient(item.id)">
      edit
    </button>
    <div
      class="gradient-preview"
      :style="{
        'background-image': item.image.join(''),
        height: '1.5rem',
        width: '1.5rem'
      }"
    ></div>
    <div class="gradient-string">
      <span v-for="value in item.background" :key="value.index">{{
        value
      }}</span>
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
