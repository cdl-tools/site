<script setup lang="ts">
import "~/assets/index.css";

useSeoMeta({
  titleTemplate: (titleChunk?: string) =>
    titleChunk
      ? `${titleChunk} - Community Day League`
      : "Community Day League",
  ogDescription:
    "Community Day League is a project set up by several Community Ambassadors as a way to try and generate engagement, friendly competition and awareness of Community Days. In short, it's a global catching competition.",
  ogImage: "/cdl-play-logo-social.png",
});

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
