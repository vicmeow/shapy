<template>
  <span class="property-item" :class="{ 'property-active': isActive }">
    <div v-if="color" class="color-preview" :style="{ background: color }" />
    {{ value }}
  </span>
</template>

<script>
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
      const color = this.value.substring(0, this.value.indexOf(' '))
      if (color.match(checkColor)) {
        return color
      }
      return false
    }
  },
  watch: {
    value(before, after) {
      this.isActive = true
      // eslint-disable-next-line
      // console.log('changing')
    }
  }
}
</script>

<style lang="sass" scoped>

.color-preview
  display: inline-block
  height: 1rem
  width: 1rem
  border-radius: 50%

.property-active
  display: inline-block
  background: $darkpink
  color: $white
</style>
