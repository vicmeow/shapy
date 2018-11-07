<template>
  <ul class="gradient-list">
    <li class="preview-string">
      <span class="string-label">Preview:</span>
      <span v-highlightjs="previewGradient"><code class="css"/></span>
      <span
        class="string-label">Added:</span>
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
        <code class="css"/>
      </div>
      <div class="gradient-details">
        <button
          @click="removeShape(gradient.id)"
          class="btn-delete-item">
          ^Delete this gradient?
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
    removeShape(id) {
      this.$store.commit('removeShape', id)
    }
  }
}
</script>

<style lang="sass" scoped>

  .gradient-list
    grid-column: 2 / -1
    grid-row: 2
    max-height: 100%
    overflow-y: scroll
    padding: 0 1em 1em
    flex: 0 0 auto
    justify-content: flex-start
    list-style-type: none

    li
      line-height: 1.3

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

  .gradient-item:hover > .gradient-details
    display: block

  .gradient-details
    display: none

  .btn-delete-item
    color: $white
    cursor: pointer
    padding: 0
    margin: 0
    min-width: 0
    background: 0
    border: 0
    font-size: .8em
    font-style: italic
    margin-right: 1em

</style>
