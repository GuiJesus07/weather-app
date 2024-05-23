<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <p>{{ error }}</p>
  </div>
</template>

<script>
import { auth } from '../firebaseConfig'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register() {
      try {
        await auth.createUserWithEmailAndPassword(this.email, this.password)
        this.$router.push('/login')
      } catch (error) {
        this.error = error.message
      }
    }
  }
}
</script>
