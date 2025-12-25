<script setup lang="ts">
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput/IInput.vue'

const emit = defineEmits(['submit'])
</script>

<template>
  <form
    class="flex flex-1 flex-col items-center justify-center bg-primary p-16"
    @submit.prevent="emit('submit', {name: 'NamE'})"
  >
    <div class="h-123.25 w-124.75 rounded-[17px] bg-white p-10">
      <IInput id="name" label="Повне ім’я" class="mb-4.5" placeholder="Ратушняк Ілона" />
      <IInput id="email" label="Електронна пошта" class="mb-4.5" placeholder="email@gmail.com" />
      <IInput id="password" label="Пароль" class="mb-10" placeholder="*************" />

      <IButton
        class="w-full text-center text-base font-bold text-white"
        variant="gradient"
        type="submit"
        >Створити аккаунт</IButton
      >
    </div>
  </form>
</template>
