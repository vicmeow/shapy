<template>
  <div class="fieldset fieldset-shapy">
    <!-- TITLE & DESCRIPTION -->
    <h1 class="legend title-legend">{{ title }}</h1>
    <group-toggle :hidden="hidden" @click.native="hidden = !hidden" />
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>
      <ul class="social-list">
        <li class="social-item">
          <a href="https://github.com/vicbergquist/shapy">
            <font-awesome-icon
              :icon="['fab', 'github']"
              aria-hidden="true"
              class="social-icon"
            />Contributions welcome!
          </a>
        </li>
        <li class="social-item">
          <a
            ref="noreferrer"
            class="inline-link"
            href="https://twitter.com/vicbergquist/"
            target="_blank"
          >
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              aria-hidden="true"
              class="social-icon"
            />@vicbergquist</a
          >
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
  display: flex
  list-style-type: none
  align-items: center
  width: 100%
  flex-wrap: wrap

.social-item
  font-size: .93em
  font-weight: 500
  display: flex
  align-items: center
  margin-right: 1em
  margin-top: .5em

.social-icon
  font-size: 1em
  margin-right: .3em
</style>
