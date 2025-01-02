<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>

  <WelcomeItem>
    <template #heading>Admin Login</template>
    <div class="bg-white-400 rounded-lg w-full text-center">
        <form>
            <div class="flex flex-col space-y-4 p-4">
                <label for="email" class="mb-4">Email</label>
                <input type="text" name="username" class="p-2 border dark:text-gray-800 border-gray-300 rounded-lg mb-4" />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" class="p-2 border dark:text-gray-800 border-gray-300 rounded-lg" />
                <button v-on:click.prevent="handleLogin()" type="submit" class="bg-blue-500 text-white p-2 rounded-lg">Login</button>
            </div>
        </form>
    </div>
  </WelcomeItem>
</template>

<script>

export default {
  data(){
    return {
      loading: false,
      message: "",
      input:{
        username: "",
        password: ""
      }
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      console.log(this.input.username);

      this.$store.dispatch("auth/login", this.input).then(() => {
          this.loading = false;
          this.$router.push({ name: "AdminDashboard" });
        }).catch((error) => {
          this.loading = false;
          this.message = error.response.data.message;
        });
    },
  },
};
</script>


