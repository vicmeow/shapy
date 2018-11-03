<template>
  <div class="group-toggle">
    <span v-if="hidden">{{ label.show }}</span>
    <span v-else>{{ label.hide }}</span>
  </div>
</template>

<script>
export default {
  props: {
    hidden: {
      type: Boolean,
      required: true,
      default: false
    },
    label: {
      type: Object,
      required: false,
      default() {
        return {
          show: 'Show',
          hide: 'Hide'
        }
      }
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

  .form-toggle
    display: none
    color: white
    margin: 0
    margin-right: auto
    margin-bottom: .5em
    @media screen and (max-width: 768px)
      display: block

</style>
