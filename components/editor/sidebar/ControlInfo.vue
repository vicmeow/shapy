<template>
  <div class="control-info">
    <div class="info-icon">?</div>
    <div class="info-description">
      About control
    </div>
  </div>
</template>

<style lang="sass">
.control-info
  position: absolute
  top: 0
  right: 0

.info-icon
  color: $darkgrey
  padding: 1rem

.control-info:hover .info-description
  display: block

.info-description
  display: none
  position: absolute
  left: -300px
  left: 0
  top: -2rem
  background: $white
  // box-shadow: $boxShadow
  border-radius: $borderRadius
  height: 100px
  width: 300px
  padding: 1rem
  z-index: 800
</style>
