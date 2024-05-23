<template>
  <div>
    <form @submit.prevent="register">
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
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { auth } from '../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

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
        await createUserWithEmailAndPassword(auth, this.email, this.password)
        this.$router.push('/login')
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
