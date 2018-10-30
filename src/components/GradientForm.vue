<template>
  <div class="form-wrapper">
    <form 
      class="form" 
      @submit.prevent>
      <fieldset-canvas/>
      <fieldset-gradient/>
      <fieldset-box/>
      <fieldset-shape/>
      <fieldset-comment/>
    </form>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import FieldsetCanvas from '@/components/FieldsetCanvas'
import FieldsetComment from '@/components/FieldsetComment'
import FieldsetGradient from '@/components/FieldsetGradient'
import FieldsetBox from '@/components/FieldsetBox'
import FieldsetShape from '@/components/FieldsetShape'
export default {
  name: 'Form',
  components: {
    FieldsetCanvas,
    FieldsetComment,
    FieldsetGradient,
    FieldsetBox,
    FieldsetShape
  },
  computed: {
    ...mapFields(['comment'])
  }
}
</script>

<style lang="sass">

  .form-wrapper
    display: flex
    flex-direction: column
    max-height: 100vh
    max-width: 400px
    min-width: 400px
    padding: 1.5rem
    background: $white
    overflow-y: scroll

  .fieldset
    display: flex
    flex-direction: column
    flex-wrap: wrap
    border: 0
    margin-bottom: 1rem

  .legend
    font-size: 1.2rem
    font-weight: 500

  .desc
    width: 100%
    flex-basis: 100%
    font-size: .95rem
    font-style: italic
    margin-top: .3rem
    margin-bottom: .5rem

  .x
    margin: auto 0

  .input-wrapper
    position: relative
    display: flex
    align-items: center
  
  .input-text
    flex-direction: column-reverse
    align-items: flex-start

    label
      font-size: .95rem
      margin-bottom: 1rem

  .range-wrapper
    display: flex
    flex-direction: column
    text-align: center
    width: 50%
    flex-basis: 50%

  .number-wrapper
    display: flex
    align-items: center
    justify-content: center

    .label-number
      display: flex
      padding: 0
      min-width: 0
      max-width: 3.5rem
      text-align: right
      padding: 0 .3rem

  input
    font-family: $font
    font-size: 18px
    color: $black
    border: 0
    padding: .5rem 1rem
    &:focus
      outline: 0

  input[type="text"]
    width: 100%
    margin-bottom: .5rem
    padding: .3rem 0
    border-bottom: 1px solid $black
    &:focus
      border-color: $green

  .radio-wrapper
    position: relative
    display: flex
    margin: .3rem 0

    label
      display: flex
      align-items: center

  input[type="radio"]
    position: absolute
    height: 100%
    width: 100%
    opacity: 0
    z-index: 2

  input[type="radio"] + label::before
    position: relative
    content: ''
    bottom: 0
    display: inline-block
    position relative
    height: 17px
    width: 17px
    border: 1.4px solid $black
    border-radius: 50%
    margin-right: .5rem

  input[type="radio"]:checked + label::before
    background: radial-gradient(85% 85% at 50% 50%, $green 38%, $white 39%) no-repeat 50% 50% / 100% 100%

  ::-moz-focus-inner, ::-moz-focus-outer
    border: 0
    background: $green

  input[type=range]
    -webkit-appearance: none
    width: 100%
    margin: 7px 0

  input[type=range]:focus
    outline: none

  input[type=range]::-webkit-slider-runnable-track
    width: 100%
    height: 2px
    cursor: pointer
    box-shadow: 0
    background: $black
    &:focus
      background: $green

  input[type=range]::-webkit-slider-thumb
    box-shadow: 0
    border: 1.4px solid $black
    height: 17px
    width: 17px
    border-radius: 100%
    background: radial-gradient(85% 85% at 50% 50%, $black 38%, $white 39%) no-repeat 50% 50% / 100% 100%
    cursor: pointer
    -webkit-appearance: none
    margin-top: -7px

  input[type=range]:focus::-webkit-slider-runnable-track
    background: $green

  input[type=range]::-moz-range-track
    width: 100%
    height: 2px
    cursor: pointer
    box-shadow: 0
    background: $black
    border: 0

  input[type=range]::-moz-range-track:focus
    background: $green

  ::-moz-range-progress
    height: 2px
    background: $green

  input[type=range]::-moz-range-thumb
    box-shadow: 0
    border: 1.4px solid $black
    height: 17px
    width: 17px
    border-radius: 100%
    background: radial-gradient(85% 85% at 50% 50%, $green 38%, $white 39%) no-repeat 50% 50% / 100% 100%
    cursor: pointer

  input[type=range]::-ms-track
    width: 100%
    height: 2px
    cursor: pointer
    background: transparent
    border-color: transparent
    color: transparent
    &:focus
      background: $green

  input[type=range]::-ms-fill-lower
    background: $black
    border: 0
    box-shadow: 0
    &:focus
      background: $green

  input[type=range]::-ms-thumb
    box-shadow: 0
    border: 0
    height: 17px
    width: 17px
    border-radius: 100%
    background: $black
    cursor: pointer
    height: 2px

  input[type=range]:focus::-ms-fill-lower
    background: $green

  input[type=range]:focus::-ms-fill-upper
    background: $green


</style>
