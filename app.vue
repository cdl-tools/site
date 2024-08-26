<script setup lang="ts">
import "~/assets/index.css";

provideHeadlessUseId(() => useId());
</script>

<template>
  <div class="max-h-dvh min-h-dvh flex flex-col">
    <LayoutNavBar />
    <div class="flex-grow overflow-y-scroll flex flex-col justify-between">
      <div>
        <NuxtPage />
      </div>
      <LayoutFooter class="mt-auto" />
    </div>
  </div>
</template>
