<script setup>
import HomePageView from '@/views/HomePageView.vue'

const isDesktop = window.innerWidth > 1024
const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024
const isMobile = window.innerWidth < 768
</script>

<template>
  <template v-if="isDesktop">
    <HomePageView />
  </template>
  <template v-else-if="isTablet">
    <div><h1 class="text-black">Tablet</h1></div>
  </template>
  <template v-else="isMobile">
    <div v-show="!isDesktop && !isTablet"><h1 class="text-black">Mobile in v-else</h1></div>
  </template>
  <div v-show="!isDesktop && !isTablet"><h1 class="text-black">Mobile in v-show</h1></div>
</template>
