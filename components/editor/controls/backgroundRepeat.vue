<template>
  <div class="control repeat-control">
    <h2 class="heading">Repeat</h2>
    <control-info />
    <radio-input
      v-for="(radio, index) in backgroundRepeat.values"
      :key="index"
      v-model="backgroundRepeat.active"
      :active="backgroundRepeat.active"
      :radio-value="radio.value"
      :label="radio.value"
      group="background-repeat"
      class="option"
    >
      <component
        :is="`icon-${radio.value}`"
        :active="backgroundRepeat.active === radio.value"
      />
      <!-- <p slot="description" class="description">{{ radio.description }}</p> -->
    </radio-input>
  </div>
</template>

<script>
import IconRepeat from '@/components/icons/IconRepeat'
import IconNoRepeat from '@/components/icons/IconNoRepeat'
import IconRepeatX from '@/components/icons/IconRepeatX'
import IconRepeatY from '@/components/icons/IconRepeatY'
import IconSpace from '@/components/icons/IconSpace'
import IconRound from '@/components/icons/IconRound'
import RadioInput from '@/components/inputs/RadioInput'
import ControlInfo from './ControlInfo'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    RadioInput,
    IconNoRepeat,
    IconRepeat,
    IconRepeatX,
    IconRepeatY,
    IconSpace,
    IconRound,
    ControlInfo
  },
  computed: {
    ...mapFields({
      backgroundRepeat: 'backgroundRepeat'
    }),
    active() {
      return this.backgroundRepeat.values.find(
        key => key.value === this.backgroundRepeat.active
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.repeat-options
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  min-width: 0

.option
  flex-basis: 25%
</style>
