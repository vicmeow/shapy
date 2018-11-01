<template>
  <div class="generator-wrapper">
    <gradient-form/>
    <gradient-canvas/>
    <gradient-snippet/>
  </div>
</template>

<script>
import GradientForm from '@/components/GradientForm'
import GradientCanvas from '@/components/GradientCanvas'
import GradientSnippet from '@/components/GradientSnippet'
export default {
  name: 'Generator',
  components: {
    GradientForm,
    GradientCanvas,
    GradientSnippet
  }
}
</script>

<style lang="sass">

  .generator-wrapper
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr))
    grid-template-rows: 1fr minmax(300px, max-content)
    max-height: 100vh
    grid-gap: 1em
    padding: 1em

</style>
