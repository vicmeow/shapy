<template>
  <div class="control repeat-control">
    <h3 class="heading">Repeat</h3>
    <input-wrapper label="background repeat" name="background repeat">
      <radio-input
        v-for="radio in backgroundRepeat.types"
        :key="radio.index"
        v-model="backgroundRepeat.active"
        :active="backgroundRepeat.active"
        :radio="radio"
        group="background-repeat"
      />
    </input-wrapper>
  </div>
</template>

<script>
import InputWrapper from '@/components/inputs/InputWrapper'
import RadioInput from '@/components/inputs/RadioInput'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    InputWrapper,
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
.type-control
  grid-column: 1/-1
</style>
