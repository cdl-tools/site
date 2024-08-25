<template>
  <progress
    v-if="eventsStatus !== 'success'"
    class="progress block w-96 max-w-[95vw] mx-auto mt-8"
  />
  <div v-else class="prose max-w-none mx-4">
    <h1 class="mb-0">{{ eventName }}</h1>

    <progress
      v-if="leaderboardStatus !== 'success'"
      class="progress block w-96 max-w-[95vw] mx-auto mt-8"
    />
    <div v-else>
      <FormKit
        v-model="filters"
        type="form"
        :classes="{ form: 'flex gap-2 items-end not-prose' }"
        :actions="false"
        @submit.prevent.stop
      >
        <FormKit
          type="text"
          label="Username"
          placeholder="Username"
          name="username"
        />
        <FormKit
          type="combobox"
          label="Community"
          name="communities"
          :classes="{ inner: 'w-96 max-w-96' }"
          :options="communityOptions"
          multiple
        />
      </FormKit>
      <div class="overflow-y-scroll max-w-full w-full">
        <SortedTable
          :values="filteredLeaderboard as unknown as any"
          sort="scoreRank"
          direction="asc"
          class="min-w-max w-full"
        >
          <thead>
            <tr>
              <th v-if="isFiltered" scope="col" class="text-left">
                Filtered Rank
              </th>
              <th scope="col">
                <SortLink name="scoreRank">Score Rank</SortLink>
              </th>
              <th scope="col">
                <SortLink name="xlWtRank">Weight Rank</SortLink>
              </th>
              <th scope="col">
                <SortLink name="username">Username</SortLink>
              </th>
              <th scope="col">
                <SortLink name="team">Team</SortLink>
              </th>
              <th scope="col">
                <SortLink name="community">Community</SortLink>
              </th>
              <th scope="col">
                <SortLink name="score">Score</SortLink>
              </th>
              <th scope="col">
                <SortLink name="xlWeight">XL Weight</SortLink>
              </th>
              <th scope="col">
                <SortLink name="shiny">Shiny</SortLink>
              </th>
            </tr>
          </thead>
          <template #body="sort">
            <tbody>
              <tr v-for="(value, idx) in sort.values" :key="value.id as string">
                <td v-if="isFiltered">{{ idx + 1 }}</td>
                <td>{{ value.scoreRank }}</td>
                <td>{{ value.xlWtRank }}</td>
                <td>{{ (value.username as string).trim() }}</td>
                <td>{{ value.team }}</td>
                <td>{{ value.community }}</td>
                <td>{{ value.score }}</td>
                <td>{{ value.xlWeight }}</td>
                <td>{{ value.shiny }}</td>
              </tr>
            </tbody>
          </template>
        </SortedTable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SortedTable from "@/components/tables/SortedTable.vue";
import SortLink from "@/components/tables/SortLink.vue";
import { computed, ref } from "vue";

const route = useRoute("leaderboards-event");
const filters = ref<{ username?: string; communities?: string[] }>({});

const {
  data: events, // the data returned by the loader
  status: eventsStatus, // a boolean indicating if the loader is fetching data
} = useEventList();

const { data: leaderboard, status: leaderboardStatus } = useLeaderboardData(
  route.params.event as string,
);

const eventName = computed(() => {
  if (!events.value) return;
  return events.value.find((ev) => ev.gid === route.params.event)?.name;
});

const isFiltered = computed(() => {
  return !!filters.value.username || !!filters.value.communities?.length;
});

const filteredLeaderboard = computed(() => {
  if (!Array.isArray(leaderboard.value)) return [];
  return leaderboard.value.filter((player) => {
    if (
      filters.value.username &&
      !player.username
        .toLowerCase()
        .includes(filters.value.username.toLowerCase())
    ) {
      return false;
    }
    return !(
      Array.isArray(filters.value.communities) &&
      filters.value.communities.length > 0 &&
      !filters.value.communities.includes(player.community)
    );
  });
});

const communityOptions = computed(() => {
  if (!leaderboard.value) return;
  const communities = leaderboard.value.reduce(
    (communities, player) => communities.add(player.community),
    new Set<string>(),
  );
  return Array.from(communities).map((community) => ({
    value: community,
    label: community,
  }));
});
</script>
