<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
  >
    <g fill="none" transform="translate(.38 .073)">
      <path
        fill="#353F4B"
        d="M8.61967948,0 L17.239359,13.4649637 L16.9709232,13.7834397 C15.0388689,16.0756567 11.9402471,17.4273909 8.61967948,17.4273909 C5.29911188,17.4273909 2.20049006,16.0756567 0.268435737,13.7834397 L7.10542736e-15,13.4649637 L8.61967948,0 Z"
      />
      <path
        :fill="active ? '#DF5984' : '#FFF'"
        d="M8.61967948,1.85478173 L1.24291402,13.378166 C2.99112762,15.2935067 5.70502509,16.4273909 8.61967948,16.4273909 C11.5343339,16.4273909 14.2482313,15.2935067 15.9964449,13.378166 L8.61967948,1.85478173 Z"
      />
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
