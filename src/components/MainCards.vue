<script setup>
  import MainCardsSingle from './MainCardsSingle.vue'
</script>

<template>
  <div class="sub-wrapper">
    <MainCardsSingle v-for="n in 20" />
  </div>
</template>

<style scoped lang="postcss">
  .sub-wrapper {
    @apply grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
  }
</style>
