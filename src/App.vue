<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavbarView from './views/NavbarView.vue';
</script>

<template>
  <NavbarView />
  <RouterView />
</template>

<style>
@import '@/assets/base.css';
</style>
