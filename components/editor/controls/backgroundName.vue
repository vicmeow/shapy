<template>
  <div class="control name-control">
    <h2 id="gradient-name" class="heading">Gradient name</h2>
    <control-info />
    <input
      v-model="comment"
      class="input name-input"
      aria-labelledby="gradient-name"
      placeholder="Name your gradient"
      type="text"
      name="gradient name"
    />
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import ControlInfo from './ControlInfo'
export default {
  components: {
    ControlInfo
  },
  computed: {
    ...mapFields({
      comment: 'backgroundImage.comment'
    })
  }
}
</script>

<style lang="sass" scoped>
.name-control
  grid-column: 1/-1
</style>
