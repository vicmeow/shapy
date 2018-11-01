<template>
  <div class="form-wrapper">
    <form 
      class="form" 
      @submit.prevent>
      <fieldset-canvas/>
      <fieldset-colors/>
      <fieldset-gradient/>
      <fieldset-box/>
      <fieldset-shape v-if="gradient.type === 'radial-gradient'"/>
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
import FieldsetColors from '@/components/fieldsets/FieldsetColors'
export default {
  name: 'Form',
  components: {
    FieldsetCanvas,
    FieldsetComment,
    FieldsetGradient,
    FieldsetBox,
    FieldsetShape,
    FieldsetColors
  },
  computed: {
    ...mapFields(['comment', 'gradient'])
  }
}
</script>

<style lang="sass">

  .form-wrapper
    grid-column: 1
    grid-row: 1 / -1
    display: flex
    flex-direction: column
    overflow-y: scroll
    max-height: 100vh

  .fieldset
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))
    grid-gap: .3em 1em
    border: 0
    padding: 1rem
    margin-bottom: 1rem
    background: $white
    border-radius: 5px

  .legend
    font-size: 1.2rem
    font-weight: 500

  .desc
    grid-column: 1 / -1
    width: 100%
    flex-basis: 100%
    font-size: .95em

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
