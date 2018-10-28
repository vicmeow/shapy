<template>
  <select 
    slot="select-unit"
    @change="$emit('change', $event.target.value)"
    :id="label">
    <option 
      v-for="option in options" 
      :key="option" 
      :value="option">{{ option }}</option>
  </select>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
      default: 'label'
    }
  },
  data: () => ({
    options: ['%', 'px']
  })
}
</script>

<style scoped>
</style>
