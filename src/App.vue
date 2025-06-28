<template>
  <div class="app">
    <nav>
      <RouterLink to="/incomes">Incomes</RouterLink>
      <RouterLink to="/orders">Orders</RouterLink>
      <RouterLink to="/sales">Sales</RouterLink>
      <RouterLink to="/stocks">Stocks</RouterLink>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.app {
  font-family: sans-serif;
  padding: 1rem;
}

nav {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

nav a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

nav a.router-link-active {
  color: black;
  border-bottom: 2px solid black;
}
</style>
