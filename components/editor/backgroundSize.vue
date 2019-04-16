<template>
  <div class="bg-size">
    <slot />

    <!-- BACKGROUND SIZE -->
    <input-wrapper
      v-model="width"
      :label="'width'"
      :name="'bg-size-width'"
      :field="width"
    />

    <input-wrapper
      v-model="height"
      :label="'height'"
      :name="'bg-size-height'"
      :field="height"
    />
  </div>
</template>

<script>
import InputWrapper from '@/components/inputs/InputWrapper'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Position',
  components: {
    InputWrapper
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
