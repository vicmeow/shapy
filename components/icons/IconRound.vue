<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g fill="none" fill-rule="evenodd">
      <rect width="24" height="24" fill="#353F4B" rx="4" />
      <g transform="translate(1 1)">
        <mask id="roundactive-b" fill="#fff">
          <rect id="roundactive-a" width="22" height="22" rx="3" />
        </mask>
        <use fill="#FFF" xlink:href="#roundactive-a" />
        <g mask="url(#roundactive-b)">
          <g transform="translate(15 8)">
            <circle cx="3" cy="3" r="3" fill="#353F4B" />
            <circle
              cx="3"
              cy="3"
              r="2.25"
              :fill="active ? '#DF5984' : '#FFF'"
            />
          </g>
        </g>
        <g mask="url(#roundactive-b)">
          <g transform="translate(1 8)">
            <circle cx="3" cy="3" r="3" fill="#353F4B" />
            <circle
              cx="3"
              cy="3"
              r="2.25"
              :fill="active ? '#DF5984' : '#FFF'"
            />
          </g>
        </g>
        <g mask="url(#roundactive-b)">
          <g transform="translate(8 8)">
            <circle cx="3" cy="3" r="3" fill="#353F4B" />
            <circle
              cx="3"
              cy="3"
              r="2.25"
              :fill="active ? '#DF5984' : '#FFF'"
            />
          </g>
        </g>
        <g mask="url(#roundactive-b)">
          <g transform="translate(8 1)">
            <circle cx="3" cy="3" r="3" fill="#353F4B" />
            <circle
              cx="3"
              cy="3"
              r="2.25"
              :fill="active ? '#DF5984' : '#FFF'"
            />
          </g>
        </g>
        <g mask="url(#roundactive-b)">
          <g transform="translate(15 1)">
            <circle cx="3" cy="3" r="3" fill="#353F4B" />
            <circle
              cx="3"
              cy="3"
              r="2.25"
              :fill="active ? '#DF5984' : '#FFF'"
            />
          </g>
        </g>
        <g mask="url(#roundactive-b)">
          <g transform="translate(15 15)">
            <circle cx="3" cy="3" r="3" fill="#353F4B" />
            <circle
              cx="3"
              cy="3"
              r="2.25"
              :fill="active ? '#DF5984' : '#FFF'"
            />
          </g>
        </g>
        <g mask="url(#roundactive-b)">
          <g transform="translate(8 15)">
            <circle cx="3" cy="3" r="3" fill="#353F4B" />
            <circle
              cx="3"
              cy="3"
              r="2.25"
              :fill="active ? '#DF5984' : '#FFF'"
            />
          </g>
        </g>
        <g mask="url(#roundactive-b)">
          <g transform="translate(1 15)">
            <circle cx="3" cy="3" r="3" fill="#353F4B" />
            <circle
              cx="3"
              cy="3"
              r="2.25"
              :fill="active ? '#DF5984' : '#FFF'"
            />
          </g>
        </g>
        <g mask="url(#roundactive-b)">
          <g transform="translate(1 1)">
            <circle cx="3" cy="3" r="3" fill="#353F4B" />
            <circle
              cx="3"
              cy="3"
              r="2.25"
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
