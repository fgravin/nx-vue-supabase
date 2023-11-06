<script setup lang="ts">
import {
  DocumentIcon,
  GlobeEuropeAfricaIcon,
  HomeIcon,
  CogIcon,
} from '@heroicons/vue/24/solid'

import { inject } from 'vue'
import type { Ref } from 'vue'
import type { Session } from '@supabase/gotrue-js/src/lib/types'

const session: Ref<Session> = inject('session')
</script>

<template>
  <div class="flex flex-col grow">
    <div class="h-16"></div>
    <nav class="grow">
      <ul role="list" class="flex flex-col gap-7">
        <li>
          <ul role="list" class="flex-col flex gap-3">
            <li class="">
              <router-link to="/" class="flex sidebar-btn">
                <HomeIcon class="h-6 w-6" />
              </router-link>
            </li>
            <li class="" v-if="session">
              <router-link to="/catalog" class="flex sidebar-btn">
                <DocumentIcon class="h-6 w-6" />
              </router-link>
            </li>
            <li class="" v-if="session">
              <router-link to="/studio" class="flex sidebar-btn">
                <GlobeEuropeAfricaIcon class="h-6 w-6" />
              </router-link>
            </li>
            <li class="" v-if="session">
              <router-link to="/settings" class="flex sidebar-btn">
                <CogIcon class="h-6 w-6" />
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
