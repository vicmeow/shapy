<template>
  <div class="form-wrapper">
    <form 
      class="form" 
      @submit.prevent>
      <form-fieldset 
        :legend="'Canvas'" 
        :desc="'The size of your canvas. Only accepts px for now.'" 
        class="fieldset-canvas">
        <!-- TODO: add unit switch -->
        <form-input 
          class="canvas-size"
          :label="'width'" 
          :type="'number'" 
          v-model="canvas.x.size" 
          :range="{max: 500, min: 0}"
          :name="'canvas-height'"/>
        <span class="x">x</span>
        <form-input 
          class="canvas-size"
          :label="'height'" 
          :type="'number'" 
          v-model="canvas.y.size" 
          :range="{max: 500, min: 0}"
          :name="'canvas-width'"/>
      </form-fieldset>
      <!-- TYPE OF GRADIENT SHAPE (ROUND VS. RECTANGULAR) -->
      <form-fieldset 
        class="fieldset-gradient"
        :legend="'Gradient type'" 
        :desc="'Radial gradients create round shapes and linear gradients create rectangular shapes.'">
        <form-radio
          :label="'linear-gradient'"
          v-model="type" 
          :name="'gradient-shape'"/>
        <form-radio 
          :label="'radial-gradient'"
          v-model="type" 
          :name="'gradient-shape'"/>
        <form-radio
          :label="'repeat'"
          v-model="repeat" 
          :name="'repeating-gradient'"/>
        <form-radio 
          :label="'no-repeat'"
          v-model="repeat" 
          :name="'repeating-gradient'"/>
      </form-fieldset>
      <!-- COLOR OF GRADIENT SHAPE -->
      <form-fieldset 
        class="fieldset-colors"
        :legend="'Colors'" 
        :desc="'The color of your gradient shape and canvas background.'">
        <form-input 
          :label="'box color'" 
          :type="'color'" 
          v-model="box.color" 
          :name="'box-color'"/>
        <form-input 
          :label="'shape color'" 
          :type="'color'" 
          v-model="shape.color" 
          :name="'gradient-color'"/></form-fieldset>
      <!-- BOX ON CANVAS -->
      <form-fieldset 
        class="fieldset-box"
        :legend="'Box'" 
        :desc="'Placement of the box on the main canvas. Think of it as a canvas within your canvas.'">
        <form-input 
          :label="'x-axis'" 
          :type="'range'" 
          :unit="'%'"
          v-model.number="box.coord.x" 
          :name="'box-x-axis'"/>
        <form-input 
          :label="'y-axis'" 
          :type="'range'" 
          :unit="'%'"
          v-model.number="box.coord.y" 
          :name="'box-y-axis'"/>
        <form-input 
          :label="'width'" 
          :type="'range'" 
          :range="{max: canvas.x.size, min: 0}"
          v-model.number="box.size.x" 
          :name="'box-width'"
          :unit="box.size.unit"/>
        <form-input 
          :label="'height'" 
          :type="'range'" 
          :range="{max: canvas.y.size, min: 0}"
          v-model.number="box.size.y" 
          :name="'box-height'"
          :unit="box.size.unit"/></form-fieldset>
      <!-- ANGLE OF SHAPE IN BOX -->
      <form-fieldset 
        v-if="type === 'linear-gradient'"
        :legend="'Shape degree'" 
        :desc="'The degree of your shape'">
        <form-input 
          :label="'degree'" 
          :type="'range'"
          :range="{max: 360, min: 0}"
          :unit="'deg'"
          v-model.number="shape.deg" 
          :name="'shape-deg'"/></form-fieldset>
      <!-- SIZE OF SHAPE IN BOX -->
      <form-fieldset 
        v-if="type === 'radial-gradient'"
        :legend="'Shape size'" 
        :desc="'Shape size'">
        <select 
          slot="select-unit"
          id="shape-value-select" 
          v-model="shape.size.unit">
          <option value="%">%</option>
          <option value="px">px</option>
        </select>
        <form-input 
          :label="'Shape width'" 
          :type="'range'" 
          :range="{max: box.size.x, min: 0}"
          v-model.number="shape.size.x" 
          :name="'shape-width'"
          :unit="shape.size.unit"/>
        <form-input 
          :label="'Shape height'" 
          :type="'range'" 
          :range="{max: box.size.y, min: 0}"
          v-model.number="shape.size.y" 
          :name="'shape-height'"
          :unit="shape.size.unit"/>
        <form-input 
          :label="'x-axis'" 
          :type="'range'"
          :unit="'%'"
          v-model.number="shape.coord.x" 
          :name="'shape-x-axis'"/>
        <form-input 
          :label="'y-axis'" 
          :unit="'%'"
          :type="'range'"
          v-model.number="shape.coord.y" 
          :name="'shape-y-axis'"/></form-fieldset>
      <button @click="register">Register shape</button>
      <button @click="resetList">Delete all shapes</button>
    </form>
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
          color: 'transparent',
          x: {
            size: 500,
            unit: 'px'
          },
          y: {
            size: 500,
            unit: 'px'
          }
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
      this.gradientString = ''
    }
  },
  data: () => ({
    type: 'linear-gradient',
    repeat: 'no-repeat',
    box: {
      color: 'transparent',
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
      color: '#00c6b8',
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
  }),
  created() {
    this.$emit('previewGradient', this.gradientString)
  },
  watch: {
    gradientString() {
      this.$emit('previewGradient', this.gradientString)
    }
  },
  computed: {
    maxRange() {
      if (this.box.size.unit === 'px') return this.canvas.x.size
      if (this.box.size.unit === '%') return 100
    },
    gradientString() {
      // Gradient type, linear/radial
      const type = this.type
      // Repeating gradient
      const repeat = this.repeat

      // Shape color
      const color = this.shape.color
      const boxColor = this.box.color

      // Degree if the gradient is linear
      const deg = this.shape.deg

      // Shape of the gradient
      const shapeUnit = this.shape.size.unit
      const shapeWidth = this.shape.size.x
      const shapeHeight = this.shape.size.y

      // Position of the shape inside the box, if radial
      const shapeX = this.shape.coord.x
      const shapeY = this.shape.coord.y

      // Size of the box that will contain the gradient on the canvas
      const boxUnit = this.box.size.unit
      const boxWidth = this.box.size.x
      const boxHeight = this.box.size.y

      // Placement of the box on the canvas
      const boxX = this.box.coord.x
      const boxY = this.box.coord.y

      if (type === 'radial-gradient') {
        return `${type}(${shapeWidth}${shapeUnit} ${shapeHeight}${shapeUnit} at ${shapeX}% ${shapeY}%, ${color} 49.8%, ${boxColor} 50%) ${repeat} ${boxX}${boxUnit} ${boxY}${boxUnit} / ${boxWidth}${boxUnit} ${boxHeight}${boxUnit}`
      } else if (type === 'linear-gradient' && deg > 0) {
        return `${type}(${deg}deg, ${color} 49%, ${boxColor} 50%) ${repeat} ${boxX}${boxUnit} ${boxY}${boxUnit} / ${boxWidth}${boxUnit} ${boxHeight}${boxUnit}`
      } else if (type === 'linear-gradient') {
        return `${type}(${color} 99.99%, ${boxColor} 100%) ${repeat} ${boxX}% ${boxY}% / ${boxWidth}${boxUnit} ${boxHeight}${boxUnit}`
      }
    }
  }
}
</script>

<style lang="sass">

  .form-wrapper
    display: flex
    flex-direction: column
    min-height: 100vh
    max-width: 400px
    min-width: 400px
    padding: 1.5rem
    background: $white
    overflow: scroll
</style>
