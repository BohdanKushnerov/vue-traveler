<script setup lang="ts">
import HomePageView from '@/views/HomePageView.vue'

const fruits = ['kiwi', 'banana', 'mango']
const fruitMap = {
  kiwi: 'Super kiwi',
  banana: 'Super banana',
  mango: 'Super mango',
}
</script>

<template>
  <div v-for="(fruit, index) in fruits" :key="fruit">
    <h1 class="text-black">{{ index }}: {{ fruit }}</h1>
  </div>
  <div v-for="(fruit, key) in fruitMap" :key="fruit">
    <h1 class="text-black">{{ key }}: {{ fruit }}</h1>
  </div>
  <div v-for="value in 5" :key="value"><h1 class="text-black">{{ value }}</h1></div>
  <div v-for="char in 'SomeText'" :key="char"><h1 class="text-black">{{ char }}</h1></div>
  <HomePageView />
</template>
