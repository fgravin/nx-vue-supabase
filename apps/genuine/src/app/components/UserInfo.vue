<script setup lang="ts">
import { inject } from 'vue'
import type { Ref } from 'vue'
import type { Session } from '@supabase/gotrue-js/src/lib/types'
import {
  UserIcon,
  ArrowRightOnRectangleIcon,
  HomeIcon,
} from '@heroicons/vue/24/solid'
import { handleLogout } from '../vuetils/useAuth'

const session: Ref<Session> = inject('session')
</script>

<template>
  <div>
    <div v-if="session" class="flex items-center gap-4 justify-center">
      <UserIcon class="w-6 h-6"></UserIcon>
      <div class="text-sm">{{ session.user.email }}</div>
      <button class="sidebar-btn hover:bg-blue-500" @click="handleLogout">
        <ArrowRightOnRectangleIcon class="w-6 h-6"></ArrowRightOnRectangleIcon>
      </button>
    </div>
    <div v-else>
      <router-link to="/auth" class="flex sidebar-btn hover:bg-blue-500">
        Login
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
