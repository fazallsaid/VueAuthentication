<script setup>
</script>

<template>

  <WelcomeItem>
    <template #heading>Admin Login</template>
    <div class="bg-white-400 rounded-lg w-full text-center">
        <form action="admin/auth/login" method="post">
            <div class="flex flex-col space-y-4 p-4">
                <label for="email" class="mb-4">Email</label>
                <input type="text" name="username" class="p-2 border border-gray-300 rounded-lg mb-4" />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" class="p-2 border border-gray-300 rounded-lg" />
                <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg">Login</button>
            </div>
        </form>
    </div>
  </WelcomeItem>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

input {
    width: 100%;
}

button {
    width: 100%;
    background-color: #acacac;
}

.bg-blue-500{
    background-color: #3b82f6;
}

.bg-white-400{
    background-color: rgba(255, 255, 255, 0.4);
    padding: 2rem;
}

.w-full{
  width: 100%;
}
</style>
