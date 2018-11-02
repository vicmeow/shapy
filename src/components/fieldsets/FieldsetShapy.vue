<template>
  <div class="fieldset fieldset-shapy">
    <!-- TITLE & DESCRIPTION -->
    <legend class="legend title-legend">{{ title }}</legend>
    <group-toggle 
      @click.native="hidden = !hidden" 
      :hidden="hidden"/>
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>
      <!-- TODO: Add more info (GitHub/Twitter) -->
    </template>
  </div>
</template>

<script>
import GroupToggle from '@/components/GroupToggle'
export default {
  name: 'Box',
  components: {
    GroupToggle
  },
  data: () => ({
    hidden: false,
    title: 'Welcome to Shapy 🤖',
    desc:
      'Shapy is a gradient shape editor made for you to explore the power of CSS gradients.'
  })
}
</script>

<style lang="sass" scoped>

  .fieldset-shapy
    grid-template-columns: 2fr .5fr
    z-index: 3

  .title-legend
    font-size: 1.5em
</style>
