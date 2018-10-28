<template>
  <div class="form-wrapper">
    <form 
      class="form" 
      @submit.prevent>
      <!-- TYPE OF GRADIENT SHAPE (ROUND VS. RECTANGULAR) -->
      <form-fieldset 
        :legend="'Gradient type'" 
        :desc="'Radial gradients create round shapes and linear gradients create rectangular shapes.'">
        <form-radio 
          :label="'linear'" 
          :value="'linear'"
          v-model="gradient.type" 
          :name="'gradient-shape'"/>
        <form-radio 
          :label="'radial'" 
          :value="'linear'"
          v-model="gradient.type" 
          :name="'gradient-shape'"/></form-fieldset>
      <!-- COLOR OF GRADIENT SHAPE -->
      <form-fieldset 
        :legend="'Colors'" 
        :desc="'The color of your gradient shape and canvas background.'">
        <form-input 
          :label="'box color'" 
          :type="'text'" 
          v-model="gradient.box.color" 
          :name="'box-color'"/>
        <form-input 
          :label="'shape color'" 
          :type="'text'" 
          v-model="gradient.shape.color" 
          :name="'gradient-color'"/></form-fieldset>
      <!-- BOX ON CANVAS -->
      <form-fieldset 
        :legend="'Box'" 
        :desc="'Placement of the box on the main canvas. Think of it as a canvas within your canvas.'">
        <form-input 
          :label="'x-axis'" 
          :type="'range'" 
          v-model.number="gradient.box.coord.x" 
          :name="'box-x-axis'"/>
        <form-input 
          :label="'y-axis'" 
          :type="'range'" 
          v-model.number="gradient.box.coord.y" 
          :name="'box-y-axis'"/>
        <form-input 
          :label="'width'" 
          :type="'range'" 
          :range-max="maxRange"
          v-model.number="gradient.box.size.x" 
          :name="'box-width'"
          :unit="gradient.box.size.unit"/>
        <form-input 
          :label="'height'" 
          :type="'range'" 
          :range-max="maxRange"
          v-model.number="gradient.box.size.y" 
          :name="'box-height'"
          :unit="gradient.box.size.unit"/></form-fieldset>
      <!-- ANGLE OF SHAPE IN BOX -->
      <form-fieldset 
        v-if="gradient.type === 'linear'"
        :legend="'Shape degree'" 
        :desc="'The degree of your shape'">
        <form-input 
          :label="'deg'" 
          :type="'range'"
          :range-max="360"
          v-model.number="gradient.shape.deg" 
          :name="'shape-deg'"/></form-fieldset>
      <!-- SIZE OF SHAPE IN BOX -->
      <form-fieldset 
        v-if="gradient.type === 'radial'"
        :legend="'Shape size'" 
        :desc="'Shape size'">
        <select 
          slot="select-unit"
          id="shape-value-select" 
          v-model="gradient.shape.size.unit">
          <option value="%">%</option>
          <option value="px">px</option>
        </select>
        <form-input 
          :label="'Shape width'" 
          :type="'range'" 
          :range-max="gradient.box.size.x"
          v-model.number="gradient.shape.size.x" 
          :name="'shape-width'"
          :unit="gradient.shape.size.unit"/>
        <form-input 
          :label="'Shape height'" 
          :type="'range'" 
          :range-max="gradient.box.size.y"
          v-model.number="gradient.shape.size.y" 
          :name="'shape-height'"
          :unit="gradient.shape.size.unit"/>
        <form-input 
          :label="'x-axis'" 
          :type="'range'"
          v-model.number="gradient.shape.coord.x" 
          :name="'shape-x-axis'"/>
        <form-input 
          :label="'y-axis'" 
          :type="'range'"
          v-model.number="gradient.shape.coord.y" 
          :name="'shape-y-axis'"/></form-fieldset>
      <button @click="register">Register shape</button>
      <button @click="resetList">Delete all shapes</button>
    </form>
    <div class="code-output">
      {{ gradientString }}
    </div>
  </div>
</template>

<script>
import FormFieldset from '@/components/FormFieldset'
import FormInput from '@/components/FormInput'
import FormRadio from '@/components/FormRadio'
import FormSelect from '@/components/FormSelect'
export default {
  name: 'Form',
  components: {
    FormFieldset,
    FormInput,
    FormRadio,
    FormSelect
  },
  props: {
    canvas: {
      type: Object,
      required: false,
      default() {
        return {
          x: 500,
          y: 500,
          unit: 'px'
        }
      }
    }
  },
  methods: {
    resetList() {
      this.$emit('resetList', [])
    },
    register() {
      this.$emit('register', this.gradientString)
    }
  },
  data: () => ({
    gradient: {
      type: 'linear',
      repeat: 'no-repeat',
      box: {
        color: '#94ADCF',
        size: {
          unit: 'px',
          x: 100,
          y: 100
        },
        coord: {
          x: 50,
          y: 50
        }
      },
      shape: {
        deg: 0,
        color: '#FFEAF5',
        size: {
          unit: 'px',
          x: 100,
          y: 100
        },
        coord: {
          x: 50,
          y: 50
        }
      }
    }
  }),
  watch: {
    gradientString() {
      this.$emit('previewGradient', this.gradientString)
    }
  },
  computed: {
    maxRange() {
      if (this.gradient.box.size.unit === 'px') return this.canvas.x
      if (this.gradient.box.size.unit === '%') return 100
    },
    gradientString() {
      // Gradient type, linear/radial
      const type = this.gradient.type
      const repeat = this.gradient.repeat

      // Shape color
      const color = this.gradient.shape.color
      const boxColor = this.gradient.box.color

      // Degree if the gradient is linear
      const deg = this.gradient.shape.deg

      // Shape of the gradient
      const shapeUnit = this.gradient.shape.size.unit
      const shapeWidth = this.gradient.shape.size.x
      const shapeHeight = this.gradient.shape.size.y

      // Position of the shape inside the box, if radial
      const shapeX = this.gradient.shape.coord.x
      const shapeY = this.gradient.shape.coord.y

      // Size of the box that will contain the gradient on the canvas
      const boxUnit = this.gradient.box.size.unit
      const boxWidth = this.gradient.box.size.x
      const boxHeight = this.gradient.box.size.y

      // Placement of the box on the canvas
      const boxX = this.gradient.box.coord.x
      const boxY = this.gradient.box.coord.y

      if (type === 'radial') {
        return `${type}-gradient(${shapeWidth}${shapeUnit} ${shapeHeight}${shapeUnit} at ${shapeX}% ${shapeY}%, ${color} 49%, ${boxColor} 50%) ${repeat} ${boxX}% ${boxY}% / ${boxWidth}${boxUnit} ${boxHeight}${boxUnit}`
      } else if (type === 'linear' && deg > 0) {
        return `${type}-gradient(${deg}deg, ${color} 49%, ${boxColor} 50%) ${repeat} ${boxX}% ${boxY}% / ${boxWidth}${boxUnit} ${boxHeight}${boxUnit}`
      } else if (type === 'linear') {
        return `${type}-gradient(${color} 98%, ${boxColor} 99%) ${repeat} ${boxX}% ${boxY}% / ${boxWidth}${boxUnit} ${boxHeight}${boxUnit}`
      }
    }
  }
}
</script>

<style lang="sass">
  .submit-input
    background: $black
    border: 0
    min-height: 40px
    min-width: 120px
    border-radius: 30px
    font-size: 1rem
    color: white
    font-weight: 500
    text-transform: uppercase
</style>
