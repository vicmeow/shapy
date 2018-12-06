<template>
  <ul class="gradient-list">
    <li class="preview-string">
      <span class="string-label">Preview:</span>
      <span v-highlightjs="previewGradient"><code class="css" /></span>
      <span class="string-label">Added:</span>
    </li>
    <li
      class="no-items"
      v-if="gradientList.length < 1">You haven't added any gradients yet...</li>
    <li
      class="gradient-item"
      v-for="gradient in gradientList"
      :key="gradient.id">
      <div
        class="gradient-code"
        v-highlightjs="gradient.string">
        <code class="css" />
      </div>
      <div class="gradient-details">
        <button
          @click="deleteGradient(gradient.id)"
          class="btn-delete-item">
          Delete
        </button>
      </div>
    </li>
    <li
      class="copy"
      v-if="gradientList.length > 0">
      <button
        :key="'copy'"
        class="btn btn-copy btn-shadow"
        v-clipboard:copy="gradientStrings"
        v-clipboard:success="copyCode">
        <transition
          name="fade"
          mode="out-in">
          <div
            v-if="!copied"
            :key="'copy'">Copy CSS</div>
          <div
            v-if="copied"
            :key="'copied'">Copied!</div>
        </transition>
      </button>
      <form
        class="export-form"
        action="https://codepen.io/pen/define"
        method="POST"
        target="_blank">
        <input
          type="hidden"
          name="data"
          :value="getFormData">
        <button
          type="submit"
          class="btn btn-export btn-shadow">
          Export to CodePen
        </button>
      </form>

    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    copied: false
  }),
  computed: {
    ...mapGetters(['gradientList', 'previewGradient', 'gradientStrings']),
    getFormData() {
      return JSON.stringify({
        title: 'Shapy Gradient 🤖',
        html: '<div class="gradient"></div>',
        css: `.gradient {
  height: 500px;
  width: 500px;
  background: ${this.gradientStrings};
}`
      })
    }
  },
  methods: {
    deleteGradient(id) {
      this.$store.dispatch('deleteGradient', id)
    },
    copyCode() {
      this.copied = true
      setTimeout(() => {
        this.copied = false
      }, 1500)
    }
  }
}
</script>

<style lang="sass" scoped>

  .gradient-list
    grid-column: 2 / -1
    grid-row: 2
    max-height: 100%
    overflow-y: auto
    padding: 0 1em 1em
    flex: 0 0 auto
    justify-content: flex-start
    list-style-type: none

    li
      line-height: 1.3

  .export-form
    display: inline

  .no-items
    color: $white
    font-style: italic
    padding: .5em 0

  .preview-string
    position: sticky
    top: 0
    padding: .5em 0
    background: $black
    border-bottom: 1px solid $grey

  .string-label
    display: block
    color: $white
    font-weight: 500
    flex-direction: column
    margin-top: .5em

  .gradient-item
    margin-top: .5em

  pre
    white-space: pre-wrap
    tab-size: 2
    padding: 0
    margin: 0
    line-height: 1

  code
    font-size: 1em
    color: $white
    padding: 0

  .btn-delete-item
    color: $white
    cursor: pointer
    padding: 0
    margin: 0
    min-width: 0
    background: 0
    border: 0
    font-size: .8em
    opacity: .7
    margin-right: 1em

  .copy, .export
    position: absolute
    bottom: 0
    right: 1rem

  .btn-export
    background: $red
    min-width: 130px


  .btn-copy
    background: $green
    color: $white
    min-width: 130px

  .fade-enter-active, .fade-leave-active
    transition: all .1s linear

  .fade-enter
    opacity: 0
    transform: translateY(-10px)

  .fade-leave-to
    opacity: 0
    transform: translateY(10px)

</style>
