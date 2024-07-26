<template>
  <div style="width: 50%; margin: 0 auto;">
    <div style="display: flex;justify-content: space-evenly;">
      <CompA />

      <div>
        <h2>I'm outside component</h2>
        <div style="height: 60px;">
          <button @click="dismissBanner">To hide</button>
          <div v-if="showBanner">Show</div>
        </div>
      </div>

      <CompB />
    </div>

    <h2>Banner display status: {{ showBanner }} </h2>
    <button @click="activeBanner">Show banner</button>
    <hr />

    <button @click="toggleBanner">Toggle show/hide</button>
  </div>
</template>

<script setup>
const { showBanner, dismissBanner, activeBanner, toggleBanner } = useBanner()
</script>
