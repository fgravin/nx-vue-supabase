<script setup lang="ts">
import type { Metadata } from '../types/supabase'

defineProps<{
  metadata: Metadata
}>()
</script>

<template>
  <router-link
    :to="{ name: 'metadataDetail', params: { id: metadata.id } }"
    class=""
  >
    <dl class="grid sm:block grid-cols-2 grid-rows-2 items-center">
      <div>
        <dt class="sr-only">Title</dt>
        <div class="font-semibold text-slate-900">
          {{ metadata.title }}
        </div>
      </div>
      <div>
        <dt class="sr-only">Abstract</dt>
        <div class="">{{ metadata.abstract }}</div>
      </div>
    </dl>
  </router-link>
</template>

<style lang="scss" scoped></style>
