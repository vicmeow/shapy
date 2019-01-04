<template>
  <div class="form-wrapper">
    <form class="form" @submit.prevent>
      <fieldset-shapy />
      <fieldset-canvas />
      <fieldset-general />
      <fieldset-colors />
      <fieldset-box />
      <fieldset-shape v-if="general.type === 'radial'" />
      <div class="buttons">
        <!-- <button
          @click="undoAction"
          class="btn btn-shadow btn-undo">Undo</button> -->
        <button class="btn btn-shadow btn-add" @click="addGradient">
          Add Gradient
        </button>
        <button
          v-clipboard:copy="gradientStrings"
          v-clipboard:success="copyCode"
          :key="'copy'"
          class="btn btn-copy btn-shadow"
        >
          <transition name="copy" mode="out-in">
            <div v-if="!copied" :key="'copy'">
              Copy CSS
              <font-awesome-icon
                :icon="['fas', 'copy']"
                aria-hidden="true"
                class="social-icon"
              />
            </div>
            <div v-if="copied" :key="'copied'">Copied!</div>
          </transition>
        </button>
        <form
          class="export-form"
          action="https://codepen.io/pen/define"
          method="POST"
          target="_blank"
        >
          <input :value="getFormData" type="hidden" name="data" />
          <button type="submit" class="btn btn-codepen btn-shadow">
            CodePen
            <font-awesome-icon
              :icon="['fab', 'codepen']"
              aria-hidden="true"
              class="social-icon"
            />
          </button>
        </form>
        <button class="btn btn-delete" @click="deleteAll">
          Delete everything
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import FieldsetCanvas from '@/components/fieldsets/FieldsetCanvas'
import FieldsetGeneral from '@/components/fieldsets/FieldsetGeneral'
import FieldsetBox from '@/components/fieldsets/FieldsetBox'
import FieldsetShape from '@/components/fieldsets/FieldsetShape'
import FieldsetColors from '@/components/fieldsets/FieldsetColors'
import FieldsetShapy from '@/components/fieldsets/FieldsetShapy'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Form',
  components: {
    FieldsetCanvas,
    FieldsetGeneral,
    FieldsetBox,
    FieldsetShape,
    FieldsetColors,
    FieldsetShapy
  },
  data: () => ({
    copied: false
  }),
  computed: {
    ...mapState({
      gradientStrings: 'gradientStrings',
      actions: 'actions',
      previewGradient: 'previewGradient',
      gradientList: 'gradientList'
    }),
    ...mapGetters({
      general: 'general/general',
      canvas: 'canvas/canvas'
    }),
    getFormData() {
      return JSON.stringify({
        title: 'Shapy Gradient 🤖',
        html: '<div class="gradient"></div>',
        css: `
  body, html {
    width: 100%;
    height: 100%;
  }

  .gradient {
    height: ${this.canvas.x.size}${this.canvas.x.unit};
    width: ${this.canvas.y.size}${this.canvas.y.unit};
    background: ${this.gradientStrings};
  }`
      })
    }
  },
  methods: {
    copyCode() {
      this.copied = true
      setTimeout(() => {
        this.copied = false
      }, 1500)
    },
    addGradient() {
      if (this.actions.length === 0) {
        this.$store.dispatch('addGradient', this.previewGradient)
      } else {
        const type = this.actions[this.actions.length - 1].type
        if (this.previewGradient) {
          if (type === 'editGradient') {
            this.$store.dispatch('returnGradient')
          } else {
            this.$store.dispatch('addGradient', this.previewGradient)
          }
        }
      }
    },
    ...mapActions(['undoAction', 'deleteAll'])
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
  overflow-y: auto
  height: 100vh
  @media screen and (max-width: 768px)
    height: 100%

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
  justify-content: space-between

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
  padding: .5em 0
  border-radius: 3px
  font-weight: 700
  cursor: pointer
  min-width: 160px
  margin: .5em 0

.btn-shadow
  box-shadow: 3px 3px 3px hsl(214, 29%, 20%)
  transition: all .1s ease-in-out
  &:active
    transform: translate3d(1px,1px,1px)
    box-shadow: 1px 1px 1px hsl(214, 29%, 20%)

.btn-add
  color: $white
  background: $green
  flex-basis: min-content
  flex-basis: 100%
  margin-top: 0

.btn-undo
  background: $red
  flex-basis: min-content

.btn-copy, .btn-codepen
  margin: .5em

.btn-delete
  font-weight: normal
  flex-basis: 100%
  font-size: .9em
  opacity: .7
  background: $black
  color: $white
  margin: 0
  padding: 0

.copy-enter-active, .copy-leave-active
  transition: all .1s linear

.copy-enter
  opacity: 0
  transform: translateY(-10px)

.copy-leave-to
  opacity: 0
  transform: translateY(10px)
</style>
