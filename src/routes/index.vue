<template>
  <div
    class="hero min-h-screen"
    :style="`background-image: url(${randHero()})`"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-lg">
        <CDLLogo class="h-48 mb-8 inline-block" />
        <h1 class="mb-5 text-5xl font-bold">Community Day League</h1>
        <p class="mb-5">
          Community Day League is a project set up by several Community
          Ambassadors as a way to try and generate engagement, friendly
          competition and awareness of Community Days. In short, it's a global
          catching competition.
        </p>
        <a :href="CDL_DISCORD_INVITE" target="_blank" class="btn btn-primary"
          >Get Started
          <ArrowRightIcon class="inline-block h-5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
import CDLLogo from "@/components/icons/CDLLogo.vue";
import { CDL_DISCORD_INVITE } from "@/constants";

const heroImages = Object.values(
  import.meta.glob(
    "@/assets/image/heros/communities/*.{png,jpg,jpeg,PNG,JPEG}",
    {
      eager: true,
      query: "?url",
      import: "default",
    },
  ),
);

function randHero() {
  return heroImages[Math.floor(Math.random() * heroImages.length)];
}
</script>
