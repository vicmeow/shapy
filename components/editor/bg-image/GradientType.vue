<template>
  <div class="gradient-type">
    <input-wrapper label="gradient type" name="gradient type">
      <radio-input
        v-for="radio in type.types"
        :key="radio.index"
        v-model="type.active"
        :active="type.active"
        :radio="radio"
        group="gradient-type"
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
      type: 'backgroundImage.type'
    })
  }
}
</script>

<style lang="sass">
.type-control
  grid-column: 1/-1
</style>
