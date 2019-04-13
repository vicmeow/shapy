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
  display: flex
  padding: .5rem 1rem
  background: $black

.nav-link
  color: $white
  margin-right: 1rem
</style>
