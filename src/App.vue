<template>
  <v-app :theme="appStore.theme">
    <router-view />
  </v-app>
</template>

<script setup>
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
</script>
