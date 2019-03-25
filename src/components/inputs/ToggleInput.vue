<template>
  <div class="toggle-wrapper">
    <input
      :name="name"
      :id="`${name}-toggle-switch`"
      :checked="defaultValue"
      class="toggle-input"
      type="checkbox"
      @change="$emit('change', $event.target.checked)"
    />
    <label :for="`${name}-toggle-switch`" class="label toggle-label">
      <div class="circle">
        <span v-text="defaultValue ? values[0] : values[1]" />
      </div>
      <!--  <span id="toggle-on" class="toggle-option" v-text="values[0]" />

      <span id="toggle-off" class="toggle-option" v-text="values[1]" /> -->
    </label>
  </div>
</template>

<script>
// :aria-label="`${name} in ${toggle ? 'percentage' : 'pixels'}`"
// :name="`${label}-unit`"

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
  }
}
</script>

<style lang="sass" scoped>

.toggle-wrapper
  position: relative

.toggle-wrapper input[type="checkbox"]
  display: none

.toggle-label
  position: relative
  display: flex
  justify-content: space-between
  align-items: center
  align-content: center
  border: 1px solid #333
  font-size: .85rem
  padding: 0 .5em
  border-radius: 2em
  width: 3.5rem
  height: 1.75rem

.toggle-option
  display: flex
  align-items: center
  height: 100%
  margin: 0 .1em

.circle
  position: absolute
  //background: #333
  left: 0
  height: 1.75rem
  width: 1.75rem
  border-radius: 2em
  z-index: 10
  transition: left .3s linear

.toggle-input:checked + .label > .circle
  left: 1.75rem
</style>
