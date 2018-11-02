<template>
  <div
    role="group"
    class="fieldset fieldset-comment">

    <!-- TITLE & DESCRIPTION -->
    <legend 
      class="legend" 
      @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle 
      @click.native="hidden = !hidden" 
      :hidden="hidden"/>
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>
      <!-- COMMENT -->
      <div class="input-wrapper">
        <input
          v-model="comment"
          type="text"
          id="input-comment">
        <label
          class="input-text-label"
          for="input-comment">A description or name of your shape.</label>
      </div>
    </template>
  </div>
</template>

<script>
import GroupToggle from '@/components/GroupToggle'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Comment',
  components: {
    GroupToggle
  },
  data: () => ({
    hidden: true,
    title: 'Comment ✏️',
    desc: 'Add a comment along with your shape for easier reference.'
  }),
  computed: {
    ...mapFields(['comment'])
  }
}
</script>

<style lang="sass" scoped>

  .fieldset-comment .input-wrapper
    grid-column: 1 / -1

    .input-text-label
      font-style: italic
      font-size: .9em

</style>
