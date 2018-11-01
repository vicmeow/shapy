<template>
  <div id="app">
    <generator/>
  </div>
</template>

<script>
import Generator from './components/Generator'

export default {
  name: 'App',
  components: {
    Generator
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

  #app
    min-height: 100vh
</style>
