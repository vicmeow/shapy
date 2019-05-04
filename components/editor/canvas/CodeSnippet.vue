<template>
  <span class="code-snippet" :class="{ 'active-snippet': isActive }">
    <div v-if="color" class="color-preview" :style="{ background: color }" />
    {{ value }}
  </span>
</template>

<script>
import debounce from 'lodash.debounce'
export default {
  props: {
    value: {
      type: String,
      required: true,
      default: 'string'
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    color() {
      // Regex to match valid CSS colors
      const checkColor = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))$/gi
      if (this.value.match(checkColor)) {
        return this.value
      }
      return false
    }
  },
  watch: {
    value() {
      this.isActive = true
      // eslint-disable-next-line
      console.log('start hightlight')
      this.resetActive()
    }
  },
  methods: {
    resetActive: debounce(function() {
      this.isActive = false
    }, 500)
  }
}
</script>

<style lang="sass" scoped>

.code-snippet
  display: inline-block
  min-width: 1vh

.color-preview
  display: inline-block
  height: .8rem
  width: .8rem
  border-radius: 50%
  margin-left: .2rem
  margin-right: -.2rem

.active-snippet
  // display: inline-block
  text-decoration: underline
  font-weight: bold
</style>
