<template>
  <div class="navigation">
    <nav>
      <nuxt-link
        v-for="route in routes"
        :key="route.index"
        class="nav-link"
        :to="route.path"
        v-text="route.name"
      />
    </nav>
    <div class="profile">
      <button>Submit</button>
      x
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          name: 'Shapy 🤖',
          path: '/'
        },
        { name: 'Gallery', path: '/gallery' }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.navigation
  position: sticky
  top: 0
  display: flex
  padding: .5rem 1rem
  background: $black
  height: 2.5rem
  z-index: 1000

.nav-link
  color: $white
  margin-right: 1rem
</style>
