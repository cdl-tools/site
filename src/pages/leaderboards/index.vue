<template>
  <div class="prose mx-auto">
    <h1>Leaderboards</h1>
    <p>View leaderboards for past events, with players across all communities.</p>

    <FormKit
      :classes="{ form: 'flex gap-2 items-end' }"
      :disabled="isLoading"
      type="form"
      submit-label="View Leaderboard"
      @submit="$router.push({ name: '/leaderboards/[event]', params: { event: $event.id } })"
    >
      <FormKit
        :classes="{ outer: 'flex-grow' }"
        type="select"
        :options="eventOptions"
        label="Event"
        name="id"
        required="true"
        placeholder="Select event..."
      />
    </FormKit>
  </div>
</template>

<script lang="ts">
import { defineBasicLoader } from 'unplugin-vue-router/data-loaders/basic'
import { fetchEvents } from '@/util/sheets'

export const useEventList = defineBasicLoader('/leaderboards' + '/', fetchEvents, {
  lazy: true,
  commit: 'immediate'
})
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'

const {
  data: events, // the data returned by the loader
  isLoading, // a boolean indicating if the loader is fetching data
  error, // an error object if the loader failed
  reload // a function to refetch the data without navigating
} = useEventList()

const eventOptions = computed(
  () => events.value?.map((e) => ({ label: e.name, value: e.gid })) ?? []
)
</script>
