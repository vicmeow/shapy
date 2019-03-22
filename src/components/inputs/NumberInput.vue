<template>
  <div class="number-input">
    <input
      :value="value"
      :max="max"
      class="number"
      type="number"
      @input="$emit('input', $event.target.value)"
    />
    <toggle-input @change="$emit('change', $event)" />
    <input
      :name="`input`"
      :class="`range-input`"
      :value="value"
      :max="max"
      class="range"
      type="range"
      @input="$emit('input', $event.target.value)"
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
    }
  }
}
</script>
