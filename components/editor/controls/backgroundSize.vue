<template>
  <div class="control size-control">
    <h3 class="heading">Size</h3>
    <!-- BACKGROUND SIZE -->
    <number-input v-model="width" name="width" :field="width" />
    <number-input v-model="height" name="height" :field="height" />
  </div>
</template>

<script>
import NumberInput from '@/components/inputs/NumberInput'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Size',
  components: {
    NumberInput
  },
  data: () => ({
    desc: 'The position of your gradient on the canvas.'
  }),
  computed: {
    ...mapFields({
      width: 'backgroundSize.width',
      height: 'backgroundSize.height'
    })
  }
}
</script>
