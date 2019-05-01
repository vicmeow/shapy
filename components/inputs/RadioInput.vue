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
        <component
          :is="`icon-${label}`"
          :active="active === label"
          aria-hidden="true"
        />
      </div>
      <span class="label-text">{{ label }}</span>
    </label>
  </div>
</template>

<script>
const IconLinear = () => import('@/components/icons/IconLinear')
const IconRadial = () => import('@/components/icons/IconRadial')
const IconConic = () => import('@/components/icons/IconConic')
const IconRepeat = () => import('@/components/icons/IconRepeat')
const IconNoRepeat = () => import('@/components/icons/IconNoRepeat')
const IconRepeatX = () => import('@/components/icons/IconRepeatX')
const IconRepeatY = () => import('@/components/icons/IconRepeatY')
const IconSpace = () => import('@/components/icons/IconSpace')
const IconRound = () => import('@/components/icons/IconRound')
export default {
  components: {
    IconLinear,
    IconRadial,
    IconConic,
    IconNoRepeat,
    IconRepeat,
    IconRepeatX,
    IconRepeatY,
    IconSpace,
    IconRound
  },
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
  opacity: 0
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  height: 100%
  width: 100%

.radio-label
  display: flex
  align-items: center

.radio-input:focus + .radio-label .label-text
  border-bottom: 1px solid $black

.radio-icon
  margin-right: .5rem

.conic-support
  text-decoration: line-through
</style>
