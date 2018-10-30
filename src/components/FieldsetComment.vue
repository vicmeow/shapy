<template>
  <fieldset class="fieldset fieldset-comment">

    <!-- TITLE & DESCRIPTION -->
    <legend class="legend">{{ title }}</legend>
    <p class="desc">{{ desc }}</p>

    <!-- COMMENT -->
    <div class="input-wrapper input-text">
      <label for="input-comment">Shape title/description</label>
      <input 
        v-model="comment" 
        type="text" 
        id="input-comment">
    </div>
  </fieldset>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Comment',
  data: () => ({
    title: 'Comment',
    desc:
      'Add a comment to better distingush the various shapes from each other.'
  }),
  computed: {
    ...mapFields(['comment'])
  }
}
</script>

<style lang="sass" scoped>
  
</style>
