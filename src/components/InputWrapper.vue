<template>
  <div class="input-wrapper">
    <template v-if="what.size || what.unit">
      <size-input
        :label="label"
        v-model.number="what.size"
        :name="name"
        :unit="what.unit">
        <unit-input
          :toggle="toggle"
          v-model="what.unit"
          :unit="what.unit"
          :name="name + '-size-unit'"/>
      </size-input>
      <range-input
        v-model.number="what.size"
        :name="name + '-range'"
        :value="what.size"
        :min="min"
        :max="max"/>
    </template>
    <text-input
      v-if="what.color"
      v-model="what.color"
      :label="label"
      :name="name"
      :color="what.color"
      :color-value="what.color"/>
  </div>
</template>

<script>
import RangeInput from '@/components/inputs/RangeInput'
import SizeInput from '@/components/inputs/SizeInput'
import UnitInput from '@/components/inputs/UnitInput'
import TextInput from '@/components/inputs/TextInput'
import { mapState } from 'vuex'
export default {
  components: {
    UnitInput,
    SizeInput,
    RangeInput,
    TextInput
  },
  computed: {
    ...mapState({
      canvas: 'canvas'
    })
  },
  props: {
    toggle: {
      type: Boolean,
      required: false,
      default: true
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: Boolean,
      required: false,
      default: false
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    max: {
      type: Number,
      required: false,
      default: 100
    },
    what: {
      type: Object | Boolean,
      required: false,
      default() {
        return {
          size: 100,
          unit: '%'
        }
      }
    }
  }
}
</script>
