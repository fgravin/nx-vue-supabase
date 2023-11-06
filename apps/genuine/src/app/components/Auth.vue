<script setup lang="ts">
import { inject, ref } from 'vue'
import { supabase } from '../lib/supabase'
import type { Credentials } from '../types/global'
import type { Ref } from 'vue/dist/vue'
import type { Session } from '@supabase/gotrue-js/src/lib/types'
import router from '../router'

const session: Ref<Session> = inject('session')
const loading = ref(false)
const email = ref('')
const password = ref('')

const handleMagicLink = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
    })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}

const handleLSignin = async (credentials: Credentials) => {
  try {
    loading.value = true
    const { error, data } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    })
    if (error) throw error
    session.value = data.session
    router.push({ name: 'home' })
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="grow flex flex-col gap-7">
    <h1 class="page-title">Login</h1>

    <div class="grow flex justify-center mt-12">
      <div class="w-1/2 md:w-1/3">
        <div class="mb-4">
          <label class="font-bold text-grey-darker block mb-2">Email</label>
          <input
            type="text"
            class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
            placeholder="Your email"
            v-model="email"
          />
        </div>
        <div class="mb-4">
          <label class="font-bold text-grey-darker block mb-2">Password</label>
          <input
            type="password"
            class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
            placeholder="Your password"
            v-model="password"
          />
        </div>
        <div class="flex flex-col gap-4 mt-12 justify-center">
          <div class="flex justify-center text-center">
            <input
              @click="handleMagicLink"
              type="submit"
              class="block cursor-pointer underline hover:text-gray-500"
              :value="loading ? 'Loading' : 'Send magic link'"
              :disabled="loading"
            />
          </div>

          <div class="flex gap-7 justify-center">
            <button type="reset" class="btn">Reset</button>
            <button
              @click="
                handleLSignin({
                  email,
                  password,
                })
              "
              class="btn"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
