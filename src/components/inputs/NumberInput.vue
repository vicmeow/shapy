<template>
  <div class="number-input">
    <input
      :value="value"
      :min="min"
      :max="max"
      class="number"
      type="number"
      @input="$emit('input', parseInt($event.target.value))"
    />
    <toggle-input @change="$emit('change', $event)" />
    <input
      :name="`input`"
      :class="`range-input`"
      :value="value"
      :min="min"
      :max="max"
      class="range"
      type="range"
      @input="$emit('input', parseInt($event.target.value))"
    />
  </div>
</template>

<script>
import ToggleInput from '@/components/inputs/ToggleInput'
export default {
  components: {
    ToggleInput
  },
  props: {
    toggle: {
      type: Array,
      required: false,
      default: () => {}
    },
    value: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      required: false,
      default: 0
    }
  }
}
</script>
