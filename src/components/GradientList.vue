<template>
  <ul class="gradient-list">
    <li class="preview-string"><code>{{ previewGradient }}</code></li>
    <li
      v-for="gradient in gradientList"
      :key="gradient.index">
      <button
        @click="removeShape(gradient.id)"
        class="btn btn-delete-item">X</button>
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

  .btn-delete-item
    height: 1em
    width: 1em
    background: $red
    border-radius: 50%
    margin: 0
    margin-right: .3em
    padding: 0
    min-width: 0

    .preview-string
      background: $grey

</style>
