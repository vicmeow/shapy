<template>
  <div id="app"><generator /></div>
</template>

<script>
import Generator from './components/Generator'

export default {
  name: 'App',
  components: {
    Generator
  },
  metaInfo: {
    title: 'Shapy',
    titleTemplate: '%s | Gradient Generator',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        name: 'description',
        content:
          'A gradient generator that lets you explore the power of CSS gradients. Create shapes and CSS images using background gradients only.'
      }
    ]
  }
}
</script>

<style lang="sass">

*, * + *
  padding: 0
  margin: 0
  box-sizing: border-box

body
  font-family: $font
  font-size: 18px
  color: $black
  background: $black
  font-smooth: subpixel-antialiased
  min-height: 100vh

#app
  min-height: 100vh

a, a:focus
  text-decoration: none
  color: $black

a:visited
  border-bottom: 1px solid $green

a:hover
  color: $green
</style>
