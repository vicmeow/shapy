<template>
  <div
    role="group"
    class="fieldset fieldset-colors">

    <!-- TITLE & DESCRIPTION -->
    <legend
      class="legend"
      @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle
      @click.native="hidden = !hidden"
      :hidden="hidden"/>
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>
      <!-- CUSTOM COLOR STOPS -->
      <div class="color-stops">
        <div
          class="color-stop-wrapper"
          role="group"
          v-for="(stop, index) in colors"
          :key="stop.index">
          <color-wrapper
            v-model="stop[0]"
            :label="'Start at'"
            :what="stop[0]"
            :name="'color-stop-start'"/>
          <color-wrapper
            v-model="stop[1]"
            :label="'Stop at'"
            :what="stop[1]"
            :name="'color-stop-stop'"/>
          <div class="button-wrapper">
            <button
              class="icon-btn icon-add"
              @click="addStop">
              <font-awesome-icon
                class="btn-icon"
                :icon="['fas', 'plus-circle']"/>
              <div class="hover">Add</div>
            </button>
            <button
              class="icon-btn icon-remove"
              @click="removeStop(index)">
              <font-awesome-icon
                class="btn-icon"
                :icon="['fas', 'minus-circle']"/>
              <div class="hover">Remove</div>
            </button>
          </div>
        </div>
      </div>
      <!-- DEGREE IF LINEAR GRADIENT -->
      <input-wrapper
        v-if="gradient.type === 'linear-gradient'"
        class="degree-wrapper"
        v-model="gradient.degree"
        :label="'Degree'"
        :name="'gradient-degree'"
        :what="gradient.degree"
        :min="0"
        :max="360"/>
    </template>
  </div>
</template>

<script>
import GroupToggle from '@/components/GroupToggle'
import ColorWrapper from '@/components/ColorWrapper'
import InputWrapper from '@/components/InputWrapper'
import { mapMutations, mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Colors',
  components: {
    ColorWrapper,
    GroupToggle,
    InputWrapper
  },
  data: () => ({
    hidden: false,
    title: 'Color Stops 🌈',
    desc:
      'The colors of your gradient. You can add multiple color stops or remove them.'
  }),
  computed: {
    ...mapFields(['colors']),
    ...mapState(['colors', 'gradient'])
  },
  methods: {
    ...mapMutations(['addStop']),
    removeStop(remove) {
      this.$store.commit('removeStop', remove)
    }
  }
}
</script>

<style lang="sass">

  .color-stop-wrapper
    display: flex
    flex-wrap: wrap
    margin-bottom: .5rem

  .button-wrapper
    flex-basis: 100%
    text-align: center

  .icon-add
    display: none

  .color-stop-wrapper:last-child .button-wrapper .icon-add
    display: inline-block

  .icon-btn
    position: relative
    cursor: pointer
    font-size: 1rem
    text-transform: uppercase
    font-weight: 500
    background: 0
    border: 0
    padding: 0
    margin: 0 .5rem

    .hover
      position: absolute
      bottom: 0
      right: 0
      font-size: .85rem
      font-weight: 500
      margin-bottom: 2px
      opacity: 0
      margin-top: .5rem
      transition: all .3s linear

  .icon-btn:hover .hover
    opacity: 1
    transform: translateX(0px)

  .icon-add .hover
    left: -65px
    transform: translateX(5px)

  .icon-remove .hover
    right: -65px
    transform: translateX(-5px)

  .btn-icon
    font-size: 1.1em

  .icon-remove
    color: $black

  .icon-add
    color: $green
</style>
