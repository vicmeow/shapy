<template>
  <div role="group" class="panel">
    <slot />
    <!-- COLOR STOPS -->
    <transition-group
      name="list-item"
      tag="div"
      mode="in-out"
      class="color-stops"
    >
      <div
        v-for="(color, index) in stops"
        :key="color.id"
        class="color-stop-wrapper"
        role="group"
      >
        <input-wrapper
          :name="`Color stop no. ${index + 1}, start position`"
          :field="color.start"
          v-model="color.start"
          label="Start"
        >
          <color-picker
            slot="color"
            :color="color.start.color"
            v-model="color.start.color"
          />
        </input-wrapper>
        <input-wrapper
          :name="`Color stop no. ${index + 1}, stop position`"
          :field="color.stop"
          v-model="color.stop"
          label="Stop"
        >
          <color-picker
            slot="color"
            :color="color.stop.color"
            v-model="color.stop.color"
          />
        </input-wrapper>
        <button @click="addStop(index + 1)">Add</button>
        <button @click="removeStop(color.id)">Remove</button>
      </div>
    </transition-group>
  </div>
</template>

<script>
import InputWrapper from '@/components/inputs/InputWrapper'
import ColorPicker from '@/components/inputs/ColorPicker'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'color/getField',
  mutationType: 'color/updateField'
})
export default {
  name: 'Colors',
  components: {
    InputWrapper,
    ColorPicker
  },
  data: () => ({
    hidden: false,
    title: 'Colors',
    desc:
      'The colors of your gradient. You can add multiple color stops or remove them.',
    id: 2,
    removeError: false
  }),
  computed: {
    ...mapFields(['stops'])
  },
  methods: {
    // TODO: add to color.js
    addStop(index) {
      const newStop = {
        id: this.id,
        start: {
          pct: 0,
          px: 0,
          type: 'hex',
          color: {
            hex: '#00978d',
            rgba: { a: 1, b: 141, g: 151, r: 0 },
            a: 1
          },
          defaultUnit: true
        },
        stop: {
          pct: 100,
          px: 100,
          type: 'hex',
          color: {
            hex: '#f3b6c9',
            rgba: { a: 1, b: 201, g: 182, r: 243 },
            a: 1
          },
          defaultUnit: true
        }
      }
      this.$store.dispatch('color/addStop', { index, newStop })
      this.id++
    },
    removeStop(stop) {
      if (this.stops.length > 1) this.$store.dispatch('color/removeStop', stop)
      else this.removeError = true
      setTimeout(() => {
        this.removeError = false
      }, 3000)
    }
  }
}
</script>

<style lang="sass">

// .color-stops
//   display: flex
//   overflow: scroll

// .color-stop-wrapper
//   display: flex
//   flex-direction: column
//   flex-shrink: 0
//   width: 100%
//   //max-width: 200px
//   //transition: all .3s linear
//   //width: 100%

// .button-wrapper
//   flex-basis: 100%
//   text-align: center

// .icon-btn
//   position: relative
//   cursor: pointer
//   font-size: 1rem
//   text-transform: uppercase
//   font-weight: 500
//   background: 0
//   border: 0
//   padding: 0
//   margin: 0 .5rem
//   transition: all .3s

//   .hover
//     position: absolute
//     bottom: 0
//     right: 0
//     font-size: .85rem
//     font-weight: 500
//     margin-bottom: 2px
//     opacity: 0
//     margin-top: .5rem
//     transition: all .3s linear

// .icon-btn:hover .hover
//   opacity: 1
//   transform: translateX(0px)

// .icon-add .hover
//   left: -65px
//   transform: translateX(5px)

// .icon-remove .hover
//   right: -65px
//   transform: translateX(-5px)

// .btn-icon
//   font-size: 1.1em

// .icon-remove
//   color: $black

// .icon-add
//   color: $green

// .list-item-enter,
// .list-item-leave-to
//   opacity: 0

// .list-item-leave-active
//   opacity: 0
//   position: absolute
//   bottom: -40px
//   right: 0

// .list-item-enter-to, .list-item-leave
//   opacity: 1

// .remove-error
//   font-size: .8em
//   animation: error .3s ease-in-out 1
//   margin-top: .5em

// @keyframes error
//   0%,100%
//     transform: translateX(0px)
//   25%
//     transform: translateX(10px)
//   50%
//     transform: translateX(-10px)
//   75%
//     transform: translateX(5px)
</style>
