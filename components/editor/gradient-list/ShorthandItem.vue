<template>
  <div class="gradient-item">
    <button @click="editGradient(item.id)">
      edit
    </button>
    <div
      :style="{
        'background-image': item.image,
        height: '1.5rem',
        width: '1.5rem'
      }"
    ></div>
    <span>{{ item.background }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  methods: {
    editGradient(id) {
      this.$store.dispatch('gradients/editGradient', id)
    }
  }
}
</script>
