<template>
  <div style="background: aliceblue;">
    <h2>I am comp A</h2>
    <div style="height: 60px;">
      <button @click="dismissBanner">To hide</button>
      <div v-if="showBanner">Show</div>
    </div>
  </div>
</template>

<script setup>
const { showBanner, dismissBanner } = useBanner();
</script>
