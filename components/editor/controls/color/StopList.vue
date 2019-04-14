<template>
  <ul class="stop-list">
    <li
      v-for="stop in stops"
      :key="stop.id"
      class="stop-item"
      :class="{ active: stop.id === activeStop.id }"
    >
      <div
        class="stop-info"
        :class="`stop-${stop.id}`"
        @mousedown="$emit('setActive', stop)"
      >
        <div class="stop-preview" :style="{ background: stop.color.hex }"></div>
        <div class="stop-string">
          {{ stop.color.hex }}
        </div>
        <div class="stop-value">{{ stop.pct }}%</div>
      </div>
      <div class="stop-actions">
        <button @click="moveUp(stop.id)">^</button>
        <button @click="moveDown(stop.id)">></button>
        <button @click="removeStop(stop.id)">x</button>
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
    activeStop: {
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
