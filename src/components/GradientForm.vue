<template>
  <div class="form-wrapper">
    <form 
      class="form" 
      @submit.prevent>
      <!-- <fieldset-canvas/> -->
      <fieldset-gradient/>
      <fieldset-shape/>
      <fieldset-box/>
      <fieldset-comment/>
    </form>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import FieldsetCanvas from '@/components/fieldsets/FieldsetCanvas'
import FieldsetComment from '@/components/fieldsets/FieldsetComment'
import FieldsetGradient from '@/components/fieldsets/FieldsetGradient'
import FieldsetBox from '@/components/fieldsets/FieldsetBox'
import FieldsetShape from '@/components/fieldsets/FieldsetShape'
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
    padding: 1rem
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
    font-size: .95em
    margin-top: .3rem
    margin-bottom: .5rem

  .x
    margin: auto 0

  input
    font-family: $font
    font-size: 18px
    color: $black
    border: 0
    padding: 0
    &:focus
      outline: 0

</style>
