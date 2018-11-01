<template>
  <div class="form-wrapper">
    <form 
      class="form" 
      @submit.prevent>
      <fieldset-shapy/>
      <fieldset-canvas/>
      <fieldset-gradient/>
      <fieldset-colors/>
      <fieldset-box/>
      <fieldset-shape v-if="gradient.type === 'radial-gradient'"/>
      <fieldset-comment/>
    </form>
    <div class="buttons">
      <button
        @click="undoShape"
        class="btn btn-undo">Undo</button>
      <button
        @click="addShape"
        class="btn btn-add">Add</button>
      <button
        @click="deleteShapes"
        class="btn btn-delete">Delete all shapes</button>
    </div>
  </div>
</template>

<script>
import FieldsetCanvas from '@/components/fieldsets/FieldsetCanvas'
import FieldsetComment from '@/components/fieldsets/FieldsetComment'
import FieldsetGradient from '@/components/fieldsets/FieldsetGradient'
import FieldsetBox from '@/components/fieldsets/FieldsetBox'
import FieldsetShape from '@/components/fieldsets/FieldsetShape'
import FieldsetColors from '@/components/fieldsets/FieldsetColors'
import FieldsetShapy from '@/components/fieldsets/FieldsetShapy'
import { mapFields } from 'vuex-map-fields'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Form',
  components: {
    FieldsetCanvas,
    FieldsetComment,
    FieldsetGradient,
    FieldsetBox,
    FieldsetShape,
    FieldsetColors,
    FieldsetShapy
  },
  data: () => ({
    id: 0
  }),
  computed: {
    ...mapFields(['comment', 'gradient']),
    ...mapState(['previewGradient', 'gradientList'])
  },
  methods: {
    addShape() {
      this.$store.commit('addShape', {
        id: this.id,
        string: this.previewGradient
      })
      this.id++
    },
    ...mapMutations(['undoShape', 'deleteShapes'])
  }
}
</script>

<style lang="sass">

  .form-wrapper
    grid-column: 1
    grid-row: 1 / -1
    display: flex
    flex-direction: column
    min-height: 100vh
    margin: 0 1em

  .form
    max-height: 85vh
    overflow: scroll

  .fieldset
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))
    grid-gap: .3em 1em
    border: 0
    padding: .7em 1em
    margin: 1em 0
    background: $white
    border-radius: 5px

  .legend
    font-size: 1.2rem
    font-weight: 500
    cursor: pointer

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
      font-style: italic
      outline: 0

  .input-wrapper
    margin-top: .3em

  .buttons
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: center
    margin-top: auto
    padding: 0 .5em
    width: 100%
    z-index: 5
    background: $black

  .btn
    color: $black
    font-size: 1.2em
    border: 0
    padding: .5em 2em
    border-radius: 2em
    font-weight: 700
    margin: 0 1em
    min-width: 120px
    cursor: pointer

  .btn-add
    background: $green

  .btn-undo
    background: $red
  
  .btn-delete
    font-size: .9em
    background: $black
    color: $white
    margin: .5em 0
    flex-basis: 100%

</style>
