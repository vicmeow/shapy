<template>
  <div role="group" class="fieldset fieldset-colors">
    <!-- TITLE & DESCRIPTION -->
    <legend class="legend" @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle :hidden="hidden" @click.native="hidden = !hidden" />
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>
      <!-- CUSTOM COLOR STOPS -->
      <transition-group
        name="list-item"
        tag="div"
        mode="in-out"
        class="color-stops"
      >
        <div
          v-for="(stop, index) in colors"
          :key="stop.id"
          class="color-stop-wrapper"
          role="group"
        >
          <input-wrapper
            :name="`Color stop no. ${index + 1}, start position`"
            :field="stop.start"
            :label="'Start'"
            v-model="stop.start"
          />
          <input-wrapper
            :name="`Color stop no. ${index + 1}, stop position`"
            :field="stop.stop"
            :label="'Stop'"
            v-model="stop.stop"
          />
          <div :key="'buttons'" class="button-wrapper">
            <button
              :aria-label="`Add a new stop after stop no. ${index + 1}`"
              class="icon-btn icon-add"
              @click="addStop(index + 1)"
            >
              <font-awesome-icon
                :icon="['fas', 'plus-circle']"
                aria-hidden="true"
                class="btn-icon"
              />
              <div class="hover">Add</div>
            </button>
            <button
              :aria-label="`Remove color stop no. ${index + 1}`"
              class="icon-btn icon-remove"
              @click="removeStop(stop.id)"
            >
              <font-awesome-icon
                :icon="['fas', 'minus-circle']"
                aria-hidden="true"
                class="btn-icon"
              />
              <div class="hover">Remove</div>
            </button>
            <div v-if="removeError && colors.length === 1" class="remove-error">
              You need at least one color stop.
            </div>
          </div>
        </div>
      </transition-group>
      <!-- DEGREE IF LINEAR GRADIENT -->
      <!-- <input-wrapper
        v-if="general.type === 'linear'"
        v-model="general.degree"
        :label="'Degree'"
        :name="'gradient-degree'"
        :what="general.degree"
        :min="0"
        :max="360"
        class="degree-wrapper"
      />-->
    </template>
  </div>
</template>

<script>
import GroupToggle from '@/components/GroupToggle'
import InputWrapper from '@/components/inputs/InputWrapper'
import { mapGetters } from 'vuex'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'colors/getField',
  mutationType: 'colors/updateField'
})
export default {
  name: 'Colors',
  components: {
    GroupToggle,
    InputWrapper
  },
  data: () => ({
    hidden: false,
    title: 'Color Stops 🌈',
    desc:
      'The colors of your gradient. You can add multiple color stops or remove them.',
    id: 2,
    removeError: false
  }),
  computed: {
    ...mapFields(['colors']),
    ...mapGetters({
      general: 'general/general'
    })
  },
  methods: {
    addStop(index) {
      const newStop = {
        id: this.id,
        start: {
          size: 0,
          type: 'hex',
          color: {
            hex: '#00978d',
            rgba: { a: 1, b: 141, g: 151, r: 0 },
            a: 1
          },
          unit: '%'
        },
        stop: {
          size: 100,
          type: 'hex',
          color: {
            hex: '#f3b6c9',
            rgba: { a: 1, b: 201, g: 182, r: 243 },
            a: 1
          },
          unit: '%'
        }
      }
      this.$store.dispatch('colors/addStop', { index, newStop })
      this.id++
    },
    removeStop(stop) {
      if (this.colors.length > 1)
        this.$store.dispatch('colors/removeStop', stop)
      else this.removeError = true
      setTimeout(() => {
        this.removeError = false
      }, 3000)
    }
  }
}
</script>

<style lang="sass">

.color-stops
  position: relative
  min-width: 100%

.color-stop-wrapper
  background: $white
  display: inline-block
  transition: all .3s linear
  width: 100%

.button-wrapper
  flex-basis: 100%
  text-align: center

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
  transition: all .3s

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

.list-item-enter,
.list-item-leave-to
  opacity: 0

.list-item-leave-active
  opacity: 0
  position: absolute
  bottom: -40px
  right: 0

.list-item-enter-to, .list-item-leave
  opacity: 1

.remove-error
  font-size: .8em
  animation: error .3s ease-in-out 1
  margin-top: .5em

@keyframes error
  0%,100%
    transform: translateX(0px)
  25%
    transform: translateX(10px)
  50%
    transform: translateX(-10px)
  75%
    transform: translateX(5px)
</style>
