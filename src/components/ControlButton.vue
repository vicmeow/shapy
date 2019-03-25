<template>
  <button class="control" @click="$emit('updatePanel', control)">
    <div class="icon"></div>
    <div class="label">{{ control }}</div>
  </button>
</template>

<script>
export default {
  props: {
    control: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.control
  font-size: 1rem
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 4em
  margin: .5em
  background: 0
  border: 0

.icon
  display: block
  border: 1px solid #333
  height: 2rem
  width: 2rem
  border-radius: 50%
  margin-bottom: .3em

.label
  text-transform: uppercase
  letter-spacing: .1em
  font-size: .8em
</style>
