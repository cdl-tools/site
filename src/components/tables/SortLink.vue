<!-- Adapted from code from vue-sorted-table, licensed under the MIT License.-->
<!-- https://github.com/BernhardtD/vue-sorted-table -->

<template>
  <a href="#" @click.prevent="toggleSort?.(props.name)" class="flex items-center">
    <slot>{{ name }}</slot>
    <slot name="icon">
      <span v-if="currentSort == name">
        <component
          :is="sortDirection === 'asc' ? ArrowUpIcon : ArrowDownIcon"
          class="size-4 ml-1"
        />
      </span>
    </slot>
  </a>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/vue/16/solid'
import type { SortDirection } from '@/components/tables/SortedTable.vue'

interface Props {
  name: string
}

const props = defineProps<Props>()

const currentSort = inject('currentSort')
const sortDirection = inject<SortDirection>('sortDirection')
const toggleSort = inject<(column: string) => void>('toggleSort')
</script>
