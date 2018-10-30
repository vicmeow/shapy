<template>
  <div class="form-wrapper">
    <form 
      class="form" 
      @submit.prevent>
      <!-- <fieldset-canvas/> -->
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
    flex-direction: column-reverse
    text-align: center
    width: 50%

    label
      font-size: .95rem
      margin: .5rem 0

  input
    font-family: $font
    font-size: 18px
    color: $black
    border: 0
    padding: .5rem 1rem
    max-width: 100%

  input[type="text"]
    width: 100%
    margin-bottom: .5rem
    padding: .3rem 0
    border-bottom: 1px solid $black
    &:focus
      border-color: $green

</style>
