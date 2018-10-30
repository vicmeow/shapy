<template>
  <div class="generator-wrapper">
    <gradient-form/>
    <gradient-canvas/>
    <ul class="gradient-list">
      <li>background: </li>
      <li>{{ previewGradient }}</li>
      <li 
        v-for="gradient in gradientList" 
        :key="gradient.index">{{ gradient }}</li>
    </ul>
  </div>
</template>

<script>
import GradientForm from '@/components/GradientForm'
import GradientCanvas from '@/components/GradientCanvas'
import { mapState } from 'vuex'
export default {
  name: 'Generator',
  components: {
    GradientForm,
    GradientCanvas
  },
  computed: {
    ...mapState({
      gradientList: 'gradientList',
      previewGradient: 'previewGradient'
    })
  }
}
</script>

<style lang="sass">

  .generator-wrapper
    display: grid
    grid-template-columns: 400px 1fr 400px
    min-height: 100vh

  .gradient-list
    width: 100%
    list-style-type: none
    overflow-y: scroll
    color: white
    padding: 1rem 0

    li
      display: inline-block
      line-height: 1.3
      margin-bottom: .5rem
      margin-right: .5rem
      &:hover:not(:first-child)
        outline: 1px dashed white
</style>
