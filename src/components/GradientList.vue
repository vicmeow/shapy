<template>
  <ul class="gradient-list">
    <li class="preview-string">
      <span class="string-label">Preview:</span>
      <span v-highlightjs="previewGradient"><code class="css"/></span>
    </li>
    <li v-if="gradientList.length < 1" class="no-items">
      You haven't added any gradients yet...
    </li>
    <li
      v-for="(gradient, index) in gradientList"
      :key="index"
      class="gradient-item"
    >
      <div v-highlightjs="gradient.string" class="gradient-code">
        <code class="css" />
      </div>
      <div class="gradient-details">
        <button
          class="btn-delete-item"
          @click="editGradient(index, gradient.id)"
        >
          Edit
          <font-awesome-icon
            :icon="['fas', 'pencil-alt']"
            aria-hidden="true"
            class="list-icon"
          />
        </button>
        <button
          class="btn-delete-item"
          @click="deleteSingle(index, gradient.id)"
        >
          Delete
          <font-awesome-icon
            :icon="['fas', 'trash-alt']"
            aria-hidden="true"
            class="list-icon"
          />
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
