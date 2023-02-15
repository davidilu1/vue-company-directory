<script setup>
  import MainSearch from './MainSearch.vue'
  import MainCards from './MainCards.vue'
  import MainPagination from './MainPagination.vue'
</script>

<template>
  <div class="wrapper">
    <MainSearch />
    <MainCards />
    <MainPagination />
  </div>
</template>

<style scoped lang="postcss">
  .wrapper {
    @apply container mx-auto flex flex-col gap-4 py-4;
  }
</style>
