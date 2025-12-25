<script setup lang="ts">
// import HomePageView from '@/views/HomePageView.vue'
// import FavoritePlaces from '@/components/FavoritePlaces/FavoritePlaces.vue'
// import FavoritePlace from '@/components/FavoritePlace/FavoritePlace.vue'
// import IInput from '@/components/IInput/IInput.vue'
import AuthPageView from '@/views/AuthPageView.vue'
</script>

<template>
  <!-- <HomePageView /> -->
  <!-- <FavoritePlaces>
    <template #label
      ><p class="text-sm leading-[143%] font-normal tracking-[-0.03em] text-gray">
        Додані маркери
      </p></template
    >
    <template #list>
      <FavoritePlace v-for="value in 4" :key="value" />
    </template>
  </FavoritePlaces> -->
  <!-- <IInput id="text" label="Test label" /> -->
  <AuthPageView />
</template>
