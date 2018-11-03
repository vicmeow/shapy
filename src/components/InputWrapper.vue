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
      v-if="colorInput"
      v-model="what.color"
      :label="label"
      :name="name"
      :color="what.color"/>
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
    colorInput: {
      type: Boolean,
      required: false,
      default: false
    },
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

<style lang="sass">

  input
    font-family: $font
    font-size: 18px
    color: $black
    border: 0
    padding: 0
    &:focus
      font-style: italic
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
