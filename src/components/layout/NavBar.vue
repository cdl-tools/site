<template>
  <div class="navbar bg-base-100 min-h-max">
    <div class="navbar-start min-w-max">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <Bars3BottomLeftIcon class="h-8 w-8" />
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 popover">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/leaderboards">Leaderboards</RouterLink>
          </li>
        </ul>
      </div>
      <RouterLink to="/" class="inline-flex font-bold gap-2 text-xl m-2">
        <CDLLogo class="max-h-8" />
        <span class="sm:hidden">CDL</span>
        <span class="hidden sm:inline">Community Day League</span>
      </RouterLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/leaderboards">Leaderboards</RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn" :href="CDL_DISCORD_INVITE" target="_blank">Join Discord</a>
    </div>
  </div>
</template>

<style scoped>
.navbar-center .router-link-active {
  @apply text-primary;
}
</style>
<script setup lang="ts">
import { Bars3BottomLeftIcon } from "@heroicons/vue/24/solid";
import CDLLogo from "@/components/icons/CDLLogo.vue";
import { CDL_DISCORD_INVITE } from "@/constants";
</script>
