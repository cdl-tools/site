<!-- Adapted from code from vue-sorted-table, licensed under the MIT License.-->
<!-- https://github.com/BernhardtD/vue-sorted-table -->

<template>
  <table class="table-pin-rows">
    <slot />
    <slot name="head" />
    <slot name="body" :values="sortedValues" />
    <slot name="foot" />
  </table>
</template>

<script setup lang="ts">
import { computed, provide, ref } from "vue";

export type SortDirection = "asc" | "desc";

interface Props<
  T extends Record<string, string | number> = Record<string, string | number>,
> {
  values: T[];
  direction?: SortDirection;
  sort?: keyof T;
}

const props = withDefaults(defineProps<Props>(), {
  direction: "asc",
  sort: "id",
});

const currentSort = ref(props.sort);
const sortDirection = ref(props.direction);

const initialValues = computed(() =>
  sortValues(props.values, props.sort, props.direction),
);
const sortedValues = computed(() =>
  sortValues(initialValues.value, currentSort.value, sortDirection.value),
);

function sortValues(
  values: typeof props.values,
  key: keyof (typeof props)["values"][number],
  direction: SortDirection,
) {
  const modifier = direction === "asc" ? 1 : -1;
  return [...values].sort((a, b) => {
    console.log(a[key]);
    if (a[key] == null || a[key].toString().trim().length === 0) {
      return 1;
    }
    if (b[key] == null || b[key].toString().trim().length === 0) {
      return -1;
    }
    if (a[key] < b[key]) return -1 * modifier;
    if (a[key] > b[key]) return 1 * modifier;
    return 0;
  });
}

function toggleSort(column: keyof (typeof props.values)[number]) {
  if (column === currentSort.value) {
    sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
  } else {
    currentSort.value = column;
  }
}

provide("currentSort", currentSort);
provide("sortDirection", sortDirection);
provide("toggleSort", toggleSort);
</script>

<style></style>
