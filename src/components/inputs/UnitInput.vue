<template>
  <span 
    class="unit-switch"
    @click="switchUnit">{{ unit }}</span>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      required: false,
      default: true
    },
    name: {
      type: String,
      required: true
    },
    unit: {
      type: String,
      required: true
    }
  },
  methods: {
    switchUnit() {
      if (this.toggle) {
        if (this.unit === '%') this.$emit('input', 'px')
        if (this.unit === 'px') this.$emit('input', '%')
      }
    }
  }
}
</script>

<style lang="sass" scoped>

  .unit-switch
    cursor: pointer

</style>
