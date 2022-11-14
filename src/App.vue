<template>
  <v-app :theme="theme ? 'light' : 'dark'">
    <v-app-bar title="Lawrencium Beluga">
      <template #append>
        <v-btn :icon="theme ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="toggleTheme"></v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-btn @click="increment">Click Me</v-btn>
      <p>Clicked: {{ count }}</p>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
const increment = () => (count.value += 1);

const theme = ref(true);
const toggleTheme = () => (theme.value = !theme.value);
</script>

<style scoped>
.copyright {
  font-size: 12pt;
  color: grey;
  display: inline-block;
  width: 100%;
  text-align: center;
}
</style>
