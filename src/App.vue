<template>
  <div>
    <nav>
      <router-link to="/incomes">Incomes</router-link> |
      <router-link to="/orders">Orders</router-link> |
      <router-link to="/sales">Sales</router-link> |
      <router-link to="/stocks">Stocks</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  padding: 1rem;
  background-color: #f0f0f0;
}
a {
  margin-right: 1rem;
}
</style>
