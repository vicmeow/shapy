<template>
  <div class="control size-control">
    <h3 class="heading">Size</h3>
    <control-info />
    <!-- BACKGROUND SIZE -->
    <number-input v-model="width" name="width" :field="width" />
    <number-input v-model="height" name="height" :field="height" />
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import ControlInfo from './ControlInfo'
import NumberInput from '@/components/editor/inputs/NumberInput'
export default {
  name: 'Size',
  components: {
    NumberInput,
    ControlInfo
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
