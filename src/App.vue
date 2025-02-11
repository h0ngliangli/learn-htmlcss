<template>
  <v-app :theme="appStore.theme">
    <v-toolbar>
      <v-spacer />
      <!-- hide-details 隐藏hint，可以使得text input与
       toolbar中的其他元素行对齐-->
      <v-text-field
        placeholder="Search"
        density="compact"
        variant="solo"
        prepend-inner-icon="mdi-magnify"
        rounded
        hide-details 
      />
      <v-spacer />
      <v-btn icon="mdi-lightbulb" @click="appStore.funcToggleTheme"></v-btn>
    </v-toolbar>
    <router-view />
  </v-app>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()

</script>
