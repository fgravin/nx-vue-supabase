<script setup lang="ts">
import { allMetadatas, fetchMetadatas } from '../vuetils/useMetadata'
import { PlusIcon } from '@heroicons/vue/24/solid'
import Metadata from './Metadata.vue'

await fetchMetadatas()
</script>
<template>
  <div class="">
    <section class="-mx-4">
      <header
        class="flex flex-row-reverse gap-7 justify-between items-center sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 md:w-2/3"
      >
        <div class="flex items-center justify-between">
          <a href="/new" class="btn flex">
            <PlusIcon class="h-6 w-6"></PlusIcon>
            New
          </a>
        </div>
        <form class="grow group relative md:w-1/2">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Filter metadatas"
            placeholder="Filter metadatas..."
          />
        </form>
      </header>
      <ul
        class="mt-8 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6"
      >
        <li
          v-for="(metadata, index) in allMetadatas"
          :key="index"
          class="group cursor-pointer rounded-md shadow p-3 hover:shadow-md dark:bg-slate-700 dark:ring-0 dark:highlight-white/10 dark:hover:bg-blue-500"
        >
          <Metadata :metadata="metadata" />
        </li>
      </ul>
    </section>
  </div>
</template>
