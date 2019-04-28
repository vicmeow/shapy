<template>
  <div class="toggle-wrapper">
    <input
      :id="`${name}-toggle-switch`"
      :name="name"
      :checked="defaultValue"
      class="toggle-input"
      type="checkbox"
      @change="$emit('input', $event.target.checked)"
    />
    <label :for="`${name}-toggle-switch`">{{ name }}</label>
  </div>
</template>

<script>
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

// .toggle-wrapper
//   position: relative

// .toggle-wrapper input[type="checkbox"]
//   display: none

// .toggle-label
//   position: relative
//   display: flex
//   justify-content: space-between
//   align-items: center
//   align-content: center
//   border: 1px solid #333
//   font-size: .85rem
//   padding: 0 .5em
//   border-radius: 2em
//   width: 3.5rem
//   height: 1.75rem

// .toggle-option
//   display: flex
//   align-items: center
//   height: 100%
//   margin: 0 .1em

// .circle
//   position: absolute
//   //background: #333
//   left: 0
//   height: 1.75rem
//   width: 1.75rem
//   border-radius: 2em
//   z-index: 10
//   transition: left .3s linear

// .toggle-input:checked + .label > .circle
//   left: 1.75rem
</style>
