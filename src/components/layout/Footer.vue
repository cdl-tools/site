<template>
  <!-- TODO: Once we have more links, https://daisyui.com/components/footer/#two-footer would
  probably work better -->

  <footer class="footer bg-neutral text-neutral-content items-center p-4">
    <aside class="grid-flow-col items-center place-self-center md:justify-self-start">
      <CDLLogo class="h-8 w-8" />
      <p>Copyright © {{ new Date().getFullYear() }} Community Day League - All rights reserved</p>
    </aside>
    <nav class="grid-flow-col gap-4 place-self-center md:justify-self-end">
      <a :href="CDL_DISCORD_INVITE" title="Join us on Discord" target="_blank">
        <DiscordIcon class="w-6 h-6 fill-current" />
      </a>
    </nav>
  </footer>
</template>
<script setup lang="ts">
import DiscordIcon from '@/components/icons/DiscordIcon.vue'
import CDLLogo from '@/components/icons/CDLLogo.vue'
import { CDL_DISCORD_INVITE } from '@/constants'
</script>
