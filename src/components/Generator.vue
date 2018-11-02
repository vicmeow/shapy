<template>
  <div class="generator-wrapper">
    <gradient-form/>
    <gradient-canvas/>
    <gradient-list/>
  </div>
</template>

<script>
import GradientForm from '@/components/GradientForm'
import GradientCanvas from '@/components/GradientCanvas'
import GradientList from '@/components/GradientList'
export default {
  name: 'Generator',
  components: {
    GradientForm,
    GradientCanvas,
    GradientList
  }
}
</script>

<style lang="sass">

  .generator-wrapper
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr))
    grid-template-rows: 1fr minmax(150px, 300px)
    min-height: 100%

</style>
