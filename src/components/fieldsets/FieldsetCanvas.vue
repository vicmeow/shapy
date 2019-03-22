<template>
  <div role="group" class="fieldset fieldset-canvas">
    <!-- TITLE & DESCRIPTION -->
    <legend class="legend" @click="hidden = !hidden">{{ title }}</legend>
    <group-toggle :hidden="hidden" @click.native="hidden = !hidden" />
    <template v-if="!hidden">
      <p class="desc">{{ desc }}</p>
      <p>{{ width }}</p>
      <input-wrapper
        :field="width"
        v-model="width"
        name="Canvas width"
        label="Width"
      />
      <input-wrapper
        :field="height"
        v-model="height"
        name="Canvas height"
        label="height"
      />
    </template>
  </div>
</template>

<script>
import InputWrapper from '@/components/inputs/InputWrapper'
import GroupToggle from '@/components/GroupToggle'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'Canvas',
  components: {
    InputWrapper,
    GroupToggle
  },
  data: () => ({
    hidden: false,
    title: 'Canvas Size 🖼',
    desc: "Edit the size of your canvas. Choose 'px' by clicking on the unit."
  }),
  computed: {
    ...mapFields('canvas', ['width', 'height'])
  }
}
</script>
