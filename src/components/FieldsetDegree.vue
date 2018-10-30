<template>
  <fieldset class="fieldset fieldset-degree">

    <!-- TITLE & DESCRIPTION -->
    <legend class="legend">{{ title }}</legend>
    <p class="desc">{{ desc }}</p>

    <!-- DEG INPUT (%/px) -->
    <div class="input-wrapper">
      <label 
        for="shape-degree" 
        class="label">degree</label>
      <input
        type="range" 
        class="slider"
        name="shape-degree"
        id="shape-degree"
        max="360">
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'Degree',
  data: () => ({
    title: 'Shape angle',
    desc: 'The angle of the shape.'
  })
}
</script>
