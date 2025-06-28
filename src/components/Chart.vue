<template>
  <div>
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'

import { onMounted, ref } from 'vue'
import { fetchData } from '../services/api'

const props = defineProps({
  endpoint: String,
  xField: String, // например, "date"
  yField: String, // например, "price"
})

// Регистрируем Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

// Состояние
const chartData = ref({
  labels: [],
  datasets: [],
})

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
})

onMounted(async () => {
  const items = [
    { date: '2024-01-01', quantity: 10 },
    { date: '2024-01-02', quantity: 15 },
    { date: '2024-01-03', quantity: 8 },
    { date: '2024-01-04', quantity: 20 },
  ]

  chartData.value = {
    labels: items.map((item) => item[props.xField]),
    datasets: [
      {
        label: props.yField,
        data: items.map((item) => item[props.yField]),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.2,
        fill: false,
      },
    ],
  }
})
</script>
