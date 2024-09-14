<template>
  <div class="prose mx-4 sm:mx-auto">
    <h1>Leaderboards</h1>
    <p>
      View leaderboards for past events, with players across all communities.
    </p>

    <progress
      v-if="status == 'pending'"
      class="progress block w-96 max-w-[95vw] mx-auto mt-8"
    />

    <template v-for="group in eventOptions" v-else :key="group.group">
      <h2>{{ group.group }}</h2>
      <ul>
        <li v-for="event in group.options" :key="event.value">
          <NuxtLink
            :to="{ name: 'leaderboards-event', params: { event: event.value } }"
            >{{ event.label }}
          </NuxtLink>
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

useSeoMeta({
  title: "Leaderboards",
});

const { data: events, status } = useEventList();

function pascalCase(s: string) {
  return s
    .split(/\s+/)
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

const eventOptions = computed(() => {
  const grouped = (events.value ?? []).reduce(
    (options, event) => {
      const year = event.name.split(/\s+/).find((v) => !isNaN(Number(v)));
      if (year === undefined) {
        return options;
      }
      let optgroup = options.find((opt) => opt.group === year);
      if (optgroup === undefined) {
        optgroup = { group: year, options: [] };
        options.unshift(optgroup);
      }
      optgroup.options.unshift({
        label: pascalCase(event.name),
        value: event.gid,
      });
      return options;
    },
    [] as { group: string; options: { label: string; value: string }[] }[],
  );
  return grouped.sort((a, b) => b.group.localeCompare(a.group));
});
</script>
