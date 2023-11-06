<script setup lang="ts">
import { ref } from 'vue'
import { addMetadata } from '../vuetils/useMetadata'
import type { Metadata } from '../types/supabase'
import type { Ref } from 'vue'
import router from '../router'

const form: Ref<Metadata> = ref({
  abstract: '',
  dataset_created: new Date(),
  dataset_updated: new Date(),
  kind: 'dataset',
  landing_page: '',
  lineage: '',
  owner_organization_id: 1,
  record_created: new Date(),
  record_updated: new Date(),
  spatial_representation: '',
  status: '',
  title: '',
  unique_identifier: crypto.randomUUID() as string,
  update_frequency: '',
})

const submitForm = async () => {
  const data = await addMetadata(form.value)
  if (data) {
    router.push({ name: 'metadataList' })
  }
}
</script>
<template>
  <div class="">
    <h2 class="text-xl font-bold mb-4">Add New Metadata</h2>

    <div class="mb-4">
      <label for="title" class="block mb-2">Title:</label>
      <input
        v-model="form.title"
        type="text"
        id="title"
        class="w-full px-2 py-1 border rounded"
      />
    </div>

    <div class="mb-4">
      <label for="abstract" class="block mb-2">Abstract:</label>
      <textarea
        v-model="form.abstract"
        id="abstract"
        rows="4"
        class="w-full px-2 py-1 border rounded"
      ></textarea>
    </div>

    <div class="mb-4">
      <label for="dataset_created" class="block mb-2">Record Created:</label>
      <input
        v-model="form.record_created"
        type="date"
        id="record_created"
        class="w-full px-2 py-1 border rounded"
      />
    </div>

    <div class="mb-4">
      <label for="dataset_updated" class="block mb-2">Record Updated:</label>
      <input
        v-model="form.record_updated"
        type="date"
        id="record_updated"
        class="w-full px-2 py-1 border rounded"
      />
    </div>
    <div class="mt-8 flex gap-7">
      <button
        type="reset"
        class="btn"
        @click="router.push({ name: 'metadataList' })"
      >
        Reset
      </button>
      <button @click="submitForm" class="btn">Submit</button>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles or overrides specific to this component here */
</style>
