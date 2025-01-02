<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>

  <WelcomeItem>
    <template #heading>Admin Dashboard</template>
  </WelcomeItem>
</template>

<style scoped>

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
