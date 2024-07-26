<template>
  <div style="background: navajowhite;">
    <h2>I am comp B</h2>
    <div style="height: 60px;">
      <button @click="dismissBanner">To hide</button>
      <div v-if="showBanner">Show</div>
    </div>
  </div>
</template>

<script setup>
const { showBanner, dismissBanner } = useBanner();
</script>
