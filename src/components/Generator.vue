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
    grid-template-columns: minmax(300px, 500px) minmax(500px, 1fr)
    grid-template-rows: minmax(400px, 1fr) minmax(250px,.6fr)
    min-height: 100vh
    @media screen and (max-width: 768px)
      display: flex
      flex-direction: column


</style>
