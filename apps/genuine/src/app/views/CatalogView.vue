<script setup lang="ts">
import MetadataList from '../components/MetadataList.vue'
</script>

<template>
  <h1 class="page-title">Catalog</h1>
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>

<style scoped></style>
