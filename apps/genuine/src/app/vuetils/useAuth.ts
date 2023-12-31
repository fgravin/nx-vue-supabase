import { ref } from 'vue'
import { supabase } from '../lib/supabase'
import type { Session, Provider } from '@supabase/gotrue-js/dist/main/lib/types'
import type { Credentials } from '../types/global'

const userSession = ref<Session | null>(null)

/*
 * Handles user login via email + password into a supabase session.
 * If not password is empty, it will send a magic link to the users email address.
 */
async function handleLogin(credentials: Credentials) {
  try {
    const { error, data } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    })
    if (error) {
      alert('Error logging in: ' + error.message)
    }
    // No error throw, but no user detected so send magic link
    if (!error && !data.user) {
      alert('Check your email for the login link!')
    }
    userSession.value = data.session
  } catch (error) {
    console.error('Error thrown:', error.message)
    alert(error.error_description || error)
  }
}

/*
 * Handles signup provided a valid credentials object.
 */
async function handleSignup(credentials: Credentials) {
  try {
    const { email, password } = credentials
    // prompt user if they have not filled populated their credentials
    if (!email || !password) {
      alert('Please provide both your email and password.')
      return
    }
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      alert(error.message)
      console.error(error, error.message)
      return
    }
    alert('Signup successful, confirmation mail should be sent soon!')
  } catch (err) {
    alert('Fatal error signing up')
    console.error('signup error', err)
  }
}

/**
 * Handles signup via Third Party Login.
 * https://supabase.com/docs/guides/auth#third-party-logins
 */
async function handleOAuthLogin(provider: Provider) {
  const { error } = await supabase.auth.signInWithOAuth({ provider })
  if (error) console.error('Error: ', error.message)
}

/**
 * Handles password reset. Will send an email to the given email address.
 */
async function handlePasswordReset() {
  const email = prompt('Please enter your email:')
  if (!email) {
    window.alert('Email address is required.')
  } else {
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) {
      alert('Error: ' + error.message)
    } else {
      alert('Password recovery email has been sent.')
    }
  }
}

async function handleUpdateUser(credentials: Credentials) {
  try {
    const { error } = await supabase.auth.updateUser(credentials)
    if (error) {
      alert('Error updating user info: ' + error.message)
    } else {
      alert('Successfully updated user info!')
      window.location.href = '/'
    }
  } catch (error) {
    alert('Error updating user info: ' + error.message)
  }
}

/**
 * Handles logging a user out of a supabase session
 */
async function handleLogout() {
  try {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error('Error', error)
      return
    }
  } catch (err) {
    console.error('Error', err)
  }
}

export {
  userSession,
  handleLogin,
  handleOAuthLogin,
  handleSignup,
  handleLogout,
  handlePasswordReset,
  handleUpdateUser,
}
