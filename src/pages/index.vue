<template>
  <div class="hero min-h-screen" :style="`background-image: url(${HeroImage})`">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-lg">
        <CDLLogo class="h-48 mb-8 inline-block" />
        <h1 class="mb-5 text-5xl font-bold">Community Day League</h1>
        <p class="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
          exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <a :href="CDL_DISCORD_INVITE" target="_blank" class="btn btn-primary">Get Started</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroImage from '@/assets/image/unsplash/jakayla-toney-WmTvmbwJkgM-unsplash.jpg'
import CDLLogo from '@/components/icons/CDLLogo.vue'
import { CDL_DISCORD_INVITE } from '@/constants'
</script>
