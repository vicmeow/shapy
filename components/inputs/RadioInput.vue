<template>
  <div
    :class="{ 'conic-support': !conicSupport && radio === 'conic' }"
    class="radio-input"
  >
    <input
      :id="`radio-${radio}`"
      :disabled="!conicSupport && radio === 'conic'"
      :class="`radio-${radio} radio-input`"
      :checked="active === radio"
      :value="radio"
      :name="`${group}-radio-input`"
      type="radio"
      @change="$emit('input', $event.target.value)"
    />
    <label
      :for="`${group}-${radio}`"
      :class="`label radio-label radio-${group}-label`"
      >{{ radio === 'conic' ? 'conic*' : radio }}
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
    radio: {
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
  text-align: center
  margin: 0 1rem

.radio-input, .radio-label
  display: block

.radio-angle-label::after
  content: '\00b0'

.conic-support
  text-decoration: line-through
</style>
