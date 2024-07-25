<template>
  <div>
    <h1>Home</h1>
    <SortedTable :values="values" class="w-full table-auto">
      <thead>
        <tr>
          <th scope="col" style="text-align: left; width: 10rem">
            <SortLink name="id">ID</SortLink>
          </th>
          <th scope="col" style="text-align: left; width: 10rem">
            <SortLink name="name">Name</SortLink>
          </th>
          <th scope="col" style="text-align: left; width: 10rem">
            <SortLink name="hits">Hits</SortLink>
          </th>
        </tr>
      </thead>
      <template #body="sort">
        <tbody>
          <tr v-for="value in sort.values" :key="value.id">
            <td>{{ value.id }}</td>
            <td>{{ value.name }}</td>
            <td>{{ value.hits }}</td>
          </tr>
        </tbody>
      </template>
    </SortedTable>
  </div>
</template>
<script setup lang="ts">
import SortedTable from '@/components/tables/SortedTable.vue'
import SortLink from '@/components/tables/SortLink.vue'
import { ref } from 'vue'

const values = ref([
  { name: 'Plugin Foo', id: 2, hits: 33 },
  { name: 'Plugin Bar', id: 1, hits: 42 },
  { name: 'Plugin Foo Bar', id: 3, hits: 79 }
])
</script>
