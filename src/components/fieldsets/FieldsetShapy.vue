<template>
  <div class="fieldset fieldset-shapy">
    <!-- TITLE & DESCRIPTION -->
    <h1 class="legend title-legend">{{ title }}</h1 >
    <group-toggle
      @click.native="hidden = !hidden"
      :hidden="hidden"/>
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>
      <ul class="social-list">
        <li class="social-item">
          <a href="https://github.com/vicbergquist/shapy">
            <font-awesome-icon
              class="social-icon"
              :icon="['fab', 'github']"/>Contributions welcome!
          </a>
        </li>
        <li class="social-item">
          <font-awesome-icon
            class="social-icon"
            :icon="['fab', 'twitter']"/>
          Made by <a
            class="inline-link"
            href="https://github.com/vicbergquist/shapy"
            target="_blank"
            ref="noreferrer">@vicbergquist</a>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import GroupToggle from '@/components/GroupToggle'
export default {
  name: 'Shapy',
  components: {
    GroupToggle
  },
  data: () => ({
    hidden: false,
    title: 'Welcome to Shapy 🤖',
    desc:
      'Shapy is a gradient shape editor that helps you discover and explore the power of CSS gradients.',
    social: {
      twitter: 'https://twitter.com/vibergquist',
      github: 'https://github.com/vicbergquist/shapy'
    }
  })
}
</script>

<style lang="sass" scoped>

  .title-legend
    font-size: 1.5em

  .social-list
    list-style-type: none
    margin-top: .5em

  .social-item
    font-weight: 500
    display: flex
    align-items: center
    margin-right: 1em
    margin-top: .5em

  .social-icon
    font-size: 1.1em
    margin-right: .5em

  .inline-link
    margin: 0 .5em
</style>
