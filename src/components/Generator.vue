<template>
  <div class="generator-wrapper">
    <gradient-form 
      :canvas="canvas" 
      @register="registerGradient" 
      @previewGradient="previewGradient"
      @resetList="resetList"/>
    <gradient-canvas 
      :gradient="gradient"
      :preview="preview"
      :size="canvas"/>
    <ul class="gradient-list">
      <li 
        class="gradient" 
        v-for="(gradient, index) in gradientList" 
        :key="gradient.index">{{ index }} - {{ gradient }}</li>
    </ul>
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
    gradient:
      'radial-gradient(circle,rgba(255,255,255,0.6) 50%,transparent 50%) no-repeat 4px 4px / 13px 33px',
    preview: '',
    canvas: {
      unit: 'px',
      x: 500,
      y: 500
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

  .generator-wrapper
    min-height: 100vh
    display: grid
    margin: auto
    grid-template-columns: minmax(400px, 1fr) 3fr minmax(400px, 1fr)
    grid-grap: 1rem

  .form-wrapper
    display: flex
    flex-direction: column
    height: 100%
    width: 100%
    padding: 1rem
    background: white
  
  .wrapper
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
  
  .gradient-list
    background: $black
    list-style-type: none
    padding: 1rem
    margin: 0
    color: white

    li
      line-height: 1.3
      margin-bottom: .5rem
</style>
