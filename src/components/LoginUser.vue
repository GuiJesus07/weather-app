<template>
  <div class="container">
    <div clas1s="row">
      <div class="col-md-6 offset-md-3">
        <div class="login-container">
          <h2 class="text-center mb-4">Login</h2>
          <form action="#" method="post">
            <div class="form-group">
              <label for="username">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                v-model="email"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                v-model="password"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              <RouterLink to="/">Login</RouterLink>
            </button>
          </form>
          <p class="mt-3 text-center">
            Don't have an account?<RouterLink to="/register">Register</RouterLink>
          </p>
        </div>
      </div>
    </div>
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
    async login() {
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password)
        this.$router.push('/')
      } catch (error) {
        this.error = error.message
      }
    }
  }
}
</script>
