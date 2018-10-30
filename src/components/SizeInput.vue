<template>
  <div class="number-wrapper">
    <label
      :for="name + '-id'"
      class="label">{{ label }}</label>
    <input
      @input="$emit('input', $event.target.value)"
      class="label-number"
      :value="value"
      type="number"
      :name="name"
      :id="name + '-id'"
      :min="min"
      :max="max">{{ unit }}
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    unit: {
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
