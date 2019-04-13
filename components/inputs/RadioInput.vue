<template>
  <span
    :class="{ 'conic-support': !conicSupport && radio === 'conic' }"
    class="radio-input"
  >
    <input
      :id="`radio-${radio}`"
      :disabled="!conicSupport && radio === 'conic'"
      :class="`radio-${radio} radio-single`"
      :checked="active === radio"
      :value="radio"
      :name="`${group}-radio-input`"
      type="radio"
      @change="$emit('input', $event.target.value)"
    />
    <label
      :for="`${group}-${radio}`"
      :class="`label radio-single-label radio-${group}-label`"
      >{{ radio === 'conic' ? 'conic*' : radio }}
    </label>
  </span>
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
        'conic-gradient(#d44 72deg, #fc3 0 234deg, #ac0 0)'
      )
    }
  }
}
</script>

<style lang="sass" scoped>

.radio-single-label
  margin-left: .5em
  margin-right: 1.5em

.radio-angle-label::after
  content: '\00b0'

.conic-support
  text-decoration: line-through
</style>
