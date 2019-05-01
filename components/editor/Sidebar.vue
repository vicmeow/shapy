<template>
  <div class="sidebar">
    <component :is="component" />
  </div>
</template>

<script>
// TODO: Add open gradient list logic
import Controls from '@/components/editor/Controls'
import GradientList from '@/components/editor/gradient-list/GradientList'
export default {
  components: {
    Controls,
    List: GradientList
  },
  computed: {
    component() {
      return 'controls'
    }
  }
}
</script>

<style lang="sass">
.sidebar
  position: relative
  width: 100%
  max-width: 450px
  padding: 1rem
  @media screen and (max-width: 768px)
    max-width: 100%
</style>
