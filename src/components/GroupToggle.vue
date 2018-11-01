<template>
  <div class="group-toggle">
    <span v-if="hidden">Show</span>
    <span v-else>Hide</span>
  </div>
</template>

<script>
export default {
  props: {
    hidden: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>

  .group-toggle
    font-size: .8em
    align-content: center
    display: flex
    align-items: center
    justify-content: flex-end
    opacity: .9
    cursor: pointer

</style>
