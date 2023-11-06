<script setup lang="ts">
import type { Metadata } from '../types/supabase'
import { allMetadatas } from '../vuetils/useMetadata'
import { useRoute } from 'vue-router'
import router from '../router'

const route = useRoute()
const id = route.params.id

const metadata = allMetadatas.value.find((md) => md.id === Number(id))
</script>

<template>
  <div class="text-lg text-primary">{{ metadata.title }}</div>
  <div>{{ metadata.abstract }}</div>
  <dl class="grid sm:block grid-cols-2 grid-rows-2 items-center">
    <div>
      <dt class="">Creation date</dt>
      <div class="font-semibold text-slate-900">
        {{ metadata.record_created }}
      </div>
    </div>
    <div>
      <dt class="">Update date</dt>
      <div class="font-semibold text-slate-900">
        {{ metadata.record_updated }}
      </div>
    </div>
  </dl>
  <div class="w-16">
    <button
      type="reset"
      class="btn mt-8"
      @click="router.push({ name: 'metadataList' })"
    >
      Back
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
