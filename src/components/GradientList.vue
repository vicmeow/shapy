<template>
  <ul class="gradient-list">
    <li class="preview-string">
      <code>{{ previewGradient }}</code>
    </li>
    <li
      class="gradient-item"
      v-for="gradient in gradientList"
      :key="gradient.id">
      <span class="item-details">
        <span class="delete">
          <button
            @click="removeShape(gradient.id)"
            class="btn-delete-item">
            <font-awesome-icon :icon="['far','trash-alt']"/>
          </button>
        </span>
      </span>
      <pre v-highlightjs><code class="css">{{ gradient.string }}</code></pre>
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
    max-height: 250px
    overflow-y: scroll
    padding: 1em

    li
      display: flex
      line-height: 1.3
      margin-bottom: .5rem

  .item-details
    margin-bottom: 0
    margin-right: 1em
    font-weight: 500
    width: 1em

  pre
    white-space: pre-wrap

  .btn-delete-item
    cursor: pointer
    font-weight: bold
    color: $red
    padding: 0
    margin: 0
    min-width: 0
    background: 0
    border: 0
    font-size: 1em

  .preview-string
    //font-size: 1.2em
    flex-direction: column

  .list-heading
    display: block
    font-size: 1.2rem

  code
    display: block
    color: rgba(255, 255, 255, 0.8)

</style>
