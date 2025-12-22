<script setup lang="ts">
import FavoritePlace from '@/components/FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
</script>

<template>
  <section class="px-6">
    <p class="text-sm leading-[143%] font-normal tracking-[-0.03em] text-gray">Додані маркери</p>
    <div class="mb-10 space-y-6">
      <FavoritePlace v-for="value in 4" :key="value" />
    </div>
    <IButton
      class="w-full text-center text-base leading-[138%] font-bold tracking-[-0.03em] text-white"
      >Додати маркер</IButton
    >
  </section>
</template>
