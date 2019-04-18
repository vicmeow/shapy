<template>
  <footer class="footer">
    <a href="https://www.producthunt.com/posts/shapy" class="footer-link">
      ProductHunt
    </a>
    <a href="https://twitter.com/vicbergquist/shapy" class="footer-link">
      vicbergquist
    </a>
    <a href="https://github.com/vicbergquist/shapy" class="footer-link">
      GitHub
    </a>
    <nuxt-link class="footer-link" to="/faq">FAQs</nuxt-link>
    <nuxt-link class="footer-link" to="/privacy">Privacy & Terms</nuxt-link>
  </footer>
</template>

<style lang="sass">
.footer
  background: $black
  position: fixed
  bottom: 0
  z-index: 900
  width: 100%
  padding: .2rem 1rem

.footer-link
  margin-right: 1rem
  color: $white
</style>
