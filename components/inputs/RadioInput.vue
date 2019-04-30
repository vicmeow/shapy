<template>
  <div class="radio-input-wrapper">
    <input
      :id="`${group}-${label}`"
      :class="`radio-${label} radio-input`"
      :checked="active === radioValue"
      :value="radioValue"
      :name="`${group}-radio-input`"
      type="radio"
      @change="$emit('input', $event.target.value)"
    />
    <label
      :for="`${group}-${label}`"
      :class="`label radio-label radio-${group}-label`"
    >
      <div class="radio-icon">
        <slot />
      </div>
      {{ label }}
    </label>
    <slot name="description" />
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: [String, Number],
      required: true
    },
    group: {
      type: String,
      required: true
    },
    label: {
      type: [String, Number],
      required: true
    },
    radioValue: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    conicSupport() {
      return CSS.supports(
        'background-image',
        'conic-gradient(#fff 72deg, #fff 0 234deg, #fff 0)'
      )
    }
  }
}
</script>

<style lang="sass" scoped>

.radio-input-wrapper
  position: relative
  min-width: 0
  margin-right: 1rem

.radio-input
  display: none

.radio-label
  display: flex
  align-items: center

.radio-icon
  margin-right: .5rem

.conic-support
  text-decoration: line-through
</style>
