<script setup lang="ts">
import { computed, onMounted, provide, Ref, ref } from 'vue'
import { getParameterByName } from './lib/helpers'
import { supabase } from './lib/supabase'
import Sidebar from './components/Sidebar.vue'
import type { Session } from '@supabase/gotrue-js/src/lib/types'
import Header from './components/Header.vue'

function generate() {
  fetch('api/index/reset').then((response) => response.json())
}
function search() {
  fetch('api/index/search').then((response) => response.json())
}

const showPasswordReset = computed(() => {
  const requestType = getParameterByName('type', location.href)
  return requestType === 'recovery'
})
const session: Ref<Session> = ref()
provide('session', session)

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
  <div class="h-screen flex flex-col">
    <Header />
    <div class="grow flex">
      <aside class="bg-gray-700 text-gray-400 px-2 flex shrink-0">
        <Sidebar></Sidebar>
      </aside>
      <main class="flex flex-col grow m-12">
        <RouterView />
      </main>
      <!--
      <div
        id="app"
        class="w-full h-full flex flex-col justify-center bg-gray-300"
      >
        <div
          v-if="showPasswordReset"
          class="w-full h-full flex flex-col justify-center items-center p-4"
        >
          <PasswordReset />
        </div>
        <div
          v-else-if="userSession === null"
          class="w-full h-full flex flex-col justify-center items-center p-4"
        >
          <Auth />
        </div>
        <div
          class="w-full h-full flex flex-col justify-center items-center p-4 max-w-sm m-auto"
        >
          <Suspense>
            <template #default>
              <div>
                <MetadataList />
                <button class="btn-black w-full mt-12" @click="handleLogout">
                  Logout
                </button>
              </div>
            </template>
            <template #fallback>
              <Loading />
            </template>
          </Suspense>
        </div>
        <Footer />
      </div>
      -->
    </div>
  </div>
</template>
