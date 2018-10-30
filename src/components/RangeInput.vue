<template>
  <input
    @input="$emit('input', $event.target.value)"
    type="range"
    class="slider"
    :name="name"
    :id="name"
    :min="min"
    :max="max">
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    max: {
      type: Number,
      required: false,
      default: 100
    }
  }
}
</script>
