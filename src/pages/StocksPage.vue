<template>
  <div>
    <h1>Stocks</h1>
    <Chart />
    <Filters />
    <DataTable endpoint="stocks" />
  </div>
</template>

<script setup>
import Chart from '../components/Chart.vue'
import Filters from '../components/Filters.vue'
import DataTable from '../components/DataTable.vue'
</script>
