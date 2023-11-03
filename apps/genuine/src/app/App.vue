<script setup lang="ts">
import { computed } from 'vue';
import { getParameterByName } from './lib/helpers';
import { handleLogout, userSession } from './vuetils/useAuth';
import MetadataList from './components/MetadataList.vue';
import Auth from './components/Auth.vue';
import Loading from './components/Loading.vue';

function generate() {
  fetch('api/index/reset').then((response) => response.json());
}
function search() {
  fetch('api/index/search').then((response) => response.json());
}

const showPasswordReset = computed(() => {
  const requestType = getParameterByName('type', location.href);
  return requestType === 'recovery';
});
</script>

<template>
  <div id="app" class="w-full h-full flex flex-col justify-center bg-gray-300">
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
</template>
