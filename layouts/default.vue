<template>
  <div class="wrapper">
    <Navigation />
    <nuxt class="page" />
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
export default {
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      helloe: 'hello'
    }
  }
}
</script>
