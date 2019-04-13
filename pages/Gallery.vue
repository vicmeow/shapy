<template>
  <div class="page-gallery">
    <div class="gallery-item">
      <p>item 1 -</p>
    </div>
    <div class="gallery-item">
      <p>item 2 -</p>
    </div>
    <div class="gallery-item">
      <p>item 3 -</p>
    </div>
  </div>
</template>

<style lang="sass">
.page-gallery
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr))
  gap: 1em
  padding: 1em

.gallery-item
  padding: 1em
  box-shadow: 0 0 10px rgba(0,0,0, 0.1)
  min-height: 350px
  max-height: 350px
  border-radius: 5px
</style>
