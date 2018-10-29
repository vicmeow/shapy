<template>
  <div class="generator-wrapper">
    <gradient-form 
      :canvas="canvas" 
      @register="registerGradient" 
      @previewGradient="previewGradient"
      @resetList="resetList"/>
    <div class="wrapper">
      <gradient-canvas 
        :gradient="gradient"
        :canvas="canvas"
        :preview="preview"/>
      <ul class="gradient-list">
        <li v-if="preview !== ''">background: </li>
        <li v-if="preview !== ''">{{ preview }}</li>
        <li 
          class="gradient" 
          v-for="gradient in gradientList" 
          :key="gradient.index">{{ gradient }}, </li>
      </ul>
    </div>
  </div>
</template>

<script>
import GradientForm from '@/components/GradientForm'
import GradientCanvas from '@/components/GradientCanvas'
export default {
  name: 'Generator',
  components: {
    GradientForm,
    GradientCanvas
  },
  data: () => ({
    gradientList: [],
    gradient: '',
    preview: '',
    canvas: {
      unit: 'px',
      x: 250,
      y: 250
    }
  }),
  methods: {
    resetList() {
      this.gradientList = []
      this.gradient = ''
      this.preview = ''
    },
    previewGradient(gradient) {
      this.preview = gradient
    },
    registerGradient(gradient) {
      this.gradientList.unshift(gradient)
      this.gradient = this.gradientList.join(', ')
    }
  }
}
</script>

<style lang="sass">

  .wrapper
    display: flex
    flex-direction: column
    min-height: 100vh
    width: 100%

  .generator-wrapper
    display: flex
    max-height: 100vh

  .gradient-list
    width: 100%
    height: 200px
    margin-bottom: 0
    display: flex
    flex-wrap: wrap
    background: $black
    list-style-type: none
    padding: 1rem
    margin: 0
    color: white
    overflow: scroll
    align-content: flex-start

    li
      flex-shrink: 0
      line-height: 1.3
      margin-bottom: .5rem
      margin-right: .5rem
      align-self: flex-start
      &:hover:not(:first-child)
        outline: 1px dashed white
</style>
