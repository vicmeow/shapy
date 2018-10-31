<template>
  <div class="input-wrapper">
    <size-input
      :label="label"
      v-model.number="what.size"
      :name="name"
      :unit="what.unit">
      <unit-input
        slot="unit"
        v-model="what.unit"
        :unit="what.unit"
        :name="name + '-size-unit'"/>
    </size-input>
    <range-input
      v-model.number="what.size"
      :name="name + '-axis'"
      :min="min"
      :max="max"/>
  </div>
</template>

<script>
import RangeInput from '@/components/RangeInput'
import SizeInput from '@/components/SizeInput'
import UnitInput from '@/components/UnitInput'

export default {
  components: {
    UnitInput,
    SizeInput,
    RangeInput
  },
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    what: {
      type: Object,
      required: true,
      default() {
        return {
          size: 100,
          unit: '%'
        }
      }
    },
    min: {
      type: Number,
      required: false,
      default: -100
    },
    max: {
      type: Number,
      required: false,
      default: 200
    }
  }
}
</script>

<style lang="sass">
  .input-wrapper
    display: flex
    flex-direction: column
    text-align: center
    flex-basis: 50%
</style>
