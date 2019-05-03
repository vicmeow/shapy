<template>
  <div class="toggle-wrapper">
    <input
      :id="`${name}-toggle-switch`"
      :name="name"
      :checked="defaultValue"
      :class="`toggle-input ${name}-toggle-input`"
      type="checkbox"
      @change="handleToggle($event.target.checked)"
    />
    <label
      :class="`label toggle-label ${name}-toggle-label`"
      :for="`${name}-toggle-switch`"
    >
      <div
        class="unit-toggle unit-toggle-first"
        :class="{ 'active-unit': checked }"
      >
        {{ values[0] }}
      </div>
      <span>/</span>
      <div
        class="unit-toggle unit-toggle-second"
        :class="{ 'active-unit': !checked }"
      >
        {{ values[1] }}
      </div>
    </label>
  </div>
</template>

<script>
// TODO: fix toggle style for other types (than unit %/px) of toggles
export default {
  props: {
    name: {
      type: String,
      required: true
    },
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
  },
  data() {
    return {
      checked: true
    }
  },
  methods: {
    handleToggle(checked) {
      this.checked = checked
      this.$emit('input', checked)
    }
  }
}
</script>

<style lang="sass" scoped>

.toggle-input
  display: none

.toggle-label
  position: relative
  user-select: none
  display: flex
  justify-content: center
  color: $black
  border-radius: 1rem
  padding: 0 .25rem

.unit-toggle
  font-size: .8rem
  margin: 0 .25rem
  color: $darkgrey

.unit-toggle-first
  // padding-bottom: 5px

.number-wrapper:focus-within .label .active-unit
  color: $darkpink

.active-unit
  font-weight: bold
  color: $black
</style>
