<template>
  <div>
    <h1>Orders</h1>
    <Chart endpoint="orders" xField="date" yField="quantity" />
    <Filters @update:filters="applyFilter" />
    <DataTable endpoint="orders" :filter="filters" />
  </div>
</template>

<script setup>
import Chart from '../components/Chart.vue'
import Filters from '../components/Filters.vue'
import DataTable from '../components/DataTable.vue'
import { ref } from 'vue'

const filters = ref({})
function applyFilter(newFilters) {
  filters.value = newFilters
}
</script>
