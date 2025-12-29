<script setup lang="ts">
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput/IInput.vue'
import { reactive, toRaw } from 'vue'

const emit = defineEmits(['submit'])

interface UserData {
  email: string
  password: string
}

const userData = reactive<UserData>({
  email: '',
  password: '',
})

const onSubmit = () => emit('submit', toRaw(userData))
</script>

<template>
  <form class="flex flex-1 flex-col items-center justify-center" @submit.prevent="onSubmit">
    <IInput
      id="email"
      v-model="userData.email"
      label="Електронна пошта"
      class="mb-4.5"
      placeholder="email@gmail.com"
    />
    <IInput
      id="password"
      v-model="userData.password"
      label="Пароль"
      class="mb-3.5"
      placeholder="*************"
    />
    <IButton
      class="mb-auto ml-auto text-right text-xs leading-normal font-normal text-[rgba(43,43,43,0.5)] hover:text-[#f3743d]"
      >Забули пароль?</IButton
    >

    <IButton
      class="w-full text-center text-base font-bold text-white"
      variant="gradient"
      type="submit"
      >Увійти</IButton
    >
  </form>
</template>
