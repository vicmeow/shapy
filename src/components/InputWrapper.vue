<template>
  <div class="range-wrapper">
    <size-input
      :label="label"
      v-model.number="what.size"
      :name="name"
      :unit="what.unit"/>
    <range-input
      v-model.number="what.size"
      :name="name + '-axis'"
      :min="min"
      :max="max"/>
    <unit-input
      v-model="what.unit"
      :name="name + '-size-unit'"/>
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
