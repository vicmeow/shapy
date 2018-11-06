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
    </form>
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
      if (this.previewGradient) {
        this.$store.commit('addShape', {
          id: this.id,
          string: this.previewGradient
        })
        this.id++
      }
    },
    ...mapMutations(['undoShape', 'deleteShapes'])
  }
}
</script>

<style lang="sass">

  .form-wrapper
    grid-column: 1
    grid-row: span 2
    display: flex
    flex-direction: column
    padding-right: 1em
    margin-left: 1em
    overflow-y: scroll
    min-height: 100vh
    max-height: 100vh
    @media screen and (max-width: 768px)
      height: 100%
  
  .form
    min-height: 100vh

  .fieldset
    position: relative
    display: flex
    flex-wrap: wrap
    border: 0
    padding: .7em 1em
    background: $white
    border-radius: 5px
    margin: 1em 0
    box-shadow: 3px 3px 3px hsl(214, 29%, 25%)

  .fieldset-canvas
    margin-top: 0

  .fieldset-comment
    margin: 0

  .legend
    font-size: 1.2rem
    font-weight: 500
    cursor: pointer

  .group-toggle
    margin-left: auto

  .desc
    width: 100%
    flex-basis: 100%
    font-size: .95em
    margin: .25em 0

  .group-desc
    flex-basis: 100%
    font-weight: 500
    margin-top: .5em

  .buttons
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: center
    width: 100%
    z-index: 5
    padding-bottom: 1em

  .btn
    color: $black
    font-size: 1em
    border: 0
    padding: .5em 1em
    border-radius: 3px
    font-weight: 700
    cursor: pointer
    min-width: 100px
    margin: 1em .5em

  .btn-add, .btn-undo
    box-shadow: 3px 3px 3px hsl(214, 29%, 20%)
    transition: all .1s ease-in-out
    &:active
      transform: translate3d(1px,1px,1px)
      box-shadow: 1px 1px 1px hsl(214, 29%, 20%)

  .btn-add
    color: $white
    background: $green
    flex-basis: min-content

  .btn-undo
    background: $red
    flex-basis: min-content

  .btn-delete
    font-weight: normal
    flex-basis: 100%
    font-size: .9em
    background: $black
    color: $white
    margin: 0
    padding: 0

</style>
