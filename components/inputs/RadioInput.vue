<template>
  <div
    :class="{ 'conic-support': !conicSupport && radioValue === 'conic' }"
    class="radio-input"
  >
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
      >{{ label }}
    </label>
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

.radio-input
  display: flex
  text-align: center

.radio-angle-label::after
  content: '\00b0'

.conic-support
  text-decoration: line-through
</style>
