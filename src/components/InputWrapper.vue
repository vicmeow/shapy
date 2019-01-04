<template>
  <div class="input-wrapper">
    <template v-if="what.size || what.unit">
      <size-input
        :label="label"
        v-model.number="what.size"
        :name="name"
        :unit="what.unit"
        :min="min"
        :max="max"
      >
        <unit-input
          slot="unit"
          v-model="what.unit"
          :unit="what.unit"
          :name="name + '-size-unit'"
        />
      </size-input>
      <range-input
        v-model.number="what.size"
        :name="name + '-range'"
        :value="what.size"
        :min="min"
        :max="max"
      />
    </template>
  </div>
</template>

<script>
import RangeInput from '@/components/inputs/RangeInput'
import SizeInput from '@/components/inputs/SizeInput'
import UnitInput from '@/components/inputs/UnitInput'
import { mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapGetters({
      canvas: 'canvas/canvas'
    })
  }
}
</script>

<style lang="sass">

input
  font-family: $font
  font-size: 18px
  color: $black
  border: 0
  padding: 0
  &:focus
    outline: 0

.input-wrapper
  margin-top: .3em
  margin-bottom: .5em
  flex-basis: 50%

.input-wrapper:nth-child(odd)
  padding-left: .75em

.input-wrapper:nth-child(even)
  padding-right: .75em

@media screen and (max-width: 768px)
  .input-wrapper
    flex-basis: 100%
    padding: 0

  .input-wrapper:nth-child(even), .input-wrapper:nth-child(odd)
    padding: 0

  .size-wrapper
    margin-top: .5em
</style>
