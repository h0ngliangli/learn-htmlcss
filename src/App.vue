<template>
  <v-app :theme="appStore.theme">
    <v-app-bar>
      <v-app-bar-nav-icon id="menu-activator" />
      <v-toolbar-title>H5</v-toolbar-title>
      <!-- <v-text-field
        placeholder="search"
        rounded
        variant="solo"
        hide-details
        prepend-inner-icon="mdi-magnify"
      >
      </v-text-field> -->
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
    <router-view />
  </v-app>
</template>

<script setup>
import { useAppStore } from "@/stores/app";
import { getPageRoutes } from "@/router";
const appStore = useAppStore();
const listEntries = () => {
  console.log(getPageRoutes());
};
</script>
