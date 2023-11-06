<script setup lang="ts">
import { inject } from 'vue'
import type { Ref } from 'vue'
import type { Session } from '@supabase/gotrue-js/src/lib/types'

const session: Ref<Session> = inject('session')
</script>

<template>
  <h1 class="page-title">Home</h1>
  <div v-if="!session">
    Please
    <router-link to="/auth" class="text-primary hover:text-blue-500 underline">
      sign in
    </router-link>
  </div>
  <div v-else>
    Welcome <span class="font-bold">{{ session.user.email }}</span>
  </div>
</template>

<style scoped></style>
