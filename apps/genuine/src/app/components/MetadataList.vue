<script setup lang="ts">
import { allMetadatas, fetchMetadatas } from '../vuetils/useMetadata';
import Metadata from './Metadata.vue';

await fetchMetadatas();
</script>
<template>
  <div class="w-full">
    <h1 class="mb-12 font-bold text-6xl">Metadata List.</h1>

    <div class="bg-white shadow overflow-hidden rounded-md">
      <ul v-for="(metadata, index) in allMetadatas" :key="index">
        <Metadata :metadata="metadata" />
      </ul>
    </div>
  </div>
</template>
