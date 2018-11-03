<template>
  <ul class="gradient-list">
    <li class="preview-string">
      <h2 class="list-heading">Preview:</h2>
      <code>{{ previewGradient }}</code>
    </li>
    <li><h2 class="list-heading">Added Shapes:</h2></li>
    <li
      class="gradient-item"
      v-for="(gradient, index) in gradientList"
      :key="gradient.id">
      <span class="item-details">
        <span class="number">
          {{ index + 1 }}.
        </span>
        <span class="delete">
          <button
            @click="removeShape(gradient.id)"
            class="btn-delete-item">
            <font-awesome-icon :icon="['far','trash-alt']"/>
          </button>
        </span>
      </span>
      <code>{{ gradient.string }}</code>
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
    width: 100%
    overflow-y: scroll
    list-style-type: none
    color: white
    margin: 0
    margin-top: 1em
    padding-right: 1em
    @media screen and (max-width: 768px)
      margin: 0
      padding: 0 1em 1em

    li
      display: flex
      line-height: 1.3
      margin-bottom: .5rem
  
  .gradient-item
    padding-left: 1em

  .item-details
    margin-right: 1em
    font-weight: 500
    width: 1em

  .delete
    display: none

  li:hover > .item-details > .number
    display: none

  li:hover > .item-details .delete
    display: block

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
    font-size: 1.2em
    flex-direction: column

  .list-heading
    display: block
    font-size: 1.2rem

  code
    display: block

</style>
