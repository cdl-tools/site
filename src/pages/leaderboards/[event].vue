<template>
  <div v-if="eventsIsLoading">
    <progress class="progress w-56"></progress>
  </div>
  <div v-else class="prose max-w-none mx-4">
    <h1>{{ eventName }}</h1>

    <SortedTable v-if="!leaderboardIsLoading" :values="leaderboard" sort="scoreRank" class="my-8">
      <thead>
        <tr>
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
            <SortLink name="shiny">Shiny</SortLink>
          </th>
        </tr>
      </thead>
      <template #body="sort">
        <tbody>
          <tr v-for="value in sort.values" :key="value.id">
            <td>{{ value.scoreRank }}</td>
            <td>{{ value.xlWtRank }}</td>
            <td>{{ value.username }}</td>
            <td>{{ value.team }}</td>
            <td>{{ value.community }}</td>
            <td>{{ value.score }}</td>
            <td>{{ value.shiny }}</td>
          </tr>
        </tbody>
      </template>
    </SortedTable>
  </div>
</template>

<script lang="ts">
import { defineBasicLoader } from 'unplugin-vue-router/data-loaders/basic'
import { fetchEvent } from '@/util/sheets'

export const useLeaderboardData = defineBasicLoader(
  '/leaderboards' + '/',
  async (to) => {
    return fetchEvent(to.params.event as string)
  },
  {
    lazy: true
  }
)
</script>

<script setup lang="ts">
import SortedTable from '@/components/tables/SortedTable.vue'
import SortLink from '@/components/tables/SortLink.vue'
import { computed, ref } from 'vue'

import { useEventList } from './index.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const {
  data: events, // the data returned by the loader
  isLoading: eventsIsLoading // a boolean indicating if the loader is fetching data
} = useEventList()

const { data: leaderboard, isLoading: leaderboardIsLoading } = useLeaderboardData()

const eventName = computed(() => {
  if (!events.value) return
  return events.value.find((ev) => ev.gid === route.params.event)?.name
})
</script>
