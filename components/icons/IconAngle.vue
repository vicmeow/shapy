<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
  >
    <g fill="none" fill-rule="evenodd">
      <path
        fill="#353F4B"
        fill-rule="nonzero"
        d="M19.2700178,18.3214675 L19.2700178,14.5471138 C19.2700178,14.1937593 19.5596623,13.9073088 19.916957,13.9073088 C20.2742517,13.9073088 20.5638962,14.1937593 20.5638962,14.5471138 L20.5638962,19.6655545 C20.5638962,20.018909 20.2742517,20.3053595 19.916957,20.3053595 L14.7414432,20.3053595 C14.3841485,20.3053595 14.094504,20.018909 14.094504,19.6655545 C14.094504,19.3121999 14.3841485,19.0257494 14.7414432,19.0257494 L18.1569932,19.0257494 L0.747946074,1.39213614 C0.49833811,1.13930839 0.503233644,0.734235153 0.758880557,0.487379751 C1.01452747,0.240524348 1.42411747,0.245365897 1.67372544,0.498193652 L19.2700178,18.3214675 L19.2700178,18.3214675 Z"
        transform="translate(2 2)"
      />
      <g transform="translate(2 2)">
        <circle cx="9" cy="9" r="9" fill="#353F4B" />
        <circle cx="9" cy="9" r="7.714" :fill="active ? '#DF5984' : '#FFF'" />
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
