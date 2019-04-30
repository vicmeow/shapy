<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
  >
    <defs>
      <rect id="repeatxactive-a" width="22" height="22" rx="3" />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <rect width="24" height="24" fill="#353F4B" rx="4" />
      <g transform="translate(1 1)">
        <mask id="repeatxactive-b" fill="#fff">
          <use xlink:href="#repeatxactive-a" />
        </mask>
        <use fill="#FFF" xlink:href="#repeatxactive-a" />
        <g mask="url(#repeatxactive-b)">
          <g transform="translate(6.636 6.636)">
            <circle cx="4.364" cy="4.364" r="4.364" fill="#353F4B" />
            <circle
              cx="4.364"
              cy="4.364"
              r="3.491"
              :fill="active ? '#DF5984' : '#FFF'"
            />
          </g>
        </g>
        <g mask="url(#repeatxactive-b)">
          <g transform="translate(17.545 6.636)">
            <circle cx="4.364" cy="4.364" r="4.364" fill="#353F4B" />
            <circle
              cx="4.364"
              cy="4.364"
              r="3.491"
              :fill="active ? '#DF5984' : '#FFF'"
            />
          </g>
        </g>
        <g mask="url(#repeatxactive-b)">
          <g transform="translate(-4.273 6.636)">
            <circle cx="4.364" cy="4.364" r="4.364" fill="#353F4B" />
            <circle
              cx="4.364"
              cy="4.364"
              r="3.491"
              :fill="active ? '#DF5984' : '#FFF'"
            />
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
