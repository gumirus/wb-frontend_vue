<script setup>
import { onMounted, ref, watch, computed } from 'vue'
import { fetchData } from '../services/api'

const props = defineProps({
  endpoint: String,
  filter: Object,
})

const data = ref([])
const filteredData = ref([])

const currentPage = ref(1)
const pageSize = 10

const totalPages = computed(() =>
  Math.ceil(filteredData.value.length / pageSize)
)

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredData.value.slice(start, start + pageSize)
})

async function load() {
  const res = await fetchData(props.endpoint)
  data.value = res.data || []
  applyFilter()
}

function applyFilter() {
  filteredData.value = data.value.filter((item) => {
    const q = item.quantity
    if (props.filter?.min != null && q < props.filter.min) return false
    if (props.filter?.max != null && q > props.filter.max) return false
    return true
  })
  currentPage.value = 1
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

onMounted(load)
watch(() => props.filter, applyFilter, { deep: true })
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(v, key) in paginatedData[0]" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedData" :key="item.id">
          <td v-for="(v, key) in item" :key="key">{{ v }}</td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">← Prev</button>
      <span>Page {{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next →
      </button>
    </div>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}
th,
td {
  border: 1px solid #ccc;
  padding: 0.5rem;
}
.pagination {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
}
button {
  padding: 0.4rem 1rem;
  border: 1px solid #888;
  background: white;
  cursor: pointer;
}
button:disabled {
  opacity: 0.5;
  cursor: default;
}
</style>
