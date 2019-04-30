<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
  >
    <g fill="none" fill-rule="evenodd">
      <rect width="17.769" height="17.769" fill="#353F4B" rx="2" />
      <rect
        width="15.231"
        height="15.231"
        x="1.269"
        y="1.269"
        fill="#FFF"
        rx="1"
      />
      <rect
        width="10.154"
        height="15.231"
        x="1.269"
        y="1.269"
        :fill="active ? '#DF5984' : '#FFF'"
        rx="1"
      />
      <rect width="1.269" height="15.231" x="10.154" y="1.269" fill="#353F4B" />
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
