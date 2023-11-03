<script setup lang="ts">
import type { Metadata } from '../types/global';
defineProps<{
  metadata: Metadata;
}>();
</script>

<template>
  <li
    class="w-full block cursor-pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out"
  >
    <div>{{ metadata.title }}</div>
    <div>{{ metadata.abstract }}</div>
  </li>
</template>

<style lang="scss" scoped></style>
