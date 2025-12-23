<script setup lang="ts">
import { ref } from 'vue';
import IButton from '../IButton/IButton.vue'

const counter = ref(0);

const increment = () => {
  counter.value += 1
}
const decrement = () => {
  counter.value -= 1
}
</script>

<template>
  <section class="px-6">
    <p>counter: {{ counter }}</p>
    <slot name="label"><p class="text-black">Title</p></slot>

    <slot name="list">
      <div class="mb-10 space-y-6 text-black">
        <div v-for="value in 4" :key="value" class="text-black">{{ value }}</div>
      </div>
    </slot>

    <IButton
      class="w-full text-center text-base leading-[138%] font-bold tracking-[-0.03em] text-white"
      >Додати маркер</IButton
    >
    <IButton
      class="w-full text-center text-base leading-[138%] font-bold tracking-[-0.03em] text-white" @click="increment"
      >increment</IButton
    >
    <IButton
      class="w-full text-center text-base leading-[138%] font-bold tracking-[-0.03em] text-white" @click="decrement"
      >decrement</IButton
    >
  </section>
</template>
