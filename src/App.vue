<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "@/components/layout/NavBar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <div class="max-h-dvh min-h-dvh flex flex-col">
    <Navbar />
    <div class="flex-grow overflow-y-scroll flex flex-col justify-between">
      <div>
        <RouterView />
      </div>
      <Footer class="mt-auto" />
    </div>
  </div>
</template>
