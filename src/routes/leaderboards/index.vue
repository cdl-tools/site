<template>
  <div class="prose mx-4 sm:mx-auto">
    <h1>Leaderboards</h1>
    <p>View leaderboards for past events, with players across all communities.</p>

    <FormKit
      :classes="{ form: 'flex gap-2 items-end' }"
      :disabled="isLoading"
      type="form"
      submit-label="View Leaderboard"
      @submit="navigateToLeaderboard"
    >
      <FormKit
        :classes="{ outer: 'flex-grow', input: isLoading ? 'skeleton' : '' }"
        type="select"
        :options="eventOptions"
        label="Event"
        name="id"
        required="true"
        placeholder="Select event..."
        help=""
      />
    </FormKit>
  </div>
</template>

<script lang="ts">
import { defineBasicLoader } from 'unplugin-vue-router/data-loaders/basic'
import { fetchEvents } from '@/util/sheets'

export const useEventList = defineBasicLoader('/leaderboards/', fetchEvents, {
  lazy: true,
  commit: 'immediate'
})
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const {
  data: events, // the data returned by the loader
  isLoading // a boolean indicating if the loader is fetching data
} = useEventList()

const router = useRouter()

function pascalCase(s: string) {
  return s
    .split(/\s+/)
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

const eventOptions = computed(
  () =>
    events.value
      ?.reduce(
        (options, event) => {
          const year = event.name.split(/\s+/).find((v) => !isNaN(Number(v))) as string
          let optgroup = options.find((opt) => opt.group === year)
          if (optgroup === undefined) {
            optgroup = { group: year, options: [] }
            options.unshift(optgroup)
          }
          optgroup.options.unshift({ label: pascalCase(event.name), value: event.gid })
          return options
        },
        [] as { group: string; options: { label: string; value: string }[] }[]
      )
      .sort((a, b) => b.group.localeCompare(a.group)) ?? []
)

function navigateToLeaderboard({ id: event }: { id: string }) {
  router.push({ name: '/leaderboards/[event]', params: { event } })
}
</script>
