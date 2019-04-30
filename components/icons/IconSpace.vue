<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="width"
    viewBox="0 0 24 24"
  >
    <defs>
      <rect id="spaceactive-a" width="22" height="22" rx="3" />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <rect width="24" height="24" fill="#353F4B" rx="4" />
      <g transform="translate(1 1)">
        <mask id="spaceactive-b" fill="#fff">
          <use xlink:href="#spaceactive-a" />
        </mask>
        <use fill="#FFF" xlink:href="#spaceactive-a" />
        <g mask="url(#spaceactive-b)">
          <g transform="translate(2 2)">
            <circle cx="4" cy="4" r="4" fill="#353F4B" />
            <circle cx="4" cy="4" r="3.2" :fill="active ? '#DF5984' : '#FFF'" />
          </g>
        </g>
        <g mask="url(#spaceactive-b)">
          <g transform="translate(12 12)">
            <circle cx="4" cy="4" r="4" fill="#353F4B" />
            <circle cx="4" cy="4" r="3.2" :fill="active ? '#DF5984' : '#FFF'" />
          </g>
        </g>
        <g mask="url(#spaceactive-b)">
          <g transform="translate(12 2)">
            <circle cx="4" cy="4" r="4" fill="#353F4B" />
            <circle cx="4" cy="4" r="3.2" :fill="active ? '#DF5984' : '#FFF'" />
          </g>
        </g>
        <g mask="url(#spaceactive-b)">
          <g transform="translate(2 12)">
            <circle cx="4" cy="4" r="4" fill="#353F4B" />
            <circle cx="4" cy="4" r="3.2" :fill="active ? '#DF5984' : '#FFF'" />
          </g>
        </g>
      </g>
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
      default: 36
    },
    height: {
      type: [Number, String],
      default: 36
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
