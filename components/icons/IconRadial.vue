<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
  >
    <g fill="none" fill-rule="evenodd">
      <circle cx="9" cy="9" r="9" fill="#353F4B" />
      <circle cx="9" cy="9" r="7.714" fill="#FFF" />
      <circle cx="9" cy="9" r="6.429" fill="#353F4B" />
      <circle cx="9" cy="9" r="5.143" :fill="active ? '#DF5984' : '#FFF'" />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
