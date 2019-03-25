<template>
  <div class="panel" role="group">
    <slot />
    <!-- GRADIENT REPEAT STYLES -->
    <input-wrapper label="background repeat" name="background repeat">
      <radio-input
        v-for="radio in backgroundRepeat.types"
        :active="backgroundRepeat.active"
        v-model="backgroundRepeat.active"
        :radio="radio"
        :key="radio.index"
        group="background-repeat"
      />
    </input-wrapper>
  </div>
</template>

<script>
import InputWrapper from '@/components/inputs/InputWrapper'
import RadioInput from '@/components/inputs/RadioInput'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'general/getField',
  mutationType: 'general/updateField'
})
export default {
  name: 'Repeat',
  components: {
    InputWrapper,
    RadioInput
  },
  data: () => ({
    desc: 'Edit the background repeat style for your gradient.'
  }),
  computed: {
    ...mapFields(['backgroundRepeat'])
  }
}
</script>
