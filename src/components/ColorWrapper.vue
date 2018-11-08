<template>
  <div class="color-wrapper">
    <size-input
      :label="label"
      v-model.number="what.size"
      :name="name"
      :unit="what.unit">
      <unit-input
        v-model="what.unit"
        :unit="what.unit"
        :name="name + '-size-unit'"/>
    </size-input>
    <range-input
      v-model.number="what.size"
      :name="name + '-range'"
      :value="what.size"/>
    <text-input
      v-model="what.color"
      :label="label"
      :name="name"
      :color="what.color"/>
  </div>
</template>

<script>
import RangeInput from '@/components/inputs/RangeInput'
import SizeInput from '@/components/inputs/SizeInput'
import TextInput from '@/components/inputs/TextInput'
import UnitInput from '@/components/inputs/UnitInput'
export default {
  components: {
    SizeInput,
    RangeInput,
    TextInput,
    UnitInput
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
      required: false,
      default() {
        return {
          size: 100,
          color: 'red',
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

  .color-wrapper
    margin-top: .3em
    margin-bottom: .5em
    flex-basis: 50%

  .color-wrapper:nth-child(even)
    padding-left: .75em

  .color-wrapper:nth-child(odd)
    padding-right: .75em

  .input-wrapper.degree-wrapper
    padding-right: 0
    padding-left: 0

  @media screen and (max-width: 768px)
    .color-wrapper
      flex-basis: 100%
      padding: 0

    .color-wrapper:nth-child(even), .color-wrapper:nth-child(odd)
      padding: 0

    .size-wrapper
      margin-top: .5em

</style>
