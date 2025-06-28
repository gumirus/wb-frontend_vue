<template>
  <div class="filters">
    <label>
      Min Quantity:
      <input type="number" v-model.number="minQuantity" @input="emitFilter" />
    </label>
    <label>
      Max Quantity:
      <input type="number" v-model.number="maxQuantity" @input="emitFilter" />
    </label>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['update:filters'])

const minQuantity = ref(null)
const maxQuantity = ref(null)

function emitFilter() {
  emit('update:filters', {
    min: minQuantity.value,
    max: maxQuantity.value,
  })
}
</script>

<style scoped>
.filters {
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
}
input {
  margin-left: 0.5rem;
}
</style>
