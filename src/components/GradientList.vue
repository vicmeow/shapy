<template>
  <ul class="gradient-list">
    <li class="preview-string">
      <span class="string-label">Preview:</span>
      <span v-highlightjs="previewGradient"><code class="css" /></span>
    </li>
    <li
      class="no-items"
      v-if="gradientList.length < 1">You haven't added any gradients yet...</li>
    <li
      class="gradient-item"
      v-for="(gradient, index) in gradientList"
      :key="index">
      <div
        class="gradient-code"
        v-highlightjs="gradient.string">
        <code class="css" />
      </div>
      <div class="gradient-details">
        <button
          @click="editGradient(index, gradient.id)"
          class="btn-delete-item">
          Edit <font-awesome-icon
            aria-hidden="true"
            class="list-icon"
            :icon="['fas', 'pencil-alt']"/>
        </button>
        <button
          @click="deleteSingle(index, gradient.id)"
          class="btn-delete-item">
          Delete <font-awesome-icon
            aria-hidden="true"
            class="list-icon"
            :icon="['fas', 'trash-alt']"/>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['gradientList', 'previewGradient'])
  },
  methods: {
    deleteSingle(index, id) {
      this.$store.dispatch('deleteSingle', { index, id })
    },
    editGradient(index, id) {
      this.$store.dispatch('editGradient', { index, id })
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

  .gradient-details
    margin-bottom: .5em

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
    border-bottom: 1px solid $white

  .string-label
    display: block
    color: $white
    font-size: .9em
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

  .gradient-details
    display: flex

  .btn-delete-item
    display: flex
    align-items: center
    color: $white
    cursor: pointer
    padding: 0
    margin: 0
    min-width: 0
    background: 0
    border: 0
    font-size: .8em
    font-weight: 600
    margin-right: 1em
    &:hover
      color: $red

  .list-icon
    font-size: .8em
    margin-left: .5em

</style>
