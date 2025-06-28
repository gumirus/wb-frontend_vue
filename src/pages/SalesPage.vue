<template>
  <div>
    <h1>Sales</h1>
    <Chart />
    <Filters />
    <DataTable endpoint="sales" />
  </div>
</template>

<script setup>
import Chart from '../components/Chart.vue'
import Filters from '../components/Filters.vue'
import DataTable from '../components/DataTable.vue'
</script>
