<template>
  <ul class="stop-list">
    <li
      v-for="(stop, index) in stops"
      :key="index"
      class="stop-item"
      :class="{ active: stop.id === active.id }"
    >
      <div class="stop-info" @mousedown="setActive(stop)">
        <div class="stop-preview" :style="{ background: stop.color.hex }"></div>
        <span class="stop-string">
          {{ stop.color.hex }}
        </span>
        <span class="stop-value">
          {{ stop.pct }}
        </span>
      </div>
      <div class="stop-actions">
        <button @click="moveUp(index)">^</button>
        <button @click="moveDown(index)">></button>
        <button @click="removeStop(index)">x</button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    stops: {
      type: Array,
      required: true,
      default: () => []
    },
    active: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  methods: {
    ...mapActions({
      removeStop: 'colors/removeStop',
      moveUp: 'colors/moveUp',
      moveDown: 'colors/moveDown'
    })
  }
}
</script>
