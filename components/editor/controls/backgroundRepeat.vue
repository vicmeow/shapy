<template>
  <div class="control repeat-control">
    <h3 class="heading">Repeat</h3>
    <radio-input
      v-for="value in backgroundRepeat.values"
      :key="value.index"
      v-model="backgroundRepeat.active"
      :active="backgroundRepeat.active"
      :radio-value="value"
      :label="value"
      group="background-repeat"
    />
  </div>
</template>

<script>
import RadioInput from '@/components/inputs/RadioInput'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    RadioInput
  },
  computed: {
    ...mapFields({
      backgroundRepeat: 'backgroundRepeat'
    })
  }
}
</script>

<style lang="sass">
.repeat-control
  display: flex
</style>
