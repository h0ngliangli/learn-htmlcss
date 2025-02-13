<template>
  <v-app-bar>
    <v-app-bar-nav-icon id="menu-activator" />
    <v-toolbar-title>H5</v-toolbar-title>
    <v-spacer />
    <v-btn icon="mdi-lightbulb" @click="appStore.funcToggleTheme"></v-btn>
  </v-app-bar>
  <v-dialog activator="#menu-activator" max-width="500px">
    <v-card>
      <v-card-title>Menu</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="route in getPageRoutes()" :key="route.path">
            route-
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-dialog>
  <v-main>
    <router-view />
  </v-main>

  <AppFooter />
</template>

<script setup>
import { useAppStore } from "@/stores/app";
import { getPageRoutes } from "@/router";
const appStore = useAppStore();
</script>
