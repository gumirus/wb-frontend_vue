<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(v, key) in data[0]" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td v-for="(v, key) in item" :key="key">{{ v }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { fetchData } from '../services/api'

const props = defineProps({
  endpoint: String,
})

const data = ref([])

onMounted(async () => {
  const res = await fetchData(props.endpoint)
  data.value = res.data || []
})
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 8px;
  border: 1px solid #ccc;
}
</style>
