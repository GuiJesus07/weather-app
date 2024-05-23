<template>
  <div>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password)
        this.$router.push('/')
      } catch (error) {
        this.error = error.message
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
