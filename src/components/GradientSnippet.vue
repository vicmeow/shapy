<template>
  <ul class="gradient-list">
    <li>Current shape: <code>{{ previewGradient }}</code></li>
    <li>Added shaapes:</li>
    <li
      v-for="gradient in gradientList"
      :key="gradient.index"><code>{{ gradient }}</code></li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['gradientList', 'previewGradient'])
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

    li
      display: inline-block
      line-height: 1.3
      margin-bottom: .5rem
      &:hover:not(:first-child)
        outline: 1px dashed white

</style>
