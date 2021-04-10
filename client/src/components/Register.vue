<template>
  <div>
   <h1> Register</h1>
   <input type="text" name="email" placeholder="email" v-model="email"/>
   <br>
   <input type="password" name="password" placeholder="password" v-model="password"/>
   <br>
   <button
    @click="register"
   >Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '123',
      password: ''
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello world'
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
