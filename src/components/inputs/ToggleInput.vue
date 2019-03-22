<template>
  <div>
    <span id="toggle-on" class="toggle" v-text="values[0]" />
    <input
      :checked="defaultValue"
      :class="`toggle-input`"
      class="toggle"
      type="checkbox"
      @change="$emit('change', $event.target.checked)"
    />
    <span id="toggle-off" class="toggle" v-text="values[1]" />
  </div>
</template>

<script>
// :aria-label="`${name} in ${toggle ? 'percentage' : 'pixels'}`"
// :name="`${label}-unit`"

export default {
  props: {
    values: {
      type: Array,
      required: false,
      default: () => {
        return ['%', 'px']
      }
    },
    defaultValue: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>
