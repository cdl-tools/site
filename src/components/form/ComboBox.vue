<template>
  <Combobox v-model="selected" nullable :multiple="multiple">
    <div class="relative input input-bordered p-0" :class="props.context.classes.input">
      <div class="relative w-full cursor-default overflow-hidden text-left h-full flex">
        <div class="flex-grow" :class="{ 'overflow-x-scroll flex': multiple }">
          <ul
            v-if="Array.isArray(selected) && selected.length > 0"
            class="flex min-w-max h-full pl-4 items-center gap-2"
          >
            <li
              v-for="item in selected"
              :key="item.value"
              class="bg-base-200 text-base-content px-2 pt-0.5 pb-1"
            >
              {{ item.label }}
              <button>
                <XMarkIcon @click.prevent="deselect(item.value)" class="h-4 inline-block" />
              </button>
            </li>
          </ul>
          <ComboboxInput
            class="w-full h-full leading-6 px-4 min-w-64 w-full"
            :displayValue="(option) => (option as ComboboxOptionType | null)?.label ?? ''"
            @change="query = $event.target.value"
            placeholder="Select community..."
          />
        </div>
        <ComboboxButton class="flex items-center p-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <ComboboxOptions class="absolute popover w-full rounded-b-lg max-h-96 overflow-y-scroll">
          <div
            v-if="filteredOptions.length === 0 && query !== ''"
            class="relative cursor-default select-none px-4 py-2 text-gray-500"
          >
            No results.
          </div>

          <ComboboxOption
            v-for="option in filteredOptions"
            as="template"
            :key="option.value"
            :value="option"
            v-slot="{ selected, active }"
          >
            <li
              class="relative cursor-default select-none py-2 pl-10 pr-4 rounded"
              :class="{
                'bg-primary text-primary-content': active
              }"
            >
              <span
                class="block truncate"
                :class="{ 'font-medium': selected, 'font-normal': !selected }"
              >
                {{ option.label }}
              </span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3"
                :class="{ 'text-primary-content': active, 'text-primary': !active }"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </transition>
    </div>
  </Combobox>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from '@heroicons/vue/20/solid'

export type ComboboxOptionType = { label: string; value: any }
const props = defineProps<{
  context: Record<string, any> & {
    multiple?: boolean
    options: ComboboxOptionType[]
  }
}>()

const selected = ref<ComboboxOptionType | null | ComboboxOptionType[]>(
  props.context.multiple !== undefined ? [] : null
)
const query = ref('')

const filteredOptions = computed(() =>
  query.value === ''
    ? [...props.context.options].sort()
    : props.context.options
        .filter((option) => option.label.toLowerCase().includes(query.value.toLowerCase()))
        .sort()
)

const multiple = computed(() => props.context.multiple !== undefined)

watch(multiple, () => {
  console.log('a')
  console.log(multiple)
  if (multiple.value && !Array.isArray(selected.value)) {
    selected.value = selected.value === null ? [] : [selected.value]
  } else if (!multiple.value && Array.isArray(selected.value)) {
    selected.value = selected.value[0] ?? null
  }
})

watch(selected, () => {
  props.context.node.input(
    Array.isArray(selected.value) ? selected.value.map((v) => v.value) : selected.value?.value
  )
})

function deselect(value: unknown) {
  console.log(value)
  if (Array.isArray(selected.value)) {
    selected.value = selected.value.filter((v) => v.value !== value)
  } else if (selected.value === value) {
    selected.value = null
  }
}
</script>
